# Implementation Plan: Plans Page

## Overview

Build the `/plans` page for homeservices.podium.com as a React SPA route. Source of truth: `dump/homeservices.podium.com/plans.html` (594 KB Framer SSR HTML). The page shares Nav with the home page and reuses TestimonialsSection verbatim. A new FooterSection applies to both pages. CTASection will be made props-driven so both pages can share it with different copy.

## Page Section Map (top → bottom)

| # | Section | Framer name in dump | Strategy |
|---|---------|---------------------|----------|
| 1 | Nav | `Nav and Promo` | **Reuse** `NavSection.tsx` |
| 2 | Plans Hero | `Plans` (~214 KB offset) | **New** `PlansHeroSection.tsx` |
| 3 | Pricing Cards | `Avery AI` + `Avery Features` + `Aesthetics OS + Avery Plan Card` + `EMR Add-on Plan Card` (~242–320 KB) | **New** `PricingCardsSection.tsx` |
| 4 | Award Badges | `Badges` + `Logos` (~320–324 KB) | **New** `AwardBadgesSection.tsx` |
| 5 | Testimonials | `Quote` / `Quotemarks` (~324–412 KB) | **Reuse** `TestimonialsSection.tsx` |
| 6 | CTA | `Divider` / inline (~412–430 KB) | **Adapt** `CTASection.tsx` (add props) |
| 7 | Footer | `Copyright Bar` (430 KB+) | **New** `FooterSection.tsx` |

## Architecture Decisions

- **Routing:** Install `react-router-dom`. Update `App.tsx` + `main.tsx`. Both pages share Nav + Footer + CTA.
- **CTASection props:** Add optional `headline` and `buttonText` props; existing defaults keep home page unchanged.
- **FooterSection:** New shared component added to both pages. Not in current home page — add it there too after build.
- **PricingCardsSection:** Tabs are visual only (no URL change). Active tab controls which plan card is visible.
- **Image downloads:** All `framerusercontent.com` images must be downloaded to `public/images/` before component code references them.
- **No FAQ on plans page:** Plans page does not have FAQ — omit it.

## Dependency Graph

```
react-router-dom install
        │
        └── App.tsx routing
                │
                └── Plans.tsx (page shell)
                        │
                        ├── NavSection.tsx (existing — no change)
                        ├── PlansHeroSection.tsx (new)
                        ├── PricingCardsSection.tsx (new — most complex)
                        ├── AwardBadgesSection.tsx (new — small)
                        ├── TestimonialsSection.tsx (existing — no change)
                        ├── CTASection.tsx (modified — add props)
                        └── FooterSection.tsx (new — shared with home)
```

## Task List

### Phase 0: Routing Foundation

#### Task 0: Add react-router-dom + wire routes

**Description:** Install react-router-dom. Update `App.tsx` to render `<BrowserRouter>` with routes for `/` (Home) and `/plans` (Plans). Create empty `Plans.tsx` shell that renders only `<NavSection />` so the route exists and is verifiable.

**Acceptance criteria:**
- [ ] `react-router-dom` listed in `package.json` dependencies
- [ ] `/` route renders Home page unchanged
- [ ] `/plans` route renders without errors (at minimum shows Nav)
- [ ] `npm run typecheck` passes

**Verification:**
- [ ] `npm run typecheck` — zero errors
- [ ] Visit `http://localhost:5173/` — home page unchanged
- [ ] Visit `http://localhost:5173/plans` — no crash, nav visible

**Dependencies:** None

**Files touched:**
- `package.json`
- `src/App.tsx`
- `src/pages/Plans.tsx` (new)

**Estimated scope:** S

---

### Checkpoint: Phase 0
- [ ] Both routes load without errors
- [ ] Typecheck passes
- [ ] Home page visually unchanged

---

### Phase 1: Plans Hero Section

#### Task 1: PlansHeroSection — layout, typography, CTA

**Description:** Build `PlansHeroSection.tsx` pixel-perfect from `dump/homeservices.podium.com/plans.html` section at `data-framer-name="Plans"`. Dark background hero with headline "Agents and platform packages built for home services", body copy, and "Get started today" CTA button. Extract all measurements from dump CSS classes. Create `src/styles/plans-hero.css` for responsive overrides.

**Acceptance criteria:**
- [ ] Headline, body, and CTA text match dump exactly
- [ ] Background color, padding, max-width match dump CSS rules
- [ ] Typography (font-family, size, weight, line-height, color) match dump CSS variables
- [ ] "Get started today" button matches dump styles (border-radius, bg, text color)
- [ ] Responsive: correct layout at 767px, 768–1199px, 1200px+
- [ ] No Framer CDN image URLs in component code

