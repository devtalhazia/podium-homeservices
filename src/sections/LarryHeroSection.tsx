const DEMO_URL = 'https://calendly.com/umar-softaims/hvac-automation'

export default function LarryHeroSection() {
  return (
    <section className="relative w-full flex flex-col desktop:flex-row items-center justify-center gap-[30px] px-[24px] py-[60px] tablet:px-[48px] tablet:py-[72px] desktop:px-[80px] desktop:py-[48px] overflow-hidden bg-nav">

      {/* carbon texture bg */}
      <div className="absolute top-0 left-0 right-0 h-[180px] tablet:h-[578px] z-0 overflow-visible" style={{ aspectRatio: '2.07792' }}>
        <img src="/images/larry-hero-bg.png" alt="" width={2880} height={1386} className="block w-full h-full object-cover object-center" />
      </div>

      {/* red-pink ambient blur (right) */}
      <div aria-hidden="true" className="absolute z-0 rounded-full w-[647px] blur-[125px] bg-[#653130] top-[208px] -bottom-[402px] -right-[361px]" />

      {/* blue ambient blur (top-left) */}
      <div aria-hidden="true" className="absolute z-0 rounded-full w-[647px] h-[646px] blur-[125px] bg-[#284568] -top-[370px] -left-[383px]" />

      {/* text column */}
      <div className="relative z-[1] flex flex-col flex-[1_0_0] items-center tablet:items-center desktop:items-start justify-start gap-[32px] w-full desktop:w-px desktop:min-w-[505px] desktop:max-w-[705px]">

        {/* text + heading */}
        <div className="flex flex-col gap-[24px] w-full">

          {/* Meet Larry label */}
          <div className="flex flex-row items-center justify-center desktop:justify-start gap-[9.41px] w-[160px] mx-auto desktop:mx-0">
            <img src="/images/larry-icon.svg" alt="" width={28} height={28} className="block shrink-0" />
            <p className="m-0 font-grenette-semi text-[24px] font-semibold leading-[100%] text-white whitespace-pre">
              Meet Larry
            </p>
          </div>

          <h1 className="m-0 font-grenette text-[52px] font-normal leading-[110%] tracking-[0] text-white text-center desktop:text-left break-words">
            The AI Employee that books more jobs and gets work done
          </h1>
        </div>

        <p className="m-0 font-graphik text-[18px] font-normal leading-[150%] text-white text-center desktop:text-left break-words">
          Your customers expect personal, always-on service. Larry knows your business and works to book more jobs, take on manual admin work, and respond to customers before your competition.
        </p>

        {/* CTA */}
        <div className="flex items-center tablet:items-center desktop:items-start">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-row items-center justify-center gap-[10px] px-[32px] py-[16px] bg-crimson rounded-[50px] no-underline cursor-pointer focus-visible:outline-2 focus-visible:outline-white"
          >
            <span className="font-graphik-semi text-[18px] font-semibold leading-[18px] tracking-[0] text-cream whitespace-pre">
              See Larry AI in action
            </span>
          </a>
        </div>
      </div>

      {/* media column — hidden on mobile, shown tablet+ */}
      <div className="hidden tablet:flex relative z-[1] flex-col flex-[1_0_0] items-center justify-center gap-[10px] w-full desktop:w-px desktop:min-w-[505px] desktop:max-w-[705px]">
        <div className="w-full h-[376px] relative overflow-visible">
          <img
            src="/images/larry-hero-mockup.png"
            alt="Larry AI employee conversation interface"
            width={1387}
            height={985}
            className="block w-full h-[376px] object-cover object-top rounded-[12px]"
          />
        </div>
      </div>
    </section>
  )
}
