import { useState } from 'react'

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
    question: 'What happens to our customer data when we switch to CloseCrew?',
    answer:
      'Your data moves with you. Our onboarding team handles the migration from your existing software, bringing over customer records, job history, and contacts. We work with your team until everything is set up and verified before you go live.',
  },
  {
    question: 'Will we experience downtime?',
    answer:
      'No. CloseCrew is designed for a smooth, parallel transition. Your team stays live on your current system while we set up CloseCrew. We only cut over when you are fully ready and confident.',
  },
  {
    question: 'Will my team struggle to learn a new system?',
    answer:
      'Most technicians and CSRs are up and running within a day. CloseCrew is built for the field, not for IT teams. Training is included, and you will have a dedicated contact to help your team get comfortable quickly.',
  },
  {
    question:
      'Why does an HVAC business need everything in one platform to get full value from AI?',
    answer:
      'AI only works when it has access to your full business. When calls, texts, reviews, payments, and booking all live in one place, Larry can act on them automatically. Disconnected tools create gaps that no AI can bridge.',
  },
  {
    question: 'How does CloseCrew help HVAC businesses grow memberships?',
    answer:
      'Larry follows up with every customer who is a fit for a membership plan — automatically, at the right time. He identifies the opportunity, sends the message, and books the conversation. Your team focuses on closing; Larry handles the outreach.',
  },
  {
    question: "We've used our current software for years. Why switch now?",
    answer:
      "Your current software wasn't built for AI. Larry can't work his best when he's isolated from your scheduling, payments, and customer history. Contractors who made the switch are booking more, following up faster, and losing fewer leads to competitors who got there first.",
  },
]

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      className="shrink-0 transition-transform duration-[250ms] ease-[ease]"
      style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
    >
      <path d="M 2 5 L 8 11 L 14 5" stroke="#18181c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function FaqRow({ item, isOpen, onToggle }: { item: FaqItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      role="button"
      aria-expanded={isOpen}
      tabIndex={0}
      onClick={onToggle}
      onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onToggle()}
      className="bg-[#f4f4f7] p-[22px] shadow-[0_1px_0_rgba(0,0,0,0.04)] cursor-pointer select-none"
    >
      <div className="flex items-center gap-[12px] justify-between">
        <h3 className="m-0 flex-1 font-grenette text-[18px] tablet:text-[24px] font-normal leading-[125%] text-[#18181c]">
          {item.question}
        </h3>
        <ChevronIcon open={isOpen} />
      </div>
      {isOpen && (
        <div className="mt-[16px]">
          <p className="m-0 font-graphik text-[16px] font-normal leading-[150%] text-[#4a4a4d] break-words">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  )
}

export default function WhyCloseCrewFaqSection() {
  const [openIndex, setOpenIndex] = useState(0)
  const toggle = (i: number) => setOpenIndex((prev) => (prev === i ? -1 : i))

  return (
    <section className="w-full flex flex-col items-center px-[24px] py-[60px] desktop:p-[80px] box-border bg-[#f4f4f7]">
      <div className="w-full max-w-[900px] flex flex-col gap-[64px]">
        <h3 className="m-0 w-full font-grenette text-[32px] desktop:text-[40px] font-normal leading-[110%] tracking-[0] text-center text-[#18181c]">
          Frequently Asked Questions
        </h3>
        <div className="grid gap-[12px]">
          {FAQS.map((faq, i) => (
            <FaqRow key={i} item={faq} isOpen={i === openIndex} onToggle={() => toggle(i)} />
          ))}
        </div>
      </div>
    </section>
  )
}
