const CRIMSON = 'rgb(157, 64, 60)'
const INK     = '#1c1b18'
const INK_SOFT = '#4e4a44'
const GRAY_MID = 'rgb(98, 98, 101)'

const ArrowSVG = () => (
  <svg viewBox="0 0 14 14" width="14" height="14" overflow="visible" aria-hidden="true" className="block shrink-0">
    <path d="M 0 7 L 14 7 M 7 0 L 14 7 L 7 14" fill="transparent" strokeWidth="2" stroke={CRIMSON} strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

function FeatureItem({ title, body, gap = 6 }: { title: string; body: string; gap?: number }) {
  return (
    <div className="flex flex-col w-full py-[16px] overflow-hidden" style={{ gap }}>
      <h6 className="m-0 font-grenette-semi text-[24px] font-semibold leading-[120%] text-left" style={{ color: INK }}>
        {title}
      </h6>
      <p className="m-0 font-graphik text-[16px] font-normal leading-[150%] text-left" style={{ color: INK_SOFT }}>
        {body}
      </p>
    </div>
  )
}

function CTALink({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex flex-wrap items-center gap-[32px] py-[24px] w-full">
      <a
        href={href}
        className="flex flex-row items-center gap-0 no-underline cursor-pointer border-b-2 bg-transparent"
        style={{ borderColor: CRIMSON }}
      >
        <div className="flex flex-row items-center gap-[10px] w-min">
          <p className="m-0 whitespace-pre font-graphik-semi text-[18px] font-semibold leading-[18px] text-center" style={{ color: CRIMSON }}>
            {label}
          </p>
        </div>
        <div className="flex items-center justify-center p-[5px]">
          <ArrowSVG />
        </div>
      </a>
    </div>
  )
}

interface CopyBlockProps {
  preheader: string
  heading: string
  features: Array<{ title: string; body: string }>
}
function CopyBlockInner({ preheader, heading, features }: CopyBlockProps) {
  return (
    <div className="flex flex-col gap-0 w-full">
      <div className="flex flex-col gap-0 w-full">
        <div className="flex flex-col gap-[5px] w-full">
          <div className="flex flex-col gap-[10px] w-full pb-[8px]">
            <h6 className="m-0 font-graphik-medium text-[16px] font-medium leading-[150%] tracking-[0.1em] uppercase text-left whitespace-pre-wrap break-words" style={{ color: GRAY_MID }}>
              {preheader}
            </h6>
          </div>
          <div className="w-full pb-[16px]">
            <h4 className="m-0 font-grenette text-[36px] font-normal leading-[120%] text-left whitespace-pre-wrap break-words" style={{ color: INK }}>
              {heading}
            </h4>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-[17px] w-full">
        {features.map(f => (
          <FeatureItem key={f.title} title={f.title} body={f.body} />
        ))}
      </div>
    </div>
  )
}

const CSR_FEATURES = [
  { title: 'Responds immediately, 24/7', body: 'Most home services businesses lose 40% of leads after-hours. Larry works day and night so you are always the first to respond.' },
  { title: 'Books directly', body: "Larry handles your entire schedule, booking jobs and managing each technician's calendar in your FSM." },
  { title: 'Optimizes technician scheduling', body: 'Larry knows your routes and technician skillsets to suggest appointments and technicians that are available and nearby.' },
  { title: 'Works across every lead source', body: 'Larry handles communications from calls, texts, webchats, third-party lead providers, and email in one inbox; accessible to Larry and your entire team.' },
]

function CSRSideBySide() {
  return (
    <div className="flex flex-col desktop:flex-row items-center gap-[30px] w-full max-w-[1440px]">
      {/* Copy block — order:1 on mobile (after image), order:0 on desktop (natural DOM order, left) */}
      <div className="order-[1] desktop:order-[0] flex flex-col flex-none desktop:flex-[1_0_0] w-full desktop:min-w-[505px] desktop:max-w-[705px] gap-[32px] p-0 desktop:pr-[20px]">
        <div className="flex flex-col gap-0 w-full">
          <div className="flex flex-col gap-[5px] w-full">
            <div className="flex flex-col gap-[10px] w-full pb-[8px]">
              <h6 className="m-0 font-graphik-medium text-[16px] font-medium leading-[150%] tracking-[0.1em] uppercase text-left whitespace-pre-wrap break-words" style={{ color: GRAY_MID }}>
                Schedules jobs autonomously
              </h6>
            </div>
            <div className="w-full pb-[16px]">
              <h4 className="m-0 font-grenette text-[36px] font-normal leading-[120%] text-left whitespace-pre-wrap break-words" style={{ color: INK }}>
                Your #1 converting CSR
              </h4>
            </div>
          </div>
          <div className="flex flex-col gap-[17px] w-full">
            {CSR_FEATURES.map(f => (
              <FeatureItem key={f.title} title={f.title} body={f.body} gap={4} />
            ))}
          </div>
        </div>
        <CTALink href="/ai/larry" label="Learn more about Larry" />
      </div>

      {/* Image panel — order:0 on mobile (first), order:1 on desktop (right) */}
      <div
        className="order-[0] desktop:order-[1] relative bg-[#18181c] rounded-[24px] tablet:rounded-[16px] flex-none desktop:flex-[1_0_0] w-full desktop:min-w-[505px] h-[200px] tablet:h-[375px] desktop:h-[640px] overflow-hidden"
      >
        <div className="absolute z-0 blur-[125px] bg-[#284568] rounded-full w-[507px] h-[520px] -top-[220px] -left-[152px] pointer-events-none" />
        <div className="absolute z-0 blur-[125px] bg-[#653130] rounded-full w-[731px] pointer-events-none" style={{ top: 239, bottom: -330, right: -422 }} />
        <picture>
          <source media="(max-width: 767.98px)" srcSet="/images/zZwf3lkmKGO8s6wtME3DMElbxg.png" />
          <img
            src="/images/VzJWSnR4e6aFeMKZLu0em2bjvg.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="absolute block object-cover object-center z-[1]"
            style={{ width: 387, height: 570, top: 'calc(50% - 285px)', left: 'calc(49.901% - 193.5px)' }}
          />
        </picture>
      </div>
    </div>
  )
}

const COMMS_FEATURES = [
  { title: 'Answers your phones with Voice AI', body: 'Larry manages your front desk, answers the phone 24/7, and books jobs directly into your calendar—all while sounding like your best employee.' },
  { title: 'Reduce no-shows with text confirmations', body: 'Automatically remind customers about upcoming appointments to secure the job and reduce no-shows all through AI text messages.' },
  { title: 'Consolidate to a single inbox', body: 'See all lead channels in one centralized view (and get insights into what converts faster).' },
  { title: 'Centralize customer info', body: 'Keep track of customer data, including payments, in one place so your employees and Larry always stay up-to-date and your invoices get paid.' },
]

function CommsSideBySide() {
  return (
    <div className="flex flex-col desktop:flex-row items-center gap-[30px] w-full max-w-[1440px]">
      {/* Image panel LEFT — natural order (first in DOM, image on top mobile) */}
      <div className="relative bg-[#18181c] rounded-[24px] flex-none desktop:flex-[1_0_0] w-full desktop:min-w-[505px] h-[250px] tablet:h-[500px] desktop:h-[640px] overflow-hidden">
        <div className="absolute z-0 blur-[125px] bg-[#284568] rounded-full w-[507px] h-[520px] -top-[150px] -left-[182px] pointer-events-none" />
        <picture>
          <source media="(max-width: 767.98px)" srcSet="/images/gY27lDY1FDg1vqcFbCGwv3ua9w.png" />
          <img
            src="/images/vSxOIJVxSpPnS87DyXv5pEKOuu0.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="absolute block object-cover object-center overflow-visible z-[1]"
            style={{ top: 102, left: 35, right: 153, aspectRatio: '0.725746', width: 'auto', height: 'auto' }}
          />
        </picture>
      </div>

      {/* Copy block RIGHT */}
      <div className="flex flex-col flex-none desktop:flex-[1_0_0] w-full desktop:min-w-[505px] desktop:max-w-[705px] gap-[32px] p-0 desktop:pl-[48px]">
        <CopyBlockInner preheader="Eliminates SYSTEM SWITCHING" heading="All-in-one communications" features={COMMS_FEATURES} />
        <CTALink href="/#larry-jtbd" label="Learn more about Communications" />
      </div>
    </div>
  )
}

const MKTG_FEATURES = [
  { title: 'AI-managed memberships', body: 'Proactively manage and leverage your maintenance agreements to keep your calendar full in the shoulder season.' },
  { title: 'Renewals & upsells', body: 'Build more loyalty (and fill your calendar) with personalized offers, maintenance agreements, second chance leads and upsells.' },
  { title: 'Marketing & re-engagement', body: 'Mine your customer database for repeat business opportunities and second-chance leads and follow-up on unsold estimates.' },
  { title: 'Reviews', body: 'Boost your presence online by automating review requests and responses.' },
]

function MarketingSideBySide() {
  return (
    <div className="flex flex-col desktop:flex-row items-center gap-[30px] w-full max-w-[1440px]">
      {/* Copy block LEFT — order:1 on mobile, order:0 on desktop */}
      <div className="order-[1] desktop:order-[0] flex flex-col flex-none desktop:flex-[1_0_0] w-full desktop:min-w-[505px] desktop:max-w-[705px] gap-[32px] p-0 desktop:pr-[48px]">
        <CopyBlockInner preheader="Proactively Fills Your Calendar" heading="AI marketing tools that book" features={MKTG_FEATURES} />
        <CTALink href="/#larry-jtbd" label="Learn more about Marketing Tools" />
      </div>

      {/* Image panel RIGHT — order:0 on mobile (first), order:1 on desktop */}
      <div className="order-[0] desktop:order-[1] relative bg-[#18181c] rounded-[24px] flex-none desktop:flex-[1_0_0] w-full desktop:min-w-[505px] h-[250px] tablet:h-[500px] desktop:h-[640px] overflow-hidden">
        <div className="absolute z-0 blur-[125px] bg-[#653130] rounded-full w-[731px] pointer-events-none" style={{ top: 239, bottom: -330, right: -422 }} />
        <div className="absolute z-0 blur-[125px] bg-[#284568] rounded-full w-[507px] h-[520px] -top-[150px] -left-[182px] pointer-events-none" />
        <picture>
          <source media="(max-width: 1199.98px)" srcSet="/images/jQDusbuL40uT6io6JcrmrLbrA.png" />
          <img
            src="/images/590U6sGPVih9vWZyy59xoHynwlM.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="absolute block object-cover object-center z-[1]"
            style={{ width: 492, height: 568, top: 'calc(46.0938% - 284px)', left: 'calc(48.9109% - 246px)' }}
          />
        </picture>
      </div>
    </div>
  )
}

export default function CommunicationsSection() {
  return (
    <section
      id="larry-jtbd"
      className="bg-[#f0f0f3] flex flex-col items-center place-content-center gap-[64px] w-full px-[24px] py-[60px] tablet:px-[48px] tablet:py-[72px] desktop:p-[80px] overflow-hidden relative"
    >
      {/* Section heading */}
      <div className="flex flex-col items-center gap-[24px] w-full max-w-[1080px]">
        <div className="flex flex-col items-start gap-[48px] w-full pb-[24px]">
          <p className="m-0 w-full font-graphik-medium text-[16px] font-medium leading-[150%] tracking-[0.1em] uppercase text-center" style={{ color: GRAY_MID }}>
            Your AI Booking, Communications, and Marketing Guru
          </p>
        </div>
        <div className="flex flex-col items-center gap-[16px] w-full pb-[16px]">
          <h3 className="m-0 w-full font-grenette text-[40px] font-normal leading-[120%] text-center" style={{ color: INK }}>
            Larry improves operations, customer experience, and profitability
          </h3>
        </div>
      </div>

      <CSRSideBySide />
      <CommsSideBySide />
      <MarketingSideBySide />
    </section>
  )
}
