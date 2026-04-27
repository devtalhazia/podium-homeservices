export default function FinalCTA() {
  return (
    <section
      id="demo"
      className="bg-brand-dark section-y relative overflow-hidden"
    >
      {/* Decorative blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10 bg-azure" />
        <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full blur-3xl opacity-8 bg-rust" />
      </div>

      <div className="brand-container relative z-10 flex flex-col items-center text-center gap-8">
        <p className="text-label font-sans font-medium text-ink-light/50 uppercase tracking-widest">
          Get started
        </p>

        <h2 className="font-display font-bold text-ink-light max-w-3xl text-[clamp(1.75rem,4.5vw,3rem)] leading-[1.08]">
          Learn to grow revenue with the{" "}
          <span className="text-azure">#1 AI Employee</span>{" "}
          for Home Services.
        </h2>

        <a
          href="#"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-brand-2xl bg-azure text-white font-sans font-bold text-body-md hover:bg-azure/90 transition-colors"
        >
          Watch a demo
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            <circle cx="9" cy="9" r="7.5" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7.5 6.5l4 2.5-4 2.5V6.5z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </section>
  );
}
