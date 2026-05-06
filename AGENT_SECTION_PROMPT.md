# Agent Prompt: Build a New Section

Copy this prompt verbatim and fill in Integrations (logo grid) before sending to an agent.

---

## Prompt

You are building a pixel-perfect React section for a marketing landing page. The site is a React 18 + Vite + TypeScript + Tailwind CSS rebuild of homeservices.podium.com. Zero Framer runtime dependencies.

**Section to build:** Integrations (logo grid)
(e.g., "Solution", "Testimonials", "FAQ", "CTA", "Footer")

---

### Project context

- Working directory: `/Users/dev/Documents/Projects/podium-homeservices`
- Source of truth for all measurements: `dump/homeservices.podium.com/index.html` (786 KB Framer SSR HTML — this is the authoritative reference, do not guess any value)
- Fonts declared in `src/styles/globals.css` via `@font-face`, files in `public/fonts/`
- Tailwind named colors: `nav`, `ink`, `cream`, `crimson`. Named fonts: `graphik`, `grenette`, `editors-note`, `fragment-mono`
- Breakpoints: `tablet` = 768 px, `desktop` = 1200 px
- Images must be downloaded to `public/images/` — never reference Framer CDN URLs in component code
- Already built: `NavSection.tsx`, `HeroSection.tsx`
- Sections are registered in `src/pages/Home.tsx` — insert the new section in the correct order after building it

Read `SECTION_BUILD_PROCEDURE.md` in the project root before doing anything else. That document is your mandatory process. Follow every step in exact order.

---

### Mandatory steps (enforced — do not skip any)

**STEP 1 — Locate the section in the dump.**
Open `dump/homeservices.podium.com/index.html`. Search for `data-framer-name="Page Section/[SECTION_NAME]"`. If unsure of exact name, search for unique visible text and walk up the DOM to find the `data-framer-name` ancestor. Record the outer element tag, all CSS classes, and all direct children class lists.

**STEP 2 — Extract every layout measurement.**
For each element (outer container, every child, every text block, every button, every image), find its `.framer-XXXXXX` CSS rule in the `<style>` block. Record: `padding`, `gap`, `width`, `max-width`, `min-width`, `height`, `background-color`, `border-radius`, `align-items`, `justify-content`, `flex-direction`, `position`, `z-index`. Do not guess. Do not approximate. Every value traces to a line in the dump.

**STEP 3 — Extract every typography value.**
For each text element find its `--framer-font-family`, `--framer-font-size`, `--framer-font-weight`, `--framer-line-height`, `--framer-text-color`, `--framer-text-alignment`, `--framer-letter-spacing` CSS variables. Map to React inline style props.

**STEP 4 — Extract and download every image.**
Find all `<img src="https://framerusercontent.com/images/...">` in the section. Download each with:
```bash
curl -L "https://framerusercontent.com/images/<hash>.<ext>" -o "public/images/<semantic-name>.<ext>"
```
Note Framer query params (`?width=N`) — use those as the rendered dimensions in your component. If the image is transparent-background on a dark background, note it may need `filter: brightness(0) invert(1)`.

**STEP 5 — Extract inline SVGs.**
If any element uses `<svg>` or `<use href="#svg...">`, find the full `<svg id="svgXXX">` definition (often far down in the HTML). Copy every `<path d="...">` verbatim — never approximate path data. Build a React functional component for each SVG.

**STEP 6 — Extract animation rules.**
Find `@keyframes` in `<style>` that apply to this section's elements. Copy the keyframe block verbatim. Note the `animation:` shorthand (name, duration, timing, iteration). Note hover states (`animation-play-state: paused`). Skip `data-framer-appear-id` scroll animations for now.

**STEP 7 — Extract responsive overrides.**
Search `<style>` for media queries targeting your section's Framer class names. Map Framer's breakpoints (≤809px, 810–1199px) to this project's breakpoints (≤767px mobile, 768–1199px tablet). Use `!important` in overrides to beat inline styles.

**STEP 8 — Create `src/styles/[section-name].css`.**
Order: comment header → tablet overrides → mobile overrides → `@keyframes` → animation classes → hover/interaction classes. Use `!important` only on responsive overrides.

**STEP 9 — Create `src/sections/[SectionName]Section.tsx`.**
Structure order in file: CSS import → constants → inline SVG sub-components → repeating list sub-components → main exported component. Rules:
- Desktop measurements in `style={{}}` inline
- Responsive overrides via `className` + CSS file
- Every number matches the extracted dump value exactly
- Font families quoted exactly as in `@font-face` declarations
- Infinite marquees: duplicate list items twice; animate `translateX(-50%)`
- Mask fades: set both `-webkit-mask-image` and `mask-image`
- Hover: `onMouseEnter`/`onMouseLeave` for opacity, or pure CSS class

**STEP 10 — Accessibility minimums.**
Decorative images: `alt=""`. Meaningful images: descriptive `alt`. Animated tickers: `aria-label` on wrapper, `aria-hidden="true"` on duplicate track. Decorative SVGs: `aria-hidden="true"`. Interactive elements: pointer cursor and focus-visible ring.

**STEP 11 — Wire into `src/pages/Home.tsx`.**
Add import and JSX in the correct page order. Do not break existing sections.

**STEP 12 — TypeScript check.**
```bash
npm run typecheck
```
Zero errors required. Fix all errors before proceeding.

**STEP 13 — Visual QA checklist.**
Start `npm run dev` if not running. Check every item:
- Outer padding matches dump
- Gap between children matches dump
- Max-width correct
- Alignment correct
- Font family/size/weight/line-height/color correct (verify in browser DevTools Computed panel)
- All images visible at correct dimensions with correct `object-fit`
- All opacities match
- Animations loop seamlessly at correct speed
- Hover states work
- Cursor is `pointer` on interactive elements
- Mobile layout correct at 767 px
- Tablet layout correct at 900 px
- Desktop layout correct at 1440 px

**STEP 14 — Fix discrepancies.**
Any mismatch: go back to the dump and re-extract the value. No eye-balling. No arbitrary adjustments. Every value must trace to the dump.

**STEP 15 — Report completion.**
State which files were created/modified, confirm TypeScript passes, and list any elements that could not be exactly matched (e.g., Framer animation that requires runtime JS) with the reason.

---

### What NOT to do

- Do not hotlink `framerusercontent.com` URLs in component code
- Do not guess any measurement — every value must come from the dump
- Do not use Framer CSS class names in your React component
- Do not skip the TypeScript check
- Do not commit if TypeScript errors exist
- Do not add features, abstractions, or utilities beyond what the section requires
- Do not touch `NavSection.tsx` or `HeroSection.tsx` unless explicitly fixing a cross-section spacing issue
