import React, { useRef } from 'react'
import {
  motion,
  useMotionValue,
  useAnimationFrame,
} from 'framer-motion'
import '../styles/testimonials.css'

/* ── Constants ────────────────────────────────────────────── */
const TRACK_WIDTH = 3810   // total width of one full set of 10 items + gaps
const SPEED       = TRACK_WIDTH / 60  // pixels per second (60 s per loop)
const NOISE       = 'dqdlGSonxq2QP9nY3NvO20QaaDo.png'

/* ── SVG Quote Marks ──────────────────────────────────────── */
const QuoteSVG = () => (
  <svg
    role="presentation"
    aria-hidden="true"
    viewBox="0 0 26.042 22.546"
    overflow="visible"
    style={{ width: 26, height: 23, flexShrink: 0 }}
  >
    <path
      d="M 11.71 0.874 C 8.127 2.447 4.719 7.865 4.282 11.361 C 5.069 11.011 6.03 10.924 6.642 10.924 C 9.525 10.924 11.71 13.283 11.71 16.779 C 11.71 20.362 8.914 22.546 6.117 22.546 C 2.359 22.546 0 19.575 0 15.206 C 0 9.263 4.369 2.709 11.273 0 Z M 14.332 15.206 C 14.332 9.263 18.701 2.709 25.605 0 L 26.042 0.874 C 22.459 2.447 19.051 7.865 18.614 11.361 C 19.4 11.011 20.362 10.924 20.973 10.924 C 23.857 10.924 26.042 13.283 26.042 16.779 C 26.042 20.362 23.245 22.546 20.449 22.546 C 16.691 22.546 14.332 19.575 14.332 15.206 Z"
      fill="rgb(255, 255, 255)"
    />
  </svg>
)

/* ── Easing (Framer default ease-in-out) ──────────────────── */
const EASE: [number, number, number, number] = [0.4, 0, 0.2, 1]

/* ── Card Type A: Quote-med (450×504) ─────────────────────── */
interface QuoteMedCardProps {
  image: string
  quote: string
  author: string
  company: string
}

