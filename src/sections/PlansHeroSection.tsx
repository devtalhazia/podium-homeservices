const BG = '/images/plans-hero-bg.png'

export default function PlansHeroSection() {
  return (
    <section className="relative z-0 flex w-full flex-col items-center bg-[#18181c] px-[80px] pb-0 pt-[80px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-327px] top-[-279px] z-0 h-[757px] w-[757px] rounded-full bg-[#284568] blur-[125px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-422px] top-[24.2%] z-0 h-[731px] w-[731px] rounded-full bg-[#653130] blur-[125px]"
      />

      <div className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-[578px] overflow-hidden" aria-hidden="true">
        <img
          src={BG}
          alt=""
          className="block h-full w-full object-cover object-top"
        />
      </div>

      <div className="relative z-[1] flex w-[1080px] max-w-full flex-col items-center pb-[64px]">
        <div className="w-full pb-[24px]">
          <p className="m-0 text-center font-graphik-medium text-[16px] font-medium uppercase leading-[150%] tracking-[0.1em] text-[rgb(170,170,173)]">
            Get started today
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-[16px]">
          <h2 className="m-0 w-full text-center font-grenette text-[46px] font-normal leading-[110%] tracking-[0] text-white">
            Agents and platform packages built for home services
          </h2>

          <p className="m-0 w-full text-center font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-[rgb(232,232,232)]">
            Grow your revenue with Larry, the AI Employee that communicates
            with customers, books into your calendar, and keeps you updated
            in real time. Start generating 30% more revenue today.
          </p>
        </div>
      </div>
    </section>
  )
}
