const DEMO_URL = 'https://homeservices.podium.com/demo'

/* ── Arrow SVG (right-pointing triangle, stroke only, 24×24)
   Source: last <svg> in dump, path id="jSlXhnrbh"
   viewBox="0 0 24 24", M 12.5 6.25 L 0 0 L 0 12.5 Z, translate(5.75 5.75)
   stroke-width=2, stroke=rgb(24,24,28), fill=transparent ── */
const ArrowRight = () => (
  <svg
    role="presentation"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className="block h-[24px] w-[24px] shrink-0"
  >
    <path
      d="M 12.5 6.25 L 0 0 L 0 12.5 Z"
      fill="transparent"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      stroke="rgb(24, 24, 28)"
      transform="translate(5.75 5.75)"
    />
  </svg>
)

/* ── Logo columns
   Images from dump (already in public/images/):
   Col 1: Rtmpb8jTnnHxFOVSECJrXF2P1aY.png  614×193 → rendered 300×98px (aspect-ratio 3.05556)
   Col 2: TrODOlVpLdpVYgk4CzxDjIGa8.png    614×192 → rendered 300×98px
   Col 3: iinIutGChpcwgCgXNlBcjfDPsUQ.png  614×192 → rendered 300×98px
   Col 4: cqK3npVvIsQ4bT9MEtc3KEyqCMs.png  302×82  → rendered height:48px width:auto (aspect-ratio 3.68)
   CSS source:
     .framer-s3euqz{aspect-ratio:3.05556;height:98px;width:300px}
     .framer-1w3cu4t{height:48px;width:auto}
── */
const LOGO_ROWS = [
  { src: '/images/Rtmpb8jTnnHxFOVSECJrXF2P1aY.png', alt: '' },
  { src: '/images/TrODOlVpLdpVYgk4CzxDjIGa8.png',   alt: '' },
  { src: '/images/iinIutGChpcwgCgXNlBcjfDPsUQ.png',  alt: '' },
]

export default function IntegrationsSection() {
  return (
    <section className="relative flex w-full flex-col items-center justify-center gap-[10px] overflow-clip bg-gray-50 px-[32px] py-[64px] tablet:p-[64px] desktop:px-[80px] desktop:py-[64px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center justify-center gap-[10px]">
        <div className="flex w-full flex-col items-center justify-center gap-[16px] pb-[16px]">
          <h3 className="m-0 p-0 text-center font-grenette text-[40px] font-normal leading-[120%] tracking-[0px] text-ink">
            Connect with the tools you already use
          </h3>
        </div>

        <div className="flex w-full flex-col items-center justify-center gap-0 overflow-clip pb-[24px] desktop:flex-row desktop:gap-[30px] desktop:pb-0">
          {LOGO_ROWS.map((row, i) => (
            <div key={i} className="flex h-[91px] w-full flex-none flex-col items-center justify-center desktop:flex-[1_0_0]">
              <img
                src={row.src}
                alt={row.alt}
                className="block h-auto w-full object-cover object-center tablet:h-[74px] tablet:w-[225px] desktop:h-[98px] desktop:w-[300px]"
              />
            </div>
          ))}

          <div className="flex h-[91px] w-full flex-none flex-col items-center justify-center desktop:flex-[1_0_0]">
            <img
              src="/images/cqK3npVvIsQ4bT9MEtc3KEyqCMs.png"
              alt="200+ integrations"
              className="block h-[48px] w-auto tablet:h-[36px] tablet:w-[134px] desktop:h-[48px] desktop:w-auto"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center justify-between py-[32px]">
          <a
            href={DEMO_URL}
            className="flex w-min cursor-pointer flex-row items-center justify-center gap-[10px] whitespace-nowrap rounded-[50px] border-2 border-nav bg-transparent px-[32px] py-[16px] no-underline"
          >
            <span className="whitespace-pre text-center font-graphik-semi text-[18px] font-semibold leading-[18px] tracking-[0px] text-ink">
              Watch a demo
            </span>
            <ArrowRight />
          </a>
        </div>
      </div>
    </section>
  )
}
