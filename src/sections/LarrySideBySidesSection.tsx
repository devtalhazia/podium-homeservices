const DEMO_URL = '/demo'

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
    body: 'Larry selects the right playbook based on context from the customer\u2019s question and history, then drives to the outcomes you determine. He reflects how you would handle\u00a0every interaction.',
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
    body: 'See exactly how Larry reasons through your instructions and simulate changes before they go live\u2014giving you total clarity and confidence in every outcome.',
    cta: 'See Larry in action',
    image: '/images/larry-feature-5.png',
    imageAlt: 'Larry AI visibility and control',
    imageLeft: false,
  },
]

function FeatureCard({ feature, bg }: { feature: Feature; bg: string }) {
  const textCol = (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        flex: '1 0 0',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        gap: '32px',
        width: '1px',
        minWidth: '505px',
        padding: '0 48px 0 0',
      }}
    >
      <div style={{ display: 'flex', flexFlow: 'column', gap: '16px' }}>
        <h4
          style={{
            fontFamily: '"Grenette Regular", sans-serif',
            fontSize: '36px',
            fontWeight: 400,
            lineHeight: '110%',
            color: '#1c1b18',
            margin: 0,
          }}
        >
          {feature.title}
        </h4>
        <p
          style={{
            fontFamily: '"Graphik Regular", sans-serif',
            fontSize: '18px',
            fontWeight: 400,
            lineHeight: '150%',
            color: '#44433f',
            margin: 0,
          }}
        >
          {feature.body}
        </p>
      </div>
      <a
        href={DEMO_URL}
        style={{
          fontFamily: '"Graphik Semibold", sans-serif',
          fontSize: '18px',
          fontWeight: 600,
          lineHeight: '18px',
          color: 'rgb(157, 64, 60)',
          textDecoration: 'none',
          borderBottom: '2px solid rgb(157, 64, 60)',
          paddingBottom: '2px',
        }}
      >
        {feature.cta}
      </a>
    </div>
  )

  const imgCol = (
    <div
      style={{
        display: 'flex',
        flexFlow: 'column',
        flex: '1 0 0',
        alignItems: 'center',
        justifyContent: 'center',
        width: '1px',
        minWidth: '505px',
      }}
    >
      <img
        src={feature.image}
        alt={feature.imageAlt}
        style={{
          display: 'block',
          width: '100%',
          height: 'auto',
          borderRadius: '16px',
        }}
      />
    </div>
  )

  return (
    <div
      style={{
        backgroundColor: bg,
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '30px 80px',
      }}
    >
      <div
        className="larry-sbs-row"
        style={{
          display: 'flex',
          flexFlow: 'row',
          alignItems: 'center',
          gap: '30px',
          width: '100%',
          maxWidth: '1440px',
          flexWrap: 'wrap',
        }}
      >
        {feature.imageLeft ? (
          <>
            {imgCol}
            {textCol}
          </>
        ) : (
          <>
            {textCol}
            {imgCol}
          </>
        )}
      </div>
    </div>
  )
}

export default function LarrySideBySidesSection() {
  return (
    <div style={{ width: '100%' }}>
      {/* Section header */}
      <div
        style={{
          backgroundColor: '#ffffff',
          display: 'flex',
          flexFlow: 'column',
          alignItems: 'center',
          gap: '16px',
          width: '100%',
          padding: '80px 80px 24px',
        }}
      >
        <p
          style={{
            fontFamily: '"Graphik Semibold", sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: '#888',
            margin: 0,
            textAlign: 'center',
          }}
        >
          The #1 Converting AI Employee On The Market
        </p>
        <h3
          style={{
            fontFamily: '"Grenette Regular", sans-serif',
            fontSize: '46px',
            fontWeight: 400,
            lineHeight: '110%',
            color: '#1c1b18',
            margin: 0,
            textAlign: 'center',
            maxWidth: '800px',
          }}
        >
          Larry is the most intelligent AI for home services and fully customized to your business
        </h3>
      </div>

      {/* Feature cards — alternating backgrounds */}
      {FEATURES.map((feature, i) => (
        <FeatureCard
          key={feature.title}
          feature={feature}
          bg={'#ffffff'}
        />
      ))}
    </div>
  )
}
