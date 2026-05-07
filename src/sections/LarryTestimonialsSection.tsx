const TESTIMONIALS = [
  {
    quote:
      "Since Larry 2.0, I hit one button, write what it should say, and it\u2019s fixed immediately.",
    author: 'Frances Johnson, Owner',
    company: 'Heritage Mountain Heating & Cooling',
    image: '/images/larry-testimonial-1.png',
    imageWidth: 1232,
    imageHeight: 664,
    type: 'large', // 2-col card
  },
  {
    quote:
      "Before Podium, we spent 2\u20134 hours a day on invoicing; with Larry\u2019s paperless workflow, we can finish in about an hour\u2014cutting invoicing time by at least half.",
    author: 'Jase Marshall, CFO',
    company: 'Air Design Heating and Cooling',
    image: null,
    type: 'glass',
  },
  {
    quote:
      "Knowing AI will pick up when I\u2019m busy gives me peace of mind. My full attention can go to the customer I\u2019m in front of, instead of me staring at my phone every time it rings.",
    author: 'Rudy Urbina, Owner',
    company: 'Top Mechanical Service',
    image: '/images/larry-testimonial-2.png',
    imageWidth: 1232,
    imageHeight: 520,
    type: 'large',
  },
  {
    quote:
      "Instead of voicemails piling up, Larry 2.0 captures the customer\u2019s information, filters what\u2019s urgent, and tells us exactly what we\u2019re calling back about.",
    author: 'Lauren Hardin, Office Manager',
    company: 'Olympus Electric & Air',
    image: null,
    type: 'glass',
  },
]

function QuoteIcon() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden="true">
      <path
        d="M0 24V14.4C0 10.88 0.96 7.84 2.88 5.28C4.88 2.72 7.68 0.96 11.28 0L13.44 3.36C10.8 4.16 8.76 5.52 7.32 7.44C5.88 9.36 5.2 11.52 5.28 13.92H9.6V24H0ZM18.24 24V14.4C18.24 10.88 19.2 7.84 21.12 5.28C23.12 2.72 25.92 0.96 29.52 0L31.68 3.36C29.04 4.16 27 5.52 25.56 7.44C24.12 9.36 23.44 11.52 23.52 13.92H27.84V24H18.24Z"
        fill="white"
        fillOpacity="0.4"
      />
    </svg>
  )
}

function GlassCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      style={{
        flex: '1 0 0',
        width: '1px',
        minWidth: '280px',
        backgroundColor: 'rgba(255,255,255,0.08)',
        backdropFilter: 'blur(12px)',
        borderRadius: '24px',
        padding: '40px',
        display: 'flex',
        flexFlow: 'column',
        gap: '24px',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <QuoteIcon />
      <p
        style={{
          fontFamily: '"Graphik Regular", sans-serif',
          fontSize: '18px',
          fontWeight: 400,
          lineHeight: '150%',
          color: 'rgb(255, 255, 255)',
          margin: 0,
          flex: 1,
        }}
      >
        {testimonial.quote}
      </p>
      <div style={{ display: 'flex', flexFlow: 'column', gap: '4px' }}>
        <p
          style={{
            fontFamily: '"Graphik Semibold", sans-serif',
            fontSize: '16px',
            fontWeight: 600,
            color: 'rgb(255, 255, 255)',
            margin: 0,
          }}
        >
          {testimonial.author}
        </p>
        <p
          style={{
            fontFamily: '"Graphik Regular", sans-serif',
            fontSize: '14px',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.6)',
            margin: 0,
          }}
        >
          {testimonial.company}
        </p>
      </div>
    </div>
  )
}

function LargeCard({ testimonial }: { testimonial: (typeof TESTIMONIALS)[0] }) {
  return (
    <div
      style={{
        flex: '1.5 0 0',
        width: '1px',
        minWidth: '320px',
        backgroundColor: 'rgba(255,255,255,0.06)',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexFlow: 'column',
        border: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <div style={{ padding: '40px', display: 'flex', flexFlow: 'column', gap: '24px' }}>
        <QuoteIcon />
        <p
          style={{
            fontFamily: '"Graphik Regular", sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '150%',
            color: 'rgb(255, 255, 255)',
            margin: 0,
          }}
        >
          {testimonial.quote}
        </p>
        <div style={{ display: 'flex', flexFlow: 'column', gap: '4px' }}>
          <p
            style={{
              fontFamily: '"Graphik Semibold", sans-serif',
              fontSize: '16px',
              fontWeight: 600,
              color: 'rgb(255, 255, 255)',
              margin: 0,
            }}
          >
            {testimonial.author}
          </p>
          <p
            style={{
              fontFamily: '"Graphik Regular", sans-serif',
              fontSize: '14px',
              fontWeight: 400,
              color: 'rgba(255,255,255,0.6)',
              margin: 0,
            }}
          >
            {testimonial.company}
          </p>
        </div>
      </div>
      {testimonial.image && (
        <img
          src={testimonial.image}
          alt=""
          width={testimonial.imageWidth}
          height={testimonial.imageHeight}
          style={{
            display: 'block',
            width: '100%',
            height: 'auto',
            objectFit: 'cover',
            borderBottomLeftRadius: '24px',
            borderBottomRightRadius: '24px',
          }}
        />
      )}
    </div>
  )
}

export default function LarryTestimonialsSection() {
  const [row1, row2] = [TESTIMONIALS.slice(0, 2), TESTIMONIALS.slice(2, 4)]

  return (
    <section
      style={{
        backgroundColor: '#18181c',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: '64px',
        width: '100%',
        padding: '80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Heading */}
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          gap: '16px',
          width: '100%',
          maxWidth: '1440px',
        }}
      >
        <p
          style={{
            fontFamily: '"Graphik Semibold", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'rgb(170, 170, 173)',
            margin: 0,
            textAlign: 'center',
          }}
        >
          AI that drives results
        </p>
        <h2
          style={{
            fontFamily: '"Grenette Regular", sans-serif',
            fontSize: '46px',
            fontWeight: 400,
            lineHeight: '110%',
            color: 'rgb(255, 255, 255)',
            margin: 0,
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          What our customers are saying about Larry
        </h2>
      </div>

      {/* Row 1 */}
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'flex-start',
          gap: '30px',
          width: '100%',
          maxWidth: '1440px',
          flexWrap: 'wrap',
        }}
      >
        {row1.map((t) =>
          t.type === 'large' ? (
            <LargeCard key={t.author} testimonial={t} />
          ) : (
            <GlassCard key={t.author} testimonial={t} />
          )
        )}
      </div>

      {/* Row 2 */}
      <div
        style={{
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'flex-start',
          gap: '30px',
          width: '100%',
          maxWidth: '1440px',
          flexWrap: 'wrap',
        }}
      >
        {row2.map((t) =>
          t.type === 'large' ? (
            <LargeCard key={t.author} testimonial={t} />
          ) : (
            <GlassCard key={t.author} testimonial={t} />
          )
        )}
      </div>
    </section>
  )
}
