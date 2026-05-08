function QuoteMarks() {
  return (
    <svg width="26" height="23" viewBox="0 0 26 23" fill="none" aria-hidden="true" className="shrink-0 w-[26px] h-[23px] relative">
      <path
        d="M0 22.08V13.248C0 9.984 0.88 7.168 2.64 4.8C4.48 2.432 7.04 0.864 10.32 0.096L12.24 3.072C9.84 3.808 8 5.056 6.72 6.816C5.44 8.576 4.84 10.56 4.912 12.768H8.832V22.08H0ZM13.44 22.08V13.248C13.44 9.984 14.32 7.168 16.08 4.8C17.92 2.432 20.48 0.864 23.76 0.096L25.68 3.072C23.28 3.808 21.44 5.056 20.16 6.816C18.88 8.576 18.28 10.56 18.352 12.768H22.272V22.08H13.44Z"
        fill="white"
        fillOpacity="0.5"
      />
    </svg>
  )
}

function GlassInner() {
  return (
    <div className="absolute inset-0 w-full h-full rounded-[24px] z-[1] bg-[hsl(0_0%_100%/0.125)] backdrop-blur-[12px] pointer-events-none">
      <div
        className="absolute inset-0 rounded-[24px] z-[2] pointer-events-none border border-transparent"
        style={{
          background: 'linear-gradient(315deg, rgba(255,255,255,0.5) 0%, rgba(120,120,120,0) 30%, rgba(120,120,120,0) 70%, rgba(255,255,255,0.5) 100%) border-box',
          WebkitMask: 'linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'destination-out',
          maskComposite: 'exclude',
        } as React.CSSProperties}
      />
    </div>
  )
}

function Attribution({ author, company }: { author: string; company: string }) {
  return (
    <div className="flex flex-col gap-[24px] w-full">
      <div className="flex flex-col gap-0 w-full">
        <p className="m-0 font-graphik text-[15px] leading-[150%] text-white">{author}</p>
        <p className="m-0 font-graphik-semi text-[18px] leading-[150%] text-white">{company}</p>
      </div>
    </div>
  )
}

function QuoteContent({ quote, author, company }: { quote: string; author: string; company: string }) {
  return (
    <div className="flex flex-row flex-[1_0_0] place-content-[flex-start_flex-end] items-start gap-[24px] w-px relative z-[2]">
      <QuoteMarks />
      <div className="flex flex-col flex-[1_0_0] place-content-[flex-start_flex-end] items-start gap-[24px] w-px">
        <p className="m-0 font-graphik text-[19px] font-normal leading-[150%] text-white w-full">{quote}</p>
        <Attribution author={author} company={company} />
      </div>
    </div>
  )
}

function GlassCard({ quote, author, company }: { quote: string; author: string; company: string }) {
  return (
    <div className="flex-[1_0_0] w-px self-stretch rounded-[24px] bg-[linear-gradient(180deg,rgba(61,57,53,0.25)_0%,rgba(127,121,105,0.25)_100%)] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.16)] flex flex-row place-content-end items-end gap-[48px] p-[40px] relative overflow-hidden cursor-pointer">
      <GlassInner />
      <div className="absolute -top-[78px] left-0 right-0 bottom-0 z-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_100%)] opacity-25 pointer-events-none" />
      <QuoteContent quote={quote} author={author} company={company} />
    </div>
  )
}

function ImageCard({ quote, author, company, image }: { quote: string; author: string; company: string; image: string }) {
  return (
    <div className="flex-[2_0_0] w-px h-[380px] rounded-[24px] bg-[rgb(195,195,200)] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.16)] flex flex-row place-content-end items-end gap-[48px] p-[40px] relative overflow-hidden cursor-pointer">
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" className="block w-full h-full object-cover object-center" style={{ borderRadius: 'inherit' }} />
      </div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />
      <QuoteContent quote={quote} author={author} company={company} />
    </div>
  )
}

function ImageQuoteCard({ quote, author, company, image }: { quote: string; author: string; company: string; image: string }) {
  return (
    <div className="flex-[2_0_0] w-px rounded-[24px] bg-[rgb(195,195,200)] shadow-[0px_4px_12px_0px_rgba(0,0,0,0.16)] flex flex-row place-content-end items-end gap-[48px] p-[40px] relative overflow-hidden min-h-[320px] cursor-pointer">
      <div className="absolute inset-0 z-0">
        <img src={image} alt="" className="block w-full h-full object-cover object-center" style={{ borderRadius: 'inherit' }} />
      </div>
      <div className="absolute inset-0 z-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_100%)] pointer-events-none" />
      <QuoteContent quote={quote} author={author} company={company} />
    </div>
  )
}

export default function LarryTestimonialsSection() {
  return (
    <section className="bg-[#18181c] flex flex-col place-content-[center_flex-start] items-center gap-[64px] w-full p-[80px] overflow-hidden relative">
      {/* Blue fade top-left */}
      <div className="absolute w-[1192px] h-[1049px] top-0 left-0 z-0 pointer-events-none">
        <img src="/images/larry-testimonials-blue-fade.png" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Red fade bottom-right */}
      <div className="absolute bottom-0 left-[508px] right-0 z-0 pointer-events-none">
        <img src="/images/larry-testimonials-red-fade.png" alt="" className="w-full h-full object-cover" />
      </div>
      {/* Carbon texture */}
      <div className="absolute top-0 left-0 right-0 h-[560px] z-0 pointer-events-none">
        <img src="/images/larry-hero-bg.png" alt="" className="w-full h-full object-cover" />
      </div>

      <div className="max-w-[1440px] flex flex-col items-center gap-[30px] w-full relative z-[1]">
        {/* Heading */}
        <div className="flex flex-col gap-[48px] pb-[24px] w-full items-center">
          <div className="flex flex-col items-center gap-[16px] pb-[16px]">
            <h6 className="m-0 font-graphik-medium text-[16px] font-medium tracking-[0.1em] uppercase text-[rgb(170,170,173)]">
              AI that drives results
            </h6>
            <h2 className="m-0 font-grenette text-[46px] font-normal leading-[110%] text-white text-center">
              What our customers are saying about Larry
            </h2>
          </div>
        </div>

        {/* Row 1 */}
        <div className="flex flex-col desktop:flex-row gap-[30px] items-stretch w-full">
          <GlassCard
            quote="Since Larry 2.0, I hit one button, write what it should say, and it's fixed immediately."
            author="Frances Johnson, Owner"
            company="Heritage Mountain Heating & Cooling"
          />
          <ImageCard
            quote="Before CloseCrew, we spent 2\u20134 hours a day on invoicing; with Larry\u2019s paperless workflow, we can finish in about an hour\u2014cutting invoicing time by at least half."
            author="Jase Marshall, CFO"
            company="Air Design Heating and Cooling"
            image="/images/larry-testimonial-jase.png"
          />
        </div>

        {/* Row 2 */}
        <div className="flex flex-col desktop:flex-row gap-[30px] items-stretch w-full">
          <ImageQuoteCard
            quote="Knowing AI will pick up when I'm busy gives me peace of mind. My full attention can go to the customer I'm in front of, instead of me staring at my phone every time it rings."
            author="Rudy Urbina, Owner"
            company="Top Mechanical Service"
            image="/images/larry-testimonial-rudy.png"
          />
          <GlassCard
            quote="Instead of voicemails piling up, Larry 2.0 captures the customer's information, filters what's urgent, and tells us exactly what we're calling back about. It's taken so much pressure off our team."
            author="Lauren Hardin, Office Manager"
            company="Olympus Electric & Air"
          />
        </div>
      </div>
    </section>
  )
}
