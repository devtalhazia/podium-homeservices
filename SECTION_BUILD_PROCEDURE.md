# Section Build Procedure

This document is the mandatory step-by-step process for building every new React section in this project. Follow every step in exact order. No skipping.

---

## Context You Must Know First

- Source of truth: `dump/homeservices.podium.com/index.html` (786 KB Framer SSR HTML)
- React stack: React 18 + Vite + TypeScript + Tailwind CSS — zero Framer runtime dependencies
- Fonts live in `public/fonts/`, declared in `src/styles/globals.css` with `@font-face`
- Design tokens: Tailwind config has named colors (`nav`, `ink`, `cream`, `crimson`) and font families (`graphik`, `grenette`, `editors-note`, `fragment-mono`)
- Breakpoints: `tablet` = 768 px, `desktop` = 1200 px
- All images must be downloaded to `public/images/` — never hotlink Framer CDN in production
- Completed sections: `NavSection.tsx`, `HeroSection.tsx`
- Sections are registered in `src/pages/Home.tsx` — add each new section there after building

---

## Step 1 — Identify the Section in the Framer Dump

Open `dump/homeservices.podium.com/index.html`.

Search for the section by `data-framer-name`. Examples:
```
data-framer-name="Page Section/Hero"
data-framer-name="Page Section/Solution"
data-framer-name="Page Section/Testimonials"
```

If you are unsure of the exact name, search for a unique string of visible text from the reference site (e.g., a heading or label), then walk up the DOM tree until you find the nearest ancestor with `data-framer-name`.

**Record:**
- The outer element's HTML tag and all its CSS classes
- The `data-framer-name` value (this is the section identifier)
- The full CSS class list on every direct child

---

## Step 2 — Extract Layout Measurements

For the outer section element, find its CSS rule in the `<style>` block or inline. Extract:

| Property | Where to find it |
|---|---|
| `padding` | `.framer-XXXXXX` class in `<style>` |
| `gap` | same class |
| `width` / `max-width` | same class |
| `background-color` | same class or inline style |
| `align-items` / `justify-content` | same class |
| `flex-direction` | same class |

Repeat this for **every descendant element** — text blocks, images, buttons, cards, icons, dividers. Do not guess any value. Every pixel must come from the dump.

---

## Step 3 — Extract Typography

For every text element, find its Framer CSS variable overrides. They look like:
```css
--framer-font-family: "Grenette Regular", ...;
--framer-font-size: 52px;
--framer-font-weight: 400;
--framer-line-height: 1.1;
--framer-text-color: rgb(255, 255, 255);
--framer-text-alignment: center;
```

These are on `.framer-text` children of `.framer-XXXXXX` containers. Map each variable to its React inline style equivalent:

| Framer variable | React style prop |
|---|---|
| `--framer-font-family` | `fontFamily` |
| `--framer-font-size` | `fontSize` |
| `--framer-font-weight` | `fontWeight` |
| `--framer-line-height` | `lineHeight` |
| `--framer-text-color` | `color` |
| `--framer-text-alignment` | `textAlign` |
| `--framer-letter-spacing` | `letterSpacing` |

---

## Step 4 — Extract Images and Download Them

Find every `<img src="https://framerusercontent.com/images/...">` inside the section.

For each image:
1. Note the filename hash (e.g., `Hu5BAg5Lavoaz4kD3R8hRqHxcs.png`)
2. Choose a semantic local name (e.g., `hero-bg.png`, `logo-trouth.png`)
3. Download to `public/images/`:
   ```bash
   curl -L "https://framerusercontent.com/images/<hash>.<ext>" -o "public/images/<semantic-name>.<ext>"
   ```
4. Note any Framer query params (`?width=N`, `?scale-down-to=N`) — they indicate the intended render size. Use those dimensions in your React code.
5. Check: if the image has transparent background and will appear on a dark background, it may need `filter: brightness(0) invert(1)` — verify visually.

---

## Step 5 — Extract Inline SVGs

If any element is an inline SVG (no `<img>` tag — just `<svg>` or `<use href="#svg...">` elements):

1. Search the dump for the `<svg id="svg...">` definition that the `<use>` references
2. Copy the full `<path d="...">` data verbatim — never approximate
3. Record the SVG `viewBox`, `width`, `height`
4. Check fill colors — Framer SVGs often use `#DCDCE1` or CSS variables
5. Build a React functional component that returns the exact `<svg>` with all paths

If the SVG uses `<use href="#svgXXX">`, the definition `<svg id="svgXXX">` is usually far down in the HTML (search for it by ID). Copy the `<defs>` content and paths into your component.

---

## Step 6 — Extract Animation / Interaction Rules

Check if any child element has:
- `@keyframes` definitions in the `<style>` block
- `animation:` or `transition:` inline styles
- `data-framer-appear-id` (Framer scroll-into-view animation) — skip these for now, implement only CSS animations

For CSS animations (marquees, spinners, pulses):
1. Copy the `@keyframes` block verbatim into the section's dedicated CSS file (`src/styles/<section-name>.css`)
2. Copy the animation shorthand: `animation: name duration timing-function iteration-count`
3. Copy hover/focus state overrides (`animation-play-state: paused`, etc.)

---

## Step 7 — Extract Responsive Overrides

Framer generates media query blocks. Search `<style>` for breakpoint rules that target your section's classes:

```css
@media (max-width: 809px) { .framer-XXXXXX { ... } }
@media (min-width: 810px) and (max-width: 1199px) { .framer-XXXXXX { ... } }
```

