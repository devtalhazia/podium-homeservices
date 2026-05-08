import NavSection from '../sections/NavSection'
import WhyCloseCrewHeroSection from '../sections/WhyPodiumHeroSection'
import WhyCloseCrewComparisonSection from '../sections/WhyPodiumComparisonSection'
import WhyCloseCrewClosesSection from '../sections/WhyPodiumClosesSection'
import WhyCloseCrewStatsSection from '../sections/WhyPodiumStatsSection'
import WhyCloseCrewWorksSection from '../sections/WhyPodiumWorksSection'
import CTASection from '../sections/CTASection'
import WhyCloseCrewFaqSection from '../sections/WhyPodiumFaqSection'
import FooterSection from '../sections/FooterSection'

export default function WhyCloseCrew() {
  return (
    <div className="min-h-screen  bg-[#18181c]">
      <NavSection />
      <WhyCloseCrewHeroSection />
      <WhyCloseCrewComparisonSection />
      <WhyCloseCrewClosesSection />
      <WhyCloseCrewStatsSection />
      <WhyCloseCrewWorksSection />
      <CTASection
        headline="Your best employee doesn't take days off. Ready to hire Larry and grow your business?"
        buttonText="Get a demo"
        buttonHref="https://calendly.com/umar-softaims/hvac-automation"
      />
      <WhyCloseCrewFaqSection />
      <FooterSection />
    </div>
  )
}
