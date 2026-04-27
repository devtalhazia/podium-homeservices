import { useState, useEffect } from "react";
import PodiumLogo from "./PodiumLogo";

const desktopLinks = [
  { label: "Meet Larry",  href: "./ai/larry"   },
  { label: "Why Podium?", href: "./why-podium"  },
  { label: "Features",    href: "./features"    },
  { label: "Plans",       href: "./plans"       },
  { label: "Resources",   href: "./resources"   },
];

const mobileLinks = [
  { label: "Meet Larry",  href: "./ai/larry",  showIcon: true              },
  { label: "Why Podium?", href: "./why-podium"                             },
  { label: "Features",    href: "./features",  hasChevron: true            },
  { label: "Plans",       href: "./plans"                                  },
  { label: "Resources",   href: "./resources"                              },
];

function HamburgerIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <line x1="3" y1="6"  x2="21" y2="6"  />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round">
      <line x1="18" y1="6"  x2="6"  y2="18" />
      <line x1="6"  y1="6"  x2="18" y2="18" />
    </svg>
  );
}

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function LarryAppIcon() {
  return (
    <span
      className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] text-lg shrink-0"
      style={{ background: "linear-gradient(135deg, #8B3A2F 0%, #6B2A1F 100%)" }}
    >
      ⚡
    </span>
  );
}

export default function PodiumNavbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <header
        className={[
          "sticky top-0 z-50 w-full transition-shadow duration-200",
          "bg-brand-dark",
          scrolled ? "shadow-[0_4px_24px_0_rgba(0,0,0,0.35)]" : "",
        ].join(" ")}
      >
        <div className="brand-container flex h-16 items-center justify-between gap-6">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <PodiumLogo className="h-5 w-auto text-ink-light" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1" aria-label="Primary navigation">
            {desktopLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="px-3 py-2 text-body-sm font-sans font-medium text-ink-light/70 hover:text-ink-light rounded-brand-sm transition-colors duration-150"
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href="https://auth.podium.com/"
              className="text-body-sm font-sans font-semibold text-ink-light/70 hover:text-ink-light transition-colors"
            >
              Sign in
            </a>
            <a
              href="./demo"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full font-sans font-semibold text-body-sm text-white transition-opacity hover:opacity-90 bg-rust"
            >
              Watch a demo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center p-2 -mr-2 text-ink-light"
            onClick={() => setMenuOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={menuOpen}
          >
            <HamburgerIcon className="w-6 h-6" />
          </button>
        </div>
      </header>

      {/* Mobile offcanvas — full-screen overlay */}
      <div
        className={[
          "fixed inset-0 z-[100] flex flex-col bg-brand-dark",
          "transition-transform duration-300 ease-in-out md:hidden",
          menuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-modal="true"
        role="dialog"
        aria-label="Navigation menu"
      >
        {/* Header row */}
        <div className="flex items-center justify-between px-5 h-16 shrink-0">
          <a href="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
            <PodiumLogo className="h-5 w-auto text-ink-light" />
          </a>
          <button
            className="flex items-center justify-center p-2 -mr-2 text-ink-light"
            onClick={() => setMenuOpen(false)}
            aria-label="Close navigation menu"
          >
            <CloseIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto px-5 pt-2" aria-label="Mobile navigation">
          {mobileLinks.map(({ label, href, showIcon, hasChevron }) => (
            <a
              key={label}
              href={href}
              className="flex items-center justify-between py-5 border-b border-ink-light/10 group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="flex items-center gap-3 text-heading-lg font-sans font-bold text-ink-light">
                {showIcon && <LarryAppIcon />}
                {label}
              </span>
              {hasChevron && (
                <ChevronDown className="w-5 h-5 text-ink-light/50 group-hover:text-ink-light transition-colors" />
              )}
            </a>
          ))}

          <a
            href="https://podium.com"
            className="block py-5 text-center text-body-md font-sans font-medium text-ink-light/50 hover:text-ink-light/80 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Back to Podium.com
          </a>
        </nav>

        {/* Bottom CTAs */}
        <div className="shrink-0 border-t border-ink-light/10 px-5 py-5 flex gap-3">
          <a
            href="./demo"
            className="flex-1 flex items-center justify-center py-3.5 rounded-full font-sans font-semibold text-body-md bg-ink-light text-brand-dark transition-opacity hover:opacity-90"
          >
            Get a Demo
          </a>
          <a
            href="https://auth.podium.com/"
            className="flex-1 flex items-center justify-center py-3.5 rounded-full font-sans font-semibold text-body-md bg-ink-light text-brand-dark transition-opacity hover:opacity-90"
          >
            Sign In
          </a>
        </div>
      </div>
    </>
  );
}
