import PodiumLogo from "./PodiumLogo";

const footerLinks = {
  "Podium Home Services": [
    { label: "Meet Larry",         href: "#larry"    },
    { label: "Communications",     href: "#comms"    },
    { label: "Calendar & Booking", href: "#booking"  },
    { label: "Marketing Tools",    href: "#marketing" },
    { label: "Plans",              href: "#plans"    },
    { label: "Contact Sales",      href: "#contact"  },
  ],
  Resources: [
    { label: "Podium Home",        href: "https://www.podium.com/"        },
    { label: "Blogs & Guides",     href: "https://www.podium.com/blog"    },
    { label: "Download Podium Apps", href: "https://www.podium.com/download" },
  ],
};

const legalLinks = [
  { label: "Sitemap",                              href: "https://www.podium.com/sitemap" },
  { label: "Terms & Conditions",                   href: "#" },
  { label: "Privacy Policy",                       href: "#" },
  { label: "Privacy Center",                       href: "#" },
  { label: "Do Not Sell or Share My Personal Information", href: "#" },
];

export default function PodiumFooter() {
  return (
    <footer className="bg-brand-dark border-t border-ink-light/10">
      <div className="brand-container section-y">
        {/* Top: logo + nav columns */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mb-16">
          {/* Logo column */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-5">
              <PodiumLogo className="h-4 w-auto text-ink-light/80" />
            </div>
            <p className="text-body-sm font-sans text-ink-light/50 max-w-xs leading-relaxed">
              The #1 AI Operating System for home services.
            </p>
          </div>

          {/* Nav columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <p className="font-sans font-semibold text-label uppercase tracking-widest text-ink-light/40 mb-4">
                {section}
              </p>
              <ul className="space-y-3">
                {links.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-body-sm font-sans text-ink-light/60 hover:text-ink-light transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-ink-light/10 pt-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <p className="text-caption font-sans text-ink-light/40">
              © Podium Corp Inc. 2026
            </p>
            <div className="flex flex-wrap gap-x-5 gap-y-2">
              {legalLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-caption font-sans text-ink-light/40 hover:text-ink-light/70 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
