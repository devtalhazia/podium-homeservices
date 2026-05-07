import '../styles/communications.css'

const CRIMSON = 'rgb(157, 64, 60)'
const INK     = '#1c1b18'
const INK_SOFT = '#4e4a44'
const GRAY_MID = 'rgb(98, 98, 101)'

/* ── Arrow SVG (14×14, path from #svg-806169162_358) ── */
const ArrowSVG = () => (
  <svg
    viewBox="0 0 14 14"
    width="14"
    height="14"
    overflow="visible"
    aria-hidden="true"
    style={{ display: 'block', flexShrink: 0 }}
  >
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

/* ── Feature item ── */
function FeatureItem({ title, body, gap = 6 }: { title: string; body: string; gap?: number }) {
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap,
      width: '100%', padding: '16px 0', overflow: 'hidden',
    }}>
      <h6 style={{
        margin: 0,
        fontFamily: '"Grenette SemiBold", "Grenette SemiBold Placeholder", sans-serif',
        fontSize: 24, fontWeight: 600, lineHeight: '120%',
        letterSpacing: 0, color: INK,
      }}>
        {title}
      </h6>
      <p style={{
        margin: 0,
        fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
        fontSize: 16, fontWeight: 400, lineHeight: '150%',
        letterSpacing: 0, color: INK_SOFT,
      }}>
        {body}
      </p>
    </div>
  )
}

/* ── CTA underline link (framer-9b11zl / Text CTA Underlined) ── */
function CTALink({ href, label }: { href: string; label: string }) {
  return (
    <div style={{
      display: 'flex', flexWrap: 'wrap', alignItems: 'center',
      gap: 32, padding: '24px 0', width: '100%',
    }}>
      <a
        href={href}
        style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center',
          gap: 0, textDecoration: 'none', cursor: 'pointer',
          borderBottom: `2px solid ${CRIMSON}`,
          backgroundColor: 'transparent',
        }}
      >
        {/* Text (framer-r3gkvy + framer-tap6xd) */}
        <div style={{
          display: 'flex', flexDirection: 'row', alignItems: 'center',
          gap: 10, width: 'min-content',
        }}>
          <p style={{
            margin: 0, whiteSpace: 'pre',
            fontFamily: '"Graphik Semibold", "Graphik Semibold Placeholder", sans-serif',
            fontSize: 18, fontWeight: 600, lineHeight: '18px',
            letterSpacing: 0, color: CRIMSON, textAlign: 'center',
          }}>
            {label}
          </p>
        </div>
        {/* Arrow icon (framer-48kyvy) */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: 5,
        }}>
          <ArrowSVG />
        </div>
      </a>
    </div>
  )
}

/* ── Copy block inner content ──
   preheader + h4 heading + features list + CTA
   Used by both Communications and Marketing.
── */
interface CopyBlockProps {
  preheader: string
  heading: string
  features: Array<{ title: string; body: string }>
}
function CopyBlockInner({ preheader, heading, features }: CopyBlockProps) {
  return (
    /* framer-3cmdah / framer-flo9cf equivalent */
    <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: '100%' }}>
      {/* Preheader + H4 block */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: '100%' }}>
        {/* framer-131698i / framer-uvlp0y: gap 5px */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}>
          {/* framer-a6722t / framer-1jw6t7l: gap 10px, pb 8px */}
          <div style={{
            display: 'flex', flexDirection: 'column', gap: 10,
            width: '100%', paddingBottom: 8,
          }}>
            <h6 style={{
              margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word',
              fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
              fontSize: 16, fontWeight: 500, lineHeight: '150%',
              letterSpacing: '0.1em', textTransform: 'uppercase', color: GRAY_MID,
              textAlign: 'left',
            }}>
              {preheader}
            </h6>
          </div>
          {/* framer-1o6o4ld / framer-zb3ah9: pb 16px */}
          <div style={{ width: '100%', paddingBottom: 16 }}>
            <h4 style={{
              margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word',
              fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
              fontSize: 36, fontWeight: 400, lineHeight: '120%',
              letterSpacing: 0, color: INK, textAlign: 'left',
            }}>
              {heading}
            </h4>
          </div>
        </div>
      </div>
      {/* Features list (framer-1kg7u4z / framer-qnav32): gap 17px */}
      <div style={{
        display: 'flex', flexDirection: 'column', gap: 17,
        width: '100%',
      }}>
        {features.map(f => (
          <FeatureItem key={f.title} title={f.title} body={f.body} />
        ))}
      </div>
    </div>
  )
}

