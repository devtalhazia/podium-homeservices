import { useState, useEffect, useRef } from "react";
import PodiumLogo from "./PodiumLogo";

type NavLink = { label: string; href: string; special?: boolean; showIcon?: boolean };

const desktopLinks: NavLink[] = [
  { label: "Meet Larry",  href: "./ai/larry", showIcon: true, special: true },
  { label: "Why Podium?", href: "./why-podium"               },
  { label: "Plans",       href: "./plans"                    },
  { label: "Resources",   href: "./resources"                },
];

const featuresMenu = [
  {
    title: "Communications",
    subtitle: "Capture and convert every lead",
    items: [
      { label: "All-in-one Inbox",                   icon: true  },
      { label: "Phones + Voice AI",                  icon: false },
      { label: "Text Messaging",                     icon: false },
      { label: "Third Party Leads",                  icon: false },
      { label: "Website Chat",                       icon: false },
      { label: "Emails",                             icon: false },
      { label: "Web Forms, Pop-ups, & Landing Pages",icon: false },
      { label: "Automations",                        icon: true  },
    ],
  },
  {
    title: "Book Jobs & Get Paid",
    subtitle: "Consolidated workflows powered by AI",
    items: [
      { label: "Calendar & Booking",  icon: true },
      { label: "Mobile App",          icon: true },
      { label: "Estimates",           icon: true },
      { label: "Payments",            icon: true },
      { label: "Customer Profiles",   icon: true },
    ],
  },
  {
    title: "Marketing Tools",
    subtitle: "Keep your calendar full automatically",
    items: [
      { label: "Membership Management", icon: true  },
      { label: "Renewals & Upsells",    icon: true  },
      { label: "Bulk Text Messaging",   icon: false },
      { label: "Reviews",               icon: true  },
      { label: "Surveys",               icon: false },
    ],
  },
];

function LightningIcon() {
  return (
    <svg className="w-3.5 h-3.5 shrink-0 text-rust group-hover:text-rust-dark" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
    </svg>
  );
}

const mobileLinks = [
  { label: "Meet Larry",  href: "./ai/larry",  showIcon: true  },
  { label: "Why Podium?", href: "./why-podium"                 },
  { label: "Features",    href: "./features",  hasChevron: true },
  { label: "Plans",       href: "./plans"                      },
  { label: "Resources",   href: "./resources"                  },
];

function isActivePath(href: string) {
  if (typeof window === "undefined") return false;
  const path = href.replace(/^\.\//, "/");
  return window.location.pathname === path || window.location.pathname.startsWith(path + "/");
}

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
    <img src="https://framerusercontent.com/images/Gi9QCe6BdWnnt7VZXxy7obNUTc.svg?width=24&height=24" alt="" />
  );
}

