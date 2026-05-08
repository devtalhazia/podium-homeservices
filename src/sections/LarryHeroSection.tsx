const DEMO_URL = 'https://calendly.com/umar-softaims/hvac-automation'

export default function LarryHeroSection() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center gap-[24px] overflow-hidden bg-[#18181c] px-[24px] py-[56px] tablet:px-[48px] tablet:py-[64px] desktop:flex-row desktop:gap-[30px] desktop:px-[80px] desktop:py-[48px]"
    >
      <div className="absolute left-0 right-0 top-0 z-0 h-[420px] aspect-[2.07792] overflow-visible tablet:h-[500px] desktop:h-[578px]">
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
        className="absolute bottom-[-420px] right-[-380px] top-[220px] z-0 w-[560px] rounded-full bg-[#653130] blur-[125px] tablet:bottom-[-402px] tablet:right-[-361px] tablet:w-[647px] desktop:top-[208px]"
      />

      <div
        aria-hidden="true"
        className="absolute left-[-420px] top-[-400px] z-0 h-[560px] w-[560px] rounded-full bg-[#284568] blur-[125px] tablet:left-[-383px] tablet:top-[-370px] tablet:h-[646px] tablet:w-[647px]"
      />

      <div className="relative z-[1] flex w-full max-w-[705px] flex-col items-start justify-start gap-[24px] tablet:gap-[28px] desktop:w-px desktop:min-w-[505px] desktop:flex-[1_0_0] desktop:gap-[32px]">
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

          <h1 className="m-0 break-words text-left font-grenette text-[34px] font-normal leading-[110%] tracking-[0] text-white tablet:text-[42px] desktop:text-[52px]">
            The AI Employee that books more jobs and gets work done
          </h1>
        </div>

        <p className="m-0 break-words text-left font-graphik md:text-[16px] text-sm font-normal leading-[150%] text-white desktop:text-[18px]">
          Your customers expect personal, always-on service. Larry knows your business and works to book more jobs, take on manual admin work, and respond to customers before your competition.
        </p>

        <div className="flex items-start md:justify-start justify-center w-full">
          <a
            href={DEMO_URL}
            target="_blank"
            rel="noopener noreferrer"
            onFocus={(e) => { (e.currentTarget as HTMLElement).style.outline = '2px solid #fff' }}
            onBlur={(e) => { (e.currentTarget as HTMLElement).style.outline = 'none' }}
            className="inline-flex cursor-pointer flex-row items-center justify-center gap-[10px] rounded-[50px] bg-crimson px-[32px] py-[16px] no-underline outline-none focus:outline focus:outline-2 focus:outline-white"
          >
            <span className="whitespace-pre font-graphik-semibold text-[18px] font-semibold leading-[18px] tracking-[0] text-cream">
              See Larry AI in action
            </span>
          </a>
        </div>
      </div>

      <div className="relative z-[1] md:flex hidden w-full max-w-[705px] flex-col items-center justify-center gap-[10px] desktop:w-px desktop:min-w-[505px] desktop:flex-[1_0_0]">
        <div className="relative h-[240px] w-full overflow-visible tablet:h-[300px] desktop:h-[376px]">
          <img
            src="/images/larry-hero-mockup.png"
            alt="Larry AI employee conversation interface"
            width={1387}
            height={985}
            className="block h-[240px] w-full rounded-[12px] object-cover object-top tablet:h-[300px] desktop:h-[376px]"
          />
        </div>
      </div>
    </section>
  )
}
