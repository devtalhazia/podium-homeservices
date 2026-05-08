const DEMO_URL = 'https://calendly.com/umar-softaims/hvac-automation'

interface Feature {
  title: string
  body: string
  cta: string
  image: string
  imageAlt: string
  imageLeft: boolean
}

const FEATURES: Feature[] = [
  {
    title: 'Purpose-built for home services, ready from day one',
    body: 'Larry is trained by industry experts across tune-ups, diagnostics, estimates, recalls, and compliance workflows. From day one, Larry blends expertise with real data from your system to give your customers the right answers every time.',
    cta: 'See Larry in action',
    image: '/images/larry-feature-1.png',
    imageAlt: 'Larry AI home services interface',
    imageLeft: false,
  },
  {
    title: 'Handles complex scenarios by using your playbooks',
    body: 'Larry selects the right playbook based on context from the customer’s question and history, then drives to the outcomes you determine. He reflects how you would handle every interaction.',
    cta: 'Get started with Larry',
    image: '/images/larry-feature-2.png',
    imageAlt: 'Larry AI playbooks',
    imageLeft: true,
  },
  {
    title: 'Learns instantly and stays consistent',
    body: 'No scripts or code. Just describe the change you want, and Larry updates instantly and across future conversations.',
    cta: 'See Larry in action',
    image: '/images/larry-feature-3.png',
    imageAlt: 'Larry AI instant learning',
    imageLeft: false,
  },
  {
    title: 'Knows your business',
    body: 'Larry connects with your system and uses your calendar, memberships, customer profiles, pricing, and job history to personalize every interaction.',
    cta: 'Get started with Larry',
    image: '/images/larry-feature-4.png',
    imageAlt: 'Larry AI business knowledge',
    imageLeft: true,
  },
  {
    title: 'Gives you complete control and full visibility',
    body: 'See exactly how Larry reasons through your instructions and simulate changes before they go live—giving you total clarity and confidence in every outcome.',
    cta: 'See Larry in action',
    image: '/images/larry-feature-5.png',
    imageAlt: 'Larry AI visibility and control',
    imageLeft: false,
  },
]

function FeatureCard({ feature, bg }: { feature: Feature; bg: string }) {
  const textCol = (
    <div className="flex flex-col flex-[1_0_0] items-start justify-start gap-[32px] w-full desktop:min-w-[505px] desktop:pr-[48px]">
      <div className="flex flex-col gap-[16px]">
        <h4 className="m-0 font-grenette md:text-[36px] text-2xl font-normal leading-[110%] text-[#1c1b18]">
          {feature.title}
        </h4>
        <p className="m-0 font-graphik md:text-[18px] text-sm font-normal leading-[150%] text-[#44433f]">
          {feature.body}
        </p>
      </div>
      <a
        href={DEMO_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="font-graphik-semi text-[18px] font-semibold leading-[18px] text-crimson no-underline border-b-2 border-crimson pb-[2px]"
      >
        {feature.cta}
      </a>
    </div>
  )

  const imgCol = (
    <div className="flex flex-col flex-[1_0_0] items-center justify-center w-[80%] mx-auto desktop:min-w-[505px]">
      <img
        src={feature.image}
        alt={feature.imageAlt}
        className="block w-full h-auto rounded-[16px]"
      />
    </div>
  )

  return (
    <div className="flex flex-col items-center w-full px-[24px] py-[30px] tablet:px-[48px] desktop:px-[80px]" style={{ backgroundColor: bg }}>
      <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-[30px] w-full max-w-[1440px]">
        <div className={feature.imageLeft ? 'desktop:order-1' : 'desktop:order-2'}>
          {imgCol}
        </div>
        <div className={feature.imageLeft ? 'desktop:order-2' : 'desktop:order-1'}>
          {textCol}
        </div>
      </div>
    </div>
  )
}

export default function LarrySideBySidesSection() {
  return (
    <div className="w-full">
      <div className="bg-white flex flex-col items-center gap-[16px] w-full px-[24px] pt-[60px] pb-[24px] tablet:px-[48px] tablet:pt-[72px] desktop:px-[80px] desktop:pt-[80px]">
        <p className="m-0 font-graphik-semi md:text-[16px] text-sm font-semibold tracking-[0.08em] uppercase text-[#888] text-center">
          The #1 Converting AI Employee On The Market
        </p>
        <h3 className="m-0 font-grenette md:text-[46px] text-4xl font-normal leading-[110%] text-[#1c1b18] text-center max-w-[800px]">
          Larry is the most intelligent AI for home services and fully customized to your business
        </h3>
      </div>

      {FEATURES.map((feature) => (
        <FeatureCard key={feature.title} feature={feature} bg="#ffffff" />
      ))}
    </div>
  )
}
