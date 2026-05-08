const BG_BLUE  = '/images/cta-bg-blue.png'
const BG_RED   = '/images/cta-bg-red.png'
const CARD_BG  = '/images/cta-card-bg.png'

interface CTASectionProps {
  headline?: string
  buttonText?: string
  buttonHref?: string
}

export default function CTASection({
  headline  = 'See how Larry helps grow your revenue by 30% without adding headcount.',
  buttonText = 'Show me how',
  buttonHref = 'https://calendly.com/umar-softaims/hvac-automation',
}: CTASectionProps = {}) {
  return (
    <div className="relative w-full flex flex-col items-center gap-[10px] px-[24px] py-[60px] tablet:px-[48px] tablet:py-[72px] desktop:p-[80px] overflow-hidden bg-[linear-gradient(180deg,rgb(28,29,24)_0%,rgb(0,0,0)_100%)]">

      {/* bg blobs */}
      <img src={BG_BLUE} alt="" aria-hidden="true"
        className="absolute w-[1147px] h-[1147px] -top-[645px] -left-[531px] z-0 pointer-events-none object-fill" />
      <img src={BG_RED} alt="" aria-hidden="true"
        className="absolute w-[1147px] h-[1147px] -bottom-[640px] -right-[627px] z-0 pointer-events-none object-fill" />

      {/* card */}
      <div className="relative z-[1] w-full max-w-[1440px] flex flex-col tablet:flex-row flex-wrap items-center justify-center gap-[48px] px-[24px] py-[60px] tablet:px-[48px] tablet:py-[72px] desktop:p-[80px] rounded-[32px] overflow-clip">

        {/* card bg image */}
        <img src={CARD_BG} alt="" aria-hidden="true"
          className="absolute inset-0 w-full h-full rounded-[inherit] object-cover object-center block z-0" />

        {/* heading */}
        <div className="relative z-[1] flex flex-col flex-[1_0_0] items-center gap-[24px] tablet:min-w-[555px] tablet:max-w-[914px] desktop:min-w-0 desktop:max-w-[1440px] overflow-visible">
          <div className="flex flex-col items-start gap-[10px] w-full max-w-[900px]">
            <h3 className="m-0 w-full font-grenette text-[32px] desktop:text-[40px] font-normal leading-[120%] tracking-[0] text-white whitespace-pre-wrap break-words">
              {headline}
            </h3>
          </div>
        </div>

        {/* button */}
        <div className="relative z-[1] shrink-0">
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-row items-center justify-center gap-[10px] px-[32px] py-[16px] bg-crimson rounded-[50px] no-underline cursor-pointer whitespace-nowrap"
          >
            <p className="m-0 font-graphik-semi text-[18px] font-semibold leading-[18px] tracking-[0] text-center text-cream">
              {buttonText}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
