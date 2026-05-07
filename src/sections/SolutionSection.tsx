import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Lottie from 'lottie-react'
import neverMissesLeadAnimation from '../assets/animations/never-miss-a-lead.json'
import booksWithoutOversightAnimation from '../assets/animations/books-without-oversight.json'
import everyLeadInOnePlatformAnimation from '../assets/animations/every-lead-in-one-platform.json'
import reengagesCustomersAnimation from '../assets/animations/reengage-customers.json'
import eliminatesAdminWorkAnimation from '../assets/animations/eleminate-admin-work.json'

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

const ANIMATION_BY_TITLE: Record<string, object> = {
  'Never misses a lead': neverMissesLeadAnimation,
  'Books without oversight': booksWithoutOversightAnimation,
  'Every lead in one platform': everyLeadInOnePlatformAnimation,
  'Re-engages customers': reengagesCustomersAnimation,
  'Eliminates admin work': eliminatesAdminWorkAnimation,
}

/* ── Chevron SVG (exact path from Framer dump, fill rgb(28,27,24)) ── */
const ChevronDown = () => (
  <svg
    width="24" height="24" viewBox="0 0 24 24" fill="none"
    className="block h-full w-full"
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
  animationData: object
  isActive: boolean
  animKey: number
  onClick: () => void
}

/* ── Single accordion row ── */
function AccordionItem({ title, body, animationData, isActive, animKey, onClick }: ItemProps) {
  return (
    <div
      className="relative flex w-full desktop:w-[436px] cursor-pointer flex-col items-start gap-[16px] overflow-hidden px-[24px] pt-[32px] pb-[48px] border-t border-[rgb(132,124,115)] tablet:border-t desktop:border-t-0 desktop:border-b desktop:border-[rgb(132,124,115)]"
      onClick={onClick}
    >
      {isActive && (
        <div className="absolute left-0 right-0 top-0 z-[1] h-[4px] overflow-hidden bg-gray-200">
          <motion.div
            key={animKey}
            className="h-full w-full bg-blue-600"
            initial={{ x: '-100%' }}
            animate={{ x: '0%' }}
            transition={{ duration: ITEM_DURATION / 2000, ease: 'linear' }}
          />
        </div>
      )}

      <div className="flex w-full shrink-0 flex-row items-center">
        <div className="flex min-w-0 flex-[1_0_0] flex-row items-center gap-[16px]">
          <div className="min-w-0 flex-[1_0_0]">
            <h6 className="m-0 w-[348px] max-w-full break-words whitespace-pre-wrap font-grenette-semi text-[20px] font-semibold leading-[150%] tracking-[0px] text-ink">
              {title}
            </h6>
          </div>

          <div className={`h-[24px] w-[24px] shrink-0 transition-transform duration-200 ${isActive ? 'rotate-180' : 'rotate-0'}`}>
            <ChevronDown />
          </div>
        </div>
      </div>

      {isActive && (
        <p className="m-0 w-full break-words whitespace-pre-wrap font-graphik text-[16px] font-normal leading-[150%] tracking-[0em] text-ink-soft">
          {body}
        </p>
      )}

      {isActive && (
        <div className="w-full overflow-hidden desktop:hidden">
          <Lottie
            animationData={animationData}
            loop
            autoplay
            className="h-full w-full"
          />
        </div>
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
    <section
      id="solution"
      className="relative flex w-full flex-col items-center gap-[64px] overflow-hidden bg-gray-50 px-[24px] py-[60px] tablet:px-[48px] tablet:py-[72px] desktop:p-[80px]"
    >
      <div className="w-full max-w-[1080px]">
        <div className="flex w-full flex-col items-center gap-0">
          <div className="flex w-full flex-col items-center gap-[48px] pb-[24px]">
            <p className="m-0 text-center font-graphik-medium text-[16px] font-medium leading-[150%] tracking-[0.1em] text-gray-mid">
              Your AI Employee at work
            </p>
          </div>

          <div className="flex w-full flex-col items-center gap-[24px] pb-[16px]">
            <h3 className="m-0 w-full text-center font-grenette text-[28px] font-normal leading-[120%] tracking-[0px] text-ink tablet:text-[40px]">
              Larry is the AI Employee that books more jobs, fills your calendar, and grows revenue
            </h3>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-[30px] desktop:flex-row">
        <div className="flex w-full flex-col items-center gap-0 desktop:min-w-[326px] desktop:max-w-[460px] desktop:flex-[1_0_0] desktop:items-start desktop:pr-[24px]">
          {ITEMS.map((item, idx) => (
            <AccordionItem
              key={item.title}
              title={item.title}
              body={item.body}
              animationData={ANIMATION_BY_TITLE[item.title]}
              isActive={activeIdx === idx}
              animKey={activeIdx === idx ? animKey : 0}
              onClick={() => handleClick(idx)}
            />
          ))}
        </div>

        <div className="hidden min-w-0 flex-[1_0_0] items-center justify-center desktop:flex desktop:aspect-[1.42814]">
          <Lottie
            key={ITEMS[activeIdx].title}
            animationData={ANIMATION_BY_TITLE[ITEMS[activeIdx].title]}
            loop
            autoplay
            className="h-full w-full"
          />
        </div>
      </div>
    </section>
  )
}