Map these to semantic class names using `!important` overrides in your CSS file:
```css
/* Tablet (768–1199px) */
@media (min-width: 768px) and (max-width: 1199px) {
  .my-section { padding: Xpx !important; }
}
/* Mobile (<768px) */
@media (max-width: 767px) {
  .my-section { padding: Ypx !important; }
}
```

Note: Framer uses its own breakpoints (809px boundary for its "tablet"). Map them to your project's breakpoints (768px) and verify the result is visually close.

---

## Step 8 — Create the CSS File

Create `src/styles/<section-name>.css`.

Structure it in this order:
1. Comment header: `/* ── <Section Name> responsive layout ── */`
2. Tablet breakpoint overrides
3. Mobile breakpoint overrides
4. `@keyframes` definitions (if any)
5. Animation utility classes
6. Hover/interaction state classes

Use `!important` only on responsive overrides (needed to beat inline styles). Do not use `!important` on base styles.

---

## Step 9 — Build the React Component

Create `src/sections/<SectionName>Section.tsx`.

Structure:
```tsx
import '../styles/<section-name>.css'

// 1. Constants (URLs, etc.)
const SOME_URL = '...'

// 2. Inline SVG sub-components (if any)
const MySvgIcon = () => (
  <svg ...>...</svg>
)

// 3. Repeated list items sub-component (if any)
function ListItems() {
  return (
    <>
      <li>...</li>
    </>
  )
}

// 4. Main section component
export default function <SectionName>Section() {
  return (
    <section className="my-section" style={{ /* desktop layout */ }}>
      {/* ... */}
    </section>
  )
}
```

**Rules:**
- Desktop measurements go in `style={{}}` inline
- Responsive overrides go in the CSS file via className
- Every numeric value must match the extracted Framer measurements exactly
- Font families must be quoted exactly as declared in `@font-face` in `globals.css`
- For infinite-loop marquees: duplicate the list items twice in JSX; animate with `translateX(-50%)`
- For mask-image edge fades: apply both `-webkit-mask-image` and `mask-image`
- Hover effects: use `onMouseEnter` / `onMouseLeave` for opacity changes, or pure CSS on className

---

## Step 10 — Implement Accessibility Minimums

- Decorative images: `alt=""`
- Meaningful images: `alt="<description>"`
- Animated ticker: add `aria-label="Trusted by"` on the wrapper, `aria-hidden="true"` on the inner `<ul>` (the duplicate track)
- Interactive elements (buttons, links): visible focus style or `focus-visible` ring
- SVGs that are decorative: `aria-hidden="true"`

---

## Step 11 — Wire Into Home.tsx

Open `src/pages/Home.tsx` and add the import and component:

```tsx
import <SectionName>Section from '../sections/<SectionName>Section'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcfc]">
      <NavSection />
      <HeroSection />
      <<SectionName>Section />
      {/* sections added here one by one */}
    </div>
  )
}
```

---

## Step 12 — Run TypeScript Check

```bash
npm run typecheck
```

Zero errors required before proceeding. Fix any type error before the next step.

---

## Step 13 — Visual QA in Browser

1. Start the dev server if not running: `npm run dev`
2. Open the section in the browser
3. Check each of the following against the reference site:

**Layout**
- [ ] Outer padding matches
- [ ] Gap between children matches
- [ ] Max-width constraint is correct
- [ ] Alignment (center, flex-start, etc.) matches

**Typography**
- [ ] Font family correct (check DevTools → Computed → font-family)
- [ ] Font size, weight, line-height correct
- [ ] Text color correct
- [ ] Text alignment correct

**Images / Logos**
- [ ] Image visible (not invisible/dark on background)
- [ ] Image dimensions (width × height) match spec
- [ ] `object-fit` matches (`contain` vs `cover`)
- [ ] Opacity matches

**Animation (if any)**
- [ ] Marquee loops seamlessly (no jump)
- [ ] Animation speed matches reference
- [ ] Hover pauses animation

**Interactive states**
- [ ] Hover state on buttons (opacity change)
- [ ] Cursor is `pointer` on clickable elements

**Responsive**
- [ ] Resize browser to 767px — mobile layout applies
- [ ] Resize to 900px — tablet layout applies
- [ ] Resize to 1440px — desktop layout applies

---

## Step 14 — Fix Any Discrepancy

If visual QA reveals a mismatch, go back to the Framer dump and re-extract the value. Do not adjust values by eye — every value must trace back to a number in the dump or a deliberate design decision documented in a code comment.

Common issues and fixes:

| Issue | Fix |
|---|---|
| PNG logo invisible on dark background | Add `filter: brightness(0) invert(1)` |
| Font not rendering | Check `@font-face` src path in globals.css |
| Marquee jumps at loop point | Ensure list duplicated exactly twice; animation is `translateX(-50%)` |
| Animation too fast/slow | Adjust `Xs linear infinite` duration |
| Padding wrong on mobile | Check media query breakpoint; add CSS override with `!important` |

---

## Step 15 — Commit

Only commit after TypeScript passes and visual QA passes. Do not commit placeholder values.

---

## Reference: Completed Sections

| Section | File | Notes |
|---|---|---|
| Nav | `src/sections/NavSection.tsx` | Desktop + mobile drawer, dropdown, sticky |
| Hero | `src/sections/HeroSection.tsx` | BG image, H1, CTA, video placeholder, logo marquee ticker |

## Reference: Section Build Order

1. Video section (embedded in Hero or separate)
2. Quote / pull-quote section
3. Solution (accordion)
4. Integrations (logo grid)
5. Testimonials (customer story cards)
6. Communications (JTBD side-by-side + stats)
7. Marketing (JTBD side-by-side)
8. CTA section
9. FAQ (accordion with useState)
10. Footer
