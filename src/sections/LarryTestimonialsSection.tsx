// Quote marks SVG matching the Framer source
function QuoteMarks() {
  return (
    <svg
      width="26"
      height="23"
      viewBox="0 0 26 23"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, width: 26, height: 23, position: 'relative' }}
    >
      <path
        d="M0 22.08V13.248C0 9.984 0.88 7.168 2.64 4.8C4.48 2.432 7.04 0.864 10.32 0.096L12.24 3.072C9.84 3.808 8 5.056 6.72 6.816C5.44 8.576 4.84 10.56 4.912 12.768H8.832V22.08H0ZM13.44 22.08V13.248C13.44 9.984 14.32 7.168 16.08 4.8C17.92 2.432 20.48 0.864 23.76 0.096L25.68 3.072C23.28 3.808 21.44 5.056 20.16 6.816C18.88 8.576 18.28 10.56 18.352 12.768H22.272V22.08H13.44Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  )
}

// Liquid glass inner layer with gradient border
function GlassInner() {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        borderRadius: 24,
        position: 'absolute',
        zIndex: 1,
        background: 'hsl(0 0% 100% / 0.125)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        pointerEvents: 'none',
        inset: 0,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          borderRadius: 24,
          zIndex: 2,
          pointerEvents: 'none',
          background:
            'linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(120,120,120,0) 30%, rgba(120,120,120,0) 70%, rgba(255,255,255,0.5) 100%) border-box',
          WebkitMask:
            'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
          border: '1px solid transparent',
        } as React.CSSProperties}
      />
    </div>
  )
}

function Attribution({ author, company }: { author: string; company: string }) {
  return (
    <div style={{ display: 'flex', flexFlow: 'column', gap: 24, width: '100%' }}>
      <div style={{ display: 'flex', flexFlow: 'column', gap: 0, width: '100%' }}>
        <p
          style={{
            fontFamily: '"Graphik Regular", sans-serif',
            fontSize: 15,
            lineHeight: '150%',
            color: '#fff',
            margin: 0,
          }}
        >
          {author}
        </p>
        <p
          style={{
            fontFamily: '"Graphik Semibold", sans-serif',
            fontSize: 18,
            lineHeight: '150%',
            color: '#fff',
            margin: 0,
          }}
        >
          {company}
        </p>
      </div>
    </div>
  )
}

function QuoteContent({ quote, author, company }: { quote: string; author: string; company: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexFlow: 'row',
        flex: '1 0 0',
        placeContent: 'flex-start flex-end',
        alignItems: 'flex-start',
        gap: 24,
        width: '1px',
        position: 'relative',
        zIndex: 2,
      }}
    >
      <QuoteMarks />
      <div
        style={{
          display: 'flex',
          flexFlow: 'column',
          flex: '1 0 0',
          placeContent: 'flex-start flex-end',
          alignItems: 'flex-start',
          gap: 24,
          width: '1px',
        }}
      >
        <p
          style={{
            fontFamily: '"Graphik Regular", sans-serif',
            fontSize: 19,
            fontWeight: 400,
            lineHeight: '150%',
            color: '#fff',
            margin: 0,
            width: '100%',
          }}
        >
          {quote}
        </p>
        <Attribution author={author} company={company} />
      </div>
    </div>
  )
}

// Glass card (flex:1) — text only with liquid glass effect
function GlassCard({ quote, author, company }: { quote: string; author: string; company: string }) {
  return (
    <div
      style={{
        flex: '1 0 0',
        width: '1px',
        alignSelf: 'stretch',
        borderRadius: 24,
        background: 'linear-gradient(180deg, rgba(61,57,53,0.25) 0%, rgba(127,121,105,0.25) 100%)',
        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.16)',
        display: 'flex',
        flexFlow: 'row',
        placeContent: 'flex-end',
        alignItems: 'flex-end',
        gap: 48,
        padding: 40,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <GlassInner />
      {/* Dark fade subtle */}
      <div
        style={{
          position: 'absolute',
          top: -78,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
          opacity: 0.25,
          pointerEvents: 'none',
        }}
      />
      <QuoteContent quote={quote} author={author} company={company} />
    </div>
  )
}

// Image card fixed height (Row 1, Jase) — photo bg + dark fade + quote overlay at bottom
function ImageCard({ quote, author, company, image }: { quote: string; author: string; company: string; image: string }) {
  return (
    <div
      style={{
        flex: '2 0 0',
        width: '1px',
        height: 380,
        borderRadius: 24,
        background: 'rgb(195,195,200)',
        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.16)',
        display: 'flex',
        flexFlow: 'row',
        placeContent: 'flex-end',
        alignItems: 'flex-end',
        gap: 48,
        padding: 40,
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={image}
          alt=""
          style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
        }}
      />
      <QuoteContent quote={quote} author={author} company={company} />
    </div>
  )
}

