/**
 * One-time script: extracts each named section from the monolithic homePageHTML.ts
 * using sequential boundary slicing — no gaps, no overlaps, exact reconstruction.
 *
 * Usage:
 *   node scripts/extract-sections.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const raw = readFileSync(join(ROOT, 'src/data/homePageHTML.ts'), 'utf8')
// The full HTML is on line 11 (index 10)
const html = raw.split('\n')[10]

/**
 * Given a unique marker string that appears inside the opening tag of a section,
 * walk backwards to find the start of that opening `<div` tag.
 */
function findTagStart(html, marker) {
  const idx = html.indexOf(marker)
  if (idx === -1) throw new Error(`Marker not found: ${marker}`)
  let i = idx
  while (i > 0 && html[i] !== '<') i--
  return i
}

/**
 * Find the end of a balanced <div>...</div> subtree starting at tagStart.
 */
function findBalancedEnd(html, tagStart) {
  const selfClosing = new Set(['area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'])
  let depth = 0
  let i = tagStart

  while (i < html.length) {
    if (html[i] !== '<') { i++; continue }

    if (html[i + 1] === '/') {
      // closing tag
      const m = html.slice(i).match(/^<\/([a-zA-Z][a-zA-Z0-9]*)>/)
      if (m) {
        const tag = m[1].toLowerCase()
        if (!selfClosing.has(tag)) {
          depth--
          if (depth === 0) return i + m[0].length
        }
      }
      i++; continue
    }

    // opening tag
    const m = html.slice(i).match(/^<([a-zA-Z][a-zA-Z0-9]*)/)
    if (m) {
      const tag = m[1].toLowerCase()
      if (!selfClosing.has(tag)) {
        const gtIdx = html.indexOf('>', i)
        const tagContent = html.slice(i, gtIdx + 1)
        if (!tagContent.endsWith('/>')) depth++
      }
    }
    i++
  }
  throw new Error(`Could not find balanced end starting at ${tagStart}`)
}

// ─── Section definitions ─────────────────────────────────────────────────────
// Each entry has a unique marker string that appears in the section's outermost
// opening tag. Sections are ordered as they appear on the page.
// testimonials-cards is nested INSIDE testimonials — not a separate top-level slice.
const SECTION_MARKERS = [
  { name: 'hero',           marker: 'id="hero-react-mount"' },
  { name: 'solution',       marker: 'id="solution"'          },
  { name: 'integrations',   marker: 'data-framer-name="Integrations"' },
  { name: 'testimonials',   marker: 'id="testimonials"'      },
  { name: 'communications', marker: 'id="communications"'    },
  { name: 'marketing',      marker: 'id="marketing"'         },
  { name: 'cta',            marker: 'id="cta"'               },
  { name: 'faq',            marker: 'id="faq"'               },
]

// Find the start position of each section's opening tag
const sectionBoundaries = SECTION_MARKERS.map(({ name, marker }) => ({
  name,
  marker,
  pos: findTagStart(html, marker),
})).sort((a, b) => a.pos - b.pos)

// shellOpen = everything before the first section
const shellOpen = html.slice(0, sectionBoundaries[0].pos)

// Find the balanced end of the last section (faq)
const lastSection = sectionBoundaries[sectionBoundaries.length - 1]
const lastSectionEnd = findBalancedEnd(html, lastSection.pos)

// shellClose = everything after the last section
const shellClose = html.slice(lastSectionEnd)

// Slice each section: from its start to the next section's start
// (last section: from its start to its balanced end)
const sections = sectionBoundaries.map((s, i) => {
  const start = s.pos
  const end = i + 1 < sectionBoundaries.length
    ? sectionBoundaries[i + 1].pos
    : lastSectionEnd
  return { name: s.name, chunk: html.slice(start, end) }
})

// ─── Verify reconstruction ────────────────────────────────────────────────────
const reconstructed = shellOpen + sections.map(s => s.chunk).join('') + shellClose
if (reconstructed !== html) {
  const i = [...html].findIndex((c, j) => c !== reconstructed[j])
  console.error(`✗ Reconstruction mismatch at char ${i}`)
  console.error('  original:      ', JSON.stringify(html.slice(i, i + 80)))
  console.error('  reconstructed: ', JSON.stringify(reconstructed.slice(i, i + 80)))
  process.exit(1)
}
console.log('✓ Reconstruction matches original HTML exactly\n')

// ─── Write output files ───────────────────────────────────────────────────────
const OUT = join(ROOT, 'src/data/sections')
mkdirSync(OUT, { recursive: true })

const write = (filename, varName, value) =>
  writeFileSync(
    join(OUT, filename),
    `// Auto-extracted by scripts/extract-sections.mjs\nconst ${varName} = ${JSON.stringify(value)}\nexport default ${varName}\n`,
  )

write('shellOpen.ts',  'shellOpen',  shellOpen)
write('shellClose.ts', 'shellClose', shellClose)

console.log('Sections:')
for (const { name, chunk } of sections) {
  write(`${name}.ts`, `${name}HTML`, chunk)
  console.log(`  ✓ ${name}.ts  (${(chunk.length / 1024).toFixed(1)} KB)`)
}

console.log('\nDone.')
