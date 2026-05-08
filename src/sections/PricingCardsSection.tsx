const CARD_HEADER_IMG = '/images/plans-card-header-img.png'
const CTA_URL = 'https://calendly.com/umar-softaims/hvac-automation'

function BoltLarge() {
  return (
    <svg aria-hidden="true" width="8" height="13" viewBox="-1 -1 8 13" fill="none" className="shrink-0">
      <path
        d="M3.98764 0.0129243C3.87014 -0.0239275 3.74213 0.0198589 3.67181 0.120941L0.122895 5.22201C0.0594128 5.3134 0.0221614 5.42039 0.00744228 5.52689C-0.00733102 5.63383 -0.000218504 5.74527 0.0297502 5.84937C0.059514 5.95269 0.113859 6.05487 0.196864 6.13468C0.281416 6.21595 0.396629 6.27344 0.529525 6.27361H1.63866V10.2742C1.63866 10.3973 1.71846 10.5062 1.83591 10.543C1.95339 10.5799 2.08141 10.5365 2.15174 10.4354L5.70065 5.33433C5.76414 5.24296 5.80136 5.13594 5.8161 5.02946C5.83089 4.92245 5.8238 4.81074 5.79379 4.70658C5.76403 4.60327 5.70968 4.50107 5.62668 4.42128C5.54214 4.34005 5.42687 4.28251 5.29402 4.28234H4.18489V0.281793C4.18489 0.158667 4.10511 0.0497877 3.98764 0.0129243Z"
        fill="#F3F4EF"
      />
    </svg>
  )
}

function BoltSmall() {
  return (
    <svg aria-hidden="true" viewBox="0 0 7 12" overflow="visible" className="w-[7px] h-[12px] shrink-0">
      <path
        d="M 4.792 0.015 C 4.651 -0.027 4.498 0.022 4.413 0.137 L 0.147 5.936 C 0.073 6.04 0.026 6.159 0.009 6.283 C -0.009 6.405 0 6.53 0.036 6.649 C 0.071 6.772 0.141 6.884 0.237 6.974 C 0.344 7.073 0.487 7.13 0.637 7.132 L 1.969 7.132 L 1.969 11.679 C 1.969 11.819 2.065 11.943 2.206 11.985 C 2.348 12.027 2.501 11.978 2.586 11.863 L 6.852 6.064 C 6.926 5.96 6.974 5.842 6.991 5.717 C 7.009 5.594 7 5.469 6.964 5.35 C 6.928 5.227 6.859 5.115 6.763 5.026 C 6.657 4.926 6.513 4.869 6.363 4.868 L 5.029 4.868 L 5.029 0.32 C 5.03 0.181 4.934 0.057 4.794 0.015 Z"
        fill="rgb(196,140,138)"
      />
    </svg>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div className="flex flex-row items-center gap-[8px] w-full">
      <div className="flex flex-row items-start gap-[10px] w-[12px] pt-[1px] shrink-0">
        <BoltSmall />
      </div>
      <p className="m-0 flex-[1_0_0] font-graphik text-[14px] font-normal leading-[100%] tracking-[0.02em] text-[rgb(74,74,77)] whitespace-pre-wrap break-words">
        {text}
      </p>
    </div>
  )
}

function FeatureGroup({ title, subtitle, features }: { title: string; subtitle: string; features: string[] }) {
  return (
    <div className="flex flex-col gap-[16px] w-full">
      <div className="flex flex-col gap-0 w-full">
        <p className="m-0 font-graphik-medium text-[14px] font-medium leading-[150%] text-crimson">
          {title}
        </p>
        <div className="flex flex-row items-center gap-[4px] w-full">
          <p className="m-0 flex-[1_0_0] font-graphik text-[14px] font-normal leading-[150%] text-[rgb(123,123,125)]">
            {subtitle}
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[10px] w-full">
        {features.map((f) => (
          <FeatureItem key={f} text={f} />
        ))}
      </div>
    </div>
  )
}

const AI_EMPLOYEE_FEATURES = [
  {
    title: 'Communications',
    subtitle: 'AI handles conversations from every lead source',
    features: ['All-in-one Inbox', 'Phones + Voice AI', 'Text Messaging', 'Website Chat', 'Email', 'Automations'],
  },
  {
    title: 'Calendar & Booking',
    subtitle: 'Consolidated workflows to book jobs and get paid',
    features: ['Integrate with your calendar', 'Estimates', 'Payments and Financing', 'Reporting and Analytics'],
  },
  {
    title: 'Marketing Tools',
    subtitle: 'Automate engagement and keep your calendar full',
    features: ['Membership Management', 'Renewals and Upsells', 'Bulk Text Messaging', 'Reviews'],
  },
]

const BOOKING_ADDON_FEATURES = [
  {
    title: 'Booking',
    subtitle: 'Consolidated workflows to book jobs and get paid',
    features: ['Integrate with your calendar', 'Estimates', 'Payments and Financing', 'Reporting and Analytics'],
  },
]

