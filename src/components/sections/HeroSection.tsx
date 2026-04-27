const customerLogos = [
  {
    name: "Trouth Cooling and Heating",
    src: "https://framerusercontent.com/images/xAqz8Lo8pRBMKxA86G2DFzUeL4.png",
    w: 136, h: 59,
  },
  {
    name: "Air Design",
    src: "https://framerusercontent.com/images/yJad9r3JL8HFKYWaatWLlo6Q0Xg.png",
    w: 93, h: 68,
  },
  {
    name: "Arctic Air",
    src: "https://framerusercontent.com/images/dvHDZAGhtefOicb0l1vMaA5SUK0.png",
    w: 169, h: 48,
  },
  {
    name: "Pride Air Conditioning & Plumbing",
    src: "https://framerusercontent.com/images/oMActfe3tn7LdNYS6tzvz0FBBTY.png",
    w: 100, h: 55,
  },
  {
    name: "AAA Service",
    src: "https://framerusercontent.com/images/HNpOL5EpM8nPkkwuAZnPWmiU4A.png",
    w: 201, h: 59,
  },
];

export default function HeroSection() {
  const repeated = [...customerLogos, ...customerLogos, ...customerLogos];

  return (
    <section
      id="larry"
      className="relative bg-brand-dark overflow-hidden"
    >
      {/* Full-bleed background image */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img
          src="https://framerusercontent.com/images/Hu5BAg5Lavoaz4kD3R8hRqHxcs.png"
          alt=""
          className="w-full h-full object-cover object-top"
          loading="eager"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,28,0.5)_0%,rgba(24,24,28,0.75)_70%,rgba(24,24,28,1)_100%)]" />
      </div>

      {/* Main content — centered */}
      <div className="relative z-10 flex flex-col items-center text-center pt-20 pb-0">
        <div className="brand-container flex flex-col items-center gap-6 max-w-[1080px]">
          <h1 className="font-display font-bold text-ink-light w-full text-[clamp(2.5rem,5.5vw,3.25rem)] leading-[1.05]">
            The #1 AI Operating System<br />for home services.
          </h1>

          <p className="font-sans text-ink-light/80 max-w-2xl text-[19px] leading-[1.55]">
            Larry runs on Podium's FSM, so he books every job and finds revenue
            in the customer base you already have. Most AI takes a message.
            Larry runs your business.
          </p>

          <a
            href="#demo"
            className="inline-flex items-center gap-3 font-sans font-semibold text-ink-light transition-opacity hover:opacity-90 bg-rust text-[18px] leading-none px-8 py-[18px] rounded-full mt-2"
          >
            Watch a demo
          </a>
        </div>

        {/* Product screenshot */}
        <div className="w-full max-w-[1080px] mt-14 px-20">
          <div className="w-full rounded-brand-2xl overflow-hidden">
            <img
              src="https://framerusercontent.com/images/590U6sGPVih9vWZyy59xoHynwlM.png"
              alt="Podium Larry AI employee — booking calendar and customer conversations"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </div>
      </div>

      {/* Customer logo strip */}
      <div className="relative z-10 w-full overflow-hidden h-[102px] mt-10 pb-10 [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
        <div className="flex items-center animate-marquee gap-[72px] w-max h-full">
          {repeated.map((logo, i) => (
            <img
              key={i}
              src={logo.src}
              alt={logo.name}
              width={logo.w}
              height={logo.h}
              className="object-contain shrink-0 opacity-60 w-auto"
              style={{ height: logo.h }}
              aria-hidden={i >= customerLogos.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
