import '../styles/larry-hero.css'

const DEMO_URL = 'https://calendly.com/umar-softaims/hvac-automation'

export default function LarryHeroSection() {
  return (
    <section
      className="larry-hero-outer"
      style={{
        backgroundColor: '#18181c',
        display: 'flex',
        flexFlow: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '30px',
        width: '100%',
        padding: '48px 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Carbon texture background */}
      <div
        className="larry-hero-bg"
        style={{
          aspectRatio: '2.07792',
          height: '578px',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 0,
          overflow: 'visible',
        }}
      >
        <img
          src="/images/larry-hero-bg.png"
          alt=""
          width={2880}
          height={1386}
          style={{
            display: 'block',
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </div>

      {/* Ellipse 38182 — red-pink ambient blur (right) */}
      <div
        aria-hidden="true"
        style={{
          filter: 'blur(125px)',
          zIndex: 0,
          backgroundColor: '#653130',
          borderRadius: '100%',
          width: '647px',
          position: 'absolute',
          top: '208px',
          bottom: '-402px',
          right: '-361px',
        }}
      />

      {/* Ellipse 38181 — blue ambient blur (top-left) */}
      <div
        aria-hidden="true"
        style={{
          filter: 'blur(125px)',
          zIndex: 0,
          backgroundColor: '#284568',
          borderRadius: '100%',
          width: '647px',
          height: '646px',
          position: 'absolute',
          top: '-370px',
          left: '-383px',
        }}
      />

      {/* Left column — text content */}
      <div
        className="larry-hero-text-col"
        style={{
          display: 'flex',
          flexFlow: 'column',
          flex: '1 0 0',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          gap: '32px',
          width: '1px',
          minWidth: '505px',
          maxWidth: '705px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        {/* Text + heading stack */}
        <div
          style={{
            display: 'flex',
            flexFlow: 'column',
            gap: '24px',
            width: '100%',
          }}
        >
          {/* "Meet Larry" label */}
          <div
            className="larry-hero-label"
            style={{
              display: 'flex',
              flexFlow: 'row',
              alignItems: 'center',
              gap: '9.41px',
              width: '160px',
            }}
          >
            <img
              src="/images/larry-icon.svg"
              alt=""
              width={28}
              height={28}
              style={{ display: 'block', flexShrink: 0 }}
            />
            <p
              style={{
                fontFamily: '"Grenette SemiBold", sans-serif',
                fontSize: '24px',
                fontWeight: 600,
                lineHeight: '100%',
                color: 'rgb(255, 255, 255)',
                whiteSpace: 'pre',
                margin: 0,
              }}
            >
              Meet Larry
            </p>
          </div>

          {/* H1 heading */}
          <h1
            className="larry-hero-h1"
            style={{
              fontFamily: '"Grenette Regular", sans-serif',
              fontSize: '52px',
              fontWeight: 400,
              lineHeight: '110%',
              letterSpacing: '0px',
              color: 'rgb(255, 255, 255)',
              margin: 0,
              textAlign: 'left',
              wordBreak: 'break-word',
            }}
          >
            The AI Employee that books more jobs and gets work done
          </h1>
        </div>

        {/* Body text */}
        <p
          className="larry-hero-body"
          style={{
            fontFamily: '"Graphik Regular", sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '150%',
            color: 'rgb(255, 255, 255)',
            margin: 0,
            textAlign: 'left',
            wordBreak: 'break-word',
          }}
        >
          Your customers expect personal, always-on service. Larry knows your business and works to book more jobs, take on manual admin work, and respond to customers before your competition.
        </p>

        {/* CTA button */}
        <div className="larry-hero-cta-wrap" style={{ display: 'flex', alignItems: 'flex-start' }}>
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              flexFlow: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '16px 32px',
              backgroundColor: 'rgb(157, 64, 60)',
              borderRadius: '50px',
              textDecoration: 'none',
              cursor: 'pointer',
              outline: 'none',
            }}
            onFocus={(e) => { (e.currentTarget as HTMLElement).style.outline = '2px solid #fff' }}
            onBlur={(e) => { (e.currentTarget as HTMLElement).style.outline = 'none' }}
          >
            <span
              style={{
                fontFamily: '"Graphik Semibold", sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                lineHeight: '18px',
                letterSpacing: '0px',
                color: 'rgb(247, 244, 237)',
                whiteSpace: 'pre',
              }}
            >
              See Larry AI in action
            </span>
          </a>
        </div>
      </div>

      {/* Right column — UI mockup (hidden on mobile) */}
      <div
        className="larry-hero-media-col"
        style={{
          display: 'flex',
          flexFlow: 'column',
          flex: '1 0 0',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '1px',
          minWidth: '505px',
          maxWidth: '705px',
          position: 'relative',
          zIndex: 1,
        }}
      >
        <div
          style={{
            width: '100%',
            height: '376px',
            position: 'relative',
            overflow: 'visible',
          }}
        >
          <img
            src="/images/larry-hero-mockup.png"
            alt="Larry AI employee conversation interface"
            width={1387}
            height={985}
            className="larry-hero-media-image"
            style={{
              display: 'block',
              width: '100%',
              height: '376px',
              objectFit: 'cover',
              objectPosition: 'center top',
              borderRadius: '12px',
            }}
          />
        </div>
      </div>
    </section>
  )
}
