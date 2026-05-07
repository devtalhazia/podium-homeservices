import { useState } from 'react'
import '../styles/faq.css'

/* ── Colors ── */
const INK       = '#1c1b18'
const INK_SOFT  = '#4e4a44'
const DIVIDER   = 'rgb(233, 225, 216)'
const ICON_CLR  = 'rgb(78, 97, 118)'
const CRIMSON   = 'rgb(157, 64, 60)'

/* ── FAQ data (source: dump/homeservices.podium.com/index.html, SSR + live site) ── */
interface FaqItem {
  question: string
  answer: JSX.Element
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How difficult is it to switch to Podium from another scheduling software?',
    answer: (
      <>
        <p style={{ margin: '0 0 20px' }}>
          Podium's onboarding team aims to have you up and running in days, not months. Our
          onboarding team makes the transition as smooth as possible:
        </p>
        <ul style={{ margin: '0 0 20px', paddingLeft: '1.2em' }}>
          <li>White-glove onboarding within 48 hours of signing</li>
          <li>Dedicated team to answer questions</li>
          <li>Data migration (customers, jobs, history, etc.)</li>
          <li>We test and refine your AI Employee until it reflects your business</li>
          <li>Staff training for your entire team</li>
        </ul>
        <p style={{ margin: 0 }}>
          Our goal is to minimize disruption so your business stays up and running during the
          change.{' '}
          <a
            href="/demo"
            style={{
              color: CRIMSON,
              textDecoration: 'underline',
              textDecorationColor: 'rgb(226, 198, 196)',
              textDecorationThickness: '2px',
              textUnderlineOffset: '1px',
              fontWeight: 700,
            }}
          >
            Book a meeting today to learn more.
          </a>
        </p>
      </>
    ),
  },
]

/* ── Plus/Minus icon (28×28, lines are 2×12 px, color rgb(78,97,118)) ── */
function AccordionIcon({ open }: { open: boolean }) {
  return (
    <button
      aria-hidden="true"
      style={{
        width: 28,
        height: 28,
        borderRadius: 100,
        flexShrink: 0,
        position: 'relative',
        cursor: 'pointer',
        background: 'none',
        border: 'none',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Horizontal line (always visible) */}
      <span
        style={{
          position: 'absolute',
          top: 'calc(50% - 1px)',
          left: 'calc(50% - 6px)',
          width: 12,
          height: 2,
          backgroundColor: ICON_CLR,
          borderRadius: 1,
        }}
      />
      {/* Vertical line (hidden when open) */}
      {!open && (
        <span
          style={{
            position: 'absolute',
            top: 'calc(50% - 6px)',
            left: 'calc(50% - 1px)',
            width: 2,
            height: 12,
            backgroundColor: ICON_CLR,
            borderRadius: 1,
          }}
        />
      )}
    </button>
  )
}

/* ── Single accordion item ── */
function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(true)

  return (
    <div
      style={{
        width: '100%',
        padding: '32px 0',
        borderTop: `1px solid ${DIVIDER}`,
        display: 'flex',
        flexDirection: 'column',
        gap: open ? 32 : 0,
        cursor: 'pointer',
        overflow: 'hidden',
      }}
    >
      {/* Question row */}
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(o => !o)}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          width: '100%',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        <h6
          style={{
            margin: 0,
            flex: '1 0 0',
            maxWidth: 840,
            fontFamily: '"Grenette SemiBold", "Grenette SemiBold Placeholder", sans-serif',
            fontSize: 24,
            fontWeight: 600,
            lineHeight: '120%',
            letterSpacing: 0,
            color: INK,
            userSelect: 'none',
          }}
        >
          {item.question}
        </h6>
        <AccordionIcon open={open} />
      </div>

      {/* Answer */}
      {open && (
        <div
          style={{
            display: 'flex',
            width: '100%',
          }}
        >
          <div
            style={{
              flex: '1 0 0',
              maxWidth: '88%',
              fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: 0,
              color: INK_SOFT,
            }}
          >
            {item.answer}
          </div>
        </div>
      )}
    </div>
  )
}

/* ── Main component ── */
export default function FAQSection() {
  return (
    <section
      id="faq"
      className="faq-section"
      style={{
        backgroundColor: '#fff',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 0,
        width: '100%',
        minWidth: 1200,
        padding: '80px',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* Heading */}
      <div
        className="faq-heading-wrap"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 16,
          width: '100%',
          padding: '0 0 16px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            width: 1080,
            maxWidth: '100%',
          }}
        >
          <h3
            className="faq-heading"
            style={{
              margin: 0,
              width: '100%',
              fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
              fontSize: 40,
              fontWeight: 400,
              lineHeight: '120%',
              letterSpacing: 0,
              color: INK,
              textAlign: 'center',
            }}
          >
            Frequently Asked Questions
          </h3>
        </div>
      </div>

      {/* List area */}
      <div
        className="faq-list-area"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 72,
          width: '100%',
          maxWidth: 1440,
        }}
      >
        {/* Accordion list */}
        <div
          className="faq-list"
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: 0,
            width: '83%',
            maxWidth: 925,
          }}
        >
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