/* ── CSR side-by-side (framer-xnew9r)
   Copy LEFT, image RIGHT — "Your #1 converting CSR"
── */
const CSR_FEATURES = [
  {
    title: 'Responds immediately, 24/7',
    body:  'Most home services businesses lose 40% of leads after-hours. Larry works day and night so you are always the first to respond.',
  },
  {
    title: 'Books directly',
    body:  'Larry handles your entire schedule, booking jobs and managing each technician\'s calendar in your FSM.',
  },
  {
    title: 'Optimizes technician scheduling',
    body:  'Larry knows your routes and technician skillsets to suggest appointments and technicians that are available and nearby.',
  },
  {
    title: 'Works across every lead source',
    body:  'Larry handles communications from calls, texts, webchats, third-party lead providers, and email in one inbox; accessible to Larry and your entire team.',
  },
]

function CSRSideBySide() {
  return (
    /* framer-xnew9r: flex-row, gap:30, max-width:1440, align-items:center */
    <div
      className="csr-row"
      style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        gap: 30, width: '100%', maxWidth: 1440,
      }}
    >
      {/* Copy block LEFT (framer-1ynychl): padding-right:20 */}
      <div
        className="csr-copy"
        style={{
          display: 'flex', flexDirection: 'column',
          flex: '1 0 0', minWidth: 505, maxWidth: 705,
          gap: 32, padding: '0 20px 0 0',
        }}
      >
        {/* framer-rsjot7: gap:0 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 0, width: '100%' }}>
          {/* framer-x5gsha: gap:5 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 5, width: '100%' }}>
            {/* framer-o6x6lx: gap:10, pb:8 */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: '100%', paddingBottom: 8 }}>
              <h6 style={{
                margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
                fontSize: 16, fontWeight: 500, lineHeight: '150%',
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: GRAY_MID, textAlign: 'left',
              }}>
                Schedules jobs autonomously
              </h6>
            </div>
            {/* framer-ukmku2: pb:16 */}
            <div style={{ width: '100%', paddingBottom: 16 }}>
              <h4 style={{
                margin: 0, whiteSpace: 'pre-wrap', wordBreak: 'break-word',
                fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
                fontSize: 36, fontWeight: 400, lineHeight: '120%',
                letterSpacing: 0, color: INK, textAlign: 'left',
              }}>
                Your #1 converting CSR
              </h4>
            </div>
          </div>
          {/* framer-1x6outl: gap:17 — feature items use gap:4 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 17, width: '100%' }}>
            {CSR_FEATURES.map(f => (
              <FeatureItem key={f.title} title={f.title} body={f.body} gap={4} />
            ))}
          </div>
        </div>
        <CTALink href="/ai/larry" label="Learn more about Larry" />
      </div>

      {/* Image panel RIGHT (framer-keegyg): dark bg, border-radius:24, min-width:505, height:640 */}
      <div
        className="csr-img-panel"
        style={{
          position: 'relative',
          backgroundColor: '#18181c',
          borderRadius: 24,
          flex: '1 0 0',
          minWidth: 505,
          height: 640,
          overflow: 'hidden',
        }}
      >
        {/* Blue gradient blur (framer-q3nanw): top:-220, left:-152 */}
        <div style={{
          position: 'absolute', zIndex: 0,
          filter: 'blur(125px)',
          backgroundColor: '#284568',
          borderRadius: '100%',
          width: 507, height: 520,
          top: -220, left: -152,
          pointerEvents: 'none',
        }} />
        {/* Crimson gradient blur (framer-1ez1zr6) */}
        <div style={{
          position: 'absolute', zIndex: 0,
          filter: 'blur(125px)',
          backgroundColor: '#653130',
          borderRadius: '100%',
          width: 731,
          top: 239, bottom: -330, right: -422,
          pointerEvents: 'none',
        }} />
        {/* Desktop/tablet: VzJWSnR4e6aFeMKZLu0em2bjvg.png (framer-fmtt9p): 387×570, centered */}
        {/* Mobile: zZwf3lkmKGO8s6wtME3DMElbxg.png (landscape, centered) */}
        <picture>
          <source media="(max-width: 767.98px)" srcSet="/images/zZwf3lkmKGO8s6wtME3DMElbxg.png" />
          <img
            src="/images/VzJWSnR4e6aFeMKZLu0em2bjvg.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            style={{
              position: 'absolute',
              width: 387,
              height: 570,
              top: 'calc(50% - 285px)',
              left: 'calc(49.901% - 193.5px)',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1,
            }}
          />
        </picture>
      </div>
    </div>
  )
}

