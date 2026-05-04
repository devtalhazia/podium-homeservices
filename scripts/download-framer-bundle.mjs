/**
 * One-time script: downloads the Framer site bundle and all its chunk dependencies
 * into public/framer/ so the app has no runtime dependency on framerusercontent.com.
 *
 * Usage:
 *   node scripts/download-framer-bundle.mjs
 */

import { mkdir, writeFile, access } from 'node:fs/promises'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')
const OUT_DIR = join(ROOT, 'public', 'framer')

const BASE_URL = 'https://framerusercontent.com/sites/29Km9oXZiVO8oLS5u7fzsF/'
const ENTRY = 'script_main.DemNTj-U.mjs'

// Matches static imports (from "./x.mjs") and dynamic imports (import("./x.mjs") / import(`./x.mjs`))
const IMPORT_RE = /[`'"](\.\/[^`'"]+\.mjs)[`'"]/g

async function exists(path) {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

async function downloadChunk(filename, queue, seen) {
  if (seen.has(filename)) return
  seen.add(filename)

  const url = BASE_URL + filename
  const dest = join(OUT_DIR, filename)

  if (await exists(dest)) {
    console.log(`  skip (cached)  ${filename}`)
  } else {
    process.stdout.write(`  downloading   ${filename} ... `)
    const res = await fetch(url)
    if (!res.ok) {
      console.log(`FAILED (${res.status})`)
      return
    }
    const text = await res.text()
    await writeFile(dest, text, 'utf8')
    console.log('done')

    // Discover further relative imports in this chunk
    for (const match of text.matchAll(IMPORT_RE)) {
      const dep = match[1].replace('./', '')
      if (!seen.has(dep)) queue.push(dep)
    }
  }

  // Even for cached files, scan for undiscovered deps
  if (await exists(dest)) {
    const { readFile } = await import('node:fs/promises')
    const text = await readFile(dest, 'utf8')
    for (const match of text.matchAll(IMPORT_RE)) {
      const dep = match[1].replace('./', '')
      if (!seen.has(dep)) queue.push(dep)
    }
  }
}

async function main() {
  await mkdir(OUT_DIR, { recursive: true })
  console.log(`Downloading Framer bundle to public/framer/\n`)

  const seen = new Set()
  const queue = [ENTRY]

  while (queue.length > 0) {
    const filename = queue.shift()
    await downloadChunk(filename, queue, seen)
  }

  console.log(`\nDone. ${seen.size} files in public/framer/`)
  console.log(`\nNext step: update framerScripts.ts src to "/framer/${ENTRY}"`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
