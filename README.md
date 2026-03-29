# ICAI 2025 Website

Official conference website for the **International Congress on Artificial Intelligence (ICAI) 2025**.

This project is a React + TypeScript single-page application that publishes event information, schedule, speakers, participants, ambassadors, and committee details for ICAI 2025.

## Tech Stack

- React 18 + TypeScript
- Vite
- React Router
- Tailwind CSS + DaisyUI
- Framer Motion
- ESLint + Prettier

## Features

- Home page with event hero section and countdown
- Conference schedule (Day 1 and Day 2)
- Speakers listing with speaker detail pages
- Committee page
- Participants directory (both days + day-wise data)
- Ambassadors directory
- Previous congress pages (2022/2023/2024)

## Project Structure

```text
/home/runner/work/icai2025/icai2025
├── src/
│   ├── App.tsx
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── ImportantDates.tsx
│   └── pages/
│       ├── Home.tsx
│       ├── Schedule.tsx
│       ├── Speakers.tsx
│       ├── SpeakerDetail.tsx
│       ├── Participants.tsx
│       ├── Ambassadors.tsx
│       ├── Committee.tsx
│       └── prev-congress/
├── data/
│   ├── speakers.json
│   ├── ambassadors.json
│   ├── both_day.json
│   ├── day1.json
│   └── day2.json
├── public/
├── package.json
└── README.md
```

## Local Development

### Prerequisites

- Node.js 18+ (recommended)
- npm

### Install

```bash
npm ci
```

### Run development server

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Lint

```bash
npm run lint
```

### Format

```bash
npm run check-format
npm run format
```

## Routes

- `/` — Home
- `/committee` — Committee
- `/speakers` — Speakers
- `/speakers/:id` — Speaker details
- `/schedule` — Program schedule
- `/participants` — Participants
- `/ambassadors` — Ambassadors
- `/2024`, `/2023`, `/2022` — Previous congress pages

## Data Notes

- Speaker data is maintained in `data/speakers.json`.
- Participant datasets are in `data/both_day.json`, `data/day1.json`, and `data/day2.json`.
- Ambassador records are in `data/ambassadors.json`.

## 2026 Update Notice

> **Notice (2026):** This repository is the ICAI 2025 website baseline and can be reused for ICAI 2026.
>
> For 2026 rollout, update at minimum:
> - event date and countdown in `src/pages/Home.tsx`
> - schedule content in `src/pages/Schedule.tsx`
> - speaker list in `data/speakers.json`
> - participant datasets in `data/both_day.json`, `data/day1.json`, `data/day2.json`
> - ambassador list in `data/ambassadors.json`
>
> Recommended for 2026 maintenance:
> - move schedule data to a JSON data source
> - verify all external image links used by profiles
> - review and re-enable any routes as needed for the 2026 event cycle

## Contact

- Email: `icai.bubt@gmail.com`
