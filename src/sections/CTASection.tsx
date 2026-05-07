import '../styles/cta.css'

const BG_BLUE   = '/images/cta-bg-blue.png'
const BG_RED    = '/images/cta-bg-red.png'
const CARD_BG   = '/images/cta-card-bg.png'

const CRIMSON = 'rgb(157, 64, 60)'
const CREAM   = 'rgb(247, 244, 237)'
const WHITE   = 'rgb(255, 255, 255)'

interface CTASectionProps {
  headline?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTASection({
  headline = 'See how Larry helps grow your revenue by 30% without adding headcount.',
  buttonText = 'Show me how',
  buttonHref = '/demo',
}: CTASectionProps = {}) {
  return (
    /* ── Outer section: full-width dark gradient ── */
    <div
      className="cta-section"
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        padding: 80,
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, rgb(28, 29, 24) 0%, rgb(0, 0, 0) 100%)',
      }}
    >
      {/* ── Decorative bg blob: blue radial fade (top-left) ── */}
      <img
        src={BG_BLUE}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 1147,
          height: 1147,
          top: -645,
          left: -531,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'visible',
          objectFit: 'fill',
        }}
      />

      {/* ── Decorative bg blob: red radial fade (bottom-right) ── */}
      <img
        src={BG_RED}
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 1147,
          height: 1147,
          bottom: -640,
          right: -627,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'visible',
          objectFit: 'fill',
        }}
      />

      {/* ── Card ── */}
      <div
        className="cta-card"
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 1440,
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 48,
          padding: 80,
          borderRadius: 32,
          overflow: 'clip',
        }}
      >
        {/* Card background image (absolute, object-fit cover) */}
        <img
          src={CARD_BG}
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            borderRadius: 'inherit',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            zIndex: 0,
          }}
        />

        {/* ── Content container (heading) ── */}
        <div
          className="cta-container"
          style={{
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            flexDirection: 'column',
            flex: '1 0 0',
            alignItems: 'center',
            gap: 24,
            width: 1,
            maxWidth: 1440,
            overflow: 'visible',
          }}
        >
          {/* Content inner */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              gap: 10,
              width: '100%',
              maxWidth: 900,
            }}
          >
            {/* Heading */}
            <h3
              className="cta-heading"
              style={{
                margin: 0,
                fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
                fontSize: 40,
                fontWeight: 400,
                lineHeight: '120%',
                letterSpacing: 0,
                color: WHITE,
                width: '100%',
                whiteSpace: 'pre-wrap',
                wordBreak: 'break-word',
              }}
            >
              {headline}
            </h3>
          </div>
        </div>

        {/* ── Button ── */}
        <div style={{ position: 'relative', zIndex: 1, flexShrink: 0 }}>
          <a
            href={buttonHref}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 10,
              padding: '16px 32px',
              backgroundColor: CRIMSON,
              borderRadius: 50,
              textDecoration: 'none',
              cursor: 'pointer',
              whiteSpace: 'nowrap',
            }}
          >
            <p
              style={{
                margin: 0,
                fontFamily: '"Graphik Semibold", "Graphik Semibold Placeholder", sans-serif',
                fontSize: 18,
                fontWeight: 600,
                lineHeight: '18px',
                letterSpacing: 0,
                textAlign: 'center',
                color: CREAM,
              }}
            >
              {buttonText}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
