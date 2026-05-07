import { useState, useRef, useEffect } from 'react'

const DEMO_URL  = 'https://calendly.com/umar-softaims/hvac-automation'
const SIGN_IN   = 'https://calendly.com/umar-softaims/hvac-automation'

// const FEATURES = [
//   { label: 'Communications',     href: '/#larry-jtbd' },
//   { label: 'Marketing Tools',    href: '/#larry-jtbd' },
//   { label: 'Booking & Payments', href: '/#larry-jtbd' },
// ]

const NAV_LINKS = [
  { label: 'Why Larry?', href: '/why-podium' },
  { label: 'Features',   href: '#larry-jtbd'},
  { label: 'Plans',      href: '/plans' },
]

// Nav link: padding:8px 10px, height:45px, Graphik weight-600 16px 100% line-height
const linkCls = 'flex h-[45px] items-center gap-1 whitespace-nowrap rounded-lg px-[10px] py-[8px] font-graphik-semi text-[16px] leading-[100%] text-cream-white transition-colors hover:bg-white/10'

export default function NavSection() {
  const [mobileOpen,     setMobileOpen]     = useState(false)
  const [featuresOpen,   setFeaturesOpen]   = useState(false)
  const [mobileFeatOpen, setMobileFeatOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setFeaturesOpen(false)
      }
    }
    document.addEventListener('mousedown', onClickOutside)
    return () => document.removeEventListener('mousedown', onClickOutside)
  }, [])

  useEffect(() => {
    function onResize() { if (window.innerWidth >= 768) setMobileOpen(false) }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <nav
      className="sticky top-0 z-50 w-full bg-nav shadow-[0px_4px_4px_0px_rgba(28,29,24,0.08)]"
    >

      {/* ── Desktop bar (tablet+) ── */}
      <div className="hidden tablet:flex items-center py-[12px] px-[30px] max-w-[1440px] mx-auto">

        {/* Logo — 238×20px SVG, white fill */}
        <a href="/" className="flex shrink-0 items-center py-[7px]">
          <img
            src="/images/logo-white.svg"
            alt="Podium Home Services"
            className="h-[20px] w-[238px]"
          />
        </a>

        {/* Menu list + Buttons — flex:1, space-between, padding-left:16px */}
        <div className="flex flex-1 items-center justify-between pl-[16px]">

          {/* Nav links: Meet Larry + standard links — gap:8px */}
          <div className="flex h-[44px] items-center gap-[8px]">

            {/* Meet Larry — icon 24×24 + Grenette SemiBold Italic */}
            <a
              href="/ai/larry"
              className="flex items-center gap-[8px] rounded-lg px-[10px] py-[8px] transition-colors hover:bg-white/10"
            >
              <img
                src="/images/Gi9QCe6BdWnnt7VZXxy7obNUTc.svg"
                alt=""
                className="h-[24px] w-[24px] shrink-0"
              />
              <span
                className="whitespace-nowrap font-grenette-semi-italic text-[16px] font-semibold leading-[100%] text-cream-white italic"
              >
                Meet Larry
              </span>
            </a>

            {/* Standard nav links */}
            {NAV_LINKS.map((item) =>
              (
                <a
                  key={item.label}
                  href={item.href}
                  className={linkCls}
                >
                  {item.label}
                </a>
              )
            )}
          </div>

          {/* Right: Watch a demo + Sign in — gap:12px */}
          <div className="flex items-center gap-[12px]">
            {/* Watch a demo — crimson pill */}
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-[50px] bg-crimson px-[24px] py-[8px] font-graphik-semi text-[14px] leading-[18px] text-cream-white transition-opacity hover:opacity-90"
            >
              Watch a demo
            </a>

            {/* Sign in — outlined pill */}
            <a
              href={SIGN_IN}
              target="_blank"
              rel="noopener noreferrer"
              className="whitespace-nowrap rounded-[50px] border-2 border-blush bg-transparent px-[24px] py-[6px] font-graphik-semi text-[14px] leading-[18px] text-cream-white transition-opacity hover:opacity-90"
            >
              Sign in
            </a>
          </div>
        </div>
      </div>

      {/* ── Mobile bar ── */}
      <div className="tablet:hidden flex items-center justify-between py-3 px-5">
        <a href="/">
          <img
            src="/images/logo-white.svg"
            alt="Podium Home Services"
            className="h-[13px] w-[160px]"
          />
        </a>
        <button
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          className="p-2 text-white"
        >
          {mobileOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Mobile drawer ── */}
      {mobileOpen && (
        <div className="tablet:hidden flex flex-col border-t border-white/10 bg-nav px-5 pb-6">
          {/* Meet Larry */}
          <a
            href="/ai/larry"
            className="flex items-center gap-3 py-3 text-cream-white"
          >
            <img src="/images/Gi9QCe6BdWnnt7VZXxy7obNUTc.svg" alt="" className="h-[20px] w-[20px]" />
            <span className="font-grenette-semi-italic text-[16px] font-semibold leading-[100%] italic">
              Meet Larry
            </span>
          </a>

          {NAV_LINKS.map((item) =>
            (
              <a
                key={item.label}
                href={item.href}
                className="py-3 font-graphik-semi text-[14px] text-white/80 transition-colors hover:text-white"
              >
                {item.label}
              </a>
            )
          )}

          <div className="pt-5 flex flex-col gap-3">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[50px] bg-crimson px-[24px] py-[10px] text-center font-graphik-semi text-[14px] text-cream-white transition-opacity hover:opacity-90"
            >
              Watch a demo
            </a>
            <a
              href={SIGN_IN}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-[50px] border-2 border-blush bg-transparent px-[24px] py-[10px] text-center font-graphik-semi text-[14px] text-cream-white transition-opacity hover:opacity-90"
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
