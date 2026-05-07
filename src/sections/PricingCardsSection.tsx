import '../styles/pricing-cards.css'

const CARD_HEADER_IMG = '/images/plans-card-header-img.png'
const CTA_URL = 'https://calendly.com/umar-softaims/hvac-automation'

const CRIMSON = 'rgb(157, 64, 60)'
const CARD_BG = '#f0f0f3'
const CARD_BORDER = '#dcdce1'
const TAG_BG = '#667e99'
const TAG_BORDER = '#b2c3d7'
const FEATURE_TEXT = 'rgb(74, 74, 77)'
const SUBTITLE_TEXT = 'rgb(123, 123, 125)'
const INK = 'rgb(28, 29, 24)'
const CREAM = 'rgb(247, 244, 237)'

// Lightning bolt SVG for tab tag (bigger)
function BoltLarge() {
  return (
    <svg
      aria-hidden="true"
      width="8"
      height="13"
      viewBox="-1 -1 8 13"
      fill="none"
      style={{ flexShrink: 0 }}
    >
      <path
        d="M3.98764 0.0129243C3.87014 -0.0239275 3.74213 0.0198589 3.67181 0.120941L0.122895 5.22201C0.0594128 5.3134 0.0221614 5.42039 0.00744228 5.52689C-0.00733102 5.63383 -0.000218504 5.74527 0.0297502 5.84937C0.059514 5.95269 0.113859 6.05487 0.196864 6.13468C0.281416 6.21595 0.396629 6.27344 0.529525 6.27361H1.63866V10.2742C1.63866 10.3973 1.71846 10.5062 1.83591 10.543C1.95339 10.5799 2.08141 10.5365 2.15174 10.4354L5.70065 5.33433C5.76414 5.24296 5.80136 5.13594 5.8161 5.02946C5.83089 4.92245 5.8238 4.81074 5.79379 4.70658C5.76403 4.60327 5.70968 4.50107 5.62668 4.42128C5.54214 4.34005 5.42687 4.28251 5.29402 4.28234H4.18489V0.281793C4.18489 0.158667 4.10511 0.0497877 3.98764 0.0129243Z"
        fill="#F3F4EF"
      />
    </svg>
  )
}

// Lightning bolt SVG for feature rows (smaller)
function BoltSmall() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 7 12"
      overflow="visible"
      style={{ width: 7, height: 12, flexShrink: 0 }}
    >
      <path
        d="M 4.792 0.015 C 4.651 -0.027 4.498 0.022 4.413 0.137 L 0.147 5.936 C 0.073 6.04 0.026 6.159 0.009 6.283 C -0.009 6.405 0 6.53 0.036 6.649 C 0.071 6.772 0.141 6.884 0.237 6.974 C 0.344 7.073 0.487 7.13 0.637 7.132 L 1.969 7.132 L 1.969 11.679 C 1.969 11.819 2.065 11.943 2.206 11.985 C 2.348 12.027 2.501 11.978 2.586 11.863 L 6.852 6.064 C 6.926 5.96 6.974 5.842 6.991 5.717 C 7.009 5.594 7 5.469 6.964 5.35 C 6.928 5.227 6.859 5.115 6.763 5.026 C 6.657 4.926 6.513 4.869 6.363 4.868 L 5.029 4.868 L 5.029 0.32 C 5.03 0.181 4.934 0.057 4.794 0.015 Z"
        fill="rgb(196,140,138)"
      />
    </svg>
  )
}

function FeatureItem({ text }: { text: string }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        width: '100%',
      }}
    >
      {/* bolt + text row */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 10,
          width: 12,
          padding: '1px 0',
          flexShrink: 0,
        }}
      >
        <BoltSmall />
      </div>
      <p
        style={{
          margin: 0,
          flex: '1 0 0',
          fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
          fontSize: 14,
          fontWeight: 400,
          lineHeight: '100%',
          letterSpacing: '0.02em',
          color: FEATURE_TEXT,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        {text}
      </p>
    </div>
  )
}

function FeatureGroup({
  title,
  subtitle,
  features,
}: {
  title: string
  subtitle: string
  features: string[]
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 16,
        width: '100%',
      }}
    >
      {/* Group header */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 0,
          width: '100%',
        }}
      >
        <p
          style={{
            margin: 0,
            fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '150%',
            letterSpacing: '0px',
            color: CRIMSON,
          }}
        >
          {title}
        </p>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            width: '100%',
          }}
        >
          <p
            style={{
              margin: 0,
              flex: '1 0 0',
              fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '150%',
              color: SUBTITLE_TEXT,
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>

      {/* Feature rows */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 10,
          width: '100%',
        }}
      >
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
    features: [
      'All-in-one Inbox',
      'Phones + Voice AI',
      'Text Messaging',
      'Website Chat',
      'Email',
      'Automations',
    ],
  },
  {
    title: 'Calendar & Booking',
    subtitle: 'Consolidated workflows to book jobs and get paid',
    features: [
      'Integrate with your calendar',
      'Estimates',
      'Payments and Financing',
      'Reporting and Analytics',
    ],
  },
  {
    title: 'Marketing Tools',
    subtitle: 'Automate engagement and keep your calendar full',
    features: [
      'Membership Management',
      'Renewals and Upsells',
      'Bulk Text Messaging',
      'Reviews',
    ],
  },
]

