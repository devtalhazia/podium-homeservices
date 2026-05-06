import { useState, useRef, useEffect } from 'react'

const DEMO_URL  = 'https://calendly.com/umar-softaims/hvac-automation'
const SIGN_IN   = 'https://auth.podium.com/'

const FEATURES = [
  { label: 'Communications',     href: 'https://homeservices.podium.com/features/communications' },
  { label: 'Marketing Tools',    href: 'https://homeservices.podium.com/features/marketing-tools' },
  { label: 'Booking & Payments', href: 'https://homeservices.podium.com/features/booking-and-payments' },
]

const NAV_LINKS = [
  { label: 'Why Podium?', href: 'https://homeservices.podium.com/why-podium' },
  { label: 'Features',    href: '#', dropdown: FEATURES },
  { label: 'Plans',       href: 'https://homeservices.podium.com/plans' },
  { label: 'Resources',   href: 'https://homeservices.podium.com/resources' },
]

// Nav link: padding:8px 10px, height:45px, Graphik weight-600 16px 100% line-height
const linkCls = 'flex items-center gap-1 px-[10px] py-[8px] rounded-lg text-white cursor-pointer hover:bg-white/10 transition-colors whitespace-nowrap'
const linkStyle = { fontFamily: '"Graphik", sans-serif', fontWeight: 600, fontSize: '16px', lineHeight: '100%' }

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
      className="sticky top-0 z-50 w-full"
      style={{ backgroundColor: 'rgb(24, 24, 28)', boxShadow: '0px 4px 4px 0px rgba(28, 29, 24, 0.08)' }}
    >

      {/* ── Desktop bar (tablet+) ── */}
      <div className="hidden tablet:flex items-center py-[12px] px-[30px] max-w-[1440px] mx-auto">

        {/* Logo — 238×20px SVG, white fill */}
        <a href="/" className="flex-shrink-0 flex items-center" style={{ padding: '7px 0' }}>
          <img
            src="/images/logo-white.svg"
            alt="Podium Home Services"
            style={{ width: '238px', height: '20px' }}
          />
        </a>

        {/* Menu list + Buttons — flex:1, space-between, padding-left:16px */}
        <div className="flex flex-1 items-center justify-between pl-[16px]">

          {/* Nav links: Meet Larry + standard links — gap:8px */}
          <div className="flex items-center gap-[8px]" style={{ height: '44px' }}>

            {/* Meet Larry — icon 24×24 + Grenette SemiBold Italic */}
            <a
              href="https://homeservices.podium.com/ai/larry"
              className="flex items-center gap-[8px] px-[10px] py-[8px] rounded-lg hover:bg-white/10 transition-colors"
              style={{ borderRadius: '8px' }}
            >
              <img
                src="/images/Gi9QCe6BdWnnt7VZXxy7obNUTc.svg"
                alt=""
                style={{ width: '24px', height: '24px', flexShrink: 0 }}
              />
              <span
                className="text-white whitespace-nowrap"
                style={{ fontFamily: '"Grenette SemiBold Italic", sans-serif', fontStyle: 'italic', fontWeight: 600, fontSize: '16px', lineHeight: '100%' }}
              >
                Meet Larry
              </span>
            </a>

            {/* Standard nav links */}
            {NAV_LINKS.map((item) =>
              item.dropdown ? (
                <div key={item.label} ref={dropdownRef} className="relative flex items-center" style={{ height: '44px' }}>
                  <button
                    onClick={() => setFeaturesOpen((v) => !v)}
                    className={linkCls}
                    style={{ ...linkStyle, height: '45px' }}
                  >
                    {item.label}
                    <svg
                      className={`w-3 h-3 transition-transform duration-150 ${featuresOpen ? 'rotate-180' : ''}`}
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  {featuresOpen && (
                    <div
                      className="absolute top-full left-0 mt-1 w-52 py-2 z-50"
                      style={{
                        backgroundColor: 'rgb(34, 34, 40)',
                        borderRadius: '12px',
                        border: '1px solid rgba(255,255,255,0.1)',
                        boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
                      }}
                    >
                      {item.dropdown.map((sub) => (
                        <a
                          key={sub.label}
                          href={sub.href}
                          className="block px-4 py-[10px] text-[14px] text-white/70 hover:text-white hover:bg-white/5 transition-colors"
                          style={{ fontFamily: '"Graphik Regular", sans-serif' }}
                        >
                          {sub.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <a
                  key={item.label}
                  href={item.href}
                  className={linkCls}
                  style={{ ...linkStyle, height: '45px' }}
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
              className="text-white text-[14px] leading-[18px] whitespace-nowrap transition-opacity hover:opacity-90"
              style={{
                fontFamily: '"Graphik Semibold", sans-serif',
                fontWeight: 600,
                backgroundColor: 'rgb(157, 64, 60)',
                borderRadius: '50px',
                padding: '8px 24px',
              }}
            >
              Watch a demo
            </a>

            {/* Sign in — outlined pill */}
            <a
              href={SIGN_IN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-[14px] leading-[18px] whitespace-nowrap transition-opacity hover:opacity-90"
              style={{
                fontFamily: '"Graphik Semibold", sans-serif',
                fontWeight: 600,
                backgroundColor: 'transparent',
                border: '2px solid rgb(245, 236, 235)',
                borderRadius: '50px',
                padding: '6px 24px',
              }}
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
            style={{ width: '160px', height: '13px' }}
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
        <div
          className="tablet:hidden border-t px-5 pb-6 flex flex-col"
          style={{ borderColor: 'rgba(255,255,255,0.1)', backgroundColor: 'rgb(24,24,28)' }}
        >
          {/* Meet Larry */}
          <a
            href="https://homeservices.podium.com/ai/larry"
            className="flex items-center gap-3 py-3 text-white"
          >
            <img src="/images/Gi9QCe6BdWnnt7VZXxy7obNUTc.svg" alt="" style={{ width: '20px', height: '20px' }} />
            <span style={{ fontFamily: '"Grenette SemiBold Italic", sans-serif', fontStyle: 'italic', fontWeight: 600, fontSize: '16px', lineHeight: '100%' }}>
              Meet Larry
            </span>
          </a>

          {NAV_LINKS.map((item) =>
            item.dropdown ? (
              <div key={item.label}>
                <button
                  onClick={() => setMobileFeatOpen((v) => !v)}
                  className="w-full flex items-center justify-between py-3 text-white/80 hover:text-white"
                  style={{ fontFamily: '"Graphik", sans-serif', fontSize: '16px', fontWeight: 600, lineHeight: '100%' }}
                >
                  {item.label}
                  <svg
                    className={`w-4 h-4 transition-transform ${mobileFeatOpen ? 'rotate-180' : ''}`}
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {mobileFeatOpen && (
                  <div className="pl-4 flex flex-col pb-2">
                    {item.dropdown.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="py-2 text-[14px] text-white/60 hover:text-white"
                        style={{ fontFamily: '"Graphik Regular", sans-serif' }}
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={item.label}
                href={item.href}
                className="py-3 text-white/80 hover:text-white transition-colors"
                style={{ fontFamily: '"Graphik Semibold", sans-serif', fontSize: '14px', fontWeight: 600 }}
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
              className="text-center text-white text-[14px] transition-opacity hover:opacity-90"
              style={{
                fontFamily: '"Graphik Semibold", sans-serif',
                fontWeight: 600,
                backgroundColor: 'rgb(157, 64, 60)',
                borderRadius: '50px',
                padding: '10px 24px',
              }}
            >
              Watch a demo
            </a>
            <a
              href={SIGN_IN}
              target="_blank"
              rel="noopener noreferrer"
              className="text-center text-white text-[14px] transition-opacity hover:opacity-90"
              style={{
                fontFamily: '"Graphik Semibold", sans-serif',
                fontWeight: 600,
                backgroundColor: 'transparent',
                border: '2px solid rgb(245, 236, 235)',
                borderRadius: '50px',
                padding: '10px 24px',
              }}
            >
              Sign in
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
