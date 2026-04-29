import { useEffect, useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import AnimateIn from "@/components/ui/AnimateIn";

const DURATION = 9000; // ms per item

const items = [
  {
    title: "Never misses a lead",
    desc: "Larry responds to every lead in less than a minute, whether over the phone, text, paid channels, or webchat using situation-specific talk tracks right in your Podium Inbox, with updates reflected in your FSM.",
    img: "https://framerusercontent.com/images/590U6sGPVih9vWZyy59xoHynwlM.png",
  },
  {
    title: "Books without oversight",
    desc: "Larry AI books directly into your calendar system with a deep understanding of your team and business. He knows each tech's location and availability so you can eliminate the dispatch back-and-forth.",
    img: "https://framerusercontent.com/images/590U6sGPVih9vWZyy59xoHynwlM.png",
  },
  {
    title: "Every lead in one platform",
    desc: "Podium brings customer context, including messages, contact information and transactions together in one platform and connects to your scheduling system so Larry and your employees are on the same page.",
    img: "https://framerusercontent.com/images/590U6sGPVih9vWZyy59xoHynwlM.png",
  },
  {
    title: "Re-engages customers",
    desc: "Larry proactively reaches out to schedule maintenance, handles follow-up, renews memberships, keeping your calendar full, even during the slow season.",
    img: "https://framerusercontent.com/images/590U6sGPVih9vWZyy59xoHynwlM.png",
  },
  {
    title: "Eliminates admin work",
    desc: "Larry helps you maximize customer time by reducing your admin work. He updates customer profiles after booking a job, keeps customers updated on arrival times, and proactively reaches out to leads to set new appointments.",
    img: "https://framerusercontent.com/images/590U6sGPVih9vWZyy59xoHynwlM.png",
  },
];

export default function AiEmployeeSection() {
  const [active, setActive] = useState(0);
  const [elapsed, setElapsed] = useState(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const startRef = useRef<number>(Date.now());

  const startTimer = (index: number) => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    setActive(index);
    setElapsed(0);
    startRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const delta = Date.now() - startRef.current;
      if (delta >= DURATION) {
        setElapsed(DURATION);
        clearInterval(intervalRef.current!);
        setActive((prev) => {
          const next = (prev + 1) % items.length;
          startTimer(next);
          return next;
        });
      } else {
        setElapsed(delta);
      }
    }, 16);
  };

  useEffect(() => {
    startTimer(0);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const progress = Math.min(elapsed / DURATION, 1);

  return (
    <section id="features" className="bg-brand-gray section-y px-6 md:px-0">
      <div className="brand-container">
        {/* Header */}
        <AnimateIn className="text-center mb-14 max-w-[1080px] mx-auto">
          <p className="font-sans font-medium text-ink-muted uppercase tracking-widest mb-6 text-sm md:text-normal">
            Your AI Employee at work
          </p>
          <h2 className="font-display text-ink leading-tight text-[clamp(2rem,4vw,2.5rem)]">
            Larry is the AI Employee that books more jobs, fills your calendar, and grows revenue
          </h2>
        </AnimateIn>

        {/* Two-column layout */}
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left — accordion */}
          <AnimateIn delay={0.1} direction="left" className="w-full lg:w-2/6 flex flex-col">
            {items.map((item, i) => {
              const isActive = active === i;
              return (
                <button
                  key={item.title}
                  onClick={() => startTimer(i)}
                  className="w-full text-left focus:outline-none"
                  aria-expanded={isActive}
                >
                  {/* Progress bar */}
                  <div className={`w-full bg-border-warm/50 overflow-hidden ${isActive ? "h-1" : "h-0.5"}`}>
                    <div
                      className="h-full transition-none bg-blue-700"
                      style={{ width: isActive ? `${progress * 100}%` : "0%" }}
                    />
                  </div>

                  {/* Item content */}
                  <div className={`pt-8 px-6 ${isActive ? "pb-12" : "pb-8"}`}>
                    <div className="flex items-center justify-between">
                      <h3
                        className={`text-ink font-display font-semibold text-xl transition-colors duration-200 mb-4`}
                      >
                        {item.title}
                      </h3>
                      {isActive
                        ? <ChevronUp size={18} className="text-ink-muted shrink-0" />
                        : <ChevronDown size={18} className="text-ink-muted shrink-0" />
                      }
                    </div>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isActive ? "max-h-[600px] opacity-100 mt-2" : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <p className="font-sans text-body-md text-ink-md leading-relaxed">
                        {item.desc}
                      </p>
                      {/* Mobile inline image — hidden on lg+ where sidebar takes over */}
                      <div className="lg:hidden mt-6 rounded-2xl overflow-hidden">
                        <img
                          src={item.img}
                          alt={item.title}
                          className="w-full object-cover object-top"
                        />
                      </div>
                    </div>
                  </div>
                </button>
              );
            })}

            {/* Bottom line */}
            <div className="w-full h-0.5 bg-border-warm/50" />
          </AnimateIn>

          {/* Right — image (desktop only) */}
          <AnimateIn delay={0.2} direction="right" className="hidden lg:block lg:w-4/6 rounded-brand-2xl overflow-hidden max-h-[750px]">
            <img
              key={active}
              src={items[active].img}
              alt={items[active].title}
              className="w-full h-full object-cover object-top min-h-[360px]"
            />
          </AnimateIn>
        </div>
      </div>
    </section>
  );
}
