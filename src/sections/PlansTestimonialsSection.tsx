import { useState } from 'react'

const CREAM = 'rgb(247, 244, 237)'
const WARM_CREAM = 'rgb(242, 236, 227)'
const DIVIDER_COLOR = '#7B7C79'

const TESTIMONIALS = [
  {
    quote:
      "Instead of voicemails piling up, Larry 2.0 captures the customer's information, filters what's urgent, and tells us exactly what we're calling back about. It's taken so much pressure off our team.",
    logo: '/images/plans-testimonial-logo-1.png',
    logoAspect: 313 / 56,
    name: 'Lauren Hardin, Office Manager',
    company: 'Olymus Electric & Air',
  },
  {
    quote:
      "We've seen at least a 30% revenue increase since implementing CloseCrew AI.",
    logo: '/images/plans-testimonial-logo-2.png',
    logoAspect: 488 / 89,
    name: 'Katherine Shorey, Office Manager',
    company: 'Arctic Air',
  },
  {
    quote:
      "My CSR has time to do more outgoing calls because AI can handle incoming ones. We've increased service agreement appointments and outbound sales efforts.",
    logo: '/images/plans-testimonial-logo-3.png',
    logoAspect: 282 / 133,
    name: 'Carl Kelly, COO',
    company: 'Trouth AC',
  },
]

function QuotemarkIcon() {
  return (
    <svg
      aria-hidden="true"
      width="24"
      height="21"
      viewBox="0 0 24 20.779"
      overflow="visible"
      style={{ flexShrink: 0 }}
    >
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
      <path
        d="M9 1L1 9L9 17"
        stroke={DIVIDER_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChevronRight() {
  return (
    <svg width="10" height="18" viewBox="0 0 10 18" fill="none" aria-hidden="true">
      <path
        d="M1 1L9 9L1 17"
        stroke={DIVIDER_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function DividerLine() {
  return (
    <svg
      aria-hidden="true"
      width="552"
      height="4"
      viewBox="-1 -1 552 4"
      fill="none"
      style={{ width: '100%', maxWidth: 552, height: 4, display: 'block' }}
    >
      <line
        x1="1"
        y1="1"
        x2="549"
        y2="1"
        stroke={DIVIDER_COLOR}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function PlansTestimonialsSection() {
  const [active, setActive] = useState(1)

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length)

  return (
    <section
      className="plans-testimonials-section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '0 80px 80px',
      }}
    >
      {/* Inner 950px container */}
      <div
        className="plans-testimonials-inner"
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 950,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 48,
        }}
      >
        {/* Background dotted pattern (absolute, centered) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            width: 640,
            height: 640,
            top: 'calc(50.15% - 320px)',
            left: 'calc(49.79% - 320px)',
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'visible',
          }}
        >
          <img
            src="/images/plans-quote-bg.png"
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
        </div>

        {/* Top divider */}
        <div
          className="plans-testimonials-divider"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 200px',
          }}
        >
          <DividerLine />
        </div>

        {/* Carousel */}
        <div
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
          }}
        >
          {/* Slides with fade */}
          <div style={{ position: 'relative', width: '100%', minHeight: 200 }}>
            {TESTIMONIALS.map((t, i) => (
              <div
                key={i}
                style={{
                  position: i === active ? 'relative' : 'absolute',
                  inset: i === active ? undefined : 0,
                  opacity: i === active ? 1 : 0,
                  transition: 'opacity 0.4s ease',
                  pointerEvents: i === active ? 'auto' : 'none',
                }}
              >
                {/* Testimonial row: quotemark | content */}
                <div
                  className="plans-testimonials-card"
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'flex-start',
                    gap: 20,
                    width: '100%',
                    maxWidth: 900,
                    margin: '0 auto',
                    padding: '0 60px',
                  }}
                >
                  {/* Quotemark column */}
                  <div style={{ flexShrink: 0, paddingTop: 6 }}>
                    <QuotemarkIcon />
                  </div>

                  {/* Content column */}
                  <div
                    style={{
                      flex: '1 0 0',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: 24,
                    }}
                  >
                    {/* Quote text */}
                    <p
                      className="plans-testimonials-quote-text"
                      style={{
                        margin: 0,
                        fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
                        fontSize: 24,
                        fontWeight: 400,
                        lineHeight: '150%',
                        letterSpacing: 0,
                        color: CREAM,
                        whiteSpace: 'pre-wrap',
                        wordBreak: 'break-word',
                      }}
                    >
                      {t.quote}
                    </p>

                    {/* Attribution row: logo + author info */}
                    <div
                      className="plans-testimonials-attribution"
                      style={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'flex-start',
                        gap: 24,
                        width: '100%',
                      }}
                    >
                      {/* Logo */}
                      <div
                        style={{
                          flexShrink: 0,
                          width: 150,
                          height: 'auto',
                          position: 'relative',
                          overflow: 'visible',
                        }}
                      >
                        <img
                          src={t.logo}
                          alt=""
                          style={{
                            display: 'block',
                            width: 150,
                            height: Math.round(150 / t.logoAspect),
                            objectFit: 'contain',
                            objectPosition: 'left top',
                          }}
                        />
                      </div>

                      {/* Author info */}
                      <div
                        style={{
                          flex: '1 0 0',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: 0,
                          minWidth: 250,
                        }}
                      >
                        <p
                          style={{
                            margin: 0,
                            fontFamily:
                              '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
                            fontSize: 14,
                            fontWeight: 400,
                            lineHeight: '18px',
                            color: WARM_CREAM,
                          }}
                        >
                          {t.name}
                        </p>
                        <p
                          style={{
                            margin: 0,
                            fontFamily:
                              '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
                            fontSize: 14,
                            fontWeight: 400,
                            lineHeight: '18px',
                            color: WARM_CREAM,
                          }}
                        >
                          {t.company}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Prev arrow */}
          <button
            className="plans-testimonials-nav-arrow"
            onClick={prev}
            aria-label="Previous testimonial"
            style={{
              position: 'absolute',
              left: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ChevronLeft />
          </button>

          {/* Next arrow */}
          <button
            className="plans-testimonials-nav-arrow"
            onClick={next}
            aria-label="Next testimonial"
            style={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ChevronRight />
          </button>

          {/* Dot indicators */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 8,
              marginTop: 32,
            }}
          >
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: i === active ? CREAM : 'rgba(247, 244, 237, 0.3)',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'background 0.3s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* Bottom divider */}
        <div
          className="plans-testimonials-divider"
          style={{
            position: 'relative',
            zIndex: 1,
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '0 200px',
          }}
        >
          <DividerLine />
        </div>
      </div>
    </section>
  )
}