/* ── Communications side-by-side (framer-jgiwcm)
   Image LEFT, copy RIGHT
── */
const COMMS_FEATURES = [
  {
    title: 'Answers your phones with Voice AI',
    body:  'Larry manages your front desk, answers the phone 24/7, and books jobs directly into your calendar—all while sounding like your best employee.',
  },
  {
    title: 'Reduce no-shows with text confirmations',
    body:  'Automatically remind customers about upcoming appointments to secure the job and reduce no-shows all through AI text messages.',
  },
  {
    title: 'Consolidate to a single inbox',
    body:  'See all lead channels in one centralized view (and get insights into what converts faster).',
  },
  {
    title: 'Centralize customer info',
    body:  'Keep track of customer data, including payments, in one place so your employees and Larry always stay up-to-date and your invoices get paid.',
  },
]

function CommsSideBySide() {
  return (
    /* framer-jgiwcm: flex-row, gap:30, max-width:1440, align-items:center */
    <div
      className="comms-row"
      style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        gap: 30, width: '100%', maxWidth: 1440,
      }}
    >
      {/* Image panel LEFT (framer-8fp595) */}
      <div
        className="comms-img-panel"
        style={{
          position: 'relative',
          backgroundColor: '#18181c',
          borderRadius: 24,
          flex: '1 0 0',
          minWidth: 505,
          height: 640,
          overflow: 'hidden',
        }}
      >
        {/* HVAC blue gradient blur (framer-cj7gkm) */}
        <div style={{
          position: 'absolute', zIndex: 0,
          filter: 'blur(125px)',
          backgroundColor: '#284568',
          borderRadius: '100%',
          width: 507, height: 520,
          top: -150, left: -182,
          pointerEvents: 'none',
        }} />
        {/* Phone UI image (framer-h2r9v2) */}
        <picture>
          <source media="(max-width: 767.98px)" srcSet="/images/gY27lDY1FDg1vqcFbCGwv3ua9w.png" />
          <img
            src="/images/vSxOIJVxSpPnS87DyXv5pEKOuu0.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="comms-phone-img"
            style={{
              position: 'absolute',
              top: 102, left: 35, right: 153,
              aspectRatio: '0.725746',
              display: 'block',
              width: 'auto',
              height: 'auto',
              objectFit: 'cover',
              objectPosition: 'center',
              overflow: 'visible',
              zIndex: 1,
            }}
          />
        </picture>
      </div>

      {/* Copy block RIGHT (framer-162lntv) */}
      <div
        className="comms-copy"
        style={{
          display: 'flex', flexDirection: 'column',
          flex: '1 0 0', minWidth: 505, maxWidth: 705,
          gap: 32, padding: '0 0 0 48px',
        }}
      >
        <CopyBlockInner
          preheader="Eliminates SYSTEM SWITCHING"
          heading="All-in-one communications"
          features={COMMS_FEATURES}
        />
        <CTALink href="/#larry-jtbd" label="Learn more about Communications" />
      </div>
    </div>
  )
}

/* ── Marketing side-by-side (framer-1xim388)
   Copy LEFT, image RIGHT
── */
const MKTG_FEATURES = [
  {
    title: 'AI-managed memberships',
    body:  'Proactively manage and leverage your maintenance agreements to keep your calendar full in the shoulder season.',
  },
  {
    title: 'Renewals & upsells',
    body:  'Build more loyalty (and fill your calendar) with personalized offers, maintenance agreements, second chance leads and upsells.',
  },
  {
    title: 'Marketing & re-engagement',
    body:  'Mine your customer database for repeat business opportunities and second-chance leads and follow-up on unsold estimates.',
  },
  {
    title: 'Reviews',
    body:  'Boost your presence online by automating review requests and responses.',
  },
]

