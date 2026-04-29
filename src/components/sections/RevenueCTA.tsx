import AnimateIn from "@/components/ui/AnimateIn";

export default function RevenueCTA() {
  return (
    <section className="bg-brand-section py-12 md:py-16 px-6 md:px-0 relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 55% 130% at -2% 9%, rgba(30,80,160,0.32) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{  
          background:
            "radial-gradient(ellipse 50% 110% at 102% 90%, rgba(157,64,60,0.42) 0%, transparent 65%)",
        }}
        aria-hidden="true"
      />

      <div className="brand-container">
        <div className="relative overflow-hidden rounded-[20px] md:rounded-[28px] bg-brand-dark border border-ink-light/[0.06]">
          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background:
                "radial-gradient(ellipse 55% 130% at -2% 50%, rgba(30,80,160,0.32) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 pointer-events-none hidden md:block"
            style={{
              background:
                "radial-gradient(ellipse 50% 110% at 102% 50%, rgba(157,64,60,0.42) 0%, transparent 65%)",
            }}
            aria-hidden="true"
          />

          <AnimateIn className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-10 md:px-20 md:py-20">
            <h2 className="font-display text-ink-light max-w-[900px] mx-auto leading-tight text-[clamp(1.75rem,3.5vw,2.5rem)]">
              See how Larry helps grow your revenue by{" "}
              <span className="font-semibold">30%</span>{" "}
              without adding headcount.
            </h2>

            <a
              href="https://calendly.com/umar-softaims/hvac-automation"
              className="inline-flex shrink-0 items-center gap-2 px-8 py-4 rounded-brand-2xl bg-rust text-white font-sans font-semibold text-lg hover:bg-rust/90 transition-colors leading-none"
            >
              Show me how
            </a>
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
