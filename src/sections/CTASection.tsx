const BG_BLUE   = '/images/cta-bg-blue.png'
const BG_RED    = '/images/cta-bg-red.png'
const CARD_BG   = '/images/cta-card-bg.png'

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
    <div
      className="relative flex w-full flex-col items-center gap-[10px] overflow-hidden bg-[linear-gradient(180deg,rgb(28,29,24)_0%,rgb(0,0,0)_100%)] px-[24px] py-[56px] tablet:px-[48px] tablet:py-[64px] desktop:p-[80px]"
    >
      <img
        src={BG_BLUE}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-[-531px] top-[-645px] z-0 h-[1147px] w-[1147px] object-fill"
      />

      <img
        src={BG_RED}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute bottom-[-640px] right-[-627px] z-0 h-[1147px] w-[1147px] object-fill"
      />

      <div className="relative z-[1] flex w-full max-w-[1440px] flex-col items-start gap-[32px] overflow-hidden rounded-[24px] px-[28px] py-[48px] tablet:p-[48px] desktop:flex-row desktop:items-center desktop:gap-[48px] desktop:rounded-[32px] desktop:p-[80px]">
        <img
          src={CARD_BG}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 z-0 block h-full w-full rounded-[inherit] object-cover object-center"
        />

        <div className="relative z-[1] flex w-full max-w-[1440px] flex-[1_0_0] flex-col items-center gap-[24px] overflow-visible desktop:w-px">
          <div className="flex w-full max-w-[900px] flex-col items-start gap-[10px]">
            <h3 className="m-0 w-full break-words whitespace-pre-wrap font-grenette text-[28px] font-normal leading-[120%] tracking-[0] text-white tablet:text-[34px] desktop:text-[40px]">
              {headline}
            </h3>
          </div>
        </div>

        <div className="relative z-[1] shrink-0">
          <a
            href={buttonHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex cursor-pointer flex-row items-center justify-center gap-[10px] whitespace-nowrap rounded-[50px] bg-crimson px-[32px] py-[16px] no-underline"
          >
            <p className="m-0 text-center font-graphik-semibold text-[18px] font-semibold leading-[18px] tracking-[0] text-cream">
              {buttonText}
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}
