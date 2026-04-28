const footerLinks = {
  "Podium Home Services": [
    { label: "Meet Larry",          href: "#larry"     },
    { label: "Communications",      href: "#comms"     },
    { label: "Calendar & Booking",  href: "#booking"   },
    { label: "Marketing Tools",     href: "#marketing" },
    { label: "Plans",               href: "#plans"     },
    { label: "Contact Sales",       href: "#contact"   },
  ],
  Resources: [
    { label: "Podium Home",           href: "https://www.podium.com/"          },
    { label: "Blogs & Guides",        href: "https://www.podium.com/blog"      },
    { label: "Download Podium Apps",  href: "https://www.podium.com/download"  },
  ],
};

const legalLinks = [
  { label: "Sitemap",                                         href: "https://www.podium.com/sitemap" },
  { label: "Terms & Conditions",                              href: "#" },
  { label: "Privacy Policy",                                  href: "#" },
  { label: "Privacy Center",                                  href: "#" },
  { label: "Do Not Sell or Share My Personal Information",    href: "#" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/podiumhq",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/podiumhq",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/podium",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/podium",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

export default function PodiumFooter() {
  return (
    <footer className="bg-brand-dark">
      <div className="brand-container pt-16 md:pt-20 pb-8 md:pb-10">

        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr] gap-10 md:gap-16 mb-12 md:mb-16">

          {/* Left — promo */}
          <div>
            <h2 className="font-display font-medium text-ink-light leading-tight text-[clamp(1.5rem,2.8vw,1.25rem)] mb-7">
              Learn to grow revenue with the #1 AI Employee for Home Services.
            </h2>
            <a
              href="./demo"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-ink-light/30 font-sans font-semibold text-lg bg-ink-light/90 transition-colors"
            >
              Watch a demo
            </a>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="font-display font-semibold text-2xl text-ink-light mb-5">
                {section}
              </p>
              <ul className="space-y-3.5">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-sans text-body-sm text-ink-light/50 hover:text-ink-light transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-ink-light/10 pt-6 flex flex-col sm:flex-row sm:items-center gap-5 justify-between">
          <p className="font-sans text-[13px] text-ink-light/40 shrink-0">
            © Podium Corp Inc. 2026
          </p>

          <div className="flex flex-wrap gap-x-5 gap-y-2">
            {legalLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="font-sans text-[13px] text-ink-light/40 hover:text-ink-light/70 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex items-center gap-3 shrink-0">
            {socialLinks.map(({ label, href, icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex items-center justify-center w-9 h-9 rounded-full bg-ink-light/10 text-ink-light/50 hover:text-ink-light hover:bg-ink-light/20 transition-colors"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>

      </div>
    </footer>
  );
}
