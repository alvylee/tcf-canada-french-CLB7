#!/usr/bin/env python3
"""
Generates lifelike human neural French audio (fr-FR & fr-CA via Microsoft Neural TTS)
for every French phrase, vocab item, passage sentence, drill, mock question, and model answer
in tcf_canada_french_studio.html, trims dead silence, compresses cleanly with ffmpeg,
and outputs a JSON map { hashKey: { v: voiceTag, b64: base64_mp3 } }.
"""
import asyncio
import base64
import json
import os
import re
import subprocess
import sys
from pathlib import Path

import edge_tts

ARTIFACT_DIR = Path(
    "/home/antigravity/.gemini/jetski/brain/v1/default/jetski_remote_agents_3p_devbox/61fcb1c9-a861-434e-90e8-a14941647be8"
)
HTML_PATH = ARTIFACT_DIR / "tcf_canada_french_studio.html"
SCRATCH_DIR = ARTIFACT_DIR / "scratch"
CACHE_DIR = SCRATCH_DIR / "neural_clips"
OUT_JSON = SCRATCH_DIR / "neural_audio_pack.json"

# Ultra-lifelike Microsoft Neural French voices (France + Canada)
VOICES = {
    "vivienne": ("fr-FR-VivienneMultilingualNeural", "Vivienne · FR"),
    "remy": ("fr-FR-RemyMultilingualNeural", "Rémy · FR"),
    "sylvie": ("fr-CA-SylvieNeural", "Sylvie · CA"),
    "thierry": ("fr-CA-ThierryNeural", "Thierry · CA"),
}


def fnv1a(s: str) -> str:
    """Must match the JS fnv1a() helper exactly (UTF-16 code units / JS charCodeAt)."""
    h = 0x811C9DC5
    # Encode as UTF-16LE to iterate exact JS charCodeAt values
    b = s.encode("utf-16-le")
    for i in range(0, len(b), 2):
        code = b[i] | (b[i + 1] << 8)
        h ^= code
        h = (h * 0x01000193) & 0xFFFFFFFF
    return format(h, "08x")


def extract_phrases_with_voices() -> list[dict]:
    html = HTML_PATH.read_text(encoding="utf-8")
    scripts = re.findall(r"<script(?![^>]*src)[^>]*>(.*?)</script>", html, re.S)
    script = scripts[0]

    extract_js = script.replace(
        "init();",
        r"""
const entries = new Map();
function add(text, voiceKey) {
  if (!text) return;
  const t = String(text).trim();
  if (!t) return;
  if (!entries.has(t)) entries.set(t, voiceKey);
}

CHAPTERS.forEach((ch, cIdx) => {
  const isCanada = ch.id === 'a2_3' || ch.id === 'a1_2';
  const defaultV = isCanada ? 'sylvie' : (cIdx % 2 === 0 ? 'vivienne' : 'remy');
  ch.examples.forEach((e, i) => add(e.fr, i % 2 === 0 ? defaultV : (defaultV === 'vivienne' ? 'remy' : 'sylvie')));
  ch.vocab.forEach((v, i) => add(v.fr, v.cat === 'Canada' ? 'sylvie' : (i % 2 === 0 ? 'vivienne' : 'thierry')));
  ch.passages.forEach((p, pIdx) => {
    const pv = /Montréal|Québec|Canada|Clinique|logement|3 ½/i.test(p.title + ' ' + p.sentences.join(' '))
      ? (pIdx % 2 === 0 ? 'sylvie' : 'thierry')
      : (pIdx % 2 === 0 ? 'remy' : 'vivienne');
    p.sentences.forEach(s => add(s, pv));
  });
  if (ch.clockTimes) ch.clockTimes.forEach(t => add(t.fr, 'vivienne'));
  if (ch.comparisons) ch.comparisons.forEach(c => { add(c.posFr, 'vivienne'); add(c.negFr, 'remy'); });
  if (ch.aspectPairs) ch.aspectPairs.forEach(a => { add(a.pc, 'remy'); add(a.imp, 'vivienne'); });
  if (ch.subjBuilder) ch.subjBuilder.forEach(s => add(s.trigger + ' ' + s.clause, 'vivienne'));
});

EXTRA_VOCAB.forEach((v, i) => add(v.fr, v.cat === 'Canada' ? 'thierry' : (i % 2 === 0 ? 'vivienne' : 'remy')));

DRILLS.conjugation.forEach((d, i) => {
  const full = d.prompt.replace('___', d.answer).replace(/^[^:]+:\s*/, '');
  add(full, i % 2 === 0 ? 'vivienne' : 'remy');
});
DRILLS.cloze.forEach((d, i) => add(d.prompt.replace('___', d.answer), i % 2 === 0 ? 'remy' : 'sylvie'));
DRILLS.dictation.forEach((d, i) => add(d.audio, ['sylvie', 'thierry', 'vivienne', 'remy'][i % 4]));
DRILLS.fauxamis.forEach((d, i) => add(d.context, i % 2 === 0 ? 'vivienne' : 'thierry'));

MOCK_EXAMS.co.questions.forEach((q, i) => {
  const v = ['vivienne', 'sylvie', 'thierry', 'remy'][i % 4];
  add(q.audio, v);
});

EE_TASKS.forEach((t, i) => {
  const v = i === 0 ? 'sylvie' : (i === 1 ? 'thierry' : 'vivienne');
  add(t.prompt, 'remy');
  add(t.model, v);
});

EO_TASKS.forEach((t, i) => {
  const v = i === 0 ? 'thierry' : (i === 1 ? 'sylvie' : 'vivienne');
  t.modelSentences.forEach(s => add(s, v));
});

const out = [...entries.entries()].map(([text, voice]) => ({ text, voice }));
console.log(JSON.stringify(out));
""",
    )

    wrapper = (
        """
global.window = { speechSynthesis: { getVoices: () => [], cancel: () => {} }, addEventListener: () => {} };
global.localStorage = { getItem: () => null, setItem: () => {}, removeItem: () => {} };
const dummy = { addEventListener: () => {}, querySelectorAll: () => [], querySelector: () => null, classList: { add:()=>{}, remove:()=>{}, toggle:()=>{} }, style: {}, innerHTML: "", appendChild: ()=>{} };
global.document = { getElementById: () => dummy, querySelectorAll: () => [], createElement: () => dummy };
"""
        + extract_js
    )
    proc = subprocess.run(["node"], input=wrapper, text=True, capture_output=True, check=True)
    return json.loads(proc.stdout)


