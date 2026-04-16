# Research Behind Kina

Every design decision in Kina is grounded in language acquisition research, verified standards, and competitive analysis. This document explains **why** we built the platform the way we did.

---

## 1. HSK 3.0 Standard (Final, November 2025)

Our level system is aligned with the **official final HSK 3.0 syllabus** — not the outdated 2021 draft that many apps still reference.

| Level | Words | Characters | CEFR | Duration |
|-------|-------|-----------|------|----------|
| Level 1 (HSK 1-2) | 300 → 500 | 150 → 300 | A1-A2 | 4-8 months |
| Level 2 (HSK 3-4) | 1,000 → 2,000 | 500 → 800 | B1-B2 | +6-10 months |
| Level 3 (HSK 5-6) | 3,600 → 5,400 | 1,200 → 1,800 | C1-C2 | +12-18 months |

- First global pilot exams held January 31, 2026
- Full official implementation: July 2026

**Sources:**
- [Khanji School — New HSK 3.0 2026](https://khanjischool.com/blog/chinese/new-hsk-30-2026-vocabulary-levels-exams-and-official-textbooks)
- [MandarinBean — New HSK Vocabulary 2026](https://mandarinbean.com/new-hsk-vocabulary/)
- [HSKLord — New HSK 3.0 Complete Guide](https://hsklord.com/blog/new-hsk-3-0-complete-guide)
- [MandarinZone — HSK 3.0 Changes Explained](https://www.mandarinzone.com/new-hsk-test/)
- [StudyCLI — The Newly Revised HSK](https://studycli.org/hsk/the-new-hsk/)
- [MandarinZone — HSK 3.0 First Global Trial 2026](https://www.mandarinzone.com/hsk-3-first-global-trial-2026/)

---

## 2. Why Parallel Learning (Not Linear)

Traditional Chinese courses teach: pinyin → tones → characters → grammar → conversation. **Research shows this is suboptimal.**

We use a **parallel approach**: listening + tones + characters in context simultaneously from Day 1, with speaking introduced gradually.

```
TRADITIONAL (suboptimal):         KINA'S APPROACH (research-backed):

Pinyin → Tones → Characters       ┌─ Listening (comprehensible input) ─┐
    │                │             ├─ Tones (HVPT + gestures)          ─┤ PARALLEL
    └── Grammar → Speaking         ├─ Characters (context + SRS)       ─┤ from Day 1
                                   ├─ Grammar (implicit from input)    ─┤
                                   └─ Speaking (gradual, after input)  ─┘
```

### Comprehensible Input (Krashen)

Stephen Krashen's Input Hypothesis shows that **massive comprehensible input at i+1 level** drives language acquisition more effectively than explicit grammar instruction. For Mandarin, researchers note that tones and characters need some explicit instruction alongside input, but the core principle holds.

**Sources:**
- [Hacking Chinese — Comprehensible Input](https://www.hackingchinese.com/learning-chinese-comprehensible-input/)
- [Mandarin Companion — Impact of Comprehensible Input](https://mandarincompanion.com/you-can-learn-chinese-podcast/the-impact-of-comprehensible-input-on-language-learning-a-deep-dive/)
- [Does Krashen's Input Hypothesis Work for Mandarin?](https://imlearningmandarin.com/2022/08/22/does-stephen-krashens-input-hypothesis-comphrensible-input-work-for-learning-mandarin-chinese/)

---

## 3. Tone Training: HVPT + Multimodal Cues

Tones are the #1 challenge for European learners. Our approach uses three research-backed methods:

### High Variability Phonetic Training (HVPT)
Hearing tones from **many different speakers** (male, female, young, old, different accents) significantly improves tone perception compared to single-speaker training.

### Multimodal Gestures
Hand gestures paired with tones **deepen understanding of tonal contrasts**. Each tone has a physical gesture (hand follows the pitch contour).

### Music-Based Approaches
Studies show music training **improves cortical tone representations**, helping learners perceive tonal differences faster.

**Sources:**
- [2024 HVPT Study — SAGE Journals](https://journals.sagepub.com/doi/abs/10.1177/13621688241282259)
- [2024 Multimodal Cues for Tone Acquisition — Frontiers in Education](https://www.frontiersin.org/journals/education/articles/10.3389/feduc.2024.1410795/full)
- [2024 Music-Based Tone Training — Wiley](https://bera-journals.onlinelibrary.wiley.com/doi/10.1002/rev3.3480)

---

## 4. Characters: Extensive Reading > Pure SRS

Spaced Repetition Systems (Anki, etc.) are effective for bootstrapping, but **extensive reading is better for scaling character knowledge**.

Hacking Chinese simulation data shows learners acquired **~100 more characters** through 15 hours of graded reading vs. equivalent flashcard time. Reading provides natural spaced repetition **plus** contextual understanding that isolated flashcards lack.

**Our approach:** SRS for the first ~100-150 characters (bootstrap), then shift to graded reading as quickly as possible.

**Sources:**
- [Hacking Chinese — Reading vs SRS](https://www.hackingchinese.com/reading-is-a-lot-like-spaced-repetition-only-better/)
- [Migaku — Chinese Immersion Learning](https://migaku.com/blog/chinese/chinese-immersion-learning)

---

## 5. AI Tutoring: Proven Effectiveness

Our core feature — an AI tutor — is supported by strong evidence:

- **2025 meta-analysis of 46 studies**: AI has a **medium-to-large effect (g = 0.74)** on language learning across all skills
- **Nature study**: Students learn "significantly more in less time" with AI tutors vs. in-class active learning, with higher engagement and motivation
- Strongest effects for **vocabulary**, then reading, writing, listening, speaking

**Sources:**
- [AI Language Learning Meta-Analysis — ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2666920X25001626)
- [AI Tutoring vs Active Learning — Nature](https://www.nature.com/articles/s41598-025-97652-6)

---

## 6. Market Analysis: The Gap We Fill

| Dimension | Value |
|-----------|-------|
| Market size | ~$7.4B |
| Growth | Projected to double by 2027 |
| Online segment | ~$2B in 2024, 12.4% CAGR |

### Competitive Landscape

| Category | Players | Gap |
|----------|---------|-----|
| AI-only apps | SuperChinese (12M+), Talkpal, SpeakPal, Langua | No human practice |
| Human-only platforms | italki, Preply | Expensive, unstructured |
| Beginner apps | HelloChinese, Duolingo, LingoDeer | Hit ceiling at intermediate |
| Character tools | Hack Chinese, Pleco, Anki | Fragmented, no curriculum |
| **Kina** | **AI tutor + native speaker marketplace** | **Nobody does both** |

### Key Gaps We Address

1. **No AI-to-human handoff** — AI detects readiness, connects to native speaker
2. **Intermediate learners underserved** — everyone focuses on beginners
3. **No ElevenLabs-quality voice** for Chinese tutoring
4. **Grammar explanations remain poor** across all existing apps
5. **Fragmented tooling** — learners use 4-5 apps simultaneously

**Sources:**
- [HolonIQ — Chinese Language Learning $7.4B Market](https://www.holoniq.com/notes/chinese-language-learning-a-7-4b-market-powered-by-over-6-million-learners-set-to-double-in-the-next-five-years)
- [DigMandarin — Best Chinese Learning Apps 2025](https://www.digmandarin.com/best-chinese-language-learning-apps.html)
- [Migaku — Best Chinese Learning Apps](https://migaku.com/blog/chinese/best-chinese-learning-apps)
- [LanguaTalk — Best AI Chinese Learning Apps](https://languatalk.com/blog/how-to-learn-chinese-with-ai/)

---

## 7. Key Design Decisions Summary

| Decision | Research Basis |
|----------|---------------|
| Tones from Day 1, never delayed | HVPT studies; fossilized errors if delayed |
| Parallel learning, not linear | Krashen's comprehensible input hypothesis |
| SRS for bootstrap, reading for scale | Hacking Chinese simulation data |
| 3rd tone as "low tone" default | Phonetics research: full dip only in isolation |
| Pinyin fades in 4 stages | Best practice from HelloChinese, ChinesePod |
| 10-20 min session design | Short frequent sessions > long infrequent ones |
| AI-to-human handoff | No competitor does this; AI effect g=0.74 |
| Radical-based character learning | Superior to rote repetition across studies |
| 20% commission marketplace | Standard marketplace fee; incentivizes native speakers |
