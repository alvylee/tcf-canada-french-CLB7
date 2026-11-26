#!/usr/bin/env python3
"""
Local real-time Microsoft Neural French TTS server (edge-tts) for TCF Canada Studio.

Features:
- Free lifelike fr-FR (Vivienne, Rémy) and fr-CA (Sylvie, Thierry) voices via edge-tts
- Persistent on-disk MP3 cache (.tts_cache/live/) with atomic writes for instant replay
- Full CORS + Chrome Private Network Access headers so file:// or localhost works cleanly
- Built-in static file server for index.html and data/ when accessed at http://127.0.0.1:8765
"""
from __future__ import annotations

import argparse
import asyncio
import hashlib
import http.client
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer
import json
import mimetypes
import os
from pathlib import Path
import re
import sys
import threading
import urllib.parse

ROOT = Path(__file__).resolve().parent.parent
CACHE_DIR = ROOT / ".tts_cache" / "live"

VOICES = {
    "vivienne": ("fr-FR-VivienneMultilingualNeural", "Vivienne · FR"),
    "remy": ("fr-FR-RemyMultilingualNeural", "Rémy · FR"),
    "sylvie": ("fr-CA-SylvieNeural", "Sylvie · CA"),
    "thierry": ("fr-CA-ThierryNeural", "Thierry · CA"),
}
DEFAULT_CYCLE = ["vivienne", "sylvie", "remy", "thierry"]
CANADA_HINT_RE = re.compile(
    r"\(\s*QC\s*\)|Québec|Montréal|Canada|\b811\b|3\s*½|dépanneur|fin de semaine",
    re.IGNORECASE,
)

MAX_TEXT_LEN = 4000
_KEY_LOCKS: dict[str, threading.Lock] = {}
_KEY_LOCKS_GUARD = threading.Lock()


def get_key_lock(cache_key: str) -> threading.Lock:
    with _KEY_LOCKS_GUARD:
        lock = _KEY_LOCKS.get(cache_key)
        if lock is None:
            lock = threading.Lock()
            _KEY_LOCKS[cache_key] = lock
        return lock


def clean_for_speech(text: str) -> str:
    """Keep speech cleanup identical to index.html cleanForSpeech()."""
    t = str(text or "")
    t = re.sub(
        r"\(\s*(?:QC|FR|CA|m\.pl\.|f\.pl\.|m\./f\.|m\.|f\.|pl\.|sg\.|être|avoir|de|e|es|s|se|\+\s*(?:nom|inf\.?|subj\.?|adj\.?)|[\d\s]+)\s*\)",
        "",
        t,
        flags=re.IGNORECASE,
    )
    t = re.sub(r"\[[^\]]*\]", "", t)
    t = re.sub(r"([.!?])\s*(?:→|←|↔|⇒|->)\s*", r"\1 ", t)
    t = re.sub(r"\s*(?:→|←|↔|⇒|->)\s*", ", ", t)
    t = re.sub(r"\s*/\s*", ", ", t)
    t = re.sub(r"[«»•—–]", " ", t)
    t = re.sub(r"…|\.{3,}", "", t)
    t = re.sub(r"([.!?])\s*,", r"\1", t)
    t = re.sub(r",\s*,+", ",", t)
    t = re.sub(r"\s+([,.;!?])", r"\1", t)
    t = re.sub(r"\s+", " ", t).strip(" ,")
    return t or str(text or "").strip()


def choose_voice(raw_text: str, requested: str = "auto") -> tuple[str, str, str]:
    req = (requested or "auto").strip().lower()
    if req in VOICES:
        name, label = VOICES[req]
        return req, name, label

    digest = hashlib.sha256(raw_text.strip().encode("utf-8")).digest()
    if CANADA_HINT_RE.search(raw_text):
        key = "sylvie" if (digest[0] % 2 == 0) else "thierry"
    else:
        key = DEFAULT_CYCLE[digest[0] % len(DEFAULT_CYCLE)]
    name, label = VOICES[key]
    return key, name, label


def edge_tts_available() -> bool:
    try:
        import edge_tts  # noqa: F401
        return True
    except ImportError:
        return False


async def _synth_async(spoken: str, voice_name: str, tmp_path: Path) -> None:
    import edge_tts

    for attempt in range(2):
        try:
            comm = edge_tts.Communicate(spoken, voice_name)
            await comm.save(str(tmp_path))
            if tmp_path.exists() and tmp_path.stat().st_size > 0:
                return
            raise RuntimeError("Empty audio output from edge-tts")
        except Exception:
            if attempt == 1:
                raise
            await asyncio.sleep(0.35)


