export default function WhyPodiumHeroSection() {
  return (
    <section className="relative w-full flex flex-row place-content-center items-center gap-[64px] px-[24px] py-[60px] tablet:px-[48px] tablet:py-[72px] desktop:p-[80px] overflow-hidden bg-nav">

      {/* hero photo — absolute, right side */}
      <div className="absolute top-0 bottom-0 right-0 aspect-square w-[445px] overflow-visible">
        <img
          className="absolute top-0 bottom-0 left-0 right-auto w-[751px] object-cover object-center block opacity-50 tablet:left-auto tablet:right-0 tablet:w-[723px] tablet:opacity-100 desktop:w-[599px]"
          style={{ aspectRatio: '1840 / 1366' }}
          src="/images/why-podium-hero-photo.png"
          alt="Contractor professional"
        />
      </div>

      {/* content wrapper */}
      <div className="relative flex-[1_0_0] max-w-[1200px] h-min flex flex-row place-content-center items-center gap-[64px] w-px overflow-clip">

        {/* text + CTA */}
        <div className="relative flex flex-col flex-[10_0_0] place-content-start items-start gap-[48px] w-px h-min overflow-visible tablet:px-[48px] desktop:p-0">

          <div className="flex flex-col place-content-center items-start gap-[24px] w-full h-min overflow-visible">
            <div className="flex flex-col place-content-center items-start gap-[24px] w-full">
              <h1 className="m-0 w-full font-grenette text-[42px] desktop:text-[52px] font-normal leading-[110%] tracking-[0] text-cream text-left">
                Every lead is a job waiting to happen. Larry makes sure it does.
              </h1>
            </div>

            <p className="m-0 w-full font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-cream text-left">
              Larry is an AI Employee who runs your phones, fills your calendar,{' '}
              and grows your memberships so your team can focus on the work.
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
