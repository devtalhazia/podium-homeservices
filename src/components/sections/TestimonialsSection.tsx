import AnimateIn from "@/components/ui/AnimateIn";

// ─── Image constants ──────────────────────────────────────────────────────────
const BG_GLASS  = "https://framerusercontent.com/images/P0THBLG3vQlUfO7v2IGMNxQ.png";
const BG_PROD   = "https://framerusercontent.com/images/FkBx4GckClyDkXH5v8umNe8Gj8.png";
const NOISE_TEX = "https://framerusercontent.com/images/dqdlGSonxq2QP9nY3NvO20QaaDo.png";

// ─── Types ────────────────────────────────────────────────────────────────────

type QuoteItem = {
  kind: "quote";
  photo: string;
  quote: string;
  author: string;
  company: string;
};

type StatEntry = {
  stat: string;
  label: string;
  company: string;
  icon?: string;
  statPx: 72 | 96;
};

type StatPairItem  = { kind: "stat-pair";  stats: [StatEntry, StatEntry] };
type PhotoPairItem = { kind: "photo-pair"; photos: [string, string] };
type WideStatItem  = { kind: "wide-stat";  stat: string; statPx: 72 | 88; label: string; company: string; icon?: string };

type TrackItem = QuoteItem | StatPairItem | PhotoPairItem | WideStatItem;

// ─── Track data ───────────────────────────────────────────────────────────────

const track: TrackItem[] = [
  {
    kind: "quote",
    photo: "https://framerusercontent.com/images/JXAwZLcvNuN9FwACgddrp1qCU.png",
    quote: "When someone's AC is out in Louisiana, they want service NOW. If we respond first, we win the business.",
    author: "Carl Kelly, COO",
    company: "Trouth AC",
  },
  {
    kind: "stat-pair",
    stats: [
      {
        stat: "$40K",
        label: "saved annually with Voice AI",
        company: "Top Mechanical Service Inc.",
        icon: "https://framerusercontent.com/images/2qRrfxjt8GEowW4xdJXxsky8.svg",
        statPx: 72,
      },
      {
        stat: "41",
        label: "additional appointments booked in 30 days with Larry",
        company: "Heritage Mountain Heating & Cooling",
        icon: "https://framerusercontent.com/images/rlHMzmGRAZNghzu17orYNR14.svg",
        statPx: 72,
      },
    ],
  },
  {
    kind: "quote",
    photo: "https://framerusercontent.com/images/E2OjBROpd8MW7NxGtUg7ErOA.png",
    quote: "Podium is amazing. Oh, I love it. Absolutely. Definite game changer for us being able to text quickly and connect with our technicians.",
    author: "Amy Ewing, Office and Service Manager",
    company: "Design Air, Inc.",
  },
  {
    kind: "photo-pair",
    photos: [
      "https://framerusercontent.com/images/c7WDKfdxBvG3KtVpzpd0Hga9oY.png",
      "https://framerusercontent.com/images/tb9kTaUJ169vh6QiAVTNBd8.png",
    ],
  },
  {
    kind: "wide-stat",
    stat: "40%",
    statPx: 88,
    label: "more calls handled with Podium Phones.",
    company: "Lawrence Air Conditioning and Heating",
    icon: "https://framerusercontent.com/images/wjgO5gCDRFel3Wylvio70kSKAgg.png",
  },
  {
    kind: "quote",
    photo: "https://framerusercontent.com/images/1rktX3Q7ke3hpvdjBqS5SkkhmM.png",
    quote: "I don't worry about my phones anymore. I know every call is answered. Now I can focus on everything else.",
    author: "Katherine Story, Office Manager",
    company: "Arctic Air",
  },
  {
    kind: "stat-pair",
    stats: [
      {
        stat: "57",
        label: "appointments set by Larry in 30 days",
        company: "Warner Super Service",
        icon: "https://framerusercontent.com/images/6TSSzl56DRaRMH0zrR7obyKrpiY.png",
        statPx: 96,
      },
      {
        stat: "5–15 hrs",
        label: "saved weekly with Podium AI",
        company: "Air Design Heating & Cooling",
        statPx: 72,
      },
    ],
  },
  {
    kind: "quote",
    photo: "https://framerusercontent.com/images/8wmwG210q7leKcnS41mbrXxd60.png",
    quote: "Instead of voicemails piling up, Larry 2.0 captures the customer's information, filters what's urgent, and tells us exactly what we're calling back about. It's taken so much pressure off our team.",
    author: "Lauren Hardin, Office Manager",
    company: "Olympus Electric & Air",
  },
  {
    kind: "wide-stat",
    stat: "$2,000",
    statPx: 72,
    label: "Air Texas saves $2,000/month by replacing their answering service with Podium Voice AI.",
    company: "",
    icon: "https://framerusercontent.com/images/6TSSzl56DRaRMH0zrR7obyKrpiY.png",
  },
  {
    kind: "photo-pair",
    photos: [
      "https://framerusercontent.com/images/6Cg2set3ZhyypXsavYgeMsFXnuo.png",
      "https://framerusercontent.com/images/IhRc1j0QWW4wCrOOtspj9qBWNr8.png",
    ],
  },
];