// Image+quote card height:auto (Row 2, Rudy) — photo bg + dark fade + quote overlay at bottom
function ImageQuoteCard({ quote, author, company, image }: { quote: string; author: string; company: string; image: string }) {
  return (
    <div
      style={{
        flex: '2 0 0',
        width: '1px',
        borderRadius: 24,
        background: 'rgb(195,195,200)',
        boxShadow: '0px 4px 12px 0px rgba(0,0,0,0.16)',
        display: 'flex',
        flexFlow: 'row',
        placeContent: 'flex-end',
        alignItems: 'flex-end',
        gap: 48,
        padding: 40,
        position: 'relative',
        overflow: 'hidden',
        minHeight: 320,
        cursor: 'pointer',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src={image}
          alt=""
          style={{ display: 'block', width: '100%', height: '100%', borderRadius: 'inherit', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: 'linear-gradient(0deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0) 100%)',
          pointerEvents: 'none',
        }}
      />
      <QuoteContent quote={quote} author={author} company={company} />
    </div>
  )
}

export default function LarryTestimonialsSection() {
  return (
    <section
      style={{
        backgroundColor: '#18181c',
        display: 'flex',
        flexFlow: 'column',
        placeContent: 'center flex-start',
        alignItems: 'center',
        gap: 64,
        width: '100%',
        padding: 80,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* Decorative: blue fade top-left */}
      <div style={{ width: 1192, height: 1049, position: 'absolute', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
        <img src="/images/larry-testimonials-blue-fade.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      {/* Decorative: red fade bottom-right */}
      <div style={{ position: 'absolute', bottom: 0, left: 508, right: 0, zIndex: 0, pointerEvents: 'none' }}>
        <img src="/images/larry-testimonials-red-fade.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      {/* Decorative: carbon texture */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 560, zIndex: 0, pointerEvents: 'none' }}>
        <img src="/images/larry-hero-bg.png" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>

      {/* Inner wrapper */}
      <div
        style={{
          maxWidth: 1440,
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          gap: 30,
          width: '100%',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Section heading */}
        <div style={{ display: 'flex', flexFlow: 'column', gap: 48, padding: '0 0 24px', width: '100%', alignItems: 'center' }}>
          <div style={{ display: 'flex', flexFlow: 'column', alignItems: 'center', gap: 16, padding: '0 0 16px' }}>
            <h6
              style={{
                fontFamily: '"Graphik Medium", sans-serif',
                fontSize: 16,
                fontWeight: 500,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                color: 'rgb(170,170,173)',
                margin: 0,
              }}
            >
              AI that drives results
            </h6>
            <h2
              style={{
                fontFamily: '"Grenette Regular", sans-serif',
                fontSize: 46,
                fontWeight: 400,
                lineHeight: '110%',
                color: '#fff',
                margin: 0,
                textAlign: 'center',
              }}
            >
              What our customers are saying about Larry
            </h2>
          </div>
        </div>

        {/* Row 1: Frances glass + Jase image card */}
        <div style={{ display: 'flex', flexFlow: 'row', gap: 30, alignItems: 'center', width: '100%' }}>
          <GlassCard
            quote="Since Larry 2.0, I hit one button, write what it should say, and it\u2019s fixed immediately."
            author="Frances Johnson, Owner"
            company="Heritage Mountain Heating & Cooling"
          />
          <ImageCard
            quote="Before CloseCrew, we spent 2\u20134 hours a day on invoicing; with Larry\u2019s paperless workflow, we can finish in about an hour\u2014cutting invoicing time by at least half."
            author="Jase Marshall, CFO"
            company="Air Design Heating and Cooling"
            image="/images/larry-testimonial-jase.png"
          />
        </div>

        {/* Row 2: Rudy image+quote + Lauren glass */}
        <div style={{ display: 'flex', flexFlow: 'row', gap: 30, alignItems: 'center', width: '100%' }}>
          <ImageQuoteCard
            quote="Knowing AI will pick up when I\u2019m busy gives me peace of mind. My full attention can go to the customer I\u2019m in front of, instead of me staring at my phone every time it rings."
            author="Rudy Urbina, Owner"
            company="Top Mechanical Service"
            image="/images/larry-testimonial-rudy.png"
          />
          <GlassCard
            quote="Instead of voicemails piling up, Larry 2.0 captures the customer\u2019s information, filters what\u2019s urgent, and tells us exactly what we\u2019re calling back about. It\u2019s taken so much pressure off our team."
            author="Lauren Hardin, Office Manager"
            company="Olympus Electric & Air"
          />
        </div>
      </div>
    </section>
  )
}
