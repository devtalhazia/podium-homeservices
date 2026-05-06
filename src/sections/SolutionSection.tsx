import { useState, useEffect, useRef } from 'react'
import '../styles/solution.css'

const ITEM_DURATION = 5000

const ITEMS = [
  {
    title: 'Never misses a lead',
    body: 'Larry responds to every lead in less than a minute, whether over the phone, text, paid channels, or webchat using situation-specific talk tracks right in your Podium Inbox, with updates reflected in your FSM.',
  },
  {
    title: 'Books without oversight',
    body: "Larry AI books directly into your calendar system with a deep understanding of your team and business. He knows each tech's location and availability so you can eliminate the dispatch back-and-forth.",
  },
  {
    title: 'Every lead in one platform',
    body: 'Podium brings customer context, including messages, contact information and transactions together in one platform and connects to your scheduling system so Larry and your employees are on the same page.',
  },
  {
    title: 'Re-engages customers',
    body: 'Larry proactively reaches out to schedule maintenance, handles follow-up, renews memberships, keeping your calendar full, even during the slow season.',
  },
  {
    title: 'Eliminates admin work',
    body: 'Larry helps you maximize customer time by reducing your admin work. He updates customer profiles after booking a job, keeps customers updated on arrival times, and proactively reaches out to leads to set new appointments.',
  },
]

/* ── Chevron SVG (exact path from Framer dump, fill rgb(28,27,24)) ── */
const ChevronDown = () => (
  <svg
    width="24" height="24" viewBox="0 0 24 24" fill="none"
    style={{ display: 'block', width: '100%', height: '100%' }}
    aria-hidden="true"
  >
    <path
      d="M11.9998 14.975C11.8665 14.975 11.7415 14.9542 11.6248 14.9125C11.5081 14.8709 11.3998 14.8 11.2998 14.7L6.6998 10.1C6.51647 9.91672 6.4248 9.68338 6.4248 9.40005C6.4248 9.11672 6.51647 8.88338 6.6998 8.70005C6.88314 8.51672 7.11647 8.42505 7.3998 8.42505C7.68314 8.42505 7.91647 8.51672 8.0998 8.70005L11.9998 12.6L15.8998 8.70005C16.0831 8.51672 16.3165 8.42505 16.5998 8.42505C16.8831 8.42505 17.1165 8.51672 17.2998 8.70005C17.4831 8.88338 17.5748 9.11672 17.5748 9.40005C17.5748 9.68338 17.4831 9.91672 17.2998 10.1L12.6998 14.7C12.5998 14.8 12.4915 14.8709 12.3748 14.9125C12.2581 14.9542 12.1331 14.975 11.9998 14.975Z"
      fill="rgb(28, 27, 24)"
    />
  </svg>
)

interface ItemProps {
  title: string
  body: string
  isActive: boolean
  animKey: number
  onClick: () => void
}

/* ── Single accordion row ── */
function AccordionItem({ title, body, isActive, animKey, onClick }: ItemProps) {
  return (
    /*
     * framer-vzzFx.framer-1xsil0r:
     *   flex-col, gap:16px, padding:var(--phklur)=32px 24px 48px 24px,
     *   width:436px, overflow:hidden, cursor:pointer
     * SAME padding for open and closed — body text conditionally rendered
     */
    <div
      className="solution-item"
      onClick={onClick}
      style={{
        position: 'relative',
        width: '436px',
        cursor: 'pointer',
        padding: '32px 24px 48px 24px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '16px',
        overflow: 'hidden',
        borderBottom: '0.5px solid rgb(132, 124, 115)',
      }}
    >
      {/* ── Progress bar (framer-1onaeuf / framer-yfh2uc) ──
           position:absolute, top:0, left:0, right:0, height:4px, z-index:1
           track: rgb(195,195,200) | fill: rgb(102,126,153)
           fill starts at translateX(-100%) = translateX(-436px), animates to 0 */}
      {isActive && (
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '4px',
          backgroundColor: 'rgb(195, 195, 200)',
          overflow: 'hidden',
          zIndex: 1,
        }}>
          <div
            key={animKey}
            className="solution-progress-bar playing"
            style={{ '--progress-duration': `${ITEM_DURATION}ms` } as React.CSSProperties}
          />
        </div>
      )}

      {/* ── Header row (framer-b5g0r7) ──
           flex:none, flex-row, width:100%, align-items:center */}
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        flexShrink: 0,
      }}>
        {/* framer-1frbfsq: flex:1, flex-row, gap:16px, align-items:center
            Contains title (flex:1) + arrow (24px) */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '16px',
          flex: '1 0 0',
          minWidth: 0,
        }}>
          {/* framer-16hyh15 > framer-1r1o306:
              title container flex:1, inner text width:348px
              math: 436 - 24 - 24 (padding) - 16 (gap) - 24 (arrow) = 348 */}
          <div style={{ flex: '1 0 0', minWidth: 0 }}>
            <h6 style={{
              fontFamily: '"Grenette SemiBold", "Grenette", sans-serif',
              fontWeight: 600,
              fontSize: '20px',
              lineHeight: '150%',
              letterSpacing: '0px',
              color: 'rgb(28, 27, 24)',
              margin: 0,
              width: '348px',
              maxWidth: '100%',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}>
              {title}
            </h6>
          </div>

          {/* framer-vte9ex: arrow 24×24, rotates 180° when open */}
          <div style={{
            width: '24px',
            height: '24px',
            flexShrink: 0,
            transform: isActive ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.2s ease',
          }}>
            <ChevronDown />
          </div>
        </div>
      </div>

      {/* ── Body text (framer-1xuj2qp) ──
           flex:none, width:100%
           Only rendered when active — closed items have compact height */}
      {isActive && (
        <p style={{
          fontFamily: '"Graphik Regular", "Graphik", sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          lineHeight: '150%',
          letterSpacing: '0em',
          color: 'rgb(78, 74, 68)',
          margin: 0,
          width: '100%',
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}>
          {body}
        </p>
      )}
    </div>
  )
}