const pillars = [
  {
    title: "Premium onboarding",
    desc: "Our white-glove onboarding service ensures you're set up for success. You'll have a Podium team member available every step.",
  },
  {
    title: "Dedicated customer support",
    desc: "Whatever your business needs, our expert support team is here to help you so you can focus on what you do best.",
  },
  {
    title: "Works with your systems",
    desc: "Podium integrates with the tools your front and back office already use, so you don't notice interruptions in your day-to-day.",
  },
];

// ─── Card components ──────────────────────────────────────────────────────────

function QuotePhotoCard({ photo, quote, author, company }: QuoteItem) {
  return (
    <div className="relative w-[450px] h-full shrink-0 rounded-[24px] overflow-hidden shadow-[0_4px_12px_0_rgba(0,0,0,0.16)]">
      <img src={photo} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(0,0,0,0.85)_0%,rgba(0,0,0,0)_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-3">
        <svg width="20" height="15" viewBox="0 0 24 18" fill="none" aria-hidden="true" className="shrink-0">
          <path
            d="M0 18V10.8C0 4.8 3.6 1.2 10.8 0l1.2 1.8C7.8 3 5.4 5.4 4.8 9H9V18H0zm13.2 0V10.8C13.2 4.8 16.8 1.2 24 0l1.2 1.8C21 3 18.6 5.4 18 9h4.2V18H13.2z"
            fill="rgba(247,244,237,0.6)"
          />
        </svg>
        <p className="font-sans text-[15px] leading-[1.5] text-[rgb(247,244,237)]">{quote}</p>
        <div>
          <p className="font-sans text-[14px] font-semibold text-white">{author}</p>
          <p className="font-sans text-[13px] text-white/60">{company}</p>
        </div>
      </div>
    </div>
  );
}

function GlassStatCard({ stat, label, company, icon, statPx }: StatEntry) {
  const sizeClass = statPx === 96 ? "text-[96px]" : "text-[72px]";
  return (
    <div className="relative flex-1 min-h-0 rounded-[24px] overflow-hidden">
      <img src={BG_GLASS} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" aria-hidden="true" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,57,53,0.06)_0%,rgba(126,120,104,0.06)_100%)]" />
      <div className="relative z-10 flex flex-col items-center justify-center h-full gap-1 px-4 py-4 text-center">
        {icon && <img src={icon} alt="" className="w-14 h-14 mb-1 object-contain" loading="lazy" />}
        <p className={`font-display font-bold text-white leading-[1.1] ${sizeClass}`}>{stat}</p>
        <p className="font-sans text-white/90 text-[13px] leading-[1.3] mt-1 max-w-[260px]">{label}</p>
        <p className="font-sans text-white/60 text-[12px] mt-0.5">{company}</p>
      </div>
    </div>
  );
}

function StatPairColumn({ stats }: StatPairItem) {
  return (
    <div className="flex flex-col gap-[10px] h-full w-[329px] shrink-0">
      {stats.map((s) => <GlassStatCard key={s.stat} {...s} />)}
    </div>
  );
}

