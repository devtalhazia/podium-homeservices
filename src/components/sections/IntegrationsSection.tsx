import AnimateIn from "@/components/ui/AnimateIn";
import { Play } from 'lucide-react';

const integrationLogos = [
  {
    name: "ServiceTitan",
    src: "https://framerusercontent.com/images/Rtmpb8jTnnHxFOVSECJrXF2P1aY.png",
    height: 98,
  },
  {
    name: "Housecall Pro",
    src: "https://framerusercontent.com/images/TrODOlVpLdpVYgk4CzxDjIGa8.png",
    height: 98,
  },
  {
    name: "intuit quickbooks",
    src: "https://framerusercontent.com/images/iinIutGChpcwgCgXNlBcjfDPsUQ.png",
    height: 98,
  },
  {
    name: "Many More",
    src: "https://framerusercontent.com/images/cqK3npVvIsQ4bT9MEtc3KEyqCMs.png",
    height: 50,
  },
];

export default function IntegrationsSection() {
  return (
    <section className="bg-brand-gray py-16">
      <AnimateIn className="brand-container text-center mb-10">
        <h2 className="font-display text-ink leading-tight text-[clamp(2rem,4vw,2.5rem)]">
          Connect with the tools you already use
        </h2>
      </AnimateIn>

      <AnimateIn delay={0.1} className="flex flex-wrap items-center justify-center gap-4">
        {integrationLogos.map(({ name, src, height }) => (
          <img
            key={name}
            src={src}
            alt={name}
            className={`w-auto max-w-[300px]  object-contain`}
            style={{ height }}
            loading="lazy"
          />
        ))}
      </AnimateIn>

      <AnimateIn delay={0.2} className="text-center mt-10">
        <a
          href="https://calendly.com/umar-softaims/hvac-automation"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-ink text-ink font-sans font-semibold text-lg hover:bg-rust/50 hover:text-rust-dark hover:border-rust-dark transition-colors leading-none"
        >
          Watch a demo
          <Play size={18} strokeWidth={2.5} />
        </a>
      </AnimateIn>
    </section>
  );
}
