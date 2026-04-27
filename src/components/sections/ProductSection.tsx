type Feature = { title: string; desc: string };

type Panel = {
  tag: string;
  eyebrow: string;
  heading: string;
  subheading: string;
  features: Feature[];
  cta: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  imageRight: boolean;
  dark: boolean;
};

const panels: Panel[] = [
  {
    tag: "AI Booking",
    eyebrow: "Your #1 converting CSR",
    heading: "Schedules jobs autonomously",
    subheading: "Larry improves operations, customer experience, and profitability",
    features: [
      {
        title: "Responds immediately, 24/7",
        desc: "Most home services businesses lose 40% of leads after-hours. Larry works day and night so you are always the first to respond.",
      },
      {
        title: "Books directly",
        desc: "Larry handles your entire schedule, booking jobs and managing each technician's calendar in your FSM.",
      },
      {
        title: "Optimizes technician scheduling",
        desc: "Larry knows your routes and technician skillsets to suggest appointments and technicians that are available and nearby.",
      },
      {
        title: "Works across every lead source",
        desc: "Larry handles communications from calls, texts, webchats, third-party lead providers, and email in one inbox.",
      },
    ],
    cta: "Learn more about Larry",
    ctaHref: "#larry",
    image: "https://framerusercontent.com/images/8wmwG210q7leKcnS41mbrXxd60.png",
    imageAlt: "Larry AI booking dashboard showing calendar and technician scheduling",
    imageRight: true,
    dark: false,
  },
  {
    tag: "Communications",
    eyebrow: "All-in-one communications",
    heading: "Eliminates system switching",
    subheading: "Larry manages your front desk, answers the phone 24/7, and books jobs directly",
    features: [
      {
        title: "Answers your phones with Voice AI",
        desc: "Larry manages your front desk, answers the phone 24/7, and books jobs directly into your calendar—all while sounding like your best employee.",
      },
      {
        title: "Reduce no-shows with text confirmations",
        desc: "Automatically remind customers about upcoming appointments to secure the job and reduce no-shows all through AI text messages.",
      },
      {
        title: "Consolidate to a single inbox",
        desc: "See all lead channels in one centralized view and get insights into what converts faster.",
      },
      {
        title: "Centralize customer info",
        desc: "Keep track of customer data, including payments, in one place so your employees and Larry always stay up-to-date.",
      },
    ],
    cta: "Learn more about Communications",
    ctaHref: "#comms",
    image: "https://framerusercontent.com/images/FkBx4GckClyDkXH5v8umNe8Gj8.png",
    imageAlt: "Podium unified inbox showing calls, texts, and webchat in one view",
    imageRight: false,
    dark: false,
  },
  {
    tag: "Marketing",
    eyebrow: "AI marketing tools that book",
    heading: "Proactively fills your calendar",
    subheading: "Mine your customer database for repeat business and second-chance leads",
    features: [
      {
        title: "AI-managed memberships",
        desc: "Proactively manage and leverage your maintenance agreements to keep your calendar full in the shoulder season.",
      },
      {
        title: "Renewals & upsells",
        desc: "Build more loyalty and fill your calendar with personalized offers, maintenance agreements, second chance leads and upsells.",
      },
      {
        title: "Marketing & re-engagement",
        desc: "Mine your customer database for repeat business opportunities and second-chance leads and follow-up on unsold estimates.",
      },
      {
        title: "Reviews",
        desc: "Boost your presence online by automating review requests and responses.",
      },
    ],
    cta: "Learn more about Marketing Tools",
    ctaHref: "#marketing",
    image: "https://framerusercontent.com/images/IIKhl5W1MKCLJIrD3QcidtHcUZU.png",
    imageAlt: "Podium marketing tools showing membership management and automated re-engagement campaigns",
    imageRight: true,
    dark: false,
  },
];

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true" className="shrink-0 mt-0.5">
      <circle cx="9" cy="9" r="8.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ProductPanel({ panel }: { panel: Panel }) {
  const textCol = (
    <div className="flex flex-col gap-7 max-w-lg">
      {/* Tag */}
      <span
        className={`inline-flex self-start items-center px-3 py-1 rounded-brand-md text-label font-sans font-medium uppercase tracking-widest ${
          panel.dark ? "bg-azure/15 text-azure" : "bg-brand-cream text-ink-mid"
        }`}
      >
        {panel.tag}
      </span>

      <div>
        <p
          className={`text-label font-sans font-medium uppercase tracking-widest mb-3 ${
            panel.dark ? "text-ink-light/50" : "text-ink-muted"
          }`}
        >
          {panel.eyebrow}
        </p>
        <h2
          className={`font-display font-bold leading-tight mb-3 text-[clamp(1.75rem,4vw,2.625rem)] ${
            panel.dark ? "text-ink-light" : "text-ink"
          }`}
        >
          {panel.heading}
        </h2>
        <p
          className={`font-sans text-body-md leading-relaxed ${
            panel.dark ? "text-[rgba(247,244,237,0.55)]" : "text-ink-muted"
          }`}
        >
          {panel.subheading}
        </p>
      </div>

      <ul className="flex flex-col gap-5">
        {panel.features.map((f) => (
          <li
            key={f.title}
            className={`flex gap-3 ${panel.dark ? "text-azure" : "text-ink-mid"}`}
          >
            <CheckIcon />
            <div>
              <p
                className={`font-sans font-semibold text-body-sm mb-0.5 ${
                  panel.dark ? "text-ink-light" : "text-ink"
                }`}
              >
                {f.title}
              </p>
              <p
                className={`font-sans text-body-sm leading-relaxed ${
                  panel.dark ? "text-[rgba(247,244,237,0.55)]" : "text-ink-muted"
                }`}
              >
                {f.desc}
              </p>
            </div>
          </li>
        ))}
      </ul>

      <a
        href={panel.ctaHref}
        className={`inline-flex self-start items-center gap-2 px-6 py-3 rounded-brand-2xl font-sans font-semibold text-body-sm text-white transition-colors ${
          panel.dark ? "bg-azure" : "bg-ink"
        }`}
      >
        {panel.cta}
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
          <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </a>
    </div>
  );

  const imageCol = (
    <div className="flex-1 flex items-center justify-center">
      <div className="relative w-full max-w-md">
        {panel.dark && (
          <div
            className="absolute inset-0 rounded-brand-xl blur-3xl opacity-15 bg-azure"
            aria-hidden="true"
          />
        )}
        <img
          src={panel.image}
          alt={panel.imageAlt}
          className="relative w-full rounded-brand-xl object-cover shadow-2xl"
          loading="lazy"
        />
      </div>
    </div>
  );

  return (
    <section className={`py-12 ${panel.dark ? "bg-brand-section" : "bg-brand-cream"}`}>
      <div
        className={[
          "brand-container flex flex-col items-center gap-14 lg:gap-20",
          panel.imageRight ? "lg:flex-row" : "lg:flex-row-reverse",
        ].join(" ")}
      >
        <div className="flex-1 w-full">{textCol}</div>
        {imageCol}
      </div>
    </section>
  );
}

export default function ProductSection() {
  return (
    <div id="plans">
      <div className="bg-brand-cream section-y">
        <div className="text-center max-w-5xl mx-auto">
          <p className="text-label font-sans font-medium text-ink-muted uppercase tracking-widest mb-4">
            Your AI Booking, Communications, and Marketing Guru
          </p>
          <h2 className="font-display text-ink leading-tight text-[clamp(1.75rem,4vw,2.625rem)]">
            Larry improves operations, customer experience, and profitability
          </h2>
        </div>
        {panels.map((panel) => (
          <ProductPanel key={panel.tag} panel={panel} />
        ))}
      </div>
    </div>
  );
}
