import '../styles/why-podium-hero.css'

export default function WhyPodiumHeroSection() {
  return (
    <section
      className="why-podium-hero-outer"
      style={{
        backgroundColor: '#18181c',
        display: 'flex',
        flexFlow: 'row' as const,
        placeContent: 'center',
        alignItems: 'center',
        gap: 64,
        width: '100%',
        height: 'min-content',
        padding: 80,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Hero photo — absolute positioned, right side */}
      <div
        style={{
          aspectRatio: '1',
          width: 445,
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          overflow: 'visible',
        }}
      >
        <img
          className="why-podium-hero-photo"
          src="/images/why-podium-hero-photo.png"
          alt="Contractor professional"
          style={{
            aspectRatio: '1840 / 1366',
            width: 599,
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
          }}
        />
      </div>

      {/* Content wrapper — max-width 1200px */}
      <div
        style={{
          maxWidth: 1200,
          height: 'min-content',
          display: 'flex',
          flexFlow: 'row' as const,
          flex: '1 0 0',
          placeContent: 'center',
          alignItems: 'center',
          gap: 64,
          width: '1px',
          overflow: 'clip',
          position: 'relative',
        }}
      >
        {/* Hero content — text + CTA */}
        <div
          className="why-podium-hero-content"
          style={{
            display: 'flex',
            flexFlow: 'column' as const,
            flex: '10 0 0',
            placeContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 48,
            width: '1px',
            height: 'min-content',
            padding: 0,
            position: 'relative',
            overflow: 'visible',
          }}
        >
          {/* Text block */}
          <div
            style={{
              display: 'flex',
              flexFlow: 'column' as const,
              placeContent: 'center flex-start',
              alignItems: 'center',
              gap: 24,
              width: '100%',
              height: 'min-content',
              padding: 0,
              position: 'relative',
              overflow: 'visible',
            }}
          >
            {/* Hero text */}
            <div
              style={{
                display: 'flex',
                flexFlow: 'column' as const,
                placeContent: 'center flex-start',
                alignItems: 'center',
                gap: 24,
                width: '100%',
              }}
            >
              <h1
                className="why-podium-hero-h1"
                style={{
                  fontFamily: '"Grenette Regular", sans-serif',
                  fontSize: 52,
                  fontWeight: 400,
                  lineHeight: '110%',
                  letterSpacing: 0,
                  color: 'rgb(247, 244, 237)',
                  margin: 0,
                  textAlign: 'left',
                  width: '100%',
                }}
              >
                Every lead is a job waiting to happen. Larry makes sure it does.
              </h1>
            </div>

            {/* Body copy */}
            <p
              style={{
                fontFamily: '"Graphik Regular", sans-serif',
                fontSize: 16,
                fontWeight: 400,
                lineHeight: '150%',
                letterSpacing: 0,
                color: 'rgb(247, 244, 237)',
                margin: 0,
                textAlign: 'left',
                width: '100%',
              }}
            >
              Larry is an AI Employee who runs your phones, fills your calendar,{' '}
              and grows your memberships so your team can focus on the work.
            </p>
          </div>

          {/* CTA button */}
          <a
            href="/demo"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgb(157, 64, 60)',
              borderRadius: 50,
              padding: '16px 28px',
              textDecoration: 'none',
              cursor: 'pointer',
              flexShrink: 0,
            }}
          >
            <span
              style={{
                fontFamily: '"Graphik Semibold", sans-serif',
                fontSize: 18,
                fontWeight: 600,
                lineHeight: '18px',
                letterSpacing: 0,
                color: 'rgb(247, 244, 237)',
                whiteSpace: 'nowrap',
              }}
            >
              Get a demo
            </span>
          </a>
        </div>

        {/* Spacer — hidden on mobile (takes flex:2) */}
        <div
          className="why-podium-hero-spacer"
          style={{
            flex: '2 0 0',
            alignSelf: 'stretch',
            width: '1px',
            position: 'relative',
            overflow: 'clip',
          }}
        />
      </div>
    </section>
  )
}
