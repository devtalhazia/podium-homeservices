const BG = '/images/plans-hero-bg.png'

export default function PlansHeroSection() {
  return (
    <section className="relative w-full flex flex-col items-center px-[24px] pt-[64px] pb-0 tablet:px-[24px] tablet:pt-[72px] desktop:px-[80px] desktop:pt-[80px] bg-nav z-0">

      {/* blue glow blob */}
      <div aria-hidden="true" className="absolute w-[757px] h-[757px] rounded-full bg-[#284568] blur-[125px] -top-[279px] -left-[327px] z-0 pointer-events-none" />

      {/* red/crimson glow blob */}
      <div aria-hidden="true" className="absolute w-[731px] h-[731px] rounded-full bg-[#653130] blur-[125px] z-0 pointer-events-none" style={{ top: 'calc(24.2%)', right: -422 }} />

      {/* carbon bg image */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-[578px] z-0 pointer-events-none overflow-hidden">
        <img src={BG} alt="" className="block w-full h-full object-cover object-top" />
      </div>

      {/* text */}
      <div className="relative z-[1] flex flex-col items-center w-full max-w-full tablet:max-w-full desktop:w-[1080px] desktop:max-w-full pb-0 desktop:pb-[64px]">

        {/* preheader */}
        <div className="w-full pb-[24px]">
          <p className="m-0 font-graphik-medium text-[14px] desktop:text-[16px] font-medium leading-[150%] tracking-[0.1em] uppercase text-center text-[rgb(170,170,173)]">
            Get started today
          </p>
        </div>

        {/* heading + subheader */}
        <div className="flex flex-col items-center gap-[16px] w-full">
          <h2 className="m-0 w-full font-grenette text-[36px] desktop:text-[46px] font-normal leading-[110%] tracking-[0] text-center text-white">
            Agents and platform packages built for home services
          </h2>
          <p className="m-0 w-full font-graphik text-[14px] desktop:text-[16px] font-normal leading-[150%] tracking-[0] text-center text-[rgb(232,232,232)]">
            Grow your revenue with Larry, the AI Employee that communicates
            with customers, books into your calendar, and keeps you updated
            in real time. Start generating 30% more revenue today.
          </p>
        </div>
      </div>
    </section>
  )
}
