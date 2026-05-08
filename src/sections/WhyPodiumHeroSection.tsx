export default function WhyPodiumHeroSection() {
  return (
    <section className="relative flex w-full items-center justify-center overflow-hidden bg-[#18181c] px-[24px] py-[56px] tablet:px-[48px] tablet:py-[64px] desktop:p-[80px]">
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 hidden w-[445px] aspect-square overflow-visible desktop:block">
        <img
          src="/images/why-podium-hero-photo.png"
          alt="Contractor professional"
          className="absolute bottom-0 right-0 top-0 block w-[599px] object-cover object-center"
        />
      </div>

      <div className="relative flex w-full max-w-[1200px] flex-col items-start gap-[40px] desktop:w-px desktop:flex-[1_0_0] desktop:flex-row desktop:items-center desktop:gap-[64px]">
        <div className="relative flex w-full flex-col items-start gap-[40px] desktop:w-px desktop:flex-[10_0_0] desktop:gap-[48px]">
          <div className="flex w-full flex-col items-start gap-[24px]">
            <div className="flex w-full flex-col items-start gap-[24px]">
              <h1 className="m-0 w-full text-left font-grenette text-[34px] font-normal leading-[110%] tracking-[0] text-cream tablet:text-[44px] desktop:text-[52px]">
                Every lead is a job waiting to happen. Larry makes sure it does.
              </h1>
            </div>

            <p className="m-0 w-full text-left font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-cream">
              Larry is an AI Employee who runs your phones, fills your calendar,{' '}
              and grows your memberships so your team can focus on the work.
            </p>
          </div>

          <a
            href="/demo"
            className="inline-flex shrink-0 cursor-pointer items-center justify-center rounded-[50px] bg-crimson px-[28px] py-[16px] no-underline"
          >
            <span className="whitespace-nowrap font-graphik-semibold text-[18px] font-semibold leading-[18px] tracking-[0] text-cream">
              Get a demo
            </span>
          </a>
        </div>

        <div className="hidden self-stretch overflow-clip desktop:block desktop:w-px desktop:flex-[2_0_0]" />
      </div>
    </section>
  )
}
