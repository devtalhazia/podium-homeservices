/**
 * Downloads all framerusercontent.com/images/* referenced in the dump HTML.
 * Saves to public/images/<original-filename>
 * Usage: node scripts/download-images.mjs
 */

import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT = join(ROOT, 'public', 'images')
mkdirSync(OUT, { recursive: true })

const html = readFileSync(
  join(ROOT, 'dump/homeservices.podium.com/index.html'),
  'utf8'
)

const re = /https:\/\/framerusercontent\.com\/images\/([A-Za-z0-9_\-]+\.(?:png|jpg|jpeg|svg|webp|gif))/g
const filenames = new Set()
let m
while ((m = re.exec(html)) !== null) filenames.add(m[1])

console.log(`Downloading ${filenames.size} images to public/images/\n`)

let ok = 0, fail = 0
for (const name of [...filenames].sort()) {
  const url = `https://framerusercontent.com/images/${name}`
  const dest = join(OUT, name)
  process.stdout.write(`  ${name} ... `)
  try {
    const res = await fetch(url)
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    const buf = Buffer.from(await res.arrayBuffer())
    writeFileSync(dest, buf)
    console.log(`✓ ${(buf.length / 1024).toFixed(0)}KB`)
    ok++
  } catch (e) {
    console.log(`✗ ${e.message}`)
    fail++
  }
}

console.log(`\nDone. ${ok} OK, ${fail} failed.`)