**Verification:**
- [ ] `npm run typecheck` — zero errors
- [ ] Visual QA at 1440px, 900px, 375px widths in browser DevTools

**Dependencies:** Task 0

**Files touched:**
- `src/sections/PlansHeroSection.tsx` (new)
- `src/styles/plans-hero.css` (new)
- `src/pages/Plans.tsx` (add import)

**Estimated scope:** M

---

### Checkpoint: Phase 1
- [ ] Plans page shows correct dark hero
- [ ] Typecheck passes

---

### Phase 2: Pricing Cards Section

#### Task 2: PricingCardsSection — plan card structure + tabs

**Description:** Build `PricingCardsSection.tsx` from dump sections `Avery AI`, `Avery Features`, `Aesthetics OS + Avery Plan Card`, `EMR Add-on Plan Card`. Tab bar: "Larry AI | Calendar & Booking | Communications | Marketing tools". Three plan card types:

**Plan Cards:**
1. **AI Employee + Booking** (main plan) — Feature groups: Communications (Inbox, Phones+Voice AI, Text Messaging, Webchat, Email, Automations), Calendar & Booking (Integrate with calendar, Estimates, Payments & Financing, Reporting & Analytics), Marketing Tools (Membership Management, Renewals & Upsells, Bulk Text Messaging, Reviews). CTA: "Get a quote" + "Plan details" toggle.
2. **Booking add-on** (add-on) — "Available as an add-on for existing customers". Features: Booking features subset. CTA: "Get a quote".
3. **Aesthetics OS + Avery** and **EMR Add-on** — specialty cards with their own feature sets.

Each feature row uses a Lightning Bolt icon (SVG from dump) and a label.

Extract all CSS measurements from dump. Download plan-section images to `public/images/`. Create `src/styles/pricing-cards.css` for responsive overrides.

**Acceptance criteria:**
- [ ] Tab bar renders all 4 tabs; active tab is visually distinct
- [ ] Tab switching shows correct plan card
- [ ] All 3 plan cards render with correct content from dump
- [ ] Feature rows show lightning bolt icon + text
- [ ] "Get a quote" button matches dump styles
- [ ] "Plan details" expand/collapse works
- [ ] Responsive layout correct at all 3 breakpoints
- [ ] No framerusercontent.com URLs in code

**Verification:**
- [ ] `npm run typecheck` — zero errors
- [ ] Visual QA: all tabs functional, cards match dump at 1440/900/375px

**Dependencies:** Task 0

**Files touched:**
- `src/sections/PricingCardsSection.tsx` (new)
- `src/styles/pricing-cards.css` (new)
- `src/pages/Plans.tsx` (add import)
- `public/images/` (downloaded images)

**Estimated scope:** L (most complex section)

---

### Checkpoint: Phase 2
- [ ] All plan cards render with correct content
- [ ] Tabs functional
- [ ] Typecheck passes

---

### Phase 3: Award Badges + Social Proof

#### Task 3: AwardBadgesSection — badges row

**Description:** Build `AwardBadgesSection.tsx` from dump section `Badges` + `Logos` (~320742 offset). Shows 4 award badge images (Inc. 5000 and similar) in a centered row. Download all 4 badge images. Extract padding, gap, background from dump.

**Badge images to download:**
- `UvuEmCZRD32TNHj0xcM8PGoaUCY.png` (185×212)
- `vILe5yxwQ9DXHQDVdLXPfGTrZ24.png` (185×212)
- `NSPVashxw6fHvl35aq6ygSlt0M.png` (185×212)
- `pHFbE0t6NCRlMemB6vFIh2I6ypg.png` (185×212)

**Acceptance criteria:**
- [ ] All 4 badges visible at correct dimensions
- [ ] Section background and padding match dump
- [ ] Responsive: wraps correctly on mobile
- [ ] No CDN URLs in code

**Verification:**
- [ ] `npm run typecheck` — zero errors
- [ ] Visual QA at 1440px and 375px

**Dependencies:** Task 0

**Files touched:**
- `src/sections/AwardBadgesSection.tsx` (new)
- `src/pages/Plans.tsx` (add import)
- `public/images/badge-*.png` (4 downloaded)

**Estimated scope:** S

---

### Phase 4: Shared Components Update

#### Task 4: Make CTASection props-driven

