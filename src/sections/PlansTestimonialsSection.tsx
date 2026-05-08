import { useState } from 'react'

const TESTIMONIALS = [
  {
    quote: "Instead of voicemails piling up, Larry 2.0 captures the customer's information, filters what's urgent, and tells us exactly what we're calling back about. It's taken so much pressure off our team.",
    logo: '/images/plans-testimonial-logo-1.png',
    logoAspect: 313 / 56,
    name: 'Lauren Hardin, Office Manager',
    company: 'Olymus Electric & Air',
  },
  {
    quote: "We've seen at least a 30% revenue increase since implementing Podium AI.",
    logo: '/images/plans-testimonial-logo-2.png',
    logoAspect: 488 / 89,
    name: 'Katherine Shorey, Office Manager',
    company: 'Arctic Air',
  },
  {
    quote: "My CSR has time to do more outgoing calls because AI can handle incoming ones. We've increased service agreement appointments and outbound sales efforts.",
    logo: '/images/plans-testimonial-logo-3.png',
    logoAspect: 282 / 133,
    name: 'Carl Kelly, COO',
    company: 'Trouth AC',
  },
]

function QuotemarkIcon() {
  return (
    <svg aria-hidden="true" width="24" height="21" viewBox="0 0 24 20.779" overflow="visible" className="shrink-0">
      <path
        d="M 10.792 0.805 C 7.49 2.255 4.349 7.248 3.946 10.47 C 4.671 10.148 5.557 10.067 6.121 10.067 C 8.779 10.067 10.792 12.242 10.792 15.463 C 10.792 18.765 8.215 20.779 5.638 20.779 C 2.174 20.779 0 18.04 0 14.013 C 0 8.537 4.027 2.497 10.389 0 Z M 13.208 14.013 C 13.208 8.537 17.235 2.497 23.597 0 L 24 0.805 C 20.698 2.255 17.557 7.248 17.154 10.47 C 17.879 10.148 18.765 10.067 19.329 10.067 C 21.987 10.067 24 12.242 24 15.463 C 24 18.765 21.423 20.779 18.846 20.779 C 15.383 20.779 13.208 18.04 13.208 14.013 Z"
        fill="rgb(240, 240, 243)"
      />
    </svg>
  )
}

function ChevronLeft() {
  return (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
      <path d="M9 1L1 9L9 17" stroke="#7B7C79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
      <path d="M1 1L9 9L1 17" stroke="#7B7C79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function DividerLine() {
  return (
    <svg aria-hidden="true" width="552" height="4" viewBox="-1 -1 552 4" fill="none" className="w-full max-w-[552px] h-[4px] block">
      <line x1="1" y1="1" x2="549" y2="1" stroke="#7B7C79" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

export default function PlansTestimonialsSection() {
  const [active, setActive] = useState(1)
  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length)

  return (
    <section className="flex justify-center w-full px-[24px] pb-[40px] tablet:pb-[72px] desktop:px-[80px] desktop:pb-[80px]">
      <div className="relative w-full max-w-[950px] flex flex-col items-start gap-[48px]">
        {/* Background dotted pattern */}
        <div
          aria-hidden="true"
          className="absolute w-[640px] h-[640px] z-0 pointer-events-none overflow-visible"
          style={{ top: 'calc(50.15% - 320px)', left: 'calc(49.79% - 320px)' }}
        >
          <img src="/images/plans-quote-bg.png" alt="" className="w-full h-full object-cover block" />
        </div>

        {/* Top divider */}
        <div className="relative z-[1] w-full flex justify-center items-center px-0 tablet:px-0 desktop:px-[200px]">
          <DividerLine />
        </div>

        {/* Carousel */}
        <div className="relative z-[1] w-full">
          <div className="relative w-full min-h-[200px]">
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                className={`transition-opacity duration-[400ms] ease ${i === active ? 'relative opacity-100 pointer-events-auto' : 'absolute inset-0 opacity-0 pointer-events-none'}`}
              >
                {/* Testimonial row */}
                <div className="flex flex-col tablet:flex-row items-start gap-[24px] w-full max-w-[900px] mx-auto px-[16px] tablet:px-[60px]">
                  {/* Quotemark */}
                  <div className="shrink-0 pt-[6px]">
                    <QuotemarkIcon />
                  </div>
                  {/* Content */}
                  <div className="flex-[1_0_0] flex flex-col gap-[24px]">
                    <p className="m-0 font-graphik text-[18px] tablet:text-[24px] font-normal leading-[150%] text-cream whitespace-pre-wrap break-words">
                      {t.quote}
                    </p>
                    <div className="flex flex-col tablet:flex-row items-start gap-[12px] tablet:gap-[24px] w-full">
                      <div className="shrink-0 w-[150px]">
                        <img
                          src={t.logo}
                          alt=""
                          className="block object-contain object-left-top"
                          style={{ width: 150, height: Math.round(150 / t.logoAspect) }}
                        />
                      </div>
                      <div className="flex-[1_0_0] flex flex-col gap-0 min-w-0 tablet:min-w-[250px]">
                        <p className="m-0 font-graphik text-[14px] font-normal leading-[18px] text-[rgb(242,236,227)]">
                          {t.name}
                        </p>
                        <p className="m-0 font-graphik text-[14px] font-normal leading-[18px] text-[rgb(242,236,227)]">
                          {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev arrow — hidden on mobile */}
          <button
            onClick={prev}
            aria-label="Previous testimonial"
            className="hidden tablet:flex absolute left-0 top-1/2 -translate-y-1/2 items-center justify-center p-[8px] bg-transparent border-none cursor-pointer"
          >
            <ChevronLeft />
          </button>

          {/* Next arrow — hidden on mobile */}
          <button
            onClick={next}
            aria-label="Next testimonial"
            className="hidden tablet:flex absolute right-0 top-1/2 -translate-y-1/2 items-center justify-center p-[8px] bg-transparent border-none cursor-pointer"
          >
            <ChevronRight />
          </button>

          {/* Dot indicators */}
          <div className="flex justify-center gap-[8px] mt-[32px]">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className="w-[8px] h-[8px] rounded-full border-none cursor-pointer p-0 transition-[background] duration-300 ease"
                style={{ background: i === active ? 'rgb(247,244,237)' : 'rgba(247,244,237,0.3)' }}
              />
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div className="relative z-[1] w-full flex justify-center items-center px-0 tablet:px-0 desktop:px-[200px]">
          <DividerLine />
        </div>
      </div>
    </section>
  )
}
