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
      className="relative flex flex-col items-start gap-[12px] overflow-hidden rounded-[16px] bg-white px-[20px] py-[28px] tablet:px-[28px] tablet:py-[34px] desktop:px-[32px] desktop:py-[40px]"
    >
      {/* h6 title — framer-de4hd6/hggclt/66bprx + framer-styles-preset-1963bkz
          "Grenette SemiBold" fontWeight:600
          Desktop: 24px  Tablet/mobile: 20px  lineHeight:120%
          color: #1c1b18 (token-f884ba8b) */}
      <h6
        className="m-0 break-words whitespace-pre-wrap font-grenette-semi text-[20px] font-semibold leading-[120%] tracking-[0] text-ink desktop:text-[24px]"
      >
        {title}
      </h6>

      {/* body — framer-1c5heio/9cwpxo/xyhmvm + framer-styles-preset-zmyn5w
          "Graphik Regular" fontWeight:400
          Desktop: 16px  Mobile: 14px  lineHeight:150%  textAlign:left
          color: rgb(78,74,68) (token-5ab45095) */}
      <p
        className="m-0 break-words whitespace-pre-wrap text-left font-graphik text-[14px] font-normal leading-[150%] text-[rgb(78,74,68)] desktop:text-[16px]"
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
      className="relative flex w-full flex-col items-center gap-[32px] overflow-hidden bg-[#e8e8ed] px-[24px] py-[56px] tablet:px-[48px] tablet:py-[64px] desktop:p-[80px]"
    >
      {/* ── Image frame — framer-1ur3g84 ──────────────────────────────────── */}
      {/* flex-col; max-width:1000px; width:100%; padding:120px 0 20px; relative */}
      <div className="relative flex w-full max-w-[1000px] shrink-0 flex-col items-center gap-0 overflow-visible pb-[20px] pt-[80px] desktop:pt-[120px]">
        {/* ── Background chat screenshot — framer-1hyx1qq ──────────────────── */}
        {/* absolute; top:0 left:-13px right:-14px; aspect-ratio:3.08217; height:334px */}
        {/* Responsive sizes handled by .wp-closes-bg-img CSS class */}
        <img
          className="absolute left-[-14px] right-[-14px] top-0 h-[220px] w-auto aspect-[3.08217] object-cover tablet:h-[280px] desktop:h-[334px]"
          src="/images/why-podium-closes-bg.png"
          alt=""
          aria-hidden="true"
          width={2213}
          height={718}
        />

        {/* ── AI Employee/Avery overlay — framer-2zddz2 ────────────────────── */}
        {/* flex-row; width:min-content; gap:1.78754px; position:relative */}
        <div className="relative z-[1] flex w-min flex-row items-start gap-[1.78754px] overflow-visible">
          {/* framer-o5azrq: width:255px; height:100px; aspect-ratio:2.56281 */}
          <img
            src="/images/why-podium-closes-avatar.png"
            alt=""
            aria-hidden="true"
            width={510}
            height={199}
            className="block h-[80px] w-[204px] shrink-0 object-cover tablet:h-[90px] tablet:w-[230px] desktop:h-[100px] desktop:w-[255px]"
          />
        </div>
      </div>

      {/* ── Heading — framer-1ol82hi → framer-18n4kb3 ────────────────────── */}
      {/* framer-1ol82hi: flex:none; width:100%; height:auto */}
      {/* framer-18n4kb3: flex-col; align-items:center; gap:16px; padding:0 0 16px */}
      <div className="flex w-full flex-col items-center gap-[16px] pb-[16px]">
        {/* H3 — framer-styles-preset-19h1oaz override
            "Grenette Regular" fontWeight:400
            Desktop:40px  Tablet:32px  lineHeight:120%
            textAlign:center  color:#1c1b18 (token-f884ba8b)  */}
        <h3
          className="m-0 text-center font-grenette text-[30px] font-normal leading-[120%] tracking-[0] text-ink tablet:text-[34px] desktop:text-[40px]"
        >
          Larry doesn&rsquo;t just respond. He closes.
        </h3>

        {/* Subheader — framer-3zuzid + framer-styles-preset-zmyn5w
            "Graphik Regular" fontWeight:400  16px  lineHeight:150%
            textAlign:center  color:rgb(98,98,101) (token-0b3ab9e9) */}
        <p
          className="m-0 w-full break-words whitespace-pre-wrap text-center font-graphik text-[16px] font-normal leading-[150%] text-[rgb(98,98,101)]"
        >
          Most AI stops at the answer. Larry goes further because he works inside the same system that runs your business.
        </p>
      </div>

      {/* ── Feature cards row — framer-x0g5pw ───────────────────────────── */}
      {/* Desktop flex-row; gap:24px; max-width:1200px; align-items:flex-start */}
      {/* Mobile → flex-direction:column via .wp-closes-cards-row            */}
      <div className="flex w-full max-w-[1200px] shrink-0 flex-col items-start justify-start gap-[12px] bg-transparent tablet:gap-[16px] desktop:flex-row desktop:items-start desktop:justify-center desktop:gap-[24px]">
        {FEATURES.map((f, i) => (
          <FeatureCard key={i} title={f.title} body={f.body} />
        ))}
      </div>

      {/* ── CTA button — framer-rd9wgt ───────────────────────────────────── */}
      {/* framer-rd9wgt: flex:none; width:auto; height:auto                  */}
      {/* framer-OeYYV: bg:rgb(157,64,60); border-radius:50px; padding:16px 32px */}
      {/* framer-tap6xd: "Graphik Semibold" 18px rgb(247,244,237)            */}
      <div className="h-auto w-auto shrink-0">
        <a
          href="/larry"
          className="flex h-min w-min cursor-pointer flex-row items-center justify-center gap-[10px] whitespace-nowrap rounded-[50px] bg-crimson px-[32px] py-[16px] no-underline"
        >
          <p className="m-0 text-center font-graphik-semibold text-[18px] font-semibold leading-[18px] tracking-[0] text-cream">
            See how Larry works
          </p>
        </a>
      </div>
    </section>
  )
}