def synthesize_or_cached(raw_text: str, requested_voice: str = "auto") -> tuple[bytes, str, str, bool]:
    """Return (mp3_bytes, voice_key, voice_label, cache_hit)."""
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    voice_key, voice_name, voice_label = choose_voice(raw_text, requested_voice)
    spoken = clean_for_speech(raw_text)
    if not spoken:
        raise ValueError("Text is empty after cleaning")

    cache_key = hashlib.sha256(f"{voice_name}|{spoken}".encode("utf-8")).hexdigest()
    target = CACHE_DIR / f"{cache_key}.mp3"

    lock = get_key_lock(cache_key)
    with lock:
        if target.exists() and target.stat().st_size > 0:
            return target.read_bytes(), voice_key, voice_label, True

        tmp_path = CACHE_DIR / f".{cache_key}.{os.getpid()}.{threading.get_ident()}.tmp.mp3"
        try:
            asyncio.run(_synth_async(spoken, voice_name, tmp_path))
            data = tmp_path.read_bytes()
            os.replace(str(tmp_path), str(target))
            return data, voice_key, voice_label, False
        finally:
            if tmp_path.exists():
                try:
                    tmp_path.unlink()
                except OSError:
                    pass


def safe_static_path(url_path: str) -> Path | None:
    clean = urllib.parse.unquote(url_path.split("?", 1)[0].split("#", 1)[0])
    rel = clean.lstrip("/") or "index.html"
    parts = Path(rel).parts
    if any(p.startswith(".") or p == ".." for p in parts):
        return None
    root_resolved = ROOT.resolve()
    candidate = (root_resolved / rel).resolve()
    try:
        common = os.path.commonpath([str(root_resolved), str(candidate)])
    except ValueError:
        return None
    if common != str(root_resolved) or not candidate.is_file():
        return None
    return candidate


class ReusableThreadingHTTPServer(ThreadingHTTPServer):
    allow_reuse_address = True
    daemon_threads = True


