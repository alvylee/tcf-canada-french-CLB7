#!/usr/bin/env python3
"""
Builds/updates lazy-loaded section-grouped audio packs in data/audio_packs/
and writes a lightweight index in data/audio_manifest.js with lifelike Microsoft
Neural French audio (fr-FR & fr-CA via edge-tts) for every French phrase,
vocab item, passage, drill, mock question, model answer, and Quick Essentials item.

- Incremental by default: preserves existing clips in data/audio_packs/ (or migrates legacy data/audio/*.mp3)
- Supports `--repack` to reorganize clips into balanced packs without network access
- Supports `--dry-run` to inspect phrase coverage without edge-tts or network access
"""
from __future__ import annotations

import argparse
import asyncio
import base64
import json
from pathlib import Path
import re
import shutil
import subprocess
import sys

ROOT = Path(__file__).resolve().parent.parent
INDEX_HTML = ROOT / "index.html"
SYLLABUS_JS = ROOT / "data" / "syllabus_data.js"
PACKS_DIR = ROOT / "data" / "audio_packs"
MANIFEST_JS = ROOT / "data" / "audio_manifest.js"
LEGACY_AUDIO_DIR = ROOT / "data" / "audio"
MP3_CACHE_DIR = ROOT / ".tts_cache" / "mp3"
JSC_BIN = Path("/System/Library/Frameworks/JavaScriptCore.framework/Versions/A/Helpers/jsc")
MAX_PACK_B64_BYTES = 1_850_000

VOICES = {
    "denise": ("fr-FR-DeniseNeural", "Denise · FR"),
    "henri": ("fr-FR-HenriNeural", "Henri · FR"),
    "sylvie": ("fr-CA-SylvieNeural", "Sylvie · CA"),
    "thierry": ("fr-CA-ThierryNeural", "Thierry · CA"),
}
VALID_VOICE_LABELS = {label for _, label in VOICES.values()}


def fnv1a(s: str) -> str:
    """Must match the JS fnv1a() helper exactly (UTF-16 code units / JS charCodeAt)."""
    h = 0x811C9DC5
    b = s.encode("utf-16-le")
    for i in range(0, len(b), 2):
        code = b[i] | (b[i + 1] << 8)
        h ^= code
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, "08x")


