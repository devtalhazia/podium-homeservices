import { useState } from 'react'

interface FaqItem {
  question: string
  answer: JSX.Element
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'How difficult is it to switch to Podium from another scheduling software?',
    answer: (
      <>
        <p className="mb-[20px]">
          Podium's onboarding team aims to have you up and running in days, not months. Our
          onboarding team makes the transition as smooth as possible:
        </p>
        <ul className="mb-[20px] pl-[1.2em] list-disc">
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
            target="_blank"
            rel="noopener noreferrer"
            className="text-crimson underline decoration-[rgb(226,198,196)] decoration-2 underline-offset-[1px] font-bold"
          >
            Book a meeting today to learn more.
          </a>
        </p>
      </>
    ),
  },
]

function AccordionIcon({ open }: { open: boolean }) {
  return (
    <button aria-hidden="true" className="relative w-[28px] h-[28px] rounded-full shrink-0 cursor-pointer bg-none border-none p-0 flex items-center justify-center">
      {/* horizontal bar */}
      <span className="absolute top-[calc(50%-1px)] left-[calc(50%-6px)] w-[12px] h-[2px] bg-slate-mid rounded-[1px]" />
      {/* vertical bar (hidden when open) */}
      {!open && (
        <span className="absolute top-[calc(50%-6px)] left-[calc(50%-1px)] w-[2px] h-[12px] bg-slate-mid rounded-[1px]" />
      )}
    </button>
  )
}

function AccordionItem({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(true)

  return (
    <div
      className="w-full py-[32px] border-t border-[rgb(233,225,216)] flex flex-col overflow-hidden cursor-pointer"
      style={{ gap: open ? 32 : 0 }}
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
        onKeyDown={e => (e.key === 'Enter' || e.key === ' ') && setOpen(o => !o)}
        className="flex flex-row items-start justify-between w-full cursor-pointer outline-none"
      >
        <h6 className="m-0 flex-[1_0_0] max-w-[840px] font-grenette-semi text-[24px] font-semibold leading-[120%] tracking-[0] text-ink select-none">
          {item.question}
        </h6>
        <AccordionIcon open={open} />
      </div>

      {open && (
        <div className="flex w-full">
          <div className="flex-[1_0_0] max-w-[88%] font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-ink-soft">
            {item.answer}
          </div>
        </div>
      )}
    </div>
  )
}

export default function FAQSection() {
  return (
    <section
      id="faq"
      className="w-full flex flex-col items-center bg-white px-[24px] py-[60px] tablet:px-[48px] tablet:py-[60px] desktop:p-[80px] relative overflow-visible"
    >
      {/* heading */}
      <div className="flex flex-col items-center gap-[16px] tablet:gap-[24px] w-full pb-[16px]">
        <div className="flex flex-col items-center justify-center w-full max-w-[1080px]">
          <h3 className="m-0 w-full font-grenette text-[32px] desktop:text-[40px] font-normal leading-[120%] tracking-[0] text-ink text-center">
            Frequently Asked Questions
          </h3>
        </div>
      </div>

      {/* list */}
      <div className="flex flex-col tablet:flex-wrap items-center justify-center gap-[40px] tablet:gap-[72px] w-full max-w-[1440px]">
        <div className="flex flex-col items-start gap-0 w-full tablet:w-full max-w-[925px] tablet:max-w-full desktop:w-[83%] desktop:max-w-[925px]">
          {FAQ_ITEMS.map((item, i) => (
            <AccordionItem key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
