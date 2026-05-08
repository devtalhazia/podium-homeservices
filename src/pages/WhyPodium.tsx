import NavSection from '../sections/NavSection'
import WhyPodiumHeroSection from '../sections/WhyPodiumHeroSection'
import WhyPodiumComparisonSection from '../sections/WhyPodiumComparisonSection'
import WhyPodiumClosesSection from '../sections/WhyPodiumClosesSection'
import WhyPodiumStatsSection from '../sections/WhyPodiumStatsSection'
import WhyPodiumWorksSection from '../sections/WhyPodiumWorksSection'
import CTASection from '../sections/CTASection'
import WhyPodiumFaqSection from '../sections/WhyPodiumFaqSection'
import FooterSection from '../sections/FooterSection'

export default function WhyPodium() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#18181c]">
      <NavSection />
      <WhyPodiumHeroSection />
      <WhyPodiumComparisonSection />
      <WhyPodiumClosesSection />
      <WhyPodiumStatsSection />
      <WhyPodiumWorksSection />
      <CTASection
        headline="Your best employee doesn't take days off. Ready to hire Larry and grow your business?"
        buttonText="Get a demo"
        buttonHref="https://calendly.com/umar-softaims/hvac-automation"
      />
      <WhyPodiumFaqSection />
      <FooterSection />
    </div>
  )
}
