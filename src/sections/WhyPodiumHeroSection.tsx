export default function WhyCloseCrewHeroSection() {
  return (
    <section className="relative flex w-full flex-col items-center gap-[40px] overflow-hidden bg-nav px-[24px] py-[60px] tablet:px-[48px] tablet:py-[72px] desktop:flex-row desktop:place-content-center desktop:items-center desktop:gap-[64px] desktop:p-[80px]">
      {/* hero photo — full cover on mobile, right-side art on desktop */}
      <div className="absolute right-0 top-0 bottom-0 w-full h-full overflow-hidden tablet:h-[300px] desktop:absolute desktop:bottom-0 desktop:right-0 desktop:top-0 desktop:h-auto">
        <img
          className="block h-full w-full object-cover object-center opacity-90 tablet:opacity-100 desktop:absolute desktop:bottom-0 desktop:left-auto desktop:right-0 desktop:top-0 desktop:w-[599px]"
          src="/images/why-podium-hero-photo.png"
          alt="Contractor professional"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 bg-white/5 md:hidden block" />
      </div>

      {/* content wrapper */}
      <div className="relative flex h-min w-full max-w-[1200px] flex-col place-content-center items-center gap-[40px] overflow-clip desktop:w-px desktop:flex-[1_0_0] desktop:flex-row desktop:gap-[64px]">

        {/* text + CTA */}
        <div className="relative flex h-min w-full flex-col place-content-start items-start gap-[40px] overflow-visible desktop:w-px desktop:flex-[10_0_0] desktop:gap-[48px]">

          <div className="flex flex-col place-content-center items-start gap-[24px] w-full h-min overflow-visible">
            <div className="flex flex-col place-content-center items-start gap-[24px] w-full">
              <h1 className="m-0 w-full text-left font-grenette text-[34px] font-normal leading-[110%] tracking-[0] text-cream tablet:text-[42px] desktop:text-[52px]">
                Every lead is a job waiting to happen. Larry makes sure it does.
              </h1>
            </div>

            <p className="m-0 w-full font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-cream text-left">
              Larry is an AI Employee who runs your phones, fills your calendar,
              <span className="md:block  inline">
                and grows your memberships so your team can focus on the work.
              </span>
              
            </p>
          </div>

          <a
            href="https://calendly.com/umar-softaims/hvac-automation"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center shrink-0 bg-crimson rounded-[50px] px-[28px] py-[16px] no-underline cursor-pointer"
          >
            <span className="font-graphik-semi text-[18px] font-semibold leading-[18px] tracking-[0] text-cream whitespace-nowrap">
              Get a demo
            </span>
          </a>
        </div>

        {/* spacer */}
        <div className="hidden tablet:block flex-[2_0_0] self-stretch w-px relative overflow-clip" />
      </div>
    </section>
  )
}
