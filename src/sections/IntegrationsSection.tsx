import '../styles/integrations.css'

const DEMO_URL = 'https://homeservices.podium.com/demo'

/* ── Arrow SVG (right-pointing triangle, stroke only, 24×24)
   Source: last <svg> in dump, path id="jSlXhnrbh"
   viewBox="0 0 24 24", M 12.5 6.25 L 0 0 L 0 12.5 Z, translate(5.75 5.75)
   stroke-width=2, stroke=rgb(24,24,28), fill=transparent ── */
const ArrowRight = () => (
  <svg
    role="presentation"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    style={{ display: 'block', width: '24px', height: '24px', flexShrink: 0 }}
  >
    <path
      d="M 12.5 6.25 L 0 0 L 0 12.5 Z"
      fill="transparent"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="rgb(24, 24, 28)"
      transform="translate(5.75 5.75)"
    />
  </svg>
)

/* ── Logo columns
   Images from dump (already in public/images/):
   Col 1: Rtmpb8jTnnHxFOVSECJrXF2P1aY.png  614×193 → rendered 300×98px (aspect-ratio 3.05556)
   Col 2: TrODOlVpLdpVYgk4CzxDjIGa8.png    614×192 → rendered 300×98px
   Col 3: iinIutGChpcwgCgXNlBcjfDPsUQ.png  614×192 → rendered 300×98px
   Col 4: cqK3npVvIsQ4bT9MEtc3KEyqCMs.png  302×82  → rendered height:48px width:auto (aspect-ratio 3.68)
   CSS source:
     .framer-s3euqz{aspect-ratio:3.05556;height:98px;width:300px}
     .framer-1w3cu4t{height:48px;width:auto}
── */
const LOGO_ROWS = [
  { src: '/images/Rtmpb8jTnnHxFOVSECJrXF2P1aY.png', alt: '' },
  { src: '/images/TrODOlVpLdpVYgk4CzxDjIGa8.png',   alt: '' },
  { src: '/images/iinIutGChpcwgCgXNlBcjfDPsUQ.png',  alt: '' },
]

export default function IntegrationsSection() {
  return (
    /* .framer-o50g4r
       background-color: #f0f0f3
       padding: 64px 80px  (desktop)
       display: flex; flex-direction: column; align-items: center; justify-content: center
       gap: 10px; width: 100%; overflow: clip */
    <section
      className="integrations-section"
      style={{
        backgroundColor: '#f0f0f3',
        padding: '64px 80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '10px',
        width: '100%',
        overflow: 'clip',
        position: 'relative',
      }}
    >
      {/* .framer-1d9vvfx  max-width:1200px, flex-col, align-center, gap:10px */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '10px',
          width: '100%',
          maxWidth: '1200px',
          padding: 0,
        }}
      >
        {/* .framer-18n4kb3  heading wrapper: flex-col, align-center, gap:16px, padding:0 0 16px */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            width: '100%',
            padding: '0 0 16px',
          }}
        >
          {/* h3 — framer-styles-preset-19h1oaz
              font-family: "Grenette Regular"
              font-size: 40px
              font-weight: 400
              line-height: 120%
              letter-spacing: 0px
              color: rgb(28, 27, 24)
              text-align: center */}
          <h3
            style={{
              fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
              fontSize: '40px',
              fontWeight: 400,
              lineHeight: '120%',
              letterSpacing: '0px',
              color: 'rgb(28, 27, 24)',
              textAlign: 'center',
              margin: 0,
              padding: 0,
            }}
          >
            Connect with the tools you already use
          </h3>
        </div>

        {/* .framer-1fftqv2  logo grid row
            flex-direction:row, align-items:center, justify-content:center
            gap:30px, width:100%, overflow:clip */}
        <div
          className="integrations-logo-grid"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '30px',
            width: '100%',
            overflow: 'clip',
          }}
        >
          {/* Columns 1–3: each .framer-1ukc6sc / .framer-gpkbnm / .framer-1k2ur2o
              flex:1 0 0, height:91px, flex-col, align-center, justify-center */}
          {LOGO_ROWS.map((row, i) => (
            <div
              key={i}
              className="integrations-logo-col"
              style={{
                flex: '1 0 0',
                height: '91px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {/* .framer-s3euqz  aspect-ratio:3.05556, height:98px, width:300px */}
              <img
                src={row.src}
                alt={row.alt}
                className="integrations-logo-img"
                style={{
                  width: '300px',
                  height: '98px',
                  objectFit: 'cover',
                  display: 'block',
                  borderRadius: 'inherit',
                  objectPosition: 'center',
                }}
              />
            </div>
          ))}

          {/* Column 4: .framer-15jvj6i — same flex cell
              contains .framer-1w3cu4t: height:48px, width:auto (aspect-ratio:3.68)
              Image: cqK3npVvIsQ4bT9MEtc3KEyqCMs.png 302×82 ("200+ integrations" badge) */}
          <div
            className="integrations-logo-col"
            style={{
              flex: '1 0 0',
              height: '91px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src="/images/cqK3npVvIsQ4bT9MEtc3KEyqCMs.png"
              alt="200+ integrations"
              className="integrations-badge-img"
              style={{
                height: '48px',
                width: 'auto',
                display: 'block',
              }}
            />
          </div>
        </div>

        {/* .framer-12mc4sk  CTA row
            flex-col, align-center, justify-content:space-between, padding:32px 0 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            padding: '32px 0',
          }}
        >
          {/* Outline button — framer-kr7hzg / framer-v-c7dcid
              border:2px solid rgb(24,24,28), border-radius:50px
              padding:16px 32px, background:transparent
              gap:10px between text and arrow */}
          <a
            href={DEMO_URL}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '10px',
              padding: '16px 32px',
              border: '2px solid rgb(24, 24, 28)',
              borderRadius: '50px',
              backgroundColor: 'transparent',
              textDecoration: 'none',
              cursor: 'pointer',
              width: 'min-content',
              whiteSpace: 'nowrap',
            }}
          >
            {/* Button label: "Graphik Semibold", 18px, 600, 0px letter-spacing, 18px line-height, rgb(28,27,24) */}
            <span
              style={{
                fontFamily: '"Graphik Semibold", "Graphik Semibold Placeholder", sans-serif',
                fontSize: '18px',
                fontWeight: 600,
                letterSpacing: '0px',
                lineHeight: '18px',
                textAlign: 'center',
                color: 'rgb(28, 27, 24)',
                whiteSpace: 'pre',
              }}
            >
              Watch a demo
            </span>
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
