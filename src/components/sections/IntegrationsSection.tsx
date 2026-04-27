const integrationLogos = [
  {
    name: "ServiceTitan",
    src: "https://framerusercontent.com/images/Rtmpb8jTnnHxFOVSECJrXF2P1aY.png",
  },
  {
    name: "Housecall Pro",
    src: "https://framerusercontent.com/images/TrODOlVpLdpVYgk4CzxDjIGa8.png",
  },
  {
    name: "intuit quickbooks",
    src: "https://framerusercontent.com/images/iinIutGChpcwgCgXNlBcjfDPsUQ.png",
  },
  {
    name: "Many More",
    src: "https://framerusercontent.com/images/cqK3npVvIsQ4bT9MEtc3KEyqCMs.png",
  },
];

export default function IntegrationsSection() {
  return (
    <section className="bg-brand-gray py-16">
      <div className="brand-container text-center mb-16">
        <h2 className="font-display text-ink leading-tight text-[clamp(1.75rem,4vw,2.625rem)]">
          Connect with the tools you already use
        </h2>
      </div>

      <div className="brand-container flex flex-wrap items-center justify-center gap-8">
        {integrationLogos.map(({ name, src }) => (
          <img
            key={name}
            src={src}
            alt={name}
            className="h-24 w-auto object-contain"
            loading="lazy"
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#demo"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-2 border-ink text-ink font-sans font-semibold text-lg hover:bg-ink hover:text-ink-light transition-colors"
        >
          Watch a demo
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 3l6 4-6 4V3z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </section>
  );
}
