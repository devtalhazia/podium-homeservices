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

export default function WhyPodiumClosesSection() {
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

        {/* avatar overlay */}
        <div className="relative z-[1] flex flex-row place-content-start items-start overflow-visible" style={{ gap: 1.78754 }}>
          <img
            src="/images/why-podium-closes-avatar.png"
            alt=""
            aria-hidden="true"
            width={510}
            height={199}
            className="shrink-0 w-[255px] h-[100px] object-cover block"
          />
        </div>
      </div>

      {/* heading */}
      <div className="flex flex-col place-content-center items-center gap-[16px] w-full pb-[16px]">
        <h3 className="text-[32px] desktop:text-[40px] m-0 font-grenette font-normal leading-[120%] tracking-[0] text-center text-ink">
          Larry doesn&rsquo;t just respond. He closes.
        </h3>
        <p className="m-0 w-full font-graphik text-[16px] font-normal leading-[150%] text-center text-gray-mid whitespace-pre-wrap break-words">
          Most AI stops at the answer. Larry goes further because he works inside the same system that runs your business.
        </p>
      </div>

      {/* feature cards row */}
      <div className="flex-col tablet:flex-row w-full max-w-[1200px] flex place-content-start items-start gap-[24px] bg-transparent shrink-0">
        {FEATURES.map((f, i) => (
          <FeatureCard key={i} title={f.title} body={f.body} />
        ))}
      </div>

      {/* CTA */}
      <div className="shrink-0">
        <a
          href="/ai/larry"
          className="flex flex-row place-content-center items-center gap-[10px] w-min h-min px-[32px] py-[16px] bg-crimson rounded-[50px] no-underline cursor-pointer whitespace-nowrap"
        >
          <p className="m-0 font-graphik-semi font-semibold text-[18px] leading-[18px] tracking-[0] text-center text-cream">
            See how Larry works
          </p>
        </a>
      </div>
    </section>
  )
}
