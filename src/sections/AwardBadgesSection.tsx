import '../styles/award-badges.css'

const BADGES = [
  { src: '/images/badge-1.png', width: 93, height: 106, alt: '' },
  { src: '/images/badge-2.png', width: 93, height: 106, alt: '' },
  { src: '/images/badge-3.png', width: 93, height: 106, alt: '' },
  { src: '/images/badge-4.png', width: 93, height: 106, alt: '' },
  { src: '/images/badge-inc5000.png', width: 106, height: 106, alt: '' },
  { src: '/images/trust-logo-1.png', width: 116, height: 106, alt: '' },
  { src: '/images/trust-logo-2.png', width: 123, height: 106, alt: '' },
]

export default function AwardBadgesSection() {
  return (
    <section
      className="award-badges-section"
      style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        padding: '64px 80px 80px',
      }}
    >
      {/* framer-18ex8tt: flex-wrap row, gap 48px, max-width 800px */}
      <div
        className="award-badges-container"
        style={{
          display: 'flex',
          flexFlow: 'wrap',
          placeContent: 'flex-start center',
          alignItems: 'flex-start',
          gap: 48,
          width: '100%',
          maxWidth: 800,
        }}
      >
        {BADGES.map((badge, i) => (
          <img
            key={i}
            src={badge.src}
            alt={badge.alt}
            width={badge.width}
            height={badge.height}
            style={{
              display: 'block',
              width: badge.width,
              height: badge.height,
              objectFit: 'cover',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </section>
  )
}
