<p align="center">
  <img src="apps/web/public/favicon.svg" width="80" height="80" alt="Kina logo" />
</p>

<h1 align="center">Kina</h1>

<p align="center">
  <strong>Learn Chinese with AI & Native Speakers</strong>
  <br />
  Research-backed platform combining an adaptive AI tutor with a native speaker marketplace.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/HSK_3.0-2025_Final-red" alt="HSK 3.0" />
  <img src="https://img.shields.io/badge/React_19-blue" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="TypeScript" />
  <img src="https://img.shields.io/badge/TailwindCSS_v4-06B6D4" alt="TailwindCSS" />
  <img src="https://img.shields.io/badge/Motion-black" alt="Motion" />
</p>

---

## What is Kina?

Kina is a Chinese language learning platform that bridges the gap between AI-powered learning and human conversation practice. No other platform does both.

**Two core pillars:**

1. **AI Tutor** — Adaptive lessons powered by ElevenLabs conversational AI. Teaches tones, characters, grammar, and conversation through research-backed methods (HVPT, comprehensible input, spaced repetition).

2. **Native Speaker Marketplace** — When the AI detects you're ready, it connects you with vetted native Chinese speakers for 1-on-1 video sessions. 80% goes to the speaker, 20% platform fee.

## Why Kina?

Every feature is grounded in language acquisition research:

- **Parallel learning** over linear sequences (Krashen's Input Hypothesis)
- **HVPT tone training** with multiple voices from Day 1 (2024 SAGE study)
- **Extensive reading > pure flashcards** for characters (Hacking Chinese data)
- **AI tutoring proven effective** — meta-analysis of 46 studies shows g=0.74 effect size
- **HSK 3.0 aligned** — final November 2025 standard, not the outdated 2021 draft

See [RESEARCH.md](RESEARCH.md) for the full evidence base with sources.

## Features

| Feature | Status |
|---------|--------|
| Chinese-inspired landing page | ✅ |
| Auth (login/register) | ✅ Dummy (localStorage) |
| Learner dashboard with progress tracking | ✅ |
| Level 1: 10 lessons (Tones & Pinyin + First Characters) | ✅ |
| Interactive quizzes with explanations | ✅ |
| SRS flashcard review (SM-2 algorithm) | ✅ |
| Tone contour visualizations (animated SVG) | ✅ |
| Browser TTS pronunciation (Web Speech API) | ✅ |
| Native pronunciation (ElevenLabs) | 🔜 Coming soon |
| Full EN/HR bilingual UI + lesson content | ✅ |
| Language switcher on all pages | ✅ |
| Radical tooltips with unique examples per radical | ✅ |
| 14 custom SVG icons | ✅ |
| Motion animations on every interaction | ✅ |
| Native speaker marketplace | 📋 Planned |
| Stripe Connect payments (20% commission) | 📋 Planned |
| Video calls (Daily.co) | 📋 Planned |
| AI-to-human handoff system | 📋 Planned |
| Mobile app (React Native / Expo) | 📋 Planned |
| Supabase backend + PostgreSQL | 📋 Planned |

## Level System

Aligned with **HSK 3.0 (November 2025 final)**:

| Level | Name | HSK | CEFR | Words | Duration |
|-------|------|-----|------|-------|----------|
| 1 | Full Beginner | 1-2 | A1-A2 | 300→500 | 4-8 months |
| 2 | Intermediate | 3-4 | B1-B2 | 1,000→2,000 | +6-10 months |
| 3 | Semi-Pro | 5-6 | C1-C2 | 3,600→5,400 | +12-18 months |

**Level 1 currently includes 10 lessons:**

**Module 1.1 — Tones & Pinyin**
1. The Four Tones (四声)
2. Tone Pairs Practice (声调组合)
3. Pinyin Initials (声母)
4. Pinyin Finals & The ü Sound (韵母)
5. Numbers & First Conversation (数字和第一次对话)

**Module 1.2 — First Characters**
6. How Characters Work (汉字入门)
7. People & Pronouns (人和代词)
8. Daily Essentials (日常用语)
9. Food & Drink (吃和喝)
10. Self-Introduction (自我介绍)

## Tech Stack

```
kina/
├── apps/
│   ├── web/              React 19 + Vite + TailwindCSS v4 + Motion
│   ├── mobile/           React Native + Expo (planned)
│   └── api/              Node.js + Express + TypeScript (planned)
├── packages/
│   └── shared/           Shared types & API client (planned)
├── package.json          pnpm workspaces
└── turbo.json            Turborepo
```

| Layer | Technology |
|-------|-----------|
| Frontend | React 19, Vite 6, TailwindCSS v4, Motion (Framer Motion) |
| Routing | React Router v7 |
| State | React Context + localStorage |
| i18n | Custom context-based system (EN/HR) |
| Icons | 14 custom SVG components |
| Audio | Web Speech API (zh-CN) + ElevenLabs (planned) |
| SRS | SM-2 spaced repetition algorithm |
| Monorepo | pnpm workspaces + Turborepo |
| Type safety | TypeScript strict mode |

**Planned:**
| Layer | Technology |
|-------|-----------|
| Backend | Node.js + Express + Prisma |
| Database | PostgreSQL (Supabase) |
| Auth | Supabase Auth |
| Payments | Stripe Connect |
| Video | Daily.co |
| Mobile | React Native + Expo |
| AI Voice | ElevenLabs Conversational AI |

## Getting Started

### Prerequisites

- Node.js 22+
- pnpm 9+

### Install & Run

```bash
# Clone
git clone https://github.com/your-username/kina.git
cd kina

# Install dependencies
pnpm install

# Start dev server
pnpm dev:web
```

Open [http://localhost:5173](http://localhost:5173)

### Quick Tour

1. **Landing page** → Click "Start Learning" / "Počni učiti"
2. **Register** → Enter any name/email/password (dummy auth)
3. **Dashboard** → See your progress, click Lesson 1
4. **Lesson** → Go through steps, listen to pronunciation, take quiz
5. **Review** → After completing lessons, review vocab with SRS flashcards
6. **Language** → Click the globe icon (🌐) to switch between English and Croatian

## Market Opportunity

The Chinese language learning market is valued at **~$7.4B** and projected to double by 2027. The online segment alone is ~$2B growing at 12.4% CAGR.

**Our niche is wide open:** No platform combines AI-powered learning with a native speaker marketplace. AI apps lack human practice. Tutoring platforms lack AI structure. Kina bridges both.

See [RESEARCH.md](RESEARCH.md) for full competitive analysis and sources.

## License

Private — All rights reserved.

---

<p align="center">
  Built with <span style="font-family: 'Noto Sans SC'">爱</span> (love) by Ilija & team
</p>
