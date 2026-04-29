import { motion, useAnimationFrame, useMotionValue } from "framer-motion";

// Easing extracted from Framer __framer__appearAnimationsContent
const EASE_APPEAR: [number, number, number, number] = [0.44, 0, 0.56, 1];

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

// Gap between ticker items (matches original: 72px)
const TICKER_GAP = 72;
// Speed in px/second (matches original feel: ~60px/s)
const TICKER_SPEED = 30;
// Width of one set of logos + trailing gap (used for pixel-precise seamless reset)
const SINGLE_SET_WIDTH = customerLogos.reduce((acc, l) => acc + l.w + TICKER_GAP, 0);
// Duplicate 4x for a seamless infinite scroll
const TICKER_ITEMS = [...customerLogos, ...customerLogos, ...customerLogos, ...customerLogos];

function LogoTicker() {
  const x = useMotionValue(0);

  useAnimationFrame((_, delta) => {
    const next = x.get() - (TICKER_SPEED * delta) / 1000;
    // Reset precisely at one-set boundary for a seamless loop
    x.set(next <= -SINGLE_SET_WIDTH ? 0 : next);
  });

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 15%, black 85%, transparent 100%)",
      }}
    >
      <motion.div
        className="flex items-center h-[102px]"
        style={{ x, gap: TICKER_GAP, width: "max-content" }}
      >
        {TICKER_ITEMS.map((logo, i) => (
          <img
            key={i}
            src={logo.src}
            alt={logo.name}
            width={logo.w}
            height={logo.h}
            className="object-contain shrink-0 opacity-90 w-auto"
            style={{ height: logo.h }}
            aria-hidden={i >= customerLogos.length}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function HeroSection() {
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
        {/* <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(24,24,28,0.5)_0%,rgba(24,24,28,0.75)_70%,rgba(24,24,28,1)_100%)]" /> */}
      </div>

      {/* Main content — centered */}
      <div className="relative z-10 flex flex-col items-center text-center pt-12 md:pt-20 pb-0 px-6 md:px-0">
        <div className="brand-container w-full">
          <div className="flex flex-col items-center gap-6 md:gap-12 max-w-[1080px] mx-auto">
            <div className="flex flex-col items-center gap-5 md:gap-6 ">
              {/* H1 — opacity fade only, delay 100ms, duration 1s */}
              <motion.h1
                className="font-display text-ink-light w-full text-[clamp(2.65rem,5.5vw,3.25rem)] leading-[1.10]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1, duration: 1, ease: EASE_APPEAR }}
              >
                The #1 AI Operating System<br />for home services.
              </motion.h1>

              {/* Body copy — opacity fade only, delay 250ms, duration 1s */}
              <motion.p
                className="font-sans text-ink-light/90 max-w-[710px] leading-[1.55]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1, ease: EASE_APPEAR }}
              >
                Larry runs on Podium’s FSM, so he books every job and finds revenue
                in the customer base you already have. Most AI takes a message.
                Larry runs your business.
              </motion.p>
            </div>

            {/* CTA button — fade + slide down from y:-10, delay 500ms, duration 1s */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: EASE_APPEAR }}
            >
              <a
                href="https://calendly.com/umar-softaims/hvac-automation"
                className="inline-flex items-center gap-3 font-sans font-semibold text-ink-light transition-opacity hover:opacity-90 bg-rust text-[16px] md:text-[18px] leading-none px-6 md:px-8 py-4 md:py-[18px] rounded-full"
              >
                Watch a Demo
              </a>
            </motion.div>

          </div>
        </div>

        {/* Product screenshot — fade + slide down from y:-30, delay 1500ms, duration 1s */}
        <motion.div
          className="w-full max-w-[1080px] mt-8 md:mt-14 px-4 sm:px-8 md:px-14 lg:px-20"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, ease: EASE_APPEAR }}
        >
          <div className="w-full rounded-brand-2xl overflow-hidden">
            <img
              src="https://framerusercontent.com/images/590U6sGPVih9vWZyy59xoHynwlM.png"
              alt="Podium Larry AI employee — booking calendar and customer conversations"
              className="w-full h-full object-cover object-top"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* Customer logo ticker — fade-in at 1.5s, then continuous useAnimationFrame marquee */}
      <motion.div
        className="relative z-10 w-full mt-20 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1, ease: EASE_APPEAR }}
      >
        <LogoTicker />
      </motion.div>
    </section>
  );
}
