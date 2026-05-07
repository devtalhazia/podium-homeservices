import '../styles/why-podium-closes.css'

// ─── Source ──────────────────────────────────────────────────────────────────
// Outer section: framer-2lgwja (within framer-1sqbg4q comparison section)
// why-podium.html position ~287931
//
// Layout summary:
//   framer-2lgwja       — bg:#e8e8ed; flex-col; align-items:center; gap:32px; padding:80px; overflow:hidden
//   framer-1ur3g84      — flex-col; max-width:1000px; padding:120px 0 20px; position:relative
//   framer-1hyx1qq      — absolute img; top:0 left:-13px right:-14px; height:334px; aspect-ratio:3.08217
//   framer-2zddz2       — flex-row; width:min-content (avatar overlay)
//   framer-o5azrq       — w:255px h:100px (AI employee avatar)
//   framer-1ol82hi      — width:100% heading wrapper
//   framer-18n4kb3      — flex-col; align-items:center; gap:16px; padding:0 0 16px
//   framer-x0g5pw       — flex-row; gap:24px; max-width:1200px; align-items:flex-start
//   framer-ir41jw/1ombsff/1dns4ox — white cards; border-radius:16px; flex:1 0 0; padding:40px 32px; gap:12px
//   framer-de4hd6/hggclt/66bprx   — h6 text wrappers (white-space:pre-wrap)
//   framer-1c5heio/9cwpxo/xyhmvm  — body text wrappers (white-space:pre-wrap)
//   framer-rd9wgt       — CTA button wrapper; flex:none; width/height:auto
// ─────────────────────────────────────────────────────────────────────────────

// ─── Feature card data ───────────────────────────────────────────────────────
// Source: framer-ir41jw, framer-1ombsff, framer-1dns4ox
const FEATURES = [
  {
    title: 'He answers before your competitors do.',
    body: '40% of home services calls come in after hours. Larry responds to every inbound lead the moment it comes in, day, night, weekend.',
  },
  {
    title: `He doesn\'t just answer.\nHe follows through.`,
    body: 'Larry books jobs, follows up on estimates, requests reviews, and keeps your membership list moving. No reminders needed.',
  },
  {
    title: 'He gets smarter because everything is connected.',
    body: `One complete view of every customer, job history, past conversations, membership status. So Larry always knows who he\'s talking to and what to do next.`,
  },
]

// ─── Feature card sub-component ─────────────────────────────────────────────
function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div
      className="wp-closes-card"
      style={{
        // framer-ir41jw/1ombsff/1dns4ox:
        // background-color:#fff; border-radius:16px; will-change:transform
        // flex-flow:column; align-items:flex-start; gap:12px
        // padding:40px 32px; overflow:hidden
        backgroundColor: '#ffffff',
        borderRadius: 16,
        display: 'flex',
        flexFlow: 'column' as const,
        alignItems: 'flex-start',
        gap: 12,
        padding: '40px 32px',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {/* h6 title — framer-de4hd6/hggclt/66bprx + framer-styles-preset-1963bkz
          "Grenette SemiBold" fontWeight:600
          Desktop: 24px  Tablet/mobile: 20px  lineHeight:120%
          color: #1c1b18 (token-f884ba8b) */}
      <h6
        className="wp-closes-card-title"
        style={{
          fontFamily: '"Grenette SemiBold", "Grenette SemiBold Placeholder", sans-serif',
          fontWeight: 600,
          lineHeight: '120%',
          letterSpacing: 0,
          color: '#1c1b18',
          margin: 0,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
        }}
      >
        {title}
      </h6>

      {/* body — framer-1c5heio/9cwpxo/xyhmvm + framer-styles-preset-zmyn5w
          "Graphik Regular" fontWeight:400
          Desktop: 16px  Mobile: 14px  lineHeight:150%  textAlign:left
          color: rgb(78,74,68) (token-5ab45095) */}
      <p
        className="wp-closes-card-body"
        style={{
          fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
          fontWeight: 400,
          lineHeight: '150%',
          color: 'rgb(78, 74, 68)',
          margin: 0,
          whiteSpace: 'pre-wrap',
          wordBreak: 'break-word',
          textAlign: 'left',
        }}
      >
        {body}
      </p>
    </div>
  )
}