const BOOKING_ADDON_FEATURES = [
  {
    title: 'Booking',
    subtitle: 'Consolidated workflows to book jobs and get paid',
    features: [
      'Integrate with your calendar',
      'Estimates',
      'Payments and Financing',
      'Reporting and Analytics',
    ],
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
    <div
      style={{
        backgroundColor: CARD_BG,
        border: `1px solid ${CARD_BORDER}`,
        borderRadius: 16,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: 24,
        width: '100%',
        padding: '48px 16px',
        position: 'relative',
        overflow: 'visible',
      }}
    >
      {/* Plan Title area */}
      <div
        className="plan-title-area"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 16,
          width: '100%',
          padding: '0 24px 8px',
        }}
      >
        {/* Plan name h5 */}
        <h5
          style={{
            margin: 0,
            fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
            fontSize: 28,
            fontWeight: 400,
            lineHeight: '110%',
            letterSpacing: '0px',
            color: INK,
            textAlign: 'left',
          }}
        >
          {name}
        </h5>

        {/* Tags row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            width: '100%',
          }}
        >
          {/* AI / Larry AI tag (with bolt) */}
          {tags && tags[0] && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: 3,
                padding: '2px 6px',
                backgroundColor: TAG_BG,
                border: `0.5px solid ${TAG_BORDER}`,
                borderRadius: 4,
                overflow: 'hidden',
              }}
            >
              <BoltLarge />
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '0px',
                  lineHeight: '150%',
                  color: '#fff',
                  whiteSpace: 'nowrap',
                }}
              >
                {tags[0]}
              </p>
            </div>
          )}

          {/* Remaining plain tags */}
          {tags &&
            tags.slice(1).map((tag) => (
              <div
                key={tag}
                style={{
                  display: 'flex',
                  flexDirection: 'row',
                  alignItems: 'center',
                  padding: '2px 6px',
                  backgroundColor: TAG_BG,
                  border: `0.5px solid ${TAG_BORDER}`,
                  borderRadius: 4,
                }}
              >
                <p
                  style={{
                    margin: 0,
                    fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
                    fontSize: 14,
                    fontWeight: 500,
                    letterSpacing: '0px',
                    lineHeight: '150%',
                    color: '#fff',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {tag}
                </p>
              </div>
            ))}

          {/* Add-on badge */}
          {addonTag && (
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                padding: '2px 6px',
                backgroundColor: TAG_BG,
                border: `1px solid ${TAG_BORDER}`,
                borderRadius: 4,
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
              }}
            >
              <p
                style={{
                  margin: 0,
                  fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
                  fontSize: 14,
                  fontWeight: 500,
                  letterSpacing: '0px',
                  lineHeight: '150%',
                  color: '#fff',
                }}
              >
                {addonTag}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Get a quote button */}
      <div style={{ width: '100%', padding: '0 24px' }}>
        <a
          href={CTA_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            padding: '14px 24px',
            backgroundColor: CRIMSON,
            borderRadius: 50,
            textDecoration: 'none',
            cursor: 'pointer',
          }}
        >
          <p
            style={{
              margin: 0,
              fontFamily: '"Graphik Semibold", "Graphik Semibold Placeholder", sans-serif',
              fontSize: 18,
              fontWeight: 600,
              lineHeight: '18px',
              letterSpacing: '0px',
              textAlign: 'center',
              color: CREAM,
              whiteSpace: 'pre',
            }}
          >
            Get a quote
          </p>
        </a>
      </div>

      {/* Feature Container */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: 32,
          width: '100%',
          padding: '0 24px',
        }}
      >
        {/* Header image (plan type logo) */}
        {showHeaderImage && (
          <img
            src={CARD_HEADER_IMG}
            alt=""
            style={{
              width: 89,
              height: 36,
              objectFit: 'cover',
              display: 'block',
            }}
          />
        )}

        {/* Subtitle */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: 4,
            width: '100%',
          }}
        >
          <p
            style={{
              margin: 0,
              flex: '1 0 0',
              fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '150%',
              color: SUBTITLE_TEXT,
            }}
          >
            {subtitleText}
          </p>
        </div>
        
        {/* Plan details label */}
        <p
          style={{
            margin: 0,
            fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
            fontSize: 14,
            fontWeight: 500,
            lineHeight: '150%',
            color: INK,
          }}
        >
          Plan details
        </p>

        {/* Feature groups */}
        {featureGroups.map((group) => (
          <FeatureGroup
            key={group.title}
            title={group.title}
            subtitle={group.subtitle}
            features={group.features}
          />
        ))}

        {/* Optional body text (Booking add-on) */}
        {bodyText && (
          <p
            style={{
              margin: 0,
              fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
              fontSize: 14,
              fontWeight: 400,
              lineHeight: '150%',
              color: SUBTITLE_TEXT,
            }}
          >
            {bodyText}
          </p>
        )}
      </div>
    </div>
  )
}

export default function PricingCardsSection() {
  return (
    <section
      className="pricing-section"
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
        padding: '0 80px 0',
        position: 'relative',
      }}
    >
      {/* Card Container */}
      <div
        className="pricing-card-container"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'center',
          gap: 30,
          width: '100%',
          maxWidth: 1440,
          position: 'relative',
        }}
      >
        {/* Main plan card */}
        <div
          className="plan-card-wrapper"
          style={{
            flex: '1 0 0',
            maxWidth: 520,
            padding: 20,
          }}
        >
          <PlanCard
            name="AI Employee + Booking"
            tags={['Larry AI', 'Calendar & Booking', 'Communications', 'Marketing tools']}
            showHeaderImage
            subtitleText="AI handles conversations from every lead source."
            featureGroups={AI_EMPLOYEE_FEATURES}
          />
        </div>

        {/* Booking add-on card */}
        <div
          className="plan-card-wrapper"
          style={{
            flex: '1 0 0',
            maxWidth: 520,
            padding: 20,
          }}
        >
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