def clean_for_speech(text: str) -> str:
    """Keep speech cleanup identical to index.html cleanForSpeech()."""
    t = re.sub(
        r"\(\s*(?:QC|FR|CA|m\.pl\.|f\.pl\.|m\./f\.|m\.|f\.|pl\.|sg\.|être|avoir|de|e|es|s|se|\+\s*(?:nom|inf\.?|subj\.?|adj\.?)|[\d\s]+)\s*\)",
        "",
        text,
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
    return t or text.strip()


def extract_phrases_with_voices() -> list[dict]:
    html = INDEX_HTML.read_text(encoding="utf-8")
    syllabus_code = SYLLABUS_JS.read_text(encoding="utf-8") if SYLLABUS_JS.exists() else ""
    scripts = re.findall(r"<script(?![^>]*src)[^>]*>(.*?)</script>", html, re.S)
    if not scripts:
        raise RuntimeError("No inline <script> found in index.html")
    script = scripts[0]

    extractor_tail = r"""
const entries = new Map();
function add(text, voiceKey, group) {
  if (!text) return;
  const t = String(text).trim();
  if (!t) return;
  if (!entries.has(t)) entries.set(t, { voice: voiceKey, group: group || 'core' });
}

CHAPTERS.forEach((ch, cIdx) => {
  const isCanada = ch.id === 'a2_3' || ch.id === 'a1_2';
  const defaultV = isCanada ? 'sylvie' : (cIdx % 2 === 0 ? 'denise' : 'henri');
  ch.examples.forEach((e, i) => add(e.fr, i % 2 === 0 ? defaultV : (defaultV === 'denise' ? 'henri' : 'sylvie')));
  ch.vocab.forEach((v, i) => add(v.fr, v.cat === 'Canada' ? 'sylvie' : (i % 2 === 0 ? 'denise' : 'thierry')));
  ch.passages.forEach((p, pIdx) => {
    const pv = /Montréal|Québec|Canada|Clinique|logement|3 ½/i.test(p.title + ' ' + p.sentences.join(' '))
      ? (pIdx % 2 === 0 ? 'sylvie' : 'thierry')
      : (pIdx % 2 === 0 ? 'henri' : 'denise');
    p.sentences.forEach((s) => add(s, pv));
  });
  if (ch.clockTimes) ch.clockTimes.forEach((t) => add(t.fr, 'denise'));
  if (ch.comparisons) ch.comparisons.forEach((c) => { add(c.posFr, 'denise'); add(c.negFr, 'henri'); });
  if (ch.aspectPairs) ch.aspectPairs.forEach((a) => { add(a.pc, 'henri'); add(a.imp, 'denise'); });
  if (ch.subjBuilder) ch.subjBuilder.forEach((s) => add(s.trigger + ' ' + s.clause, 'denise'));
});

GRAMMAR_SYLLABUS.forEach((g, gIdx) => {
  const gv = gIdx % 2 === 0 ? 'denise' : 'henri';
  if (g.examples) g.examples.forEach((e, i) => add(e.fr, i % 2 === 0 ? gv : 'sylvie', 'grammar'));
  if (g.sounds) g.sounds.forEach((s) => add(s.sample || s.ex, 'denise', 'grammar'));
  if (g.quiz) g.quiz.forEach((q) => { if (q.audio) add(q.audio, gv, 'grammar'); });
});

VOCAB_SYLLABUS.forEach((vl, vIdx) => {
  const vv = vIdx % 2 === 0 ? 'sylvie' : 'thierry';
  if (vl.words) vl.words.forEach((w, i) => {
    add(w.fr, /QC|Canada/i.test(w.fr + ' ' + (w.tag || '')) ? 'sylvie' : (i % 2 === 0 ? 'denise' : 'henri'), 'vocab_syllabus');
    if (w.ex) add(w.ex, vv, 'vocab_syllabus');
  });
});

EXTRA_VOCAB.forEach((v, i) => add(v.fr, v.cat === 'Canada' ? 'thierry' : (i % 2 === 0 ? 'denise' : 'henri')));

if (typeof DRILLS !== 'undefined') {
  (DRILLS.conjugation || []).forEach((d, i) => {
    const full = d.prompt.replace('___', d.answer).replace(/^[^:]+:\s*/, '');
    add(full, i % 2 === 0 ? 'denise' : 'henri');
  });
  (DRILLS.cloze || []).forEach((d, i) => add(d.prompt.replace('___', d.answer), i % 2 === 0 ? 'henri' : 'sylvie'));
  (DRILLS.dictation || []).forEach((d, i) => add(d.audio, ['sylvie', 'thierry', 'denise', 'henri'][i % 4]));
  (DRILLS.fauxamis || []).forEach((d, i) => add(d.context, i % 2 === 0 ? 'denise' : 'thierry'));
  (DRILLS.gender || []).forEach((d, i) => add(d.word, i % 2 === 0 ? 'denise' : 'sylvie', 'drills_gender'));
}

if (typeof MOCK_EXAMS !== 'undefined') {
  if (MOCK_EXAMS.co && MOCK_EXAMS.co.questions) {
    MOCK_EXAMS.co.questions.forEach((q, i) => add(q.audio, ['denise', 'sylvie', 'thierry', 'henri'][i % 4]));
  }
  if (MOCK_EXAMS.coSet2 && MOCK_EXAMS.coSet2.questions) {
    MOCK_EXAMS.coSet2.questions.forEach((q, i) => add(q.audio, ['sylvie', 'henri', 'denise', 'thierry'][i % 4]));
  }
}

EE_TASKS.forEach((t, i) => {
  const v = i % 3 === 0 ? 'sylvie' : (i % 3 === 1 ? 'thierry' : 'denise');
  add(t.prompt, 'henri');
  add(t.model, v);
});

EO_TASKS.forEach((t, i) => {
  const v = i % 3 === 0 ? 'thierry' : (i % 3 === 1 ? 'sylvie' : 'denise');
  if (t.modelSentences) t.modelSentences.forEach((s) => add(s, v));
});

if (typeof QUICK_ESSENTIALS !== 'undefined') {
  (QUICK_ESSENTIALS.pronounMatrix || []).forEach((r, idx) => {
    const v = idx % 2 === 0 ? 'denise' : 'sylvie';
    [r.subject, r.cod, r.coi, r.tonic, r.reflexive, r.possessive].forEach((cell) => {
      add(String(cell).split('/')[0].trim(), v, 'quick_essentials');
    });
    add(r.example, idx % 2 === 0 ? 'henri' : 'thierry', 'quick_essentials');
  });
  (QUICK_ESSENTIALS.pronounExamples || []).forEach((ex, i) => add(ex.fr, i % 2 === 0 ? 'denise' : 'sylvie', 'quick_essentials'));
  (QUICK_ESSENTIALS.pronounDemos || []).forEach((d, i) => add(d.fr, i % 2 === 0 ? 'henri' : 'denise', 'quick_essentials'));
  const vc = QUICK_ESSENTIALS.verbConjugation || {};
  (vc.regularRows || []).forEach((r, i) => {
    const v = i % 2 === 0 ? 'denise' : 'henri';
    add(r.erEx, v, 'quick_essentials');
    add(r.irEx, 'sylvie', 'quick_essentials');
    add(r.reEx, 'thierry', 'quick_essentials');
  });
  (vc.groupExamples || []).forEach((vg) => {
    (vg.examples || []).forEach((ex, i) => add(ex.fr, i % 2 === 0 ? 'denise' : 'sylvie', 'quick_essentials'));
  });
  (vc.irregularRows || []).forEach((ir) => {
    const subj = ir.pronoun === 'je / j’' ? 'je' : ir.pronoun.split('/')[0].trim();
    [ir.etre, ir.avoir, ir.aller, ir.faire].forEach((vf, idx) => {
      const phrase = (subj === 'je' && /^[aeêéo]/i.test(vf)) ? ('j’' + vf) : (subj + ' ' + vf);
      add(phrase, idx % 2 === 0 ? 'denise' : 'thierry', 'quick_essentials');
    });
  });
  (QUICK_ESSENTIALS.groups || []).forEach((grp) => {
    (grp.sections || []).forEach((sec) => {
      (sec.items || []).forEach((it, idx) => {
        const isQc = /\(QC\)|Québec|Canada/i.test(it.fr);
        add(it.fr, isQc ? 'sylvie' : (idx % 2 === 0 ? 'denise' : 'henri'), 'quick_essentials');
      });
    });
  });
}

const out = [...entries.entries()].map(([text, meta]) => ({ text, voice: meta.voice, group: meta.group }));
const emit = (typeof console !== 'undefined' && console.log) ? console.log.bind(console) : print;
emit(JSON.stringify(out));
"""
    extract_js = script.replace("init();", extractor_tail, 1)

    wrapper = (
        r"""
var window = (typeof global !== 'undefined') ? global : this;
if (typeof globalThis !== 'undefined') window = globalThis;
window.window = window;
window.speechSynthesis = { getVoices: function() { return []; }, cancel: function() {} };
window.addEventListener = function() {};
window.matchMedia = function() { return { matches: false }; };
window.location = { origin: 'file://', protocol: 'file:', hostname: '' };
var localStorage = { getItem: function() { return null; }, setItem: function() {}, removeItem: function() {} };
function makeDummy() {
  return {
    addEventListener: function() {},
    querySelectorAll: function() { return []; },
    querySelector: function() { return null; },
    classList: { add: function(){}, remove: function(){}, toggle: function(){} },
    style: {},
    innerHTML: "",
    textContent: "",
    disabled: false,
    value: "",
    appendChild: function(){},
    setAttribute: function(){}
  };
}
var document = {
  getElementById: makeDummy,
  querySelectorAll: function() { return []; },
  createElement: makeDummy,
  documentElement: makeDummy(),
  head: makeDummy()
};
var Audio = function() {};
var AbortController = function() { this.signal = {}; this.abort = function(){}; };
var fetch = function() { return { then: function(){ return { catch: function(){} }; } }; };
"""
        + "\n"
        + syllabus_code
        + "\n"
        + extract_js
    )

    node_bin = shutil.which("node")
    if node_bin:
        proc = subprocess.run([node_bin], input=wrapper, text=True, capture_output=True, check=True)
        return json.loads(proc.stdout)

    if JSC_BIN.exists():
        import tempfile

        with tempfile.NamedTemporaryFile("w", suffix=".js", encoding="utf-8", delete=False) as tf:
            tf.write(wrapper)
            tmp_js = tf.name
        try:
            proc = subprocess.run([str(JSC_BIN), tmp_js], text=True, capture_output=True, check=True)
            lines = [ln for ln in proc.stdout.strip().splitlines() if ln.strip()]
            return json.loads(lines[-1])
        finally:
            Path(tmp_js).unlink(missing_ok=True)

    raise RuntimeError("Neither node nor macOS jsc was found to extract JS phrases.")


def _parse_pack_js(pack_path: Path) -> dict[str, str]:
    raw = pack_path.read_text(encoding="utf-8").strip()
    m = re.search(r"\]\s*=\s*(\{.*\})\s*;?\s*$", raw, re.S)
    if m:
        return json.loads(m.group(1))
    eq_idx = raw.find("=")
    if eq_idx == -1:
        return {}
    payload = raw[eq_idx + 1 :].strip().rstrip(";")
    return json.loads(payload)


def load_existing_clips() -> dict[str, tuple[str, str]]:
    """Return { hashKey: (voiceLabel, base64_mp3) } from audio_packs/ and/or legacy data/audio/."""
    clips: dict[str, tuple[str, str]] = {}
    loaded_packs: dict[str, dict[str, str]] = {}

    if MANIFEST_JS.exists():
        raw = MANIFEST_JS.read_text(encoding="utf-8").strip()
        if "=" in raw:
            raw = raw.split("=", 1)[1].strip()
        if raw.endswith(";"):
            raw = raw[:-1].strip()
        manifest = json.loads(raw)

        for key, entry in manifest.items():
            if isinstance(entry, list) and len(entry) == 2:
                voice_label, pack_id = entry
                if voice_label not in VALID_VOICE_LABELS:
                    continue
                if pack_id not in loaded_packs:
                    p_file = PACKS_DIR / f"{pack_id}.js"
                    loaded_packs[pack_id] = _parse_pack_js(p_file) if p_file.exists() else {}
                b64 = loaded_packs[pack_id].get(key)
                if b64:
                    clips[key] = (voice_label, b64)
            elif isinstance(entry, str):
                if entry not in VALID_VOICE_LABELS:
                    continue
                mp3_path = LEGACY_AUDIO_DIR / f"{key}.mp3"
                if mp3_path.exists() and mp3_path.stat().st_size > 100:
                    b64 = base64.b64encode(mp3_path.read_bytes()).decode("ascii")
                    clips[key] = (entry, b64)

    return clips


def bucket_for_group(group: str) -> str:
    if group == "quick_essentials":
        return "essentials"
    if group == "grammar":
        return "grammar"
    if group in ("vocab_syllabus", "drills_gender"):
        return "vocab"
    return "core"


def write_audio_packs(clips: dict[str, tuple[str, str]], items: list[dict]) -> tuple[list[tuple[str, int, int]], int]:
    """Pack all clips into balanced lazy-loaded pack_*.js files and write data/audio_manifest.js."""
    key_to_bucket: dict[str, str] = {}
    ordered_keys: list[str] = []
    seen = set()

    for it in items:
        k = fnv1a(it["text"])
        if k in clips and k not in seen:
            seen.add(k)
            key_to_bucket[k] = bucket_for_group(it.get("group", "core"))
            ordered_keys.append(k)

    for k in sorted(clips.keys()):
        if k not in seen:
            seen.add(k)
            key_to_bucket[k] = "core"
            ordered_keys.append(k)

    bucket_order = ["essentials", "grammar", "vocab", "core"]
    buckets: dict[str, list[str]] = {b: [] for b in bucket_order}
    for k in ordered_keys:
        buckets[key_to_bucket[k]].append(k)

    PACKS_DIR.mkdir(parents=True, exist_ok=True)
    for old_pack in PACKS_DIR.glob("pack_*.js"):
        old_pack.unlink()

    manifest: dict[str, list[str]] = {}
    pack_stats: list[tuple[str, int, int]] = []

    for b in bucket_order:
        keys = buckets[b]
        if not keys:
            continue
        chunk_idx = 1
        cur_data: dict[str, str] = {}
        cur_bytes = 0

        def flush_chunk() -> None:
            nonlocal chunk_idx, cur_data, cur_bytes
            if not cur_data:
                return
            pack_id = f"pack_{b}_{chunk_idx}"
            out_path = PACKS_DIR / f"{pack_id}.js"
            content = (
                "window.__TCF_AUDIO_PACKS__=window.__TCF_AUDIO_PACKS__||{};"
                + f"window.__TCF_AUDIO_PACKS__[{json.dumps(pack_id)}]="
                + json.dumps(cur_data, separators=(",", ":"), sort_keys=True)
                + ";"
            )
            out_path.write_text(content, encoding="utf-8")
            pack_stats.append((pack_id, len(cur_data), out_path.stat().st_size))
            chunk_idx += 1
            cur_data = {}
            cur_bytes = 0

        for k in keys:
            voice_label, b64 = clips[k]
            entry_size = len(b64) + 16
            if cur_data and cur_bytes + entry_size > MAX_PACK_B64_BYTES:
                flush_chunk()
            pack_id = f"pack_{b}_{chunk_idx}"
            cur_data[k] = b64
            cur_bytes += entry_size
            manifest[k] = [voice_label, pack_id]

        flush_chunk()

    MANIFEST_JS.write_text(
        "window.__TCF_AUDIO_MANIFEST__="
        + json.dumps(manifest, separators=(",", ":"), ensure_ascii=False, sort_keys=True)
        + ";",
        encoding="utf-8",
    )
    return pack_stats, MANIFEST_JS.stat().st_size


async def synth_one(sem: asyncio.Semaphore, item: dict, has_ffmpeg: bool) -> tuple[str, tuple[str, str]]:
    import edge_tts

    raw_text = item["text"]
    voice_key = item["voice"]
    voice_name, voice_label = VOICES[voice_key]
    key = fnv1a(raw_text)
    MP3_CACHE_DIR.mkdir(parents=True, exist_ok=True)
    mp3_final = MP3_CACHE_DIR / f"{key}_{voice_key}.mp3"

    if not mp3_final.exists() or mp3_final.stat().st_size <= 100:
        async with sem:
            spoken = clean_for_speech(raw_text)
            raw_mp3 = MP3_CACHE_DIR / f".{key}_{voice_key}_raw.mp3"
            for attempt in range(5):
                try:
                    comm = edge_tts.Communicate(spoken, voice_name)
                    await comm.save(str(raw_mp3))
                    break
                except Exception as exc:
                    if attempt == 4:
                        raise exc
                    await asyncio.sleep(1.5 * (attempt + 1))

            if has_ffmpeg:
                cmd = [
                    "ffmpeg",
                    "-y",
                    "-v",
                    "error",
                    "-i",
                    str(raw_mp3),
                    "-af",
                    "silenceremove=start_periods=1:start_silence=0.02:start_threshold=-55dB,areverse,silenceremove=start_periods=1:start_silence=0.04:start_threshold=-55dB,areverse",
                    "-ac",
                    "1",
                    "-ar",
                    "24000",
                    "-b:a",
                    "24k",
                    str(mp3_final),
                ]
                r = subprocess.run(cmd, capture_output=True)
                if r.returncode != 0 or not mp3_final.exists() or mp3_final.stat().st_size < 200:
                    subprocess.run(
                        ["ffmpeg", "-y", "-v", "error", "-i", str(raw_mp3), "-ac", "1", "-ar", "24000", "-b:a", "24k", str(mp3_final)],
                        check=True,
                    )
                if raw_mp3.exists():
                    raw_mp3.unlink()
            else:
                raw_mp3.replace(mp3_final)

    b64 = base64.b64encode(mp3_final.read_bytes()).decode("ascii")
    return key, (voice_label, b64)


async def run_build(rebuild: bool, dry_run: bool, repack: bool) -> int:
    existing = {} if rebuild else load_existing_clips()
    items = extract_phrases_with_voices()

    missing = [it for it in items if fnv1a(it["text"]) not in existing]
    qe_total = sum(1 for it in items if it.get("group") == "quick_essentials")
    qe_missing = sum(1 for it in missing if it.get("group") == "quick_essentials")

    print(
        f"Extracted {len(items)} unique phrases ({qe_total} Quick Essentials). "
        f"Already packed: {len(existing)}. To synthesize: {len(missing)} ({qe_missing} Quick Essentials).",
        flush=True,
    )

    if dry_run:
        return 0

    merged = dict(existing)

    if not repack:
        if not missing and not rebuild:
            print("All phrases are already packed!", flush=True)
        else:
            try:
                import edge_tts  # noqa: F401
            except ImportError:
                print("Error: edge-tts is not installed. Run ./generate_all_audio.command", file=sys.stderr)
                return 1

            has_ffmpeg = shutil.which("ffmpeg") is not None
            print(f"Synthesizing {len(missing)} missing phrases (ffmpeg={'yes' if has_ffmpeg else 'no'})...", flush=True)
            sem = asyncio.Semaphore(5)
            tasks = [synth_one(sem, it, has_ffmpeg) for it in missing]
            done = 0
            for coro in asyncio.as_completed(tasks):
                key, val = await coro
                merged[key] = val
                done += 1
                if done % 25 == 0 or done == len(missing):
                    print(f"Progress: {done}/{len(missing)}", flush=True)

    pack_stats, manifest_bytes = write_audio_packs(merged, items)
    total_mb = sum(sz for _, _, sz in pack_stats) / (1024 * 1024)
    print(f"DONE! Wrote {len(pack_stats)} lazy audio packs ({total_mb:.2f} MB) + manifest ({manifest_bytes / 1024:.1f} KB):", flush=True)
    for pid, cnt, sz in pack_stats:
        print(f"  - {pid}.js: {cnt} clips ({sz / (1024 * 1024):.2f} MB)", flush=True)
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description="Build or incrementally update data/audio_packs/*.js and data/audio_manifest.js")
    parser.add_argument("--dry-run", action="store_true", help="Report phrase extraction & coverage counts without writing")
    parser.add_argument("--repack", action="store_true", help="Repack existing clips into balanced lazy packs without synthesizing")
    parser.add_argument("--rebuild", action="store_true", help="Re-synthesize all phrases instead of incremental merge")
    args = parser.parse_args()
    return asyncio.run(run_build(rebuild=args.rebuild, dry_run=args.dry_run, repack=args.repack))


if __name__ == "__main__":
    raise SystemExit(main())