export default function PodiumNavbar() {
  const [scrolled,      setScrolled]      = useState(false);
  const [menuOpen,      setMenuOpen]      = useState(false);
  const [featuresOpen,  setFeaturesOpen]  = useState(false);
  const featuresTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openFeatures  = () => { if (featuresTimeout.current) clearTimeout(featuresTimeout.current); setFeaturesOpen(true);  };
  const closeFeatures = () => { featuresTimeout.current = setTimeout(() => setFeaturesOpen(false), 120); };

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
        <div className="brand-container px-[30px] flex h-[72px] items-center justify-between gap-4">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0 py-[8.65px] px-[12.11px]">
            <PodiumLogo className="h-5 w-auto text-ink-light" />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1" aria-label="Primary navigation">
            <div className="md:flex items-center gap-2 flex-1">
              {/* Meet Larry link */}
              {desktopLinks.slice(0, 2).map(({ label, href, special, showIcon }) => {
                const active = isActivePath(href);
                return (
                  <a
                    key={label}
                    href={href}
                    className={[
                      "flex items-center gap-2 px-2.5 py-2 font-semibold rounded-md transition-colors duration-150",
                      active ? "bg-rust text-white" : "text-white font-bold hover:text-white hover:bg-rust-dark",
                      special ? "italic font-display" : "font-sans",
                    ].join(" ")}
                  >
                    {showIcon && <LarryAppIcon />}
                    {label}
                  </a>
                );
              })}

              {/* Features with dropdown */}
              <div
                className="relative"
                onMouseEnter={openFeatures}
                onMouseLeave={closeFeatures}
              >
                <button
                  className={[
                    "flex items-center gap-1 px-2.5 py-2 font-sans font-bold rounded-md transition-colors duration-150 text-white",
                    featuresOpen ? "bg-rust-dark" : "hover:bg-rust-dark",
                  ].join(" ")}
                >
                  Features
                </button>

                {featuresOpen && (
                  <div
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-1 z-50 rounded-[10px] p-6"
                    style={{
                      width: "860px",
                      backgroundColor: "rgb(24, 24, 28)",
                      border: "1px solid rgb(74, 74, 77)",
                      boxShadow: "rgba(0, 0, 0, 0.05) 0px 10px 20px 0px",
                      willChange: "transform",
                      transformOrigin: "50% 0% 0px",
                    }}
                    onMouseEnter={openFeatures}
                    onMouseLeave={closeFeatures}
                  >
                    <div className="grid grid-cols-3 gap-[30px]">
                      {featuresMenu.map((col) => (
                        <div key={col.title}>
                          <div className="mb-5">
                            <div className="flex items-center justify-between">
                              <span className="text-white font-sans font-medium text-[19px]">{col.title}</span>
                              <ChevronDown className="w-4 h-4 text-white/20 -rotate-90" />
                            </div>
                            <p className="text-white text-xs mt-0.5">{col.subtitle}</p>
                            <div className="mt-2 border-t border-white/80" />
                          </div>
                          <ul className="space-y-3">
                            {col.items.map((item) => (
                              <li className="flex items-center gap-2 group" key={item.label}>
                                {item.icon && <LightningIcon />}
                                <a
                                  href="#"
                                  className={[
                                    "text-sm transition-all duration-100",
                                    item.icon
                                      ? "text-white font-medium hover:text-rust-dark group-hover:translate-x-1"
                                      : "text-white/80 font-normal hover:text-white/80 pl-[22px] group-hover:text-rust-dark group-hover:translate-x-1",
                                  ].join(" ")}
                                > 
                                  {item.label}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Remaining links: Plans, Resources */}
              {desktopLinks.slice(2).map(({ label, href, special, showIcon }) => {
                const active = isActivePath(href);
                return (
                  <a
                    key={label}
                    href={href}
                    className={[
                      "flex items-center gap-2 px-2.5 py-2 font-semibold rounded-md transition-colors duration-150",
                      active ? "bg-rust text-white" : "text-white font-bold hover:text-white hover:bg-rust-dark",
                      special ? "italic font-display" : "font-sans",
                    ].join(" ")}
                  >
                    {showIcon && <LarryAppIcon />}
                    {label}
                  </a>
                );
              })}
            </div>

            {/* Desktop CTAs */}
            <div className="hidden md:flex items-center gap-3 shrink-0">
              <a
                href="https://calendly.com/umar-softaims/hvac-automation"
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full font-sans font-semibold text-body-sm text-white transition-opacity bg-rust hover:bg-rust-dark leading-none"
              >
                Watch a demo
              </a>
              <a
                href="https://auth.podium.com/"
                className="inline-flex items-center px-6 py-2 rounded-full border-2 border-white text-body-sm font-sans font-semibold text-ink-light hover:bg-rust transition-colors leading-none"
              >
                Sign in
              </a>
            </div>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden flex items-center justify-center w-11 h-11 -mr-2 text-ink-light"
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
            className="flex items-center justify-center w-11 h-11 -mr-2 text-ink-light"
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
              className="flex items-center justify-between py-4 group"
              onClick={() => setMenuOpen(false)}
            >
              <span className="flex items-center gap-3 text-[20px] font-sans font-semibold text-ink-light">
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
            href="https://calendly.com/umar-softaims/hvac-automation"
            className="flex-1 flex items-center justify-center py-3.5 rounded-full font-sans font-semibold text-[15px] bg-white text-ink transition-opacity hover:bg-rustDark"
          >
            Get a Demo
          </a>
          <a
            href="https://auth.podium.com/"
            className="flex-1 flex items-center justify-center py-3.5 rounded-full font-sans font-semibold text-[15px] bg-white text-ink transition-opacity hover:opacity-80"
          >
            Sign In
          </a>
        </div>
      </div>
    </>
  );
}