function PlanCard({
  name,
  tags,
  showHeaderImage,
  subtitleText,
  featureGroups,
  bodyText,
  addonTag,
}: {
  name: string
  tags?: string[]
  showHeaderImage?: boolean
  subtitleText: string
  featureGroups: { title: string; subtitle: string; features: string[] }[]
  bodyText?: string
  addonTag?: string
}) {
  return (
    <div className="bg-[#f0f0f3] border border-[#dcdce1] rounded-[16px] flex flex-col items-start gap-[24px] w-full py-[48px] px-[16px] relative overflow-visible">
      {/* Plan Title area */}
      <div className="flex flex-col items-start gap-[16px] w-full px-[24px] pb-[8px] tablet:px-[20px]">
        <h5 className="m-0 font-grenette text-[28px] font-normal leading-[110%] text-ink text-left">
          {name}
        </h5>
        <div className="flex flex-wrap gap-[8px] w-full">
          {tags && tags[0] && (
            <div className="flex flex-row items-center gap-[3px] px-[6px] py-[2px] bg-[#667e99] border-[0.5px] border-[#b2c3d7] rounded-[4px] overflow-hidden">
              <BoltLarge />
              <p className="m-0 font-graphik-medium text-[14px] font-medium leading-[150%] text-white whitespace-nowrap">
                {tags[0]}
              </p>
            </div>
          )}
          {tags && tags.slice(1).map((tag) => (
            <div key={tag} className="flex flex-row items-center px-[6px] py-[2px] bg-[#667e99] border-[0.5px] border-[#b2c3d7] rounded-[4px]">
              <p className="m-0 font-graphik-medium text-[14px] font-medium leading-[150%] text-white whitespace-nowrap">
                {tag}
              </p>
            </div>
          ))}
          {addonTag && (
            <div className="flex flex-row items-center px-[6px] py-[2px] bg-[#667e99] border border-[#b2c3d7] rounded-[4px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
              <p className="m-0 font-graphik-medium text-[14px] font-medium leading-[150%] text-white">
                {addonTag}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Get a quote button */}
      <div className="w-full px-[24px]">
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-row items-center justify-center w-full px-[24px] py-[14px] bg-crimson rounded-[50px] no-underline cursor-pointer"
        >
          <p className="m-0 font-graphik-semi text-[18px] font-semibold leading-[18px] text-cream text-center whitespace-pre">
            Get a quote
          </p>
        </a>
      </div>

      {/* Feature Container */}
      <div className="flex flex-col gap-[32px] w-full px-[24px]">
        {showHeaderImage && (
          <img
            src={CARD_HEADER_IMG}
            alt=""
            className="block w-[89px] h-[36px] object-cover"
          />
        )}
        <div className="flex flex-row items-center gap-[4px] w-full">
          <p className="m-0 flex-[1_0_0] font-graphik text-[14px] font-normal leading-[150%] text-[rgb(123,123,125)]">
            {subtitleText}
          </p>
        </div>
        <p className="m-0 font-graphik-medium text-[14px] font-medium leading-[150%] text-ink">
          Plan details
        </p>
        {featureGroups.map((group) => (
          <FeatureGroup key={group.title} title={group.title} subtitle={group.subtitle} features={group.features} />
        ))}
        {bodyText && (
          <p className="m-0 font-graphik text-[14px] font-normal leading-[150%] text-[rgb(123,123,125)]">
            {bodyText}
          </p>
        )}
      </div>
    </div>
  )
}

export default function PricingCardsSection() {
  return (
    <section className="flex flex-col items-center w-full pb-[40px] tablet:pb-0 desktop:px-[80px]">
      <div className="flex flex-row items-start justify-start overflow-x-auto [&::-webkit-scrollbar]:hidden scrollbar-none pb-[16px] gap-[16px] pl-[16px] w-full max-w-[1440px] tablet:justify-center tablet:overflow-x-visible tablet:pb-0 tablet:gap-[16px] tablet:pl-0 tablet:px-[24px] desktop:gap-[30px] desktop:px-0">
        <div className="flex-[0_0_320px] min-w-[300px] max-w-[340px] p-[12px] tablet:flex-[1_0_0] tablet:max-w-[520px] tablet:p-[20px]">
          <PlanCard
            name="AI Employee + Booking"
            tags={['Larry AI', 'Calendar & Booking', 'Communications', 'Marketing tools']}
            showHeaderImage
            subtitleText="AI handles conversations from every lead source."
            featureGroups={AI_EMPLOYEE_FEATURES}
          />
        </div>
        <div className="flex-[0_0_320px] min-w-[300px] max-w-[340px] p-[12px] tablet:flex-[1_0_0] tablet:max-w-[520px] tablet:p-[20px]">
          <PlanCard
            name="Booking add-on"
            addonTag="Available as an add-on for existing customers"
            subtitleText=""
            featureGroups={BOOKING_ADDON_FEATURES}
            bodyText="Run your entire business from a single, centralized platform and turn more inquiries into booked appointments with Larry, your best employee."
          />
        </div>
      </div>
    </section>
  )
}
