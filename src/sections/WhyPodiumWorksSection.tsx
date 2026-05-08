/**
 * WhyPodiumWorksSection — "Larry works for you. We work with you."
 * Source of truth: dump/homeservices.podium.com/why-podium.html  id="testimonials"
 *
 * Outer section:  framer-v8z9w7   bg:#313135  padding:80px  flex-col  align-items:center  gap:64px
 *   Tablet (768–1199px):           gap:60px    padding:72px 80px
 *   Mobile (≤767px):               gap:56px    padding:48px 24px
 *
 * Heading:        framer-RwRi6 / H2 inverted   width:100%  flex-col  align-items:center  gap:16px
 *   h2  preset-xcqpjm:   Grenette Regular  46px  400  110%  white  center  (mobile:36px)
 *   sub preset-zmyn5w:   Graphik Regular   16px  400  150%  rgb(232,232,232)  center
 *
 * Cards grid:     framer-7fvyxz > framer-35hd7t
 *   framer-7fvyxz:  max-width:1080px  flex-col  gap:24px  align-items:center  width:100%
 *   framer-35hd7t:  display:grid  grid-template-columns:repeat(2,minmax(50px,1fr))
 *                   grid-template-rows:repeat(2,min-content)  gap:24px
 *   Tablet:  gap:10px
 *   Mobile:  flex-col  gap:8px
 *
 * Card container (framer-11l9gcc / framer-1l4p3u7 / framer-oqtmh8 / framer-26dmo6):
 *   flex-col  align-items:center  gap:16px  padding:12px  place-self:start
 *   Mobile bordered (cards 1-3): border-bottom:1px solid #4a4a4d
 *
 * Card icons (framer-1pvweyq / framer-13xpsiw / framer-1c1uh23 / framer-14k0e0t):
 *   24×24  fill:#9d403c (crimson)
 *
 * Card h6  preset-1963bkz: Grenette SemiBold  24px  600  120%  white  center  (mobile:20px)
 * Card p   preset-zmyn5w:  Graphik Regular    16px  400  150%  rgb(170,170,173)  center  (mobile:14px)
 */

const CRIMSON = '#9d403c'

// ─── Icon SVGs ───────────────────────────────────────────────────────────────
// Paths verbatim from -webkit-mask data URIs in dump CSS.

function IconMove() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M 2 10 C 2 7.55 3.76 5.53 6.08 5.09 L 4.59 6.59 L 6 8 L 10 3.99 L 6 0 L 4.59 1.41 L 6.17 2.99 L 6.17 3.05 C 2.7 3.46 0 6.42 0 10 C 0 13.87 3.13 17 7 17 L 10 17 L 10 15 L 7 15 C 4.24 15 2 12.76 2 10 Z"
        fill={CRIMSON}
        transform="translate(1.5 3.5)"
      />
      <path
        d="M 0 0 L 0 7 L 9 7 L 9 0 Z M 7 5 L 2 5 L 2 2 L 7 2 Z"
        fill={CRIMSON}
        transform="translate(13.5 13.5)"
      />
      <path d="M 9 0 L 0 0 L 0 7 L 9 7 Z" fill={CRIMSON} transform="translate(13.5 4.5)" />
    </svg>
  )
}

function IconPerson() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M 20 0 L 2 0 C 0.89 0 0 0.89 0 2 L 0 14 C 0 15.1 0.89 16 2 16 L 7 16 L 7 18 L 15 18 L 15 16 L 20 16 C 21.1 16 21.99 15.1 21.99 14 L 22 2 C 22 0.89 21.1 0 20 0 Z M 20 14 L 2 14 L 2 2 L 20 2 Z"
        fill={CRIMSON}
        transform="translate(1 3)"
      />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M 9 0 L 0 4 L 0 10 C 0 15.55 3.84 20.74 9 22 C 14.16 20.74 18 15.55 18 10 L 18 4 Z M 9 10.99 L 16 10.99 C 15.47 15.11 12.72 18.78 9 19.93 L 9 11 L 2 11 L 2 5.3 L 9 2.19 Z"
        fill={CRIMSON}
        transform="translate(3 1)"
      />
    </svg>
  )
}

function IconChat() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M 18 0 L 2 0 C 0.9 0 0.01 0.9 0.01 2 L 0 20 L 4 16 L 18 16 C 19.1 16 20 15.1 20 14 L 20 2 C 20 0.9 19.1 0 18 0 Z M 18 14 L 3.17 14 L 2 15.17 L 2 2 L 18 2 Z M 9 10 L 11 10 L 11 12 L 9 12 Z M 9 4 L 11 4 L 11 8 L 9 8 Z"
        fill={CRIMSON}
        transform="translate(2 2)"
      />
    </svg>
  )
}

// ─── Card data ───────────────────────────────────────────────────────────────

const CARDS = [
  {
    icon: <IconMove />,
    title: 'We handle the move',
    body: "We move your data over, get your team set up, and stay with you until you're live.",
    bordered: true,
  },
  {
    icon: <IconPerson />,
    title: 'A real person in your corner',
    body: 'A dedicated contact who knows your business and helps you get the most out of Podium.',
    bordered: true,
  },
  {
    icon: <IconShield />,
    title: 'Built from feedback in the field',
    body: 'What contractors tell us shapes what we build. New features ship constantly.',
    bordered: true,
  },
  {
    icon: <IconChat />,
    title: 'Your data is secure',
    body: 'Your customer information is handled securely from day one.',
    bordered: false,
  },
]

// ─── Section ─────────────────────────────────────────────────────────────────

export default function WhyPodiumWorksSection() {
  return (
    <section
      className="flex w-full flex-col items-center gap-[56px] bg-[#222226] px-[24px] py-[56px] tablet:gap-[60px] tablet:px-[48px] tablet:py-[64px] desktop:gap-[64px] desktop:p-[80px]"
    >
      <div className="flex w-full flex-col items-center gap-[16px]">
        <h2 className="m-0 w-full text-center font-grenette text-[30px] font-normal leading-[110%] tracking-[0] text-white tablet:text-[38px] desktop:text-[46px]">
          Larry works for you. We work with you.
        </h2>

        <p className="m-0 text-center font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-[rgb(232,232,232)]">
          We work with thousands of contractors. We know what you need to get live fast.
        </p>
      </div>

      <div className="grid w-full max-w-[1080px] grid-cols-1 gap-[8px] tablet:grid-cols-2 tablet:gap-[10px] desktop:gap-[24px]">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className={`flex flex-col items-center gap-[16px] self-start p-[12px] ${card.bordered ? 'border-b border-[#4a4a4d] tablet:border-0' : ''}`}
          >
            {card.icon}

            <h6 className="m-0 text-center font-grenette-semi text-[20px] font-semibold leading-[120%] tracking-[0] text-white desktop:text-[24px]">
              {card.title}
            </h6>

            <p className="m-0 text-center font-graphik text-[14px] font-normal leading-[150%] tracking-[0] text-[rgb(170,170,173)] desktop:text-[16px]">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
