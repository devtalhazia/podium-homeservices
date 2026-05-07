/**
 * WhyPodiumStatsSection — Section 4
 * Source of truth: dump/homeservices.podium.com/why-podium.html
 *
 * Outer section:    framer-6j180o   bg:#18181c padding:80px flex-col align-items:center gap:96px
 * Blue fade:        framer-1v51u62  absolute top:-650px left:-650px 1147×1147
 * Red fade:         framer-1nqjoo4  absolute bottom:-650px right:-650px 1147×1147
 * Inner wrapper:    framer-rs0vgl   max-width:1080px flex-col align-items:center gap:72px
 * Grid:             framer-10rzzt5  display:grid grid-template-columns:repeat(12,minmax(50px,1fr))
 *                                   grid-template-rows:repeat(2,minmax(0,1fr)) gap:30px height:781px
 *
 * Card containers:
 *   framer-jgssaa-container  → span 5  (Arctic Air — text only, centered)
 *   framer-17smjh0-container → span 7  (Air Texas — image+text left-aligned)
 *   framer-o7d6zv-container  → span 7  (Premier Heating — image+text left-aligned)
 *   framer-10bne66-container → span 5  (Air Design — text only, centered)
 *
 * Card root (framer-z6qjfa / framer-NttUV):
 *   bg: rgb(49,49,53)  border:1px solid rgb(74,74,77)  border-radius:16px
 *
 * Text-only card variant (framer-v-z6qjfa):
 *   flex-col  padding:24px  gap:24px  align-items:center  height:100%  width:100%
 *
 * Image+text card variant (framer-v-1bw9pbj):
 *   flex-row  padding:0  gap:0  height:100%  width:100%
 *   BG image (framer-15qucsw): flex:1 0 0  align-self:stretch  position:relative  overflow:hidden
 *   Content  (framer-47fj8m):  flex:2 0 0  padding:24px  align-items:flex-start  flex-col
 *
 * Typography:
 *   Preheader h6:        "Graphik Medium"   16px 500 0.1em ls uppercase rgb(170,170,173)
 *   H2:                  "Grenette Regular" 46px 400 110% rgb(255,255,255) center — preset xcqpjm
 *   Subheader p:         "Graphik Regular"  16px 400 150% rgb(232,232,232) center — preset zmyn5w
 *   Stat label h4:       "Graphik Medium"   20px 500 120% rgb(255,255,255)  (Premier only)
 *   Primary stat h4:     "Grenette SemiBold" 48px 600 120% #4b79ed (token-31cd51b2)
 *   Secondary stat h4:   "Grenette SemiBold" 28px 600 120% #4b79ed
 *   Description p:       "Graphik Regular"  18px 400 150% rgb(220,220,225)
 *   Attribution p:       "Graphik Regular Italic" italic 18px 150% rgb(170,170,173)
 */

import '../styles/why-podium-stats.css'

// ─── Card data ──────────────────────────────────────────────────────────────

interface StatCard {
  id: string
  span: 5 | 7
  align: 'center' | 'left'
  image: string | null
  imagePosition?: string
  /** Optional label above the primary stat (e.g. "Response time:") */
  label?: string
  /** Large number line */
  primaryStat: string
  /** Smaller continuation line (may be null for single-line stats) */
  secondaryStat: string | null
  description: string
  attribution: string
}

const CARDS: StatCard[] = [
  {
    // framer-jgssaa-container — span 5 — framer-v-z6qjfa (Card only)
    id: 'arctic-air',
    span: 5,
    align: 'center',
    image: null,
    primaryStat: '30% more',
    secondaryStat: 'revenue in one year.',
    description: "Hired Larry, added a truck to their fleet, and haven't looked back.",
    attribution: 'Arctic Air',
  },
  {
    // framer-17smjh0-container — span 7 — framer-v-1bw9pbj (Card with Image third)
    id: 'air-texas',
    span: 7,
    align: 'left',
    image: '/images/why-podium-stats-air-texas.png',
    primaryStat: '$20,000',
    secondaryStat: 'job booked after hours',
    description:
      'A lead came in after the office closed. Larry answered, qualified, and booked it. Without Podium, it goes to voicemail.',
    attribution: 'Air Texas',
  },
  {
    // framer-o7d6zv-container — span 7 — framer-v-1bw9pbj (Card with Image third)
    id: 'premier',
    span: 7,
    align: 'left',
    image: '/images/why-podium-stats-premier.png',
    imagePosition: '59.7% 43.5%',
    // framer-1rysw7a — Graphik Medium 20px white
    label: 'Response time:',
    primaryStat: '12 min to 1 min',
    secondaryStat: null,
    description: 'Converted 3x more leads after Larry started handling incoming calls.',
    attribution: 'Premier Heating and Air',
  },
  {
    // framer-10bne66-container — span 5 — framer-v-z6qjfa (Card only)
    id: 'air-design',
    span: 5,
    align: 'center',
    image: null,
    primaryStat: '13 extra appointments',
    secondaryStat: 'in the first 30 days',
    description:
      'Estimate conversion went from 5-10% to near 100% because Larry follows up every time.',
    attribution: 'Air Design Heating and Cooling',
  },
]

