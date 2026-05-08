const DEMO_URL = '/demo'

export default function LarryHeroSection() {
  return (
    <section
      className="relative flex w-full flex-row items-center justify-center gap-[30px] overflow-hidden bg-[#18181c] px-[80px] py-[48px]"
    >
      <div className="absolute left-0 right-0 top-0 z-0 h-[578px] aspect-[2.07792] overflow-visible">
        <img
          src="/images/larry-hero-bg.png"
          alt=""
          width={2880}
          height={1386}
          className="block h-full w-full object-cover object-center"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-[-402px] right-[-361px] top-[208px] z-0 w-[647px] rounded-full bg-[#653130] blur-[125px]"
      />

      <div
        aria-hidden="true"
        className="absolute left-[-383px] top-[-370px] z-0 h-[646px] w-[647px] rounded-full bg-[#284568] blur-[125px]"
      />

      <div className="relative z-[1] flex w-px min-w-[505px] max-w-[705px] flex-[1_0_0] flex-col items-start justify-start gap-[32px]">
        <div className="flex w-full flex-col gap-[24px]">
          <div className="flex w-[160px] flex-row items-center gap-[9.41px]">
            <img
              src="/images/larry-icon.svg"
              alt=""
              width={28}
              height={28}
              className="block shrink-0"
            />
            <p className="m-0 whitespace-pre font-grenette-semi text-[24px] font-semibold leading-[100%] text-white">
              Meet Larry
            </p>
          </div>

          <h1 className="m-0 break-words text-left font-grenette text-[52px] font-normal leading-[110%] tracking-[0] text-white">
            The AI Employee that books more jobs and gets work done
          </h1>
        </div>

        <p className="m-0 break-words text-left font-graphik text-[18px] font-normal leading-[150%] text-white">
          Your customers expect personal, always-on service. Larry knows your business and works to book more jobs, take on manual admin work, and respond to customers before your competition.
        </p>

        <div className="flex items-start">
          <a
            href={DEMO_URL}
            className="inline-flex cursor-pointer flex-row items-center justify-center gap-[10px] rounded-[50px] bg-crimson px-[32px] py-[16px] no-underline outline-none focus:outline focus:outline-2 focus:outline-white"
          >
            <span className="whitespace-pre font-graphik-semibold text-[18px] font-semibold leading-[18px] tracking-[0] text-cream">
              See Larry AI in action
            </span>
          </a>
        </div>
      </div>

      <div className="relative z-[1] flex w-px min-w-[505px] max-w-[705px] flex-[1_0_0] flex-col items-center justify-center gap-[10px]">
        <div className="relative h-[376px] w-full overflow-visible">
          <img
            src="/images/larry-hero-mockup.png"
            alt="Larry AI employee conversation interface"
            width={1387}
            height={985}
            className="block h-[376px] w-full rounded-[12px] object-cover object-top"
          />
        </div>
      </div>
    </section>
  )
}
