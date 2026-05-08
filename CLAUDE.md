# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start dev server
npm run build        # tsc -b + vite build
npm run typecheck    # tsc --noEmit only
npm run preview      # preview production build

# Utility scripts (Node ESM)
node scripts/download-images.mjs         # download images referenced in components
node scripts/download-framer-bundle.mjs  # (legacy) download Framer JS chunks into public/framer/
node scripts/extract-sections.mjs        # (legacy) re-slice homePageHTML.ts into src/data/sections/
```

No test runner, no linter config.

## Architecture

This is a marketing landing page for CloseCrew's "Larry AI" product. It has a dual rendering architecture — most of the page is injected Framer HTML, but sections are being progressively replaced with React components.

### Pages & Routes

| Route | Page |
| ----- | ---- |
| `/` | `src/pages/Home.tsx` |
| `/plans` | `src/pages/Plans.tsx` |
| `/ai/larry` | `src/pages/Larry.tsx` |
| `/why-podium` | `src/pages/WhyPodium.tsx` |

Routing via `react-router-dom`. Vercel SPA rewrites in `vercel.json` redirect all paths to `index.html`.

### Section components

All sections live in `src/sections/`. Each page composes its own set:

- **Home**: `NavSection`, `HeroSection`, `SolutionSection`, `IntegrationsSection`, `TestimonialsSection`, `CommunicationsSection`, `CTASection`, `FAQSection`, `FooterSection`
- **Larry** (`/ai/larry`): `NavSection`, `LarryHeroSection`, `LarryVideoSection`, `LarrySideBySidesSection`, `LarryTestimonialsSection`, `CTASection`, `FooterSection`
- **Plans**: `NavSection`, `PlansHeroSection`, `AwardBadgesSection`, `PricingCardsSection`, `PlansTestimonialsSection`, `CTASection`, `FooterSection`
- **WhyPodium**: `NavSection`, `WhyPodiumHeroSection`, `WhyPodiumStatsSection`, `WhyPodiumWorksSection`, `WhyPodiumComparisonSection`, `WhyPodiumClosesSection`, `WhyPodiumFaqSection`, `CTASection`, `FooterSection`

### Animations & images

- Lottie JSON animations: `src/assets/animations/` — rendered via `lottie-react`
- Local images: `src/assets/images/` (`.avif`, `.webp`)
- Remote images: `https://framerusercontent.com/images/<hash>` with `?width=N` resizing

### CSS / design tokens

- `src/styles/globals.css` — global styles, Tailwind directives, font-face declarations

Tailwind design tokens (named colors): `nav`, `ink`, `cream-white`, `crimson`, `gray-mid`, `gray-light`, `gray-100`, `gray-50`, `cream`, `warm-gray`, `blush`, `slate-mid`, `slate-light`, `ink-soft`, `gray-200`, `gray-300`, `gray-400`.

Font families: `graphik`, `graphik-medium`, `graphik-semi`, `graphik-bold`, `grenette`, `grenette-semi`, `grenette-semi-italic`, `grenette-bold`, `editors-note`, `editors-semi`, `editors-bold`, `fragment-mono`, `inter`.

Breakpoints: `tablet` = 768 px, `desktop` = 1200 px.

### Key dependencies

- `framer-motion` — animations
- `lottie-react` — Lottie JSON playback
- `react-router-dom` — client-side routing