export default function SolutionSection() {
  const [activeIdx, setActiveIdx] = useState(0)
  const [animKey,   setAnimKey]   = useState(0)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  /* Auto-advance every ITEM_DURATION ms — restarts when active item changes */
  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setActiveIdx(prev => (prev + 1) % ITEMS.length)
      setAnimKey(prev => prev + 1)
    }, ITEM_DURATION)
    return () => { if (timerRef.current) clearTimeout(timerRef.current) }
  }, [activeIdx])

  function handleClick(idx: number) {
    if (idx === activeIdx) return
    if (timerRef.current) clearTimeout(timerRef.current)
    setActiveIdx(idx)
    setAnimKey(prev => prev + 1)
  }

  return (
    /*
     * framer-q4g7c9:
     *   background:#f0f0f3, flex-col, align-items:center,
     *   gap:64px, width:100%, padding:80px, overflow:hidden
     */
    <section
      id="solution"
      className="solution-section"
      style={{
        backgroundColor: 'rgb(240, 240, 243)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '64px',
        width: '100%',
        padding: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Heading block (framer-amti02-container: max-width:1080px, width:100%) ── */}
      <div style={{ maxWidth: '1080px', width: '100%' }}>

        {/* framer-RwRi6.framer-1etrr6s: flex-col, align-items:center, gap:0, padding:0 */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '0',
          width: '100%',
        }}>

          {/* framer-4na7px (Headings/Preheader): flex-col, align-items:center, gap:48px, padding-bottom:24px */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '48px',
            width: '100%',
            paddingBottom: '24px',
          }}>
            <p style={{
              fontFamily: '"Graphik Medium", "Graphik", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '0.1em',
              textAlign: 'center',
              color: 'rgb(98, 98, 101)',
              margin: 0,
            }}>
              Your AI Employee at work
            </p>
          </div>

          {/* framer-18n4kb3 (Heading): flex-col, align-items:center, gap:24px, padding-bottom:16px */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '24px',
            width: '100%',
            paddingBottom: '16px',
          }}>
            <h3
              className="solution-h3"
              style={{
                fontFamily: '"Grenette Regular", "Grenette", sans-serif',
                fontWeight: 400,
                fontSize: '40px',
                lineHeight: '120%',
                letterSpacing: '0px',
                textAlign: 'center',
                color: 'rgb(28, 27, 24)',
                margin: 0,
                width: '100%',
              }}
            >
              Larry is the AI Employee that books more jobs, fills your calendar, and grows revenue
            </h3>
          </div>
        </div>
      </div>

      {/* ── Accordion + Image panel ──
           framer-k3KCg.framer-1q3gnnc: flex-row, gap:30px, width:1080px, align-items:center */}
      <div
        className="solution-layout"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: '30px',
          width: '1080px',
          maxWidth: '100%',
        }}
      >
        {/* Left: text block column
             framer-j8m036: flex:1 0 0, min-width:326px, max-width:460px, padding-right:24px
             Items inside are width:436px — exactly fits within 460px with 24px pad-right */}
        <div
          className="solution-text-block"
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 0',
            minWidth: '326px',
            maxWidth: '460px',
            paddingRight: '24px',
            gap: '0',
            alignItems: 'flex-start',
          }}
        >
          {ITEMS.map((item, idx) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              body={item.body}
              isActive={activeIdx === idx}
              animKey={activeIdx === idx ? animKey : 0}
              onClick={() => handleClick(idx)}
            />
          ))}
        </div>

        {/* Right: image panel
             framer-l6jy3n: flex:1 0 0, aspect-ratio:1.42814
             At 1080px row with 460px text + 30px gap → image = 590px wide → height ≈ 413px
             Placeholder until per-item screenshots are sourced */}
        <div
          className="solution-image-panel"
          style={{
            flex: '1 0 0',
            aspectRatio: '1.42814',
            borderRadius: '16px',
            backgroundColor: 'rgb(216, 216, 222)',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            minWidth: 0,
          }}
        >
          <span style={{
            color: 'rgb(140, 140, 148)',
            fontSize: '13px',
            fontFamily: '"Graphik Regular", "Graphik", sans-serif',
            textAlign: 'center',
            padding: '0 24px',
          }}>
            {ITEMS[activeIdx].title}
          </span>
        </div>
      </div>
    </section>
  )
}