**Description:** Add optional `headline?: string` and `buttonText?: string` props to `CTASection.tsx`. Default values preserve existing home page behavior exactly. Plans page passes: headline = "Learn to grow revenue with the #1 AI Employee for Home Services." and buttonText = "Watch a demo". Verify home page still renders correctly after change.

**Acceptance criteria:**
- [ ] Home page CTA unchanged visually
- [ ] Plans page CTA shows correct headline and button text
- [ ] TypeScript types are correct (optional props with defaults)
- [ ] `npm run typecheck` passes

**Verification:**
- [ ] `npm run typecheck` — zero errors
- [ ] Home page `/` CTA unchanged
- [ ] Plans page `/plans` CTA correct

**Dependencies:** Task 0

**Files touched:**
- `src/sections/CTASection.tsx` (modified)
- `src/pages/Plans.tsx` (add import)

**Estimated scope:** S

---

#### Task 5: FooterSection — site-wide footer

**Description:** Build `FooterSection.tsx` from `Copyright Bar` section in dump (430692+ offset). Footer has:
- Left: Podium logo
- Nav columns: "Podium Home Services" (Meet Larry, Communications, Calendar & Booking, Marketing Tools, Plans, Contact Sales), "Resources" (Podium Home, Blogs & Guides, Download Podium Apps)
- Social icons: Facebook, Instagram, X/Twitter
- Bottom bar: copyright text + Privacy Policy, Terms, Sitemap, Privacy Center links

Extract all CSS measurements from dump. Create `src/styles/footer.css`. Add FooterSection to both `Home.tsx` and `Plans.tsx`.

**Acceptance criteria:**
- [ ] All nav link columns render with correct labels
- [ ] Social icons render (SVG or downloaded icons)
- [ ] Copyright bar shows correct text + fine print links
- [ ] Responsive layout correct
- [ ] Added to home page without breaking existing sections
- [ ] `npm run typecheck` passes

**Verification:**
- [ ] `npm run typecheck` — zero errors
- [ ] Visual QA on both pages at all 3 breakpoints

**Dependencies:** Task 0

**Files touched:**
- `src/sections/FooterSection.tsx` (new)
- `src/styles/footer.css` (new)
- `src/pages/Home.tsx` (add footer)
- `src/pages/Plans.tsx` (add footer)

**Estimated scope:** M

---

### Checkpoint: Phase 3–4
- [ ] Plans page has all 7 sections visible
- [ ] Home page unchanged (footer added is additive)
- [ ] All TypeScript passes

---

### Phase 5: Full Visual QA + Fixes

#### Task 6: Full visual QA pass — Plans page

**Description:** Open Plans page in browser. Check every section against dump at 1440px, 900px, 375px. Document any mismatches and fix them by tracing values back to dump CSS. Do not eyeball — every fix must cite a dump CSS class name.

**Acceptance criteria:**
- [ ] All sections pass 13-item QA checklist from AGENT_SECTION_PROMPT.md
- [ ] No Framer CDN URLs in network tab
- [ ] No TypeScript errors
- [ ] No console errors

**Verification:**
- [ ] `npm run typecheck` — zero errors
- [ ] `npm run build` — clean build

**Dependencies:** Tasks 1–5

**Files touched:** Various (fix-only)

**Estimated scope:** M

---

### Final Checkpoint
- [ ] `npm run typecheck` — zero errors
- [ ] `npm run build` — zero errors
- [ ] Plans page visually matches dump at all 3 breakpoints
- [ ] Home page unchanged
- [ ] Human review approved

---

## Risks and Mitigations

| Risk | Impact | Mitigation |
|------|--------|------------|
| PricingCardsSection complexity — tab state + 4 plan card variants | High | Build static first (no tabs), then add tab interactivity |
| CTASection props change breaks home page | Med | Add props as optional with defaults; verify home page after change |
| FooterSection SVG icons not found in dump | Med | Fall back to Unicode symbols or simple text if SVG path not extractable |
| react-router-dom version conflict with existing framer-motion | Low | Install latest v6/v7; test immediately |
| Framer testimonials are duplicated in plans dump | Low | Reuse TestimonialsSection.tsx directly — same data confirmed |

## Open Questions

1. **Pricing cards tab behavior:** Should tab switching animate (fade/slide) or snap? Check dump for `@keyframes` on tab panels.
2. **"Get a quote" button:** Does it link to an external URL or open a modal? Extract `href` from dump.
3. **Aesthetics OS + Avery card:** Is this always visible or only on a specific tab? Clarify with user before building tab logic.
4. **Footer on home page:** User to confirm: add FooterSection to home page as part of this work, or defer?
