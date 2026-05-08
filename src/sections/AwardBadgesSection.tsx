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
    <section className="flex justify-center w-full px-0 pt-[64px] pb-[40px] tablet:px-[24px] tablet:pb-[72px] desktop:px-[80px] desktop:pb-[80px]">
      <div className="flex flex-wrap content-start justify-center items-start gap-[48px] w-full max-w-[800px] px-[24px] tablet:px-0">
        {BADGES.map((badge, i) => (
          <img
            key={i}
            src={badge.src}
            alt={badge.alt}
            width={badge.width}
            height={badge.height}
            className="block shrink-0 object-cover"
            style={{ width: badge.width, height: badge.height }}
          />
        ))}
      </div>
    </section>
  )
}