const QuoteMedCard = ({ image, quote, author, company }: QuoteMedCardProps) => (
  <motion.div
    initial="rest"
    whileHover="hover"
    animate="rest"
    style={{
      position: 'relative',
      width: 450,
      height: 504,
      borderRadius: 24,
      overflow: 'hidden',
      boxShadow: '0px 4px 12px 0px rgba(0, 0, 0, 0.16)',
      background: 'linear-gradient(180deg, rgb(195, 195, 200) 0%, rgb(195, 195, 200) 100%)',
      flexShrink: 0,
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-end',
      padding: 40,
    }}
  >
    {/* Background image — z-index:0 absolute fill */}
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <img
        src={`/images/${image}`}
        alt=""
        aria-hidden="true"
        decoding="async"
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'inherit' }}
      />
    </div>
    {/* Dark fade — slides up on hover (top: 0 → -396px) */}
    <motion.div
      aria-hidden="true"
      variants={{
        rest:  { top: 0 },
        // hover: { top: -396 },
      }}
      transition={{ duration: 0.45, ease: EASE }}
      style={{
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0) 100%)',
        height: 504,
      }}
    />
    {/* Content row — sits above gradient */}
    <div
      style={{
        position: 'relative',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'row',
        flex: '1 0 0',
        alignItems: 'flex-start',
        justifyContent: 'flex-end',
        gap: 48,
      }}
    >
      <QuoteSVG />
      <div style={{ display: 'flex', flexDirection: 'column', flex: '1 0 0', gap: 24, alignItems: 'flex-start' }}>
        <p style={{ fontFamily: '"Graphik Regular", sans-serif', fontSize: 19, fontWeight: 400, lineHeight: '150%', letterSpacing: 0, color: 'rgb(247, 244, 237)', margin: 0 }}>
          {quote}
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24, width: '100%' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <p style={{ fontFamily: '"Graphik Regular", sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '150%', color: 'rgb(255, 255, 255)', margin: 0 }}>
              {author}
            </p>
            <p style={{ fontFamily: '"Graphik Semibold", sans-serif', fontSize: 18, fontWeight: 600, lineHeight: '150%', color: 'rgb(255, 255, 255)', margin: 0 }}>
              {company}
            </p>
          </div>
        </div>
      </div>
    </div>
  </motion.div>
)

/* ── Card Type B: Glass small card (inside GlassColumn) ──── */
interface GlassSmallCardProps {
  background: string
  icon?: string
  stat: string
  statFontSize: number
  label: string
  company: string
}

const GlassSmallCard = ({ background, icon, stat, statFontSize, label, company }: GlassSmallCardProps) => (
  <motion.div
    initial="rest"
    whileHover="hover"
    animate="rest"
    style={{
      position: 'relative',
      width: 320,
      padding: 40,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 12,
      borderRadius: 24,
      overflow: 'clip',
      cursor: 'pointer',
      background: 'linear-gradient(180deg, rgba(61, 57, 53, 0.06) 0%, rgba(126, 120, 104, 0.06) 100%)',
      flex: '1 0 0',
      minHeight: 0,
    }}
  >
    {/* Background image */}
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <img
        src={`/images/${background}`}
        alt=""
        aria-hidden="true"
        decoding="async"
        style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }}
      />
    </div>
    {/* Dark fade (opacity 0 → 1 on hover, rotated so black is at top) */}
    <motion.div
      aria-hidden="true"
      variants={{ rest: { opacity: 0 }, hover: { opacity: 0.5 } }}
      transition={{ duration: 0.35, ease: EASE }}
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        zIndex: 0,
        transform: 'rotate(-180deg)',
        background: 'linear-gradient(0deg, rgb(0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
      }}
    />
    {/* Stat block: icon + number */}
    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8, width: '93%' }}>
      {icon && (
        <div style={{ width: 68, height: 68, flexShrink: 0, overflow: 'hidden' }}>
          <img src={`/images/${icon}`} alt="" aria-hidden="true" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      )}
      <h1 style={{ fontFamily: '"Grenette Regular", sans-serif', fontSize: statFontSize, fontWeight: 400, lineHeight: '110%', letterSpacing: 0, color: '#fff', textAlign: 'center', margin: 0 }}>
        {stat}
      </h1>
    </div>
    {/* Label */}
    <motion.p
      variants={{ rest: { width: '100%' }, hover: { width: '249px' } }}
      transition={{ duration: 0.35, ease: EASE }}
      style={{ position: 'relative', zIndex: 1, fontFamily: '"Graphik Semibold", sans-serif', fontSize: 18, fontWeight: 600, lineHeight: '150%', color: '#fff', textAlign: 'center', margin: 0 }}
    >
      {label}
    </motion.p>
    {/* Company */}
    <motion.p
      variants={{ rest: { width: 260 }, hover: { width: 249 } }}
      transition={{ duration: 0.35, ease: EASE }}
      style={{ position: 'relative', zIndex: 1, fontFamily: '"Graphik Regular", sans-serif', fontSize: 14, fontWeight: 400, lineHeight: '18px', color: '#fff', textAlign: 'center', margin: 0 }}
    >
      {company}
    </motion.p>
  </motion.div>
)

/* ── Card Type B: GlassColumn (two stacked GlassSmallCards) ─ */
interface GlassColumnProps {
  top: GlassSmallCardProps
  bottom: GlassSmallCardProps
}

const GlassColumn = ({ top, bottom }: GlassColumnProps) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 10, width: 320, height: 504, flexShrink: 0 }}>
    <GlassSmallCard {...top} />
    <GlassSmallCard {...bottom} />
  </div>
)

/* ── Card Type C: Single Tall Glass Stat (320×504) ────────── */
interface StatCardProps {
  background: string
  icon: string
  stat: string
  statFontSize: number
  detail: string
}

const StatCard = ({ background, icon, stat, statFontSize, detail }: StatCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3, ease: EASE }}
    style={{
      position: 'relative',
      width: 320,
      height: 504,
      borderRadius: 24,
      overflow: 'hidden',
      cursor: 'pointer',
      background: 'linear-gradient(180deg, rgba(61, 57, 53, 0.06) 0%, rgba(126, 120, 104, 0.06) 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 30,
      padding: 40,
      flexShrink: 0,
    }}
  >
    {/* Background image */}
    <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
      <img src={`/images/${background}`} alt="" aria-hidden="true" decoding="async" style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
    {/* Dark fade */}
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: -400,
        zIndex: 0,
        background: 'linear-gradient(0deg, rgb(0,0,0) 0%, rgba(0,0,0,0.1) 100%)',
        opacity: 0.25,
        transform: 'rotate(-180deg)',
      }}
    />
    {/* Stat */}
    <div style={{ position: 'relative', zIndex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: 8, width: '100%' }}>
        <div style={{ width: 68, height: 68, overflow: 'visible' }}>
          <img src={`/images/${icon}`} alt="" aria-hidden="true" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <h1 style={{ fontFamily: '"Grenette Regular", sans-serif', fontSize: statFontSize, fontWeight: 400, lineHeight: '110%', letterSpacing: 0, color: '#fff', textAlign: 'center', margin: 0 }}>
          {stat}
        </h1>
      </div>
      <p style={{ fontFamily: '"Graphik Regular", sans-serif', fontSize: 18, fontWeight: 400, lineHeight: '150%', color: '#fff', textAlign: 'center', margin: 0 }}>
        {detail}
      </p>
    </div>
  </motion.div>
)