// ─── Main export ─────────────────────────────────────────────────────────────
export default function WhyPodiumClosesSection() {
  return (
    <section
      className="wp-closes-outer"
      style={{
        // framer-2lgwja:
        // background-color: var(--token-74d2b551, #e8e8ed)
        // flex-flow:column; place-content:center flex-start; align-items:center
        // gap:32px; width:100%; height:min-content; overflow:hidden; display:flex
        backgroundColor: '#e8e8ed',
        display: 'flex',
        flexFlow: 'column' as const,
        placeContent: 'center flex-start',
        alignItems: 'center',
        gap: 32,
        width: '100%',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Image frame — framer-1ur3g84 ──────────────────────────────────── */}
      {/* flex-col; max-width:1000px; width:100%; padding:120px 0 20px; relative */}
      <div
        style={{
          display: 'flex',
          flexFlow: 'column' as const,
          placeContent: 'center',
          alignItems: 'center',
          gap: 0,
          width: '100%',
          maxWidth: 1000,
          padding: '120px 0 20px',
          position: 'relative',
          overflow: 'visible',
          flexShrink: 0,
        }}
      >
        {/* ── Background chat screenshot — framer-1hyx1qq ──────────────────── */}
        {/* absolute; top:0 left:-13px right:-14px; aspect-ratio:3.08217; height:334px */}
        {/* Responsive sizes handled by .wp-closes-bg-img CSS class */}
        <img
          className="wp-closes-bg-img"
          src="/images/why-podium-closes-bg.png"
          alt=""
          aria-hidden="true"
          width={2213}
          height={718}
        />

        {/* ── AI Employee/Avery overlay — framer-2zddz2 ────────────────────── */}
        {/* flex-row; width:min-content; gap:1.78754px; position:relative */}
        <div
          style={{
            display: 'flex',
            flexFlow: 'row' as const,
            placeContent: 'flex-start',
            alignItems: 'flex-start',
            gap: 1.78754,
            width: 'min-content',
            position: 'relative',
            overflow: 'visible',
            zIndex: 1,
          }}
        >
          {/* framer-o5azrq: width:255px; height:100px; aspect-ratio:2.56281 */}
          <img
            src="/images/why-podium-closes-avatar.png"
            alt=""
            aria-hidden="true"
            width={510}
            height={199}
            style={{
              flexShrink: 0,
              width: 255,
              height: 100,
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </div>
      </div>

      {/* ── Heading — framer-1ol82hi → framer-18n4kb3 ────────────────────── */}
      {/* framer-1ol82hi: flex:none; width:100%; height:auto */}
      {/* framer-18n4kb3: flex-col; align-items:center; gap:16px; padding:0 0 16px */}
      <div
        style={{
          display: 'flex',
          flexFlow: 'column' as const,
          placeContent: 'center',
          alignItems: 'center',
          gap: 16,
          width: '100%',
          padding: '0 0 16px',
        }}
      >
        {/* H3 — framer-styles-preset-19h1oaz override
            "Grenette Regular" fontWeight:400
            Desktop:40px  Tablet:32px  lineHeight:120%
            textAlign:center  color:#1c1b18 (token-f884ba8b)  */}
        <h3
          className="wp-closes-h3"
          style={{
            fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
            fontWeight: 400,
            lineHeight: '120%',
            letterSpacing: 0,
            textAlign: 'center',
            color: '#1c1b18',
            margin: 0,
          }}
        >
          Larry doesn&rsquo;t just respond. He closes.
        </h3>

        {/* Subheader — framer-3zuzid + framer-styles-preset-zmyn5w
            "Graphik Regular" fontWeight:400  16px  lineHeight:150%
            textAlign:center  color:rgb(98,98,101) (token-0b3ab9e9) */}
        <p
          style={{
            fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
            fontWeight: 400,
            fontSize: 16,
            lineHeight: '150%',
            textAlign: 'center',
            color: 'rgb(98, 98, 101)',
            margin: 0,
            width: '100%',
            whiteSpace: 'pre-wrap',
            wordBreak: 'break-word',
          }}
        >
          Most AI stops at the answer. Larry goes further because he works inside the same system that runs your business.
        </p>
      </div>

      {/* ── Feature cards row — framer-x0g5pw ───────────────────────────── */}
      {/* Desktop flex-row; gap:24px; max-width:1200px; align-items:flex-start */}
      {/* Mobile → flex-direction:column via .wp-closes-cards-row            */}
      <div
        className="wp-closes-cards-row"
        style={{
          display: 'flex',
          placeContent: 'flex-start center',
          alignItems: 'flex-start',
          gap: 24,
          width: '100%',
          maxWidth: 1200,
          padding: 0,
          backgroundColor: 'transparent',
          flexShrink: 0,
        }}
      >
        {FEATURES.map((f, i) => (
          <FeatureCard key={i} title={f.title} body={f.body} />
        ))}
      </div>

      {/* ── CTA button — framer-rd9wgt ───────────────────────────────────── */}
      {/* framer-rd9wgt: flex:none; width:auto; height:auto                  */}
      {/* framer-OeYYV: bg:rgb(157,64,60); border-radius:50px; padding:16px 32px */}
      {/* framer-tap6xd: "Graphik Semibold" 18px rgb(247,244,237)            */}
      <div style={{ flexShrink: 0, width: 'auto', height: 'auto' }}>
        <a
          href="/ai/larry"
          style={{
            display: 'flex',
            flexFlow: 'row' as const,
            placeContent: 'center',
            alignItems: 'center',
            gap: 10,
            width: 'min-content',
            height: 'min-content',
            padding: '16px 32px',
            backgroundColor: 'rgb(157, 64, 60)',
            borderRadius: 50,
            textDecoration: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          <p
            style={{
              fontFamily: '"Graphik Semibold", "Graphik Semibold Placeholder", sans-serif',
              fontWeight: 600,
              fontSize: 18,
              lineHeight: '18px',
              letterSpacing: 0,
              textAlign: 'center',
              color: 'rgb(247, 244, 237)',
              margin: 0,
            }}
          >
            See how Larry works
          </p>
        </a>
      </div>
    </section>
  )
}
