import { useState } from 'react'

/* ── FAQ data (source: dump/homeservices.podium.com/index.html, SSR + live site) ── */
interface FaqItem {
  question: string
  answer: JSX.Element
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How difficult is it to switch to CloseCrew from another scheduling software?',
    answer: (
      <>
        <p className="mb-[20px] mt-0">
          CloseCrew's onboarding team aims to have you up and running in days, not months. Our
          onboarding team makes the transition as smooth as possible:
        </p>
        <ul className="mb-[20px] mt-0 list-disc pl-[1.2em]">
          <li>White-glove onboarding within 48 hours of signing</li>
          <li>Dedicated team to answer questions</li>
          <li>Data migration (customers, jobs, history, etc.)</li>
          <li>We test and refine your AI Employee until it reflects your business</li>
          <li>Staff training for your entire team</li>
        </ul>
        <p className="m-0">
          Our goal is to minimize disruption so your business stays up and running during the
          change.{' '}
          <a
            href="https://calendly.com/umar-softaims/hvac-automation"
            className="font-bold text-crimson underline decoration-[rgb(226,198,196)] decoration-2 underline-offset-[1px]"
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
      className="relative flex h-[28px] w-[28px] shrink-0 cursor-pointer items-center justify-center rounded-[100px] border-none bg-transparent p-0"
    >
      <span className="absolute left-[calc(50%-6px)] top-[calc(50%-1px)] h-[2px] w-[12px] rounded-[1px] bg-[rgb(78,97,118)]" />
      {!open && (
        <span className="absolute left-[calc(50%-1px)] top-[calc(50%-6px)] h-[12px] w-[2px] rounded-[1px] bg-[rgb(78,97,118)]" />
      )}
    </button>
  )
}

/* ── Single accordion item ── */
function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(true)

  return (
    <div className={`flex w-full cursor-pointer flex-col overflow-hidden border-t border-[rgb(233,225,216)] py-[32px] ${open ? 'gap-[32px]' : 'gap-0'}`}>
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(o => !o)}
        className="flex w-full cursor-pointer flex-row items-start justify-between outline-none"
      >
        <h6 className="m-0 max-w-[840px] flex-[1_0_0] select-none pr-[12px] font-grenette-semi text-[20px] font-semibold leading-[120%] tracking-[0] text-ink tablet:text-[24px]">
          {item.question}
        </h6>
        <AccordionIcon open={open} />
      </div>

      {open && (
        <div className="flex w-full">
          <div className="max-w-full flex-[1_0_0] font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-ink-soft desktop:max-w-[88%]">
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
      className="relative flex w-full flex-col items-center gap-0 overflow-visible bg-white px-[24px] py-[56px] tablet:px-[48px] tablet:py-[64px] desktop:p-[80px]"
    >
      <div className="flex w-full flex-col items-center gap-[16px] pb-[16px]">
        <div className="flex w-[1080px] max-w-full flex-col items-center justify-center">
          <h3 className="m-0 w-full text-center font-grenette text-[28px] font-normal leading-[120%] tracking-[0] text-ink tablet:text-[34px] desktop:text-[40px]">
            Frequently Asked Questions
          </h3>
        </div>
      </div>

      <div className="flex w-full max-w-[1440px] flex-wrap items-start justify-center gap-[72px]">
        <div className="flex w-full max-w-[925px] flex-col items-start gap-0 desktop:w-[83%]">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