/* ── Card Type D: CustomerStoryCard (2 stacked photos) ───── */
interface CustomerStoryCardProps {
  image1: string
  image2: string
}

const CustomerStoryCard = ({ image1, image2 }: CustomerStoryCardProps) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3, ease: EASE }}
    style={{ width: 320, height: 504, display: 'flex', flexDirection: 'column', gap: 24, overflow: 'visible', flexShrink: 0, cursor: 'pointer' }}
  >
    <div style={{ position: 'relative', width: 320, height: 240, borderRadius: 24, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.16)', backgroundColor: '#aaaaad', flexShrink: 0 }}>
      <img src={`/images/${image1}`} alt="" aria-hidden="true" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <img src={`/images/${NOISE}`} alt="" aria-hidden="true" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'soft-light' }} />
    </div>
    <div style={{ position: 'relative', width: 320, height: 240, borderRadius: 24, overflow: 'hidden', boxShadow: '0 4px 12px rgba(0,0,0,0.16)', backgroundColor: '#c3c3c8', flexShrink: 0 }}>
      <img src={`/images/${image2}`} alt="" aria-hidden="true" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
      <img src={`/images/${NOISE}`} alt="" aria-hidden="true" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', mixBlendMode: 'soft-light', opacity: 0.5 }} />
    </div>
  </motion.div>
)

/* ── Carousel data ────────────────────────────────────────── */
const CAROUSEL_ITEMS = [
  <QuoteMedCard key="q1"
    image="JXAwZLcvNuN9FwACgddrp1qCU.png"
    quote="When someone's AC is out in Louisiana, they want service NOW. If we respond first, we win the business."
    author="Carl Kelly, COO" company="Trouth AC"
  />,
  <GlassColumn key="gc1"
    top={{ background:'P0THBLG3vQlUfO7v2IGMNxQ.png', icon:'2qRrfxjt8GEowW4xdJXxsky8.svg', stat:'40K', statFontSize:72, label:'saved annually with Voice AI', company:'Top Mechanical Service Inc.' }}
    bottom={{ background:'P0THBLG3vQlUfO7v2IGMNxQ.png', icon:'rlHMzmGRAZNghzu17orYNR14.svg', stat:'41', statFontSize:72, label:'additional appointments booked in 30 days with Larry', company:'Heritage Mountain Heating & Cooling' }}
  />,
  <QuoteMedCard key="q2"
    image="E2OjBROpd8MW7NxGtUg7ErOA.png"
    quote="Podium is amazing. Oh, I love it. Absolutely. Definite game changer for us being able to text quickly and connect with our technicians."
    author="Amy Ewing, Office and Service Manager" company="Design Air, Inc."
  />,
  <CustomerStoryCard key="cs1" image1="c7WDKfdxBvG3KtVpzpd0Hga9oY.png" image2="tb9kTaUJ169vh6QiAVTNBd8.png" />,
  <StatCard key="st1"
    background="FkBx4GckClyDkXH5v8umNe8Gj8.png" icon="wjgO5gCDRFel3Wylvio70kSKAgg.png"
    stat="40%" statFontSize={88} detail="more calls handled with Podium Phones."
  />,
  <QuoteMedCard key="q3"
    image="1rktX3Q7ke3hpvdjBqS5SkkhmM.png"
    quote="I don't worry about my phones anymore. I know every call is answered. Now I can focus on everything else."
    author="Katherine Story, Office Manager" company="Arctic Air"
  />,
  <GlassColumn key="gc2"
    top={{ background:'P0THBLG3vQlUfO7v2IGMNxQ.png', icon:'6TSSzl56DRaRMH0zrR7obyKrpiY.png', stat:'57', statFontSize:96, label:'appointments set by Larry in 30 days', company:'Warner Super Service' }}
    bottom={{ background:'P0THBLG3vQlUfO7v2IGMNxQ.png', stat:'5-15 hrs', statFontSize:72, label:'saved weekly with Podium AI', company:'Air Design Heating & Cooling' }}
  />,
  <QuoteMedCard key="q4"
    image="8wmwG210q7leKcnS41mbrXxd60.png"
    quote="Instead of voicemails piling up, Larry 2.0 captures the customer's information, filters what's urgent, and tells us exactly what we're calling back about. It's taken so much pressure off our team."
    author="Lauren Hardin, Office Manager" company="Olympus Electric & Air"
  />,
  <StatCard key="st2"
    background="FkBx4GckClyDkXH5v8umNe8Gj8.png" icon="6TSSzl56DRaRMH0zrR7obyKrpiY.png"
    stat="$2,000" statFontSize={72} detail="Air Texas saves $2,000/month by replacing service with Podium's Voice AI."
  />,
  <CustomerStoryCard key="cs2" image1="6Cg2set3ZhyypXsavYgeMsFXnuo.png" image2="IhRc1j0QWW4wCrOOtspj9qBWNr8.png" />,
]