class LocalTTSHandler(BaseHTTPRequestHandler):
    protocol_version = "HTTP/1.1"

    def log_message(self, format: str, *args: object) -> None:
        sys.stderr.write(f"[LiveTTS] {self.address_string()} - {format % args}\n")

    def _send_cors_headers(self) -> None:
        self.send_header("Access-Control-Allow-Origin", "*")
        self.send_header("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        self.send_header("Access-Control-Allow-Headers", "Content-Type")
        self.send_header("Access-Control-Allow-Private-Network", "true")
        self.send_header(
            "Access-Control-Expose-Headers",
            "X-Voice-Label, X-Voice-Key, X-Cache-Hit",
        )

    def _send_json(self, code: int, payload: dict) -> None:
        body = json.dumps(payload, ensure_ascii=False).encode("utf-8")
        self.send_response(code)
        self._send_cors_headers()
        self.send_header("Content-Type", "application/json; charset=utf-8")
        self.send_header("Content-Length", str(len(body)))
        self.send_header("Cache-Control", "no-store")
        self.end_headers()
        self.wfile.write(body)

    def _handle_tts_request(self, raw_text: str, voice: str) -> None:
        text = (raw_text or "").strip()
        if not text:
            self._send_json(400, {"ok": False, "error": "Missing text parameter"})
            return
        if len(text) > MAX_TEXT_LEN:
            text = text[:MAX_TEXT_LEN]
        if not edge_tts_available():
            self._send_json(
                503,
                {
                    "ok": False,
                    "error": "edge_tts is not installed. Run ./start_voice_server.command or pip install edge-tts.",
                },
            )
            return
        try:
            mp3_bytes, voice_key, voice_label, cache_hit = synthesize_or_cached(text, voice)
        except ValueError as ve:
            self._send_json(400, {"ok": False, "error": str(ve)})
            return
        except Exception as exc:
            self._send_json(502, {"ok": False, "error": f"TTS synthesis failed: {exc}"})
            return

        self.send_response(200)
        self._send_cors_headers()
        self.send_header("Content-Type", "audio/mpeg")
        self.send_header("Content-Length", str(len(mp3_bytes)))
        self.send_header("X-Voice-Key", voice_key)
        self.send_header("X-Voice-Label", voice_label)
        self.send_header("X-Cache-Hit", "1" if cache_hit else "0")
        self.send_header("Cache-Control", "public, max-age=86400")
        self.end_headers()
        self.wfile.write(mp3_bytes)

    def do_OPTIONS(self) -> None:
        self.send_response(204)
        self._send_cors_headers()
        self.send_header("Content-Length", "0")
        self.end_headers()

    def do_GET(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path == "/health":
            cached = len(list(CACHE_DIR.glob("*.mp3"))) if CACHE_DIR.exists() else 0
            self._send_json(
                200,
                {
                    "ok": True,
                    "engine": "edge-tts",
                    "edge_tts_installed": edge_tts_available(),
                    "cache_count": cached,
                    "voices": {k: v[1] for k, v in VOICES.items()},
                },
            )
            return

        if parsed.path == "/tts":
            qs = urllib.parse.parse_qs(parsed.query)
            text = (qs.get("text") or [""])[0]
            voice = (qs.get("voice") or ["auto"])[0]
            self._handle_tts_request(text, voice)
            return

        file_path = safe_static_path(parsed.path)
        if file_path is None:
            self._send_json(404, {"ok": False, "error": "Not found"})
            return

        mime, _ = mimetypes.guess_type(str(file_path))
        if file_path.suffix == ".js":
            mime = "application/javascript; charset=utf-8"
        elif file_path.suffix == ".html":
            mime = "text/html; charset=utf-8"
        data = file_path.read_bytes()
        self.send_response(200)
        self._send_cors_headers()
        self.send_header("Content-Type", mime or "application/octet-stream")
        self.send_header("Content-Length", str(len(data)))
        self.end_headers()
        self.wfile.write(data)

    def do_POST(self) -> None:
        parsed = urllib.parse.urlparse(self.path)
        if parsed.path != "/tts":
            self._send_json(404, {"ok": False, "error": "Not found"})
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            length = 0
        raw_body = self.rfile.read(min(length, 65536)) if length > 0 else b""
        try:
            payload = json.loads(raw_body.decode("utf-8") or "{}")
        except json.JSONDecodeError:
            self._send_json(400, {"ok": False, "error": "Invalid JSON body"})
            return
        self._handle_tts_request(str(payload.get("text", "")), str(payload.get("voice", "auto")))


def run_selftest() -> int:
    assert clean_for_speech("Merci beaucoup / De rien / Bienvenue (QC)") == "Merci beaucoup, De rien, Bienvenue"
    assert clean_for_speech("Je connais Paul. → Je le connais.") == "Je connais Paul. Je le connais."
    k, _, lbl = choose_voice("Bienvenue (QC)", "auto")
    assert k in ("sylvie", "thierry") and "CA" in lbl
    assert safe_static_path("/") == (ROOT / "index.html").resolve()
    assert safe_static_path("/../etc/passwd") is None
    assert safe_static_path("/.git/config") is None

    try:
        srv = ReusableThreadingHTTPServer(("127.0.0.1", 0), LocalTTSHandler)
        port = srv.server_address[1]
        t = threading.Thread(target=srv.serve_forever, daemon=True)
        t.start()
        try:
            conn = http.client.HTTPConnection("127.0.0.1", port, timeout=3)
            conn.request("OPTIONS", "/tts")
            r_opt = conn.getresponse()
            r_opt.read()
            assert r_opt.status == 204
            assert r_opt.getheader("Access-Control-Allow-Origin") == "*"
            assert r_opt.getheader("Access-Control-Allow-Private-Network") == "true"

            conn.request("GET", "/health")
            r_h = conn.getresponse()
            body = json.loads(r_h.read().decode("utf-8"))
            assert r_h.status == 200 and body["ok"] is True
            assert r_h.getheader("Access-Control-Allow-Private-Network") == "true"
            conn.close()
        finally:
            srv.shutdown()
            srv.server_close()
    except PermissionError as exc:
        print(f"SOCKET_BIND_SKIPPED_IN_SANDBOX: {exc}")

    print("SELFTEST_OK")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Local edge-tts server for TCF Canada Studio")
    parser.add_argument("--host", default="127.0.0.1", help="Bind host (default 127.0.0.1)")
    parser.add_argument("--port", type=int, default=8765, help="Bind port (default 8765)")
    parser.add_argument("--selftest", action="store_true", help="Run self-test and exit")
    args = parser.parse_args()

    if args.selftest:
        return run_selftest()

    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    server = ReusableThreadingHTTPServer((args.host, args.port), LocalTTSHandler)
    print(f"🎙️ Studio Live Voice Server listening on http://{args.host}:{args.port} (edge_tts={edge_tts_available()})", flush=True)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\n👋 Stopping Live Voice Server...", flush=True)
        server.shutdown()
        server.server_close()
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
