import { useEffect, useRef } from 'react'
import framerScripts from '../data/framerScripts'

// Page shell — outer wrapper divs that enclose all sections
import shellOpen from '../data/sections/shellOpen'
import shellClose from '../data/sections/shellClose'

// ─── Sections (in page order) ────────────────────────────────────────────────
import heroHTML from '../data/sections/hero'               // Hero (Framer React mount)
import solutionHTML from '../data/sections/solution'       // Page Section / Accordion
import integrationsHTML from '../data/sections/integrations' // Integrations
import testimonialsHTML from '../data/sections/testimonials' // Customer Testimonials
import communicationsHTML from '../data/sections/communications' // Larry JTBD — Comms
import marketingHTML from '../data/sections/marketing'     // Larry JTBD — Marketing
import ctaHTML from '../data/sections/cta'                 // CTA
import faqHTML from '../data/sections/faq'                 // Page Section / FAQ-WIP

/** Concatenated in page order — identical to the original homePageHTML string */
const pageHTML =
  shellOpen +
  heroHTML +
  solutionHTML +
  integrationsHTML +
  testimonialsHTML +
  communicationsHTML +
  marketingHTML +
  ctaHTML +
  faqHTML +
  shellClose

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null)
  const injectedRef = useRef(false)

  useEffect(() => {
    if (injectedRef.current) return
    if (!containerRef.current) return
    injectedRef.current = true

    const container = containerRef.current

    // Inject scripts in original document order. dangerouslySetInnerHTML doesn't
    // execute scripts, so recreate them via document.createElement.
    framerScripts.forEach(({ attrs, inner }) => {
      const script = document.createElement('script')
      Object.entries(attrs).forEach(([name, val]) => {
        if (val === true) {
          script.setAttribute(name, '')
        } else if (typeof val === 'string') {
          script.setAttribute(name, val)
        }
      })
      if (inner) {
        script.text = inner
      }
      // Framer data scripts must be inside the container so the setup script
      // can find them via getElementById(). All others go to <head>.
      const targetParent =
        attrs.id && String(attrs.id).startsWith('__framer__')
          ? container
          : document.head
      targetParent.appendChild(script)
    })
  }, [])

  return (
    <div
      ref={containerRef}
      // biome-ignore lint: intentional — Framer SSR output
      dangerouslySetInnerHTML={{ __html: pageHTML }}
    />
  )
}
