const CRIMSON = '#9d403c'

function IconMove() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M 2 10 C 2 7.55 3.76 5.53 6.08 5.09 L 4.59 6.59 L 6 8 L 10 3.99 L 6 0 L 4.59 1.41 L 6.17 2.99 L 6.17 3.05 C 2.7 3.46 0 6.42 0 10 C 0 13.87 3.13 17 7 17 L 10 17 L 10 15 L 7 15 C 4.24 15 2 12.76 2 10 Z" fill={CRIMSON} transform="translate(1.5 3.5)" />
      <path d="M 0 0 L 0 7 L 9 7 L 9 0 Z M 7 5 L 2 5 L 2 2 L 7 2 Z" fill={CRIMSON} transform="translate(13.5 13.5)" />
      <path d="M 9 0 L 0 0 L 0 7 L 9 7 Z" fill={CRIMSON} transform="translate(13.5 4.5)" />
    </svg>
  )
}

function IconPerson() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M 20 0 L 2 0 C 0.89 0 0 0.89 0 2 L 0 14 C 0 15.1 0.89 16 2 16 L 7 16 L 7 18 L 15 18 L 15 16 L 20 16 C 21.1 16 21.99 15.1 21.99 14 L 22 2 C 22 0.89 21.1 0 20 0 Z M 20 14 L 2 14 L 2 2 L 20 2 Z" fill={CRIMSON} transform="translate(1 3)" />
    </svg>
  )
}

function IconShield() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M 9 0 L 0 4 L 0 10 C 0 15.55 3.84 20.74 9 22 C 14.16 20.74 18 15.55 18 10 L 18 4 Z M 9 10.99 L 16 10.99 C 15.47 15.11 12.72 18.78 9 19.93 L 9 11 L 2 11 L 2 5.3 L 9 2.19 Z" fill={CRIMSON} transform="translate(3 1)" />
    </svg>
  )
}

function IconChat() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M 18 0 L 2 0 C 0.9 0 0.01 0.9 0.01 2 L 0 20 L 4 16 L 18 16 C 19.1 16 20 15.1 20 14 L 20 2 C 20 0.9 19.1 0 18 0 Z M 18 14 L 3.17 14 L 2 15.17 L 2 2 L 18 2 Z M 9 10 L 11 10 L 11 12 L 9 12 Z M 9 4 L 11 4 L 11 8 L 9 8 Z" fill={CRIMSON} transform="translate(2 2)" />
    </svg>
  )
}

const CARDS = [
  { icon: <IconMove />,   title: 'We handle the move',          body: "We move your data over, get your team set up, and stay with you until you're live.",          bordered: true },
  { icon: <IconPerson />, title: 'A real person in your corner', body: 'A dedicated contact who knows your business and helps you get the most out of CloseCrew.',        bordered: true },
  { icon: <IconShield />, title: 'Built from feedback in the field', body: 'What contractors tell us shapes what we build. New features ship constantly.',            bordered: true },
  { icon: <IconChat />,   title: 'Your data is secure',          body: 'Your customer information is handled securely from day one.',                                  bordered: false },
]

export default function WhyCloseCrewWorksSection() {
  return (
    <section className="w-full flex flex-col items-center gap-[56px] tablet:gap-[60px] desktop:gap-[64px] px-[24px] py-[48px] tablet:px-[80px] tablet:py-[72px] desktop:p-[80px] bg-[#222226] box-border">

      {/* heading */}
      <div className="w-full flex flex-col items-center gap-[16px]">
        <h2 className="m-0 w-full font-grenette text-[36px] desktop:text-[46px] font-normal leading-[110%] tracking-[0] text-center text-white">
          Larry works for you. We work with you.
        </h2>
        <p className="m-0 font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-center text-[rgb(232,232,232)]">
          We work with thousands of contractors. We know what you need to get live fast.
        </p>
      </div>

      {/* cards — mobile: flex-col; tablet/desktop: 2×2 grid */}
      <div className="w-full max-w-[1080px] flex flex-col gap-[8px] tablet:grid tablet:grid-cols-2 tablet:grid-rows-[repeat(2,min-content)] tablet:gap-[10px] desktop:gap-[24px]">
        {CARDS.map((card, i) => (
          <div
            key={i}
            className={[
              'flex flex-col items-center gap-[16px] p-[12px] self-start',
              card.bordered ? 'border-b border-[#4a4a4d] pb-5 tablet:border-b-0 tablet:pb-3' : '',
            ].join(' ')}
          >
            {card.icon}
            <h6 className="m-0 font-grenette-semi text-[20px] desktop:text-[24px] font-semibold leading-[120%] tracking-[0] text-center text-white">
              {card.title}
            </h6>
            <p className="m-0 font-graphik text-[14px] desktop:text-[16px] font-normal leading-[150%] tracking-[0] text-center text-[rgb(170,170,173)]">
              {card.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