/* ── Infinite Marquee (Framer Motion + useAnimationFrame) ─── */
function InfiniteMarquee() {
  const x = useMotionValue(0)
  const isPaused = useRef(false)

  useAnimationFrame((_, delta) => {
    if (isPaused.current) return
    let next = x.get() - SPEED * (delta / 1000)
    if (next <= -TRACK_WIDTH) next += TRACK_WIDTH
    x.set(next)
  })

  const handleHoverStart = () => { isPaused.current = true }
  const handleHoverEnd   = () => { isPaused.current = false }

  return (
    <div
      className="testimonials-carousel"
      style={{ width: '100%', overflow: 'hidden', position: 'relative', cursor: 'grab' }}
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
    >
      <motion.div
        style={{
          x,
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 10,
          width: 'max-content',
          paddingLeft: 10,
        }}
      >
        {/* Two copies for seamless loop */}
        {CAROUSEL_ITEMS}
        {CAROUSEL_ITEMS.map((item) =>
          React.cloneElement(item as React.ReactElement<{ key: string }>, {
            key: `dup-${(item as React.ReactElement<{ key: string }>).key}`,
          })
        )}
      </motion.div>
    </div>
  )
}

/* ── Section ──────────────────────────────────────────────── */
export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="testimonials-section"
      style={{
        backgroundColor: '#18181c',
        padding: '80px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 32,
        width: '100%',
        overflow: 'clip',
      }}
    >
      {/* ── Header ──────────────────────────────────────────── */}
      <div
        className="testimonials-header"
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 24,
          width: '100%',
          maxWidth: 1440,
          padding: '0 80px',
          zIndex: 2,
        }}
      >
        {/* Preheader h6 — appears from above when in view */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{ width: '100%', height: 25, position: 'relative' }}
          className="testimonials-preheader"
        >
          <h6
            style={{
              fontFamily: '"Graphik Medium", "Graphik Medium Placeholder", sans-serif',
              fontSize: 16,
              fontWeight: 500,
              letterSpacing: '.1em',
              lineHeight: '150%',
              textTransform: 'uppercase',
              textAlign: 'center',
              color: 'rgb(170, 170, 173)',
              margin: 0,
            }}
          >
            Real results for real businesses
          </h6>
        </motion.div>

        {/* Heading h2 — appears from above with slight delay */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
          style={{ width: '100%' }}
        >
          <h2
            style={{
              fontFamily: '"Grenette Regular", "Grenette Regular Placeholder", sans-serif',
              fontSize: 46,
              fontWeight: 400,
              lineHeight: '110%',
              letterSpacing: 0,
              textAlign: 'center',
              color: 'rgb(247, 244, 237)',
              margin: 0,
            }}
          >
            Trusted by{' '}
            <strong style={{ fontFamily: '"Grenette Bold", "Grenette Bold Placeholder", sans-serif', fontWeight: 700 }}>
              9,000+
            </strong>
            {' '}home service businesses
          </h2>
        </motion.div>
      </div>

      {/* ── Carousel ─────────────────────────────────────────── */}
      <InfiniteMarquee />

      {/* ── Feature cards row ────────────────────────────────── */}
      <div
        className="tc-cards-row"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          maxWidth: 1600,
          padding: '0 80px',
          boxSizing: 'border-box',
        }}
      >
        {/* Card 1 — Premium onboarding */}
        <motion.div
          className="tc-card"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE }}
          style={{
            borderRadius: 32,
            flex: '1 0 0',
            minWidth: 340,
            maxWidth: 460,
            overflow: 'hidden',
          }}
        >
          <div
            className="tc-card-inner"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              width: '100%',
              padding: '48px 32px',
              boxSizing: 'border-box',
            }}
          >
            <h6 style={{
              fontFamily: '"Grenette SemiBold", "Grenette SemiBold Placeholder", sans-serif',
              fontSize: 20,
              fontWeight: 600,
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              color: 'rgb(247, 244, 237)',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              width: '100%',
            }}>
              Premium onboarding
            </h6>
            <p style={{
              fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
              fontSize: 15,
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              color: 'rgb(170, 170, 173)',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              width: '100%',
            }}>
              Our white-glove onboarding service ensures you're set up for success. You'll have a Podium team member available every step.
            </p>
          </div>
        </motion.div>

        {/* Divider 1 */}
        <div className="tc-divider" style={{ flexShrink: 0, width: 3, height: 250 }}>
          <svg
            className="tc-divider-line"
            viewBox="0 0 2 321"
            style={{ width: '100%', height: '100%', display: 'block' }}
            aria-hidden="true"
          >
            <line x1="1" y1="240" x2="1" y2="81" stroke="#7B7C79" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Card 2 — Dedicated customer support */}
        <motion.div
          className="tc-card"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.1 }}
          style={{
            borderRadius: 32,
            flex: '1 0 0',
            minWidth: 340,
            maxWidth: 460,
            overflow: 'hidden',
          }}
        >
          <div
            className="tc-card-inner"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              width: '100%',
              padding: '48px 32px',
              boxSizing: 'border-box',
            }}
          >
            <h6 style={{
              fontFamily: '"Grenette SemiBold", "Grenette SemiBold Placeholder", sans-serif',
              fontSize: 20,
              fontWeight: 600,
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              color: 'rgb(247, 244, 237)',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              width: '100%',
            }}>
              Dedicated customer support
            </h6>
            <p style={{
              fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
              fontSize: 15,
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              color: 'rgb(170, 170, 173)',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              width: '100%',
            }}>
              Whatever your business needs, our expert support team is here to help you so you can focus on what you do best.
            </p>
          </div>
        </motion.div>

        {/* Divider 2 */}
        <div className="tc-divider" style={{ flexShrink: 0, width: 3, height: 250 }}>
          <svg
            className="tc-divider-line"
            viewBox="0 0 2 321"
            style={{ width: '100%', height: '100%', display: 'block' }}
            aria-hidden="true"
          >
            <line x1="1" y1="240" x2="1" y2="81" stroke="#7B7C79" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>

        {/* Card 3 — Works with your systems */}
        <motion.div
          className="tc-card"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, ease: EASE, delay: 0.2 }}
          style={{
            borderRadius: 32,
            flex: '1 0 0',
            minWidth: 340,
            maxWidth: 460,
            overflow: 'hidden',
          }}
        >
          <div
            className="tc-card-inner"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 16,
              width: '100%',
              padding: '48px 32px',
              boxSizing: 'border-box',
            }}
          >
            <h6 style={{
              fontFamily: '"Grenette SemiBold", "Grenette SemiBold Placeholder", sans-serif',
              fontSize: 20,
              fontWeight: 600,
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              color: 'rgb(247, 244, 237)',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              width: '100%',
            }}>
              Works with your systems
            </h6>
            <p style={{
              fontFamily: '"Graphik Regular", "Graphik Regular Placeholder", sans-serif',
              fontSize: 15,
              fontWeight: 400,
              lineHeight: '150%',
              letterSpacing: 0,
              textAlign: 'center',
              color: 'rgb(170, 170, 173)',
              margin: 0,
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
              width: '100%',
            }}>
              Podium integrates with the tools your front and back office already use, so you don't notice interruptions in your day-to-day.
            </p>
          </div>
        </motion.div>
      </div>

      {/* ── CTA row ───────────────────────────────────────────── */}
      <motion.div
        className="tc-cta-row"
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.45, ease: EASE }}
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 48,
          width: '100%',
          maxWidth: 1440,
          padding: '0 80px',
          boxSizing: 'border-box',
        }}
      >
        <a
          href="https://calendly.com/umar-softaims/hvac-automation"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 10,
            padding: '16px 32px',
            backgroundColor: 'rgb(157, 64, 60)',
            borderRadius: 50,
            textDecoration: 'none',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          <span style={{
            fontFamily: '"Graphik Semibold", "Graphik Semibold Placeholder", sans-serif',
            fontSize: 18,
            fontWeight: 600,
            lineHeight: '18px',
            letterSpacing: 0,
            textAlign: 'center',
            color: 'rgb(247, 244, 237)',
          }}>
            Grow with us
          </span>
        </a>
      </motion.div>
    </section>
  )
}

