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

export default function SupportSection() {
  return (
    <section className="relative bg-brand-dark">
      {/* Carbon texture overlay */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="https://framerusercontent.com/images/m0Kj9TWCn8QefI5R3Z21DwzZjIA.png"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="relative z-10 brand-container">
        {/* 3-column pillars with vertical dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 mb-14 text-center">
          {pillars.map((p, i) => (
            <div
              key={p.title}
              className={[
                "flex flex-col gap-4 py-6 md:py-0 md:px-10",
                i > 0 ? "border-t border-ink-light/10 md:border-t-0 md:border-l md:border-ink-light/10" : "",
              ].join(" ")}
            >
              <h3 className="font-display font-semibold text-body-md text-ink-light">{p.title}</h3>
              <p className="font-sans text-body-sm text-ink-light/50 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-rust text-white font-sans font-semibold text-body-md hover:opacity-90 transition-opacity"
          >
            Grow with us
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
