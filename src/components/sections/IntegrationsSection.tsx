import AnimateIn from "@/components/ui/AnimateIn";

const integrationLogos = [
  {
    name: "ServiceTitan",
    src: "https://framerusercontent.com/images/Rtmpb8jTnnHxFOVSECJrXF2P1aY.png",
    height: 110,
  },
  {
    name: "Housecall Pro",
    src: "https://framerusercontent.com/images/TrODOlVpLdpVYgk4CzxDjIGa8.png",
    height: 110,
  },
  {
    name: "intuit quickbooks",
    src: "https://framerusercontent.com/images/iinIutGChpcwgCgXNlBcjfDPsUQ.png",
    height: 110,
  },
  {
    name: "Many More",
    src: "https://framerusercontent.com/images/cqK3npVvIsQ4bT9MEtc3KEyqCMs.png",
    height: 60,
  },
];

export default function IntegrationsSection() {
  return (
    <section className="bg-brand-gray py-16">
      <AnimateIn className="brand-container text-center mb-10">
        <h2 className="font-display text-ink leading-tight text-[clamp(1.75rem,4vw,2.625rem)]">
          Connect with the tools you already use
        </h2>
      </AnimateIn>

      <AnimateIn delay={0.1} className="flex flex-wrap items-center justify-center gap-4">
        {integrationLogos.map(({ name, src, height }) => (
          <img
            key={name}
            src={src}
            alt={name}
            className={`w-auto object-contain`}
            style={{ height }}
            loading="lazy"
          />
        ))}
      </AnimateIn>

      <AnimateIn delay={0.2} className="text-center mt-10">
        <a
          href="./demo"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-ink text-ink font-sans font-semibold text-xl hover:bg-ink hover:text-ink-light transition-colors"
        >
          Watch a demo
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </AnimateIn>
    </section>
  );
}