// ─── Sub-components ──────────────────────────────────────────────────────────

/** Inner content block shared by all cards */
function CardContent({ card }: { card: StatCard }) {
  const align = card.align
  const textAlign = align === 'center' ? 'center' : 'left'

  return (
    /* framer-47fj8m: flex-col gap:24px align-items per variant */
    <div
      className="wp-card-content"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        gap: '24px',
        padding: '24px',
        flex: card.image ? '2 0 0' : undefined,
        width: card.image ? '1px' : '100%',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* framer-9yvkeq "Header" — stat number block */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: align === 'center' ? 'center' : 'flex-start',
          width: '100%',
        }}
      >
        {/* framer-1rysw7a "Quote" — optional label (Premier Heating only) */}
        {card.label && (
          <h4
            style={{
              fontFamily: '"Graphik Medium", sans-serif',
              fontWeight: 500,
              fontSize: '20px',
              lineHeight: '120%',
              letterSpacing: '0px',
              color: 'rgb(255, 255, 255)',
              textAlign: textAlign,
              margin: '0 0 4px',
            }}
          >
            {card.label}
          </h4>
        )}

        {/* framer-1h6b25z "Quote" — primary stat line (48px) */}
        {/* token-31cd51b2 = #4b79ed */}
        <h4
          style={{
            fontFamily: '"Grenette SemiBold", sans-serif',
            fontWeight: 600,
            fontSize: '48px',
            lineHeight: '120%',
            letterSpacing: '0px',
            color: '#4b79ed',
            textAlign: textAlign,
            margin: 0,
          }}
        >
          {card.primaryStat}
        </h4>

        {/* framer-1i0e16m "Quote" — secondary stat line (28px) */}
        {card.secondaryStat && (
          <h4
            style={{
              fontFamily: '"Grenette SemiBold", sans-serif',
              fontWeight: 600,
              fontSize: '28px',
              lineHeight: '120%',
              letterSpacing: '0px',
              color: '#4b79ed',
              textAlign: textAlign,
              margin: 0,
            }}
          >
            {card.secondaryStat}
          </h4>
        )}
      </div>

      {/* framer-1dpbu6k "Details" — description + attribution */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: align === 'center' ? 'center' : 'flex-start',
          gap: '10px',
          width: '100%',
        }}
      >
        {/* framer-sxfijk "Quote" — description paragraph */}
        {/* token-cbb565d2 fallback rgb(220,220,225) */}
        <p
          style={{
            fontFamily: '"Graphik Regular", sans-serif',
            fontWeight: 400,
            fontSize: '18px',
            lineHeight: '150%',
            color: 'rgb(220, 220, 225)',
            textAlign: textAlign,
            margin: 0,
          }}
        >
          {card.description}
        </p>

        {/* framer-1m9xpd9 "Quote" — attribution (italic) */}
        {/* token-a2f43568 = #aaaaad = rgb(170,170,173) */}
        <p
          style={{
            fontFamily: '"Graphik Regular Italic", sans-serif',
            fontWeight: 400,
            fontStyle: 'italic',
            fontSize: '18px',
            lineHeight: '150%',
            color: 'rgb(170, 170, 173)',
            textAlign: textAlign,
            margin: 0,
          }}
        >
          {card.attribution}
        </p>
      </div>
    </div>
  )
}

/** Single stat card */
function StatCard({ card }: { card: StatCard }) {
  // CSS class for responsive ordering
  const idToClass: Record<string, string> = {
    'arctic-air': 'wp-card-arctic',
    'air-texas': 'wp-card-air-texas',
    premier: 'wp-card-premier',
    'air-design': 'wp-card-air-design',
  }
  const orderClass = idToClass[card.id]

  // framer-z6qjfa card root styles
  const cardRootStyle: React.CSSProperties = {
    // framer-NttUV.framer-z6qjfa border + bg
    backgroundColor: 'rgb(49, 49, 53)',
    border: '1px solid rgb(74, 74, 77)',
    borderRadius: '16px',
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  }

  if (card.image) {
    // framer-v-1bw9pbj "Card with Image third"
    // flex-row; image left (flex:1), content right (flex:2)
    return (
      <div className={`${orderClass} wp-card-with-image`} style={{ gridColumn: `span ${card.span}`, height: '100%' }}>
        <div style={{ ...cardRootStyle, display: 'flex', flexDirection: 'row' }}>
          {/* framer-15qucsw "BG Image" — flex:1 0 0, align-self:stretch */}
          <div
            className="wp-card-bg-image"
            style={{
              flex: '1 0 0',
              alignSelf: 'stretch',
              position: 'relative',
              overflow: 'hidden',
              minWidth: 0,
            }}
          >
            <img
              src={card.image}
              alt=""
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: card.imagePosition ?? 'center',
                display: 'block',
              }}
            />
          </div>

          {/* framer-47fj8m content — flex:2 0 0 */}
          <CardContent card={card} />
        </div>
      </div>
    )
  }

  // framer-v-z6qjfa "Card only" — text only, centered
  return (
    <div className={orderClass} style={{ gridColumn: `span ${card.span}`, height: '100%' }}>
      <div style={{ ...cardRootStyle, display: 'flex', flexDirection: 'column' }}>
        <CardContent card={card} />
      </div>
    </div>
  )
}

