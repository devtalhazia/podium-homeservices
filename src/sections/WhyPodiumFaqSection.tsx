/**
 * WhyPodiumFaqSection — "Frequently Asked Questions"
 * Source of truth: dump/homeservices.podium.com/why-podium.html  id="faq"
 *
 * Outer section:  framer-ybuwjm
 *   bg: #f4f4f7 (token c5d63241)  padding:80px  flex-col  align-items:center  gap:96px
 *   Tablet (768–1199px):  padding:60px 24px
 *   Mobile (≤767px):      padding:60px 24px
 *
 * Inner wrapper:  framer-lp220m
 *   max-width:1440px  flex-wrap  gap:72px  align-items:flex-start  width:100%
 *
 * List container: framer-dq77sb
 *   flex:1 0 0  max-width:900px  flex-col  gap:64px  align-items:center
 *
 * Heading:        framer-o75xek-container > H3 component
 *   h3 preset-19h1oaz: Grenette Regular 40px 400 110% center  (#1c1b18)
 *   Mobile: 32px
 *
 * FAQ accordion:  framer-l05rzi-container > Smart FAQ component
 *   Container:   display:grid  gap:12px
 *   Article item: bg:#f4f4f7  padding:22px  box-shadow:0 1px 0 rgba(0,0,0,0.04)
 *   Question h3:  Grenette Regular  24px  400  1.25  #18181c  flex:1
 *   Answer p:     Graphik Regular   16px  400  1.5   #4a4a4d  margin-top:16px
 *
 * Note: Only Q1 answer appears in SSR dump (aria-expanded="true").
 * Remaining answers written from product knowledge.
 */

import { useState } from 'react'
import '../styles/why-podium-faq.css'

const SECTION_BG = '#f4f4f7'
const Q_COLOR = '#18181c'
const A_COLOR = '#4a4a4d'

// ─── FAQ data ────────────────────────────────────────────────────────────────

interface FaqItem {
  question: string
  answer: string
}

const FAQS: FaqItem[] = [
  {
    question: 'What is Larry and how does he work for home services businesses?',
    answer:
      'Larry is an AI Employee built specifically for HVAC, plumbing, and electrical businesses. He answers every call, responds to every text and web lead, books jobs directly into your calendar, follows up on estimates, requests reviews, and keeps your membership list moving, 24 hours a day, seven days a week.',
  },
  {
    question: 'How does AI help HVAC businesses answer calls after hours?',
    answer:
      "Larry never sleeps. When your office closes, he keeps working — answering every inbound call, qualifying leads, and booking jobs directly into your field management software. Missed calls are missed revenue. Larry makes sure you capture every opportunity, whether it's 2pm or 2am.",
  },
  {
    question: 'What happens to our customer data when we switch to Podium?',
    answer:
      'Your data moves with you. Our onboarding team handles the migration from your existing software, bringing over customer records, job history, and contacts. We work with your team until everything is set up and verified before you go live.',
  },
  {
    question: 'Will we experience downtime?',
    answer:
      'No. Podium is designed for a smooth, parallel transition. Your team stays live on your current system while we set up Podium. We only cut over when you are fully ready and confident.',
  },
  {
    question: 'Will my team struggle to learn a new system?',
    answer:
      'Most technicians and CSRs are up and running within a day. Podium is built for the field, not for IT teams. Training is included, and you will have a dedicated contact to help your team get comfortable quickly.',
  },
  {
    question:
      'Why does an HVAC business need everything in one platform to get full value from AI?',
    answer:
      'AI only works when it has access to your full business. When calls, texts, reviews, payments, and booking all live in one place, Larry can act on them automatically. Disconnected tools create gaps that no AI can bridge.',
  },
  {
    question: 'How does Podium help HVAC businesses grow memberships?',
    answer:
      'Larry follows up with every customer who is a fit for a membership plan — automatically, at the right time. He identifies the opportunity, sends the message, and books the conversation. Your team focuses on closing; Larry handles the outreach.',
  },
  {
    question: "We've used our current software for years. Why switch now?",
    answer:
      "Your current software wasn't built for AI. Larry can't work his best when he's isolated from your scheduling, payments, and customer history. Contractors who made the switch are booking more, following up faster, and losing fewer leads to competitors who got there first.",
  },
]

// ─── Icons ───────────────────────────────────────────────────────────────────

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      style={{
        flexShrink: 0,
        transition: 'transform 0.25s ease',
        transform: open ? 'rotate(180deg)' : 'rotate(0deg)',
      }}
    >
      <path
        d="M 2 5 L 8 11 L 14 5"
        stroke={Q_COLOR}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// ─── FAQ item ────────────────────────────────────────────────────────────────

function FaqRow({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      role="button"
      aria-expanded={isOpen}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
      style={{
        background: SECTION_BG,
        padding: '22px',
        boxShadow: '0 1px 0 rgba(0, 0, 0, 0.04)',
        cursor: 'pointer',
        userSelect: 'none',
      }}
    >
      {/* Question row */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          justifyContent: 'space-between',
        }}
      >
        <h3
          className="faq-question"
          style={{
            margin: 0,
            fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
            fontSize: 24,
            fontWeight: 400,
            lineHeight: 1.25,
            color: Q_COLOR,
            flex: 1,
          }}
        >
          {item.question}
        </h3>
        <ChevronIcon open={isOpen} />
      </div>

      {/* Answer (expanded) */}
      {isOpen && (
        <div style={{ marginTop: 16 }}>
          <p
            style={{
              margin: 0,
              fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: 1.5,
              color: A_COLOR,
              wordBreak: 'break-word',
            }}
          >
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

// ─── Section ─────────────────────────────────────────────────────────────────

export default function WhyPodiumFaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    /* framer-ybuwjm: bg:#f4f4f7  flex-col  align-items:center  padding:80px */
    <section
      className="faq-section"
      style={{
        backgroundColor: SECTION_BG,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '80px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* framer-lp220m > framer-dq77sb: max-width:900px  flex-col  gap:64px */}
      <div
        className="faq-inner"
        style={{
          width: '100%',
          maxWidth: 900,
          display: 'flex',
          flexDirection: 'column',
          gap: 64,
        }}
      >
        {/* Heading: preset-19h1oaz — Grenette Regular 40px 400 110% center */}
        <h3
          className="faq-heading"
          style={{
            margin: 0,
            fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
            fontSize: 40,
            fontWeight: 400,
            lineHeight: '110%',
            letterSpacing: 0,
            textAlign: 'center',
            color: Q_COLOR,
            width: '100%',
          }}
        >
          Frequently Asked Questions
        </h3>

        {/* Accordion: display:grid  gap:12px */}
        <div style={{ display: 'grid', gap: 12 }}>
          {FAQS.map((faq, i) => (
            <FaqRow
              key={i}
              item={faq}
              isOpen={i === openIndex}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
