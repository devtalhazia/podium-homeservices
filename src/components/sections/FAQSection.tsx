import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import AnimateIn from "@/components/ui/AnimateIn";

const faqs = [
  {
    q: "How difficult is it to switch to Podium from another scheduling software?",
    a: `Podium's onboarding team aims to have you up and running in days, not months. Our onboarding team makes the transition as smooth as possible:

• White-glove onboarding within 48 hours of signing
• Dedicated team to answer questions
• Data migration (customers, jobs, history, etc.)
• We test and refine your AI Employee until it reflects your business
• Staff training for your entire team

Our goal is to minimize disruption so your business stays up and running during the change.`,
  },
  {
    q: "How does Larry handle after-hours calls?",
    a: "Larry works 24/7, 365 days a year. He answers every call, qualifies the lead, and books directly into your calendar—even at 2 a.m. Most home services businesses lose 40% of their leads after-hours. Larry makes sure you're always first to respond.",
  },
  {
    q: "Can Larry integrate with my existing FSM?",
    a: "Yes. Podium connects with industry-leading field service management platforms including ServiceTitan, Housecall Pro, FieldEdge, Service Fusion, Successware, and more. Our onboarding team handles the integration setup.",
  },
  {
    q: "What happens if Larry can't answer a customer's question?",
    a: "Larry is trained on your business, services, pricing, and talk tracks. For complex situations outside his scope, he escalates to your team with full context—so your staff always knows exactly what the customer needs when they call back.",
  },
  {
    q: "How long does it take to get started?",
    a: "Most businesses are live within 48 hours of signing. Our white-glove onboarding team handles data migration, FSM integration, AI training, and staff onboarding so you can hit the ground running.",
  },
];

const listVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-brand-white section-y border-t border-border-warm/40">
      <div className="brand-container">
        <AnimateIn className="text-center mb-14 max-w-5xl mx-auto">
          <h2 className="font-display text-ink leading-tight text-[clamp(2rem,4vw,2.5rem)]">
            Frequently Asked Questions
          </h2>
        </AnimateIn>

        <motion.div
          className="max-w-4xl mx-auto"
          variants={listVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div key={i} variants={itemVariants}>
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="w-full h-0.5 bg-border-warm/50" />

                  <div className={`pt-8 px-6 ${isOpen ? "pb-12" : "pb-8"}`}>
                    <div className="flex items-start justify-between gap-4">
                      <h3
                        className={`font-display font-semibold text-[17px] md:text-[24px] leading-snug transition-colors duration-200 text-brand-dark ${
                          isOpen ? "text-ink" : "text-ink-muted"
                        }`}
                      >
                        {faq.q}
                      </h3>
                      {isOpen
                        ? <ChevronUp size={18} className="text-ink-muted shrink-0 mt-1" />
                        : <ChevronDown size={18} className="text-ink-muted shrink-0 mt-1" />
                      }
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ease-in-out ${
                        isOpen ? "max-h-[600px] opacity-100 mt-8" : "max-h-0 opacity-0 mt-0"
                      }`}
                    >
                      <p className="font-sans text-brand-dark/80 leading-relaxed whitespace-pre-line">
                        {faq.a}
                      </p>
                      {i === 0 && (
                        <a
                          href="https://calendly.com/umar-softaims/hvac-automation"
                          className="inline-flex items-center gap-1 mt-4 font-sans font-semibold text-rust underline"
                        >
                          Book a meeting today to learn more
                          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                            <path d="M5 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </button>
              </motion.div>
            );
          })}

          <div className="w-full h-0.5 bg-border-warm/50" />
        </motion.div>
      </div>
    </section>
  );
}
