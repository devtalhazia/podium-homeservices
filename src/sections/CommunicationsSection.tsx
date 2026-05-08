const CRIMSON = 'rgb(157, 64, 60)'

const ArrowSVG = () => (
  <svg viewBox="0 0 14 14" width="14" height="14" aria-hidden="true" className="block shrink-0">
    <path
      d="M 0 7 L 14 7 M 7 0 L 14 7 L 7 14"
      fill="transparent"
      strokeWidth="2"
      stroke={CRIMSON}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

function FeatureItem({ title, body, compact = false }: { title: string; body: string; compact?: boolean }) {
  return (
    <div className={`flex w-full flex-col overflow-hidden py-[16px] ${compact ? 'gap-[4px]' : 'gap-[6px]'}`}>
      <h6 className="m-0 font-grenette-semi text-[24px] font-semibold leading-[120%] tracking-[0] text-ink">
        {title}
      </h6>
      <p className="m-0 font-graphik text-[16px] font-normal leading-[150%] tracking-[0] text-ink-soft">
        {body}
      </p>
    </div>
  )
}

function CTALink({ href, label }: { href: string; label: string }) {
  return (
    <div className="flex w-full flex-wrap items-center gap-[32px] py-[24px]">
      <a
        href={href}
        className="flex cursor-pointer flex-row items-center gap-0 border-b-2 border-crimson bg-transparent no-underline"
      >
        <div className="flex w-min flex-row items-center gap-[10px]">
          <p className="m-0 whitespace-pre text-center font-graphik-semibold text-[18px] font-semibold leading-[18px] tracking-[0] text-crimson">
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
  compactFeatureGap?: boolean
}

function CopyBlockInner({ preheader, heading, features, compactFeatureGap }: CopyBlockProps) {
  return (
    <div className="flex w-full flex-col gap-0">
      <div className="flex w-full flex-col gap-0">
        <div className="flex w-full flex-col gap-[5px]">
          <div className="flex w-full flex-col gap-[10px] pb-[8px]">
            <h6 className="m-0 break-words whitespace-pre-wrap text-left font-graphik-medium text-[16px] font-medium uppercase leading-[150%] tracking-[0.1em] text-gray-mid">
              {preheader}
            </h6>
          </div>
          <div className="w-full pb-[16px]">
            <h4 className="m-0 break-words whitespace-pre-wrap text-left font-grenette text-[36px] font-normal leading-[120%] tracking-[0] text-ink">
              {heading}
            </h4>
          </div>
        </div>
      </div>

      <div className="flex w-full flex-col gap-[17px]">
        {features.map((f) => (
          <FeatureItem key={f.title} title={f.title} body={f.body} compact={compactFeatureGap} />
        ))}
      </div>
    </div>
  )
}

const CSR_FEATURES = [
  {
    title: 'Responds immediately, 24/7',
    body: 'Most home services businesses lose 40% of leads after-hours. Larry works day and night so you are always the first to respond.',
  },
  {
    title: 'Books directly',
    body: "Larry handles your entire schedule, booking jobs and managing each technician's calendar in your FSM.",
  },
  {
    title: 'Optimizes technician scheduling',
    body: 'Larry knows your routes and technician skillsets to suggest appointments and technicians that are available and nearby.',
  },
  {
    title: 'Works across every lead source',
    body: 'Larry handles communications from calls, texts, webchats, third-party lead providers, and email in one inbox; accessible to Larry and your entire team.',
  },
]

function ImagePanel({
  mobileSrc,
  desktopSrc,
  imageClassName,
}: {
  mobileSrc?: string
  desktopSrc: string
  imageClassName: string
}) {
  return (
    <div className="relative h-[250px] w-full overflow-hidden rounded-[12px] bg-[#18181c] tablet:h-[500px] tablet:rounded-[16px] desktop:h-[640px] desktop:flex-[1_0_0] desktop:rounded-[24px]">
      <div className="pointer-events-none absolute left-[-182px] top-[-150px] z-0 h-[520px] w-[507px] rounded-full bg-[#284568] blur-[125px]" />
      <div className="pointer-events-none absolute bottom-[-330px] right-[-422px] top-[239px] z-0 w-[731px] rounded-full bg-[#653130] blur-[125px]" />

      <picture>
        {mobileSrc ? <source media="(max-width: 767.98px)" srcSet={mobileSrc} /> : null}
        <img
          src={desktopSrc}
          alt=""
          aria-hidden="true"
          decoding="async"
          className={imageClassName}
        />
      </picture>
    </div>
  )
}

function SideBySide({
  copy,
  image,
  reverseDesktop = false,
  copyPadding = 'none',
}: {
  copy: JSX.Element
  image: JSX.Element
  reverseDesktop?: boolean
  copyPadding?: 'left' | 'right' | 'none'
}) {
  const rowOrder = reverseDesktop ? 'desktop:flex-row-reverse' : 'desktop:flex-row'
  const copyPad =
    copyPadding === 'left'
      ? 'desktop:pl-[48px]'
      : copyPadding === 'right'
        ? 'desktop:pr-[48px]'
        : ''

  return (
    <div className={`flex w-full max-w-[1440px] flex-col gap-[24px] tablet:gap-[30px] ${rowOrder} desktop:items-center`}>
      {image}
      <div className={`flex w-full flex-col gap-[32px] ${copyPad} desktop:max-w-[705px] desktop:flex-[1_0_0]`}>
        {copy}
      </div>
    </div>
  )
}

const COMMS_FEATURES = [
  {
    title: 'Answers your phones with Voice AI',
    body: 'Larry manages your front desk, answers the phone 24/7, and books jobs directly into your calendar-all while sounding like your best employee.',
  },
  {
    title: 'Reduce no-shows with text confirmations',
    body: 'Automatically remind customers about upcoming appointments to secure the job and reduce no-shows all through AI text messages.',
  },
  {
    title: 'Consolidate to a single inbox',
    body: 'See all lead channels in one centralized view (and get insights into what converts faster).',
  },
  {
    title: 'Centralize customer info',
    body: 'Keep track of customer data, including payments, in one place so your employees and Larry always stay up-to-date and your invoices get paid.',
  },
]

const MKTG_FEATURES = [
  {
    title: 'AI-managed memberships',
    body: 'Proactively manage and leverage your maintenance agreements to keep your calendar full in the shoulder season.',
  },
  {
    title: 'Renewals & upsells',
    body: 'Build more loyalty (and fill your calendar) with personalized offers, maintenance agreements, second chance leads and upsells.',
  },
  {
    title: 'Marketing & re-engagement',
    body: 'Mine your customer database for repeat business opportunities and second-chance leads and follow-up on unsold estimates.',
  },
  {
    title: 'Reviews',
    body: 'Boost your presence online by automating review requests and responses.',
  },
]

export default function CommunicationsSection() {
  return (
    <section
      id="larry-jtbd"
      className="relative flex w-full flex-col items-center gap-[56px] overflow-hidden bg-[#f0f0f3] px-[24px] py-[56px] tablet:gap-[60px] tablet:px-[48px] tablet:py-[72px] desktop:gap-[64px] desktop:p-[80px]"
    >
      <div className="flex w-full max-w-[1080px] flex-col items-center gap-[24px]">
        <div className="flex w-full flex-col items-start gap-[48px] pb-[24px]">
          <p className="m-0 w-full text-center font-graphik-medium text-[16px] font-medium uppercase leading-[150%] tracking-[0.1em] text-gray-mid">
            Your AI Booking, Communications, and Marketing Guru
          </p>
        </div>
        <div className="flex w-full flex-col items-center gap-[16px] pb-[16px]">
          <h3 className="m-0 w-full text-center font-grenette text-[30px] font-normal leading-[120%] tracking-[0] text-ink tablet:text-[36px] desktop:text-[40px]">
            Larry improves operations, customer experience, and profitability
          </h3>
        </div>
      </div>

      <SideBySide
        copyPadding="right"
        reverseDesktop
        copy={
          <>
            <CopyBlockInner
              preheader="Schedules jobs autonomously"
              heading="Your #1 converting CSR"
              features={CSR_FEATURES}
              compactFeatureGap
            />
            <CTALink href="/ai/larry" label="Learn more about Larry" />
          </>
        }
        image={
          <ImagePanel
            mobileSrc="/images/zZwf3lkmKGO8s6wtME3DMElbxg.png"
            desktopSrc="/images/VzJWSnR4e6aFeMKZLu0em2bjvg.png"
            imageClassName="relative z-[1] h-full w-full object-contain object-center"
          />
        }
      />

      <SideBySide
        copyPadding="left"
        copy={
          <>
            <CopyBlockInner
              preheader="Eliminates SYSTEM SWITCHING"
              heading="All-in-one communications"
              features={COMMS_FEATURES}
            />
            <CTALink href="/features/communications" label="Learn more about Communications" />
          </>
        }
        image={
          <ImagePanel
            mobileSrc="/images/gY27lDY1FDg1vqcFbCGwv3ua9w.png"
            desktopSrc="/images/vSxOIJVxSpPnS87DyXv5pEKOuu0.png"
            imageClassName="absolute left-1/2 top-1/2 z-10 h-auto w-[72%] max-w-full -translate-x-1/2 -translate-y-1/2 object-contain object-center"
          />
        }
      />

      <SideBySide
        reverseDesktop
        copyPadding="right"
        copy={
          <>
            <CopyBlockInner
              preheader="Proactively Fills Your Calendar"
              heading="AI marketing tools that book"
              features={MKTG_FEATURES}
            />
            <CTALink href="/features/marketing-tools" label="Learn more about Marketing Tools" />
          </>
        }
        image={
          <ImagePanel
            mobileSrc="/images/jQDusbuL40uT6io6JcrmrLbrA.png"
            desktopSrc="/images/590U6sGPVih9vWZyy59xoHynwlM.png"
            imageClassName="absolute left-1/2 top-1/2 z-[1] h-auto w-[82%] max-w-[520px] -translate-x-1/2 -translate-y-1/2 object-cover object-center"
          />
        }
      />
    </section>
  )
}