function MarketingSideBySide() {
  return (
    /* framer-1xim388: flex-row, gap:30, max-width:1440, align-items:center */
    <div
      className="mktg-row"
      style={{
        display: 'flex', flexDirection: 'row', alignItems: 'center',
        gap: 30, width: '100%', maxWidth: 1440,
      }}
    >
      {/* Copy block LEFT (framer-18cen7w): padding-right:48 */}
      <div
        className="mktg-copy"
        style={{
          display: 'flex', flexDirection: 'column',
          flex: '1 0 0', minWidth: 505, maxWidth: 705,
          gap: 32, padding: '0 48px 0 0',
        }}
      >
        <CopyBlockInner
          preheader="Proactively Fills Your Calendar"
          heading="AI marketing tools that book"
          features={MKTG_FEATURES}
        />
        <CTALink href="/#larry-jtbd" label="Learn more about Marketing Tools" />
      </div>

      {/* Image panel RIGHT (framer-1vtt8jy) */}
      <div
        className="mktg-img-panel"
        style={{
          position: 'relative',
          backgroundColor: '#18181c',
          borderRadius: 24,
          flex: '1 0 0',
          minWidth: 505,
          height: 640,
          overflow: 'hidden',
        }}
      >
        {/* Crimson gradient blur (framer-137605o) */}
        <div style={{
          position: 'absolute', zIndex: 0,
          filter: 'blur(125px)',
          backgroundColor: '#653130',
          borderRadius: '100%',
          width: 731,
          top: 239, bottom: -330, right: -422,
          pointerEvents: 'none',
        }} />
        {/* Blue gradient blur (framer-1nie3jk) */}
        <div style={{
          position: 'absolute', zIndex: 0,
          filter: 'blur(125px)',
          backgroundColor: '#284568',
          borderRadius: '100%',
          width: 507, height: 520,
          top: -150, left: -182,
          pointerEvents: 'none',
        }} />
        {/* Marketing UI image (framer-u6j4jt) */}
        <picture>
          <source media="(max-width: 1199.98px)" srcSet="/images/jQDusbuL40uT6io6JcrmrLbrA.png" />
          <img
            src="/images/590U6sGPVih9vWZyy59xoHynwlM.png"
            alt=""
            aria-hidden="true"
            decoding="async"
            className="mktg-phone-img"
            style={{
              position: 'absolute',
              width: 492,
              height: 568,
              top: 'calc(46.0938% - 284px)',
              left: 'calc(48.9109% - 246px)',
              display: 'block',
              objectFit: 'cover',
              objectPosition: 'center',
              zIndex: 1,
            }}
          />
        </picture>
      </div>
    </div>
  )
}

/* ── Section ── */
export default function CommunicationsSection() {
  return (
    /* framer-yxgzsj: bg #f0f0f3, flex-col, align-center, gap:64, padding:80, overflow:hidden */
    <section
      id="larry-jtbd"
      className="comms-section"
      style={{
        backgroundColor: '#f0f0f3',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        placeContent: 'center',
        gap: 64,
        width: '100%',
        padding: 80,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* H3 Section Heading (framer-svrw9h + framer-1etrr6s) */}
      {/* framer-1etrr6s: flex-col, align-center, gap:24 (from framer-v-1mzkp2b), width:100%, max-width:1080 */}
      <div style={{
        display: 'flex', flexDirection: 'column', alignItems: 'center',
        gap: 24, width: '100%', maxWidth: 1080,
      }}>
        {/* framer-4na7px: flex-col, gap:48, pb:24 — preheader block */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
          gap: 48, width: '100%', paddingBottom: 24,
        }}>
          <p style={{
            margin: 0, width: '100%',
            fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
            fontSize: 16, fontWeight: 500, lineHeight: '150%',
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: GRAY_MID, textAlign: 'center',
          }}>
            Your AI Booking, Communications, and Marketing Guru
          </p>
        </div>
        {/* framer-18n4kb3: flex-col, align-center, gap:16, pb:16 — heading block */}
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          gap: 16, width: '100%', paddingBottom: 16,
        }}>
          <h3 style={{
            margin: 0, width: '100%',
            fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
            fontSize: 40, fontWeight: 400, lineHeight: '120%',
            letterSpacing: 0, color: INK, textAlign: 'center',
          }}>
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
