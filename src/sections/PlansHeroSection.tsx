import '../styles/plans-hero.css'

const BG = '/images/plans-hero-bg.png'

export default function PlansHeroSection() {
  return (
    <section
      className="plans-hero-section"
      style={{
        backgroundColor: '#18181c',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '80px 80px 0',
        position: 'relative',
        overflow: 'hidden',
        zIndex: 0,
      }}
    >
      {/* Blue glow blob */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 757,
          height: 757,
          borderRadius: '100%',
          backgroundColor: '#284568',
          filter: 'blur(125px)',
          top: -279,
          left: -327,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Red/crimson glow blob */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          width: 731,
          height: 731,
          borderRadius: '100%',
          backgroundColor: '#653130',
          filter: 'blur(125px)',
          top: 'calc(24.2% - 365.5px)',
          right: -422,
          zIndex: 0,
          pointerEvents: 'none',
        }}
      />

      {/* Carbon background image */}
      <div
        className="plans-hero-bg"
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 578,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
      >
        <img
          src={BG}
          alt=""
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center top',
          }}
        />
      </div>

      {/* Text content */}
      <div
        className="plans-hero-text"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 1080,
          maxWidth: '100%',
          position: 'relative',
          zIndex: 1,
          paddingBottom: 64,
        }}
      >
        {/* Preheader */}
        <div style={{ width: '100%', paddingBottom: 24 }}>
          <p
            className="plans-hero-preheader"
            style={{
              margin: 0,
              fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
              fontSize: 16,
              fontWeight: 500,
              lineHeight: '150%',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textAlign: 'center',
              color: 'rgb(170, 170, 173)',
            }}
          >
            Get started today
          </p>
        </div>

        {/* Heading + subheader */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 16,
            width: '100%',
          }}
        >
          <h2
            className="plans-hero-heading"
            style={{
              margin: 0,
              width: '100%',
              fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
              fontSize: 46,
              fontWeight: 400,
              lineHeight: '110%',
              letterSpacing: '0px',
              textAlign: 'center',
              color: 'rgb(255, 255, 255)',
            }}
          >
            Agents and platform packages built for home services
          </h2>

          <p
            className="plans-hero-subheader"
            style={{
              margin: 0,
              width: '100%',
              fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
              fontSize: 16,
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: '0em',
              textAlign: 'center',
              color: 'rgb(232, 232, 232)',
            }}
          >
            Grow your revenue with Larry, the AI Employee that communicates
            with customers, books into your calendar, and keeps you updated
            in real time. Start generating 30% more revenue today.
          </p>
        </div>
      </div>
    </section>
  )
}
