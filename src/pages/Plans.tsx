import NavSection from '../sections/NavSection'
import PlansHeroSection from '../sections/PlansHeroSection'
import PricingCardsSection from '../sections/PricingCardsSection'
import AwardBadgesSection from '../sections/AwardBadgesSection'
// import TestimonialsSection from '../sections/TestimonialsSection'
// import CTASection from '../sections/CTASection'
import FooterSection from '../sections/FooterSection'

export default function Plans() {
  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#18181c' }}>
      <NavSection />
      <PlansHeroSection />
      <PricingCardsSection />
      <AwardBadgesSection />
      {/* <TestimonialsSection />
      <CTASection
        headline="Learn to grow revenue with the #1 AI Employee for Home Services."
        buttonText="Watch a demo"
        buttonHref="/demo"
      /> */}
      <FooterSection />
    </div>
  )
}
