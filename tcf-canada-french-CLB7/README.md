# TCF Canada French Mastery Studio (A1 → B2 / CLB 7)

An interactive, self-contained web studio designed to take a **C1 English + Mandarin native** speaker from **A1 to B2 (CLB 7 / NCLC 7)** for **TCF Canada** across all four skills (**Listening CO, Reading CE, Writing EE, Speaking EO**).

**Live App (GitHub Pages):** https://alvylee.github.io/tcf-canada-french-CLB7/

## Features

- **Today's Guided 25-Min Session & Daily Streak**: Auto-queues your next Grammar lesson, Vocab theme, Mistake Review / Due Flashcards, and Thematic Listening/Reading unit.
- **32 Atomic Grammar & Sounds Lessons (`P.1–P.4`, `G-A1.1–G-B2.7`)**: Bite-sized 5-minute lessons covering French phonetics (Mandarin `ü/u` bridge, nasals, liaisons, fast spoken reductions) through B2 subjunctive, gérondif, nominalization, and academic framing.
- **16 Thematic Vocabulary Micro-Lessons (`V-A1.1–V-B2.4`)**: High-ROI TCF Canada themes skipping obvious English cognates — gender-coded nouns, collocations, Québec/Canadian French, Faux Amis packs, and TCF paraphrase pairs.
- **12 Chunked 4-Step Listening & Reading Units (`A1.1–B2.3`)**: Pattern → Key Vocab → TCF Passages (with Listening-Only mode & exam traps) → Unit Quiz.
- **539 Studio Neural Human French Audio Clips (FR + CA)**: Embedded offline recordings (`Vivienne · FR`, `Rémy · FR`, `Sylvie · CA`, `Thierry · CA`) with pitch-preserved speed control (`0.7x`, `0.88x`, `1.0x`, `1.15x`).
- **Active Drill Lab + Mistake Notebook**: Conjugation, Connectors/Cloze, Listening/Dictation, Faux Amis, and automatic **`Missed Items`** review — with both **Multiple Choice** and **`Type Answer`** active-recall modes (plus French accent pad).
- **Timestamped SRS Flashcard Deck (`172` synced expressions)**: Real spaced-repetition intervals (`now`, `+1d`, `+3d/+7d/+14d`, `+21d`) and `Due Today` filtering.
- **TCF Canada Timed Mock Simulator (`40` progressive questions)**:
  - CO Set 1 (`A1 → B2`) & CO Set 2 (`B1 → B2+ CLB 7 Sprint`) with Official Play-Once audio lock
  - CE Set 1 (`A1 → B2`) & CE Set 2 (`B1 → B2+ CLB 7 Sprint`)
  - Weighted TCF score (`100–699`) & CLB estimate
- **Writing (EE) & Speaking (EO) Studio**: Official Tâches 1–3 prompts, word-limit counter, French accent pad, B2 connector insert bar, automated CLB 7 rubric check, shadowing audio models, official EO prep/speaking timers, optional live `fr-CA` speech-to-text, and 1-click **Copy TCF Grading Packet** for AI/tutor review.
- **Local Progress + JSON Backup**: Saves automatically in `localStorage` with 1-click **Export / Import** JSON backup and Light/Dark theme toggle.

## Project Structure

```text
.
├── index.html                  # Standalone app (Light/Dark theme, runs on GitHub Pages or file://)
├── data/
│   ├── syllabus_data.js        # 32 Grammar lessons, 16 Vocab lessons, Mock Set 2 data
│   └── neural_audio_pack.js    # 539 compressed FR/CA neural MP3 clips (base64)
├── scripts/
│   ├── grammar_syllabus_data.py
│   ├── vocab_syllabus_data.py
│   ├── mock_set2_data.py
│   └── build_neural_audio.py   # Neural TTS synthesis script (edge-tts + ffmpeg)
└── .nojekyll
```

## Running Locally

Simply open `index.html` in any modern browser (Chrome, Edge, Safari, Firefox), or serve it locally:

```bash
python3 -m http.server 8000
```
