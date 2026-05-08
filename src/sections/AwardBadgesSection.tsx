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
    <section className="flex w-full justify-center px-[24px] pb-[56px] pt-[40px] tablet:px-[48px] tablet:pb-[64px] tablet:pt-[48px] desktop:px-[80px] desktop:pb-[80px] desktop:pt-[64px]">
      <div className="flex w-full max-w-[800px] flex-wrap content-start items-start justify-center gap-[24px] tablet:gap-[32px] desktop:gap-[48px]">
        {BADGES.map((badge, i) => (
          <img
            key={i}
            src={badge.src}
            alt={badge.alt}
            width={badge.width}
            height={badge.height}
            className="block h-[76px] w-auto shrink-0 object-cover tablet:h-[90px] desktop:h-auto"
          />
        ))}
      </div>
    </section>
  )
}