// ─── Main section ────────────────────────────────────────────────────────────

export default function WhyPodiumStatsSection() {
  return (
    /* framer-6j180o:
     *   bg:#18181c  padding:80px  display:flex  flex-flow:column
     *   align-items:center  gap:96px  position:relative  overflow:clip
     */
    <section
      className="wp-stats-outer"
      style={{
        backgroundColor: '#18181c',
        padding: '80px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '96px',
        position: 'relative',
        overflow: 'clip',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* framer-1v51u62 "color radial fade blue"
       *   absolute top:-650px left:-650px  1147×1147  z-index:0
       *   Same image as comparison section: why-podium-comparison-blue-fade.png
       */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: '-650px',
          left: '-650px',
          width: '1147px',
          height: '1147px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/images/why-podium-comparison-blue-fade.png"
          alt=""
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* framer-1nqjoo4 "color radial fade red"
       *   absolute bottom:-650px right:-650px  1147×1147  z-index:0
       *   Same image as comparison section: why-podium-comparison-red-fade.png
       */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          bottom: '-650px',
          right: '-650px',
          width: '1147px',
          height: '1147px',
          zIndex: 0,
          pointerEvents: 'none',
        }}
      >
        <img
          src="/images/why-podium-comparison-red-fade.png"
          alt=""
          style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </div>

      {/* framer-rs0vgl: max-width:1080px flex-col align-items:center gap:72px */}
      <div
        className="wp-stats-inner"
        style={{
          maxWidth: '1080px',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '72px',
          position: 'relative',
          zIndex: 1,
          boxSizing: 'border-box',
        }}
      >
        {/* ── Heading block ──────────────────────────────────────────────── */}
        {/*
         * framer-RwRi6 / framer-1duxhx7 "H2 inverted" component:
         *   flex-col  align-items:center  gap:16px  padding:0 0 16px  width:100%
         * Contains framer-4na7px (preheader) + framer-18n4kb3 (h2 + subheader)
         */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            paddingBottom: '16px',
            width: '100%',
          }}
        >
          {/* framer-1h16ojl "Preheader" — preset-271l27
           *   Graphik Medium 16px 500 0.1em ls uppercase rgb(170,170,173)
           */}
          <h6
            style={{
              fontFamily: '"Graphik Medium", sans-serif',
              fontWeight: 500,
              fontSize: '16px',
              lineHeight: '1',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'rgb(170, 170, 173)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            what contractors are saying
          </h6>

          {/* framer-l6pu9u "Heading 2" — preset-xcqpjm
           *   Grenette Regular 46px 400 110% rgb(255,255,255) center
           */}
          <h2
            style={{
              fontFamily: '"Grenette Regular", sans-serif',
              fontWeight: 400,
              fontSize: '46px',
              lineHeight: '110%',
              letterSpacing: '0px',
              color: 'rgb(255, 255, 255)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            Real businesses. Real numbers.
          </h2>

          {/* framer-3zuzid "Subheader" — preset-zmyn5w
           *   Graphik Regular 16px 400 150% rgb(232,232,232) center
           */}
          <p
            style={{
              fontFamily: '"Graphik Regular", sans-serif',
              fontWeight: 400,
              fontSize: '16px',
              lineHeight: '150%',
              color: 'rgb(232, 232, 232)',
              margin: 0,
              textAlign: 'center',
            }}
          >
            These aren&#39;t outliers. They&#39;re what happens when nothing falls through the
            cracks.
          </p>
        </div>

        {/* ── Cards grid ─────────────────────────────────────────────────── */}
        {/*
         * framer-10rzzt5:
         *   display:grid
         *   grid-template-columns: repeat(12, minmax(50px, 1fr))
         *   grid-template-rows:    repeat(2,  minmax(0, 1fr))
         *   gap:30px  height:781px  width:100%
         *
         * Row 1: arctic-air (span 5) + air-texas  (span 7) = 12 cols
         * Row 2: premier    (span 7) + air-design (span 5) = 12 cols
         */}
        <div
          className="wp-stats-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, minmax(50px, 1fr))',
            gridTemplateRows: 'repeat(2, minmax(0, 1fr))',
            gap: '30px',
            height: '781px',
            width: '100%',
          }}
        >
          {CARDS.map((card) => (
            <StatCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}