function PhotoPairColumn({ photos }: PhotoPairItem) {
  return (
    <div className="flex flex-col gap-[10px] h-full w-[320px] shrink-0">
      {photos.map((src, i) => (
        <div key={i} className="relative flex-1 min-h-0 rounded-[24px] overflow-hidden">
          <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
          <img src={NOISE_TEX} alt="" className="absolute inset-0 w-full h-full opacity-40" loading="lazy" aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

function WideStatCard({ stat, statPx, label, company, icon }: WideStatItem) {
  const sizeClass = statPx === 88 ? "text-[88px]" : "text-[72px]";
  return (
    <div className="relative w-[320px] h-full shrink-0 rounded-[24px] overflow-hidden">
      <img src={BG_PROD} alt="" className="absolute inset-0 w-full h-full object-cover" loading="lazy" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.25)_0%,rgba(0,0,0,0.08)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(61,57,53,0.06)_0%,rgba(126,120,104,0.06)_100%)]" />
      <div className="relative z-10 flex flex-col justify-between h-full p-6">
        <div className="flex flex-col items-center gap-1">
          {icon && <img src={icon} alt="" className="w-8 h-8 object-contain" loading="lazy" />}
          <p className={`font-display font-bold text-white leading-[1.1] text-center ${sizeClass}`}>{stat}</p>
        </div>
        <div>
          <p className="font-sans text-[rgb(170,170,173)] text-[14px] leading-[1.5]">{label}</p>
          {company && <p className="font-sans text-[rgb(170,170,173)] text-[13px] font-semibold mt-1">{company}</p>}
        </div>
      </div>
    </div>
  );
}

function TrackCard({ item }: { item: TrackItem }) {
  switch (item.kind) {
    case "quote":      return <QuotePhotoCard {...item} />;
    case "stat-pair":  return <StatPairColumn {...item} />;
    case "photo-pair": return <PhotoPairColumn {...item} />;
    case "wide-stat":  return <WideStatCard {...item} />;
  }
}

// ─── Section ──────────────────────────────────────────────────────────────────

export default function TestimonialsSection() {
  const doubled = [...track, ...track];

  return (
    <section className="relative bg-brand-dark section-y overflow-hidden" id="why">
      {/* Full-bleed background image */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle, #294669, black)]" aria-hidden="true">
        <img
          src="https://framerusercontent.com/images/m0Kj9TWCn8QefI5R3Z21DwzZjIA.png?width=2880&height=1344"
          alt=""
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,28,0.5)_0%,rgba(24,24,28,0.75)_70%,rgba(24,24,28,1)_100%)]" /> */}
      </div>

      {/* Header */}
      <AnimateIn className="relative z-30 brand-container mb-10 text-center">
        <p className="font-sans font-medium text-[13px] text-ink-light/50 uppercase tracking-[0.1em] mb-3">
          Real results for real businesses
        </p>
        <h2 className="font-display text-ink-light text-[clamp(1.75rem,4vw,2.625rem)]">
          Trusted by{" "}
          <span className="font-bold text-white">9,000+</span>{" "}
          home service businesses
        </h2>
      </AnimateIn>

      {/* Marquee — edge-faded */}
      <div className="relative z-30 w-full overflow-hidden ">
        <div className="flex items-stretch gap-[10px] animate-marquee w-max h-[260px] sm:h-[380px] md:h-[500px]">
          {doubled.map((item, i) => (
            <TrackCard key={i} item={item} />
          ))}
        </div>
      </div>

      <div className="relative">
        {/* Carbon texture overlay */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <img
            src="https://framerusercontent.com/images/m0Kj9TWCn8QefI5R3Z21DwzZjIA.png"
            alt=""
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="relative z-10 brand-container pt-20">
          {/* 3-column pillars with vertical dividers */}
          <AnimateIn className="grid grid-cols-1 md:grid-cols-3 mb-14 text-center px-6 md:px-0 gap-2 md:gap-0">
            {pillars.map((p, i) => (
              <div
                key={p.title}
                className={[
                  "flex flex-col gap-4 py-6 px-12 md:px-10",
                  i > 0 ? "border-t border-ink-light/10 md:border-t-0 md:border-l-[3px] md:border-ink-light/50" : "",
                ].join(" ")}
              >
                <h3 className="font-display font-semibold text-xl text-ink-light">{p.title}</h3>
                <p className="font-sans md:text-[15px] text-[13px] text-ink-light/80 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </AnimateIn>

          <AnimateIn delay={0.15} className="text-center">
            <a
              href="https://calendly.com/umar-softaims/hvac-automation"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rust text-white font-sans font-semibold text-lg hover:opacity-90 transition-opacity leading-none"
            >
              Grow with us
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