def clean_for_speech(text: str) -> str:
    # Make parenthetical grammar markers sound natural instead of reading "+ inf." literally
    t = text.replace("(+ nom)", "").replace("(+ inf.)", "").replace("(+ subj.)", "").replace("(+ adj.)", "")
    t = t.replace("(QC)", "").replace("(être)", "").replace(" / ", ", ")
    t = re.sub(r"\s+", " ", t).strip()
    return t


async def synth_one(sem: asyncio.Semaphore, item: dict) -> tuple[str, dict]:
    raw_text = item["text"]
    voice_key = item["voice"]
    voice_name, voice_label = VOICES[voice_key]
    key = fnv1a(raw_text)
    mp3_final = CACHE_DIR / f"{key}.mp3"

    if not mp3_final.exists() or mp3_final.stat().st_size == 0:
        async with sem:
            spoken = clean_for_speech(raw_text)
            raw_mp3 = CACHE_DIR / f"{key}_raw.mp3"
            for attempt in range(3):
                try:
                    comm = edge_tts.Communicate(spoken, voice_name)
                    await comm.save(str(raw_mp3))
                    break
                except Exception as e:
                    if attempt == 2:
                        raise e
                    await asyncio.sleep(1.0 * (attempt + 1))

            # Compress to crisp 24kbps 24kHz mono MP3 & trim leading/trailing dead silence
            cmd = [
                "ffmpeg", "-y", "-v", "error",
                "-i", str(raw_mp3),
                "-af", "silenceremove=start_periods=1:start_silence=0.04:start_threshold=-45dB,areverse,silenceremove=start_periods=1:start_silence=0.05:start_threshold=-45dB,areverse",
                "-ac", "1", "-ar", "24000", "-b:a", "24k",
                str(mp3_final),
            ]
            r = subprocess.run(cmd, capture_output=True)
            if r.returncode != 0 or not mp3_final.exists() or mp3_final.stat().st_size < 200:
                # Fallback without silenceremove if clip is super short
                subprocess.run(
                    ["ffmpeg", "-y", "-v", "error", "-i", str(raw_mp3), "-ac", "1", "-ar", "24000", "-b:a", "24k", str(mp3_final)],
                    check=True,
                )
            if raw_mp3.exists():
                raw_mp3.unlink()

    b64 = base64.b64encode(mp3_final.read_bytes()).decode("ascii")
    return key, {"v": voice_label, "d": b64}


async def main():
    CACHE_DIR.mkdir(parents=True, exist_ok=True)
    items = extract_phrases_with_voices()
    print(f"Synthesizing {len(items)} unique French phrases with Neural FR/CA voices...", flush=True)
    sem = asyncio.Semaphore(8)
    tasks = [synth_one(sem, it) for it in items]
    results = []
    done = 0
    for coro in asyncio.as_completed(tasks):
        res = await coro
        results.append(res)
        done += 1
        if done % 50 == 0 or done == len(items):
            print(f"Progress: {done}/{len(items)}", flush=True)

    pack = {k: v for k, v in results}
    OUT_JSON.write_text(json.dumps(pack, separators=(",", ":")), encoding="utf-8")
    total_mb = OUT_JSON.stat().st_size / (1024 * 1024)
    print(f"DONE! Wrote {len(pack)} neural clips to {OUT_JSON} ({total_mb:.2f} MB)", flush=True)


if __name__ == "__main__":
    asyncio.run(main())
