const BG = '/images/plans-hero-bg.png'

export default function PlansHeroSection() {
  return (
    <section className="relative z-0 flex w-full flex-col items-center bg-[#18181c] px-[24px] pb-0 pt-[56px] tablet:px-[48px] tablet:pt-[64px] desktop:px-[80px] desktop:pt-[80px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-420px] top-[-360px] z-0 h-[620px] w-[620px] rounded-full bg-[#284568] blur-[125px] tablet:left-[-360px] tablet:top-[-320px] tablet:h-[700px] tablet:w-[700px] desktop:left-[-327px] desktop:top-[-279px] desktop:h-[757px] desktop:w-[757px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-420px] top-[28%] z-0 h-[620px] w-[620px] rounded-full bg-[#653130] blur-[125px] tablet:right-[-360px] tablet:top-[26%] tablet:h-[680px] tablet:w-[680px] desktop:right-[-422px] desktop:top-[24.2%] desktop:h-[731px] desktop:w-[731px]"
      />

      <div className="pointer-events-none absolute left-0 right-0 top-0 z-0 h-[420px] overflow-hidden tablet:h-[500px] desktop:h-[578px]" aria-hidden="true">
        <img
          src={BG}
          alt=""
          className="block h-full w-full object-cover object-top"
        />
      </div>

      <div className="relative z-[1] flex w-full max-w-[1080px] flex-col items-center pb-[56px] tablet:pb-[60px] desktop:pb-[64px]">
        <div className="w-full pb-[24px]">
          <p className="m-0 text-center font-graphik-medium text-[16px] font-medium uppercase leading-[150%] tracking-[0.1em] text-[rgb(170,170,173)]">
            Get started today
          </p>
        </div>

        <div className="flex w-full flex-col items-center gap-[16px]">
          <h2 className="m-0 w-full text-center font-grenette text-[30px] font-normal leading-[110%] tracking-[0] text-white tablet:text-[38px] desktop:text-[46px]">
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
