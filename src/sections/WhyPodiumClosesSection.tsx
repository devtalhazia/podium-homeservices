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

function FeatureCard({ title, body }: { title: string; body: string }) {
  return (
    <div className="flex-none w-full tablet:flex-[1_0_0] tablet:w-px tablet:self-stretch bg-white rounded-[16px] flex flex-col items-start gap-[12px] p-[40px_32px] overflow-hidden relative">
      <h6 className="text-[20px] desktop:text-[24px] m-0 font-grenette-semi font-semibold leading-[120%] tracking-[0] text-ink whitespace-pre-wrap break-words">
        {title}
      </h6>
      <p className="text-[14px] tablet:text-[16px] m-0 font-graphik font-normal leading-[150%] text-ink-soft whitespace-pre-wrap break-words text-left">
        {body}
      </p>
    </div>
  )
}

export default function WhyCloseCrewClosesSection() {
  return (
    <section className="px-[24px] py-[48px] tablet:px-[48px] tablet:py-[72px] desktop:p-[80px] relative w-full flex flex-col place-content-start items-center gap-[32px] overflow-hidden bg-[#e8e8ed]">

      {/* image frame */}
      <div className="relative flex flex-col place-content-center items-center gap-0 w-full max-w-[1000px] pt-[120px] pb-[20px] shrink-0 overflow-visible">

        {/* bg chat screenshot */}
        <img
          className="absolute top-0 -left-[240px] -right-[241px] h-[262px] z-0 object-cover aspect-[3.08217] tablet:-left-[99px] tablet:-right-[101px] tablet:h-[283px] desktop:-left-[13px] desktop:-right-[14px] desktop:h-[334px]"
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

      {/* feature cards row */}
      <div className="flex-col tablet:flex-row w-full max-w-[1200px] flex place-content-start items-start gap-[24px] bg-transparent shrink-0">
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
          href="/ai/larry"
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
