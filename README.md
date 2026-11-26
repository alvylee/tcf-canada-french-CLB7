# TCF Canada French Mastery Studio (A1 → B2 / CLB 7)

An interactive, self-contained web studio designed to take a **C1 English + Mandarin native** speaker from **A1 to B2 (CLB 7 / NCLC 7)** for **TCF Canada** across all four skills (**Listening CO, Reading CE, Writing EE, Speaking EO**).

**Live App (GitHub Pages):** https://alvylee.github.io/tcf-canada-french-CLB7/

## Features

- **Today's Guided Session, Daily Output, 3-Min Level Check & 12-Week Sprint Tracker**: Auto-queues your next Grammar lesson, Vocab theme, Mistake Review / Due Flashcards, Thematic Listening/Reading unit, daily 5-min Active Output micro-task, an 8-question A1→B2 diagnostic placement check, and a 12-week weekly deliverables checklist (1 voice rec + 1 short text + error log).
- **Quick Essentials & Pronoun Cheat-Sheet (`📌`)**: Beginner-friendly instant reference with tap-to-hear French audio and live search across a complete **Pronoun Transformation Matrix** (`je/me/moi/mon` → `elles/les/leur/elles/leur`), **`-ER / -IR / -RE` Verb Conjugation Rules & Examples** (plus `être/avoir/aller/faire`), days (`lundi–dimanche`), months & seasons, numbers (`0–1 000`) & colors, question words, prepositions, survival phrases, and the top 20 verbs.
- **38 Atomic Grammar & Sounds Lessons (`P.1–P.7`, `G-A1.1–G-B2.8`)**: Bite-sized 5-minute lessons covering French phonetics (Mandarin `ü/u`, nasals, voiced/voiceless stops `b/p` & uvular `R`, `é/è` tense contrast, liaisons, fast spoken reductions, Québécois/Canadian spoken French) through B1 verb+preposition governance, double object pronouns, and B2 subjunctive, gérondif, nominalization, compound relatives (`lequel/auquel/duquel`), and academic framing.
- **16 Thematic Vocabulary Micro-Lessons (`V-A1.1–V-B2.4`)**: High-ROI TCF Canada themes skipping obvious English cognates — gender-coded nouns, collocations, Québec/Canadian French, Faux Amis packs, and TCF paraphrase pairs.
- **12 Chunked 4-Step Listening & Reading Units (`A1.1–B2.3`)**: Pattern → Key Vocab → TCF Passages (with Listening-Only mode & exam traps) → Unit Quiz.
- **882 Studio Neural Human French Audio Clips (FR + CA)**: Pre-baked Microsoft Neural recordings (`Vivienne · FR`, `Rémy · FR`, `Sylvie · CA`, `Thierry · CA`) stored in ~10 lazy-loaded packs with pitch-preserved speed control (`0.7x`, `0.88x`, `1.0x`, `1.15x`).
- **Active Drill Lab + Personal Error Log (`错句本`)**: Conjugation (`22`), Connectors/Cloze (`18`), Gender Rapid-Fire `un/une` (`24`), True French *Dictée* & Listening (`14` with word-by-word diff), Faux Amis (`16`), automatic **`Missed Items`** review, and a manual **`错句本`** personal mistake log with rule tags & audio — with both **Multiple Choice** (deterministic option shuffling) and **`Type Answer`** active-recall modes.
- **Bidirectional Timestamped SRS Flashcard Deck (`172` synced expressions)**: Toggle between **`FR → EN/中文`** and **`EN/中文 → FR`** active recall with context examples, real spaced-repetition intervals (`now`, `+1d`, `+3d/+7d/+14d`, `+21d`), `Due Today` filtering, and Quick Quiz mistake tracking.
- **TCF Canada Timed Mock Simulator (`40` progressive questions)**:
  - CO Set 1 (`A1 → B2`) & CO Set 2 (`B1 → B2+ CLB 7 Sprint`) with Official Play-Once audio lock & **Exam-Authentic CO Mode** (hides written question until audio plays)
  - CE Set 1 (`A1 → B2`) & CE Set 2 (`B1 → B2+ CLB 7 Sprint`)
  - Calibrated TCF score (`100–699`) & IRCC CLB estimate (CE `453+` / CO `458+` for CLB 7)
- **Writing (EE) & Speaking (EO) Studio (`9` EE + `9` EO Tâches 1–3 Prompts)**:
  - **EE**: Tâches 1–3 grouped selector, `60m Full EE` / `10m` / `20m` / `30m` timers, punctuation-safe word-limit counter + live Tâche 3 Part 1/Part 2 split counter, French accent pad, B2 connector insert bar, task-aware structural rubric check, and 1-click **Copy TCF Grading Packet**.
  - **EO**: Official prep/speaking timers, **Simulated Examiner Replies & Twists** for Tâche 2 roleplay, 4.5-min pacing blueprint & buying-time fillers for Tâche 3, browser **Voice Recorder + playback**, shadowing audio models, optional live `fr-CA` speech-to-text, and 1-click **Copy EO Packet**.
- **AI Coach Toolkit & Immersion Hub (`🤖`)**: 5 level-calibrated 1-click copyable AI coach prompts (EO Tâche 2 Roleplay, EO Tâche 3 Debate, B1→B2 Writing Upgrade, Daily Conversation, `错句分析` Error Diagnosis) plus curated FR + Canadian immersion resources with 15-minute study workflows.
- **Local Progress + JSON Backup**: Saves automatically in `localStorage` with 1-click **Export / Import** JSON backup and Light/Dark theme toggle.

## Project Structure

```text
.
├── index.html                  # Standalone app (Light/Dark theme, runs on GitHub Pages or file://)
├── data/
│   ├── syllabus_data.js        # 38 Grammar & Sounds lessons, 16 Vocab lessons, Mock Set 2 data
│   ├── audio_manifest.js       # Lightweight manifest mapping phrases to lazy-loaded packs
│   └── audio_packs/            # Section-grouped FR/CA neural audio packs (lazy-loaded)
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
