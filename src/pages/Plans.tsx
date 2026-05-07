import NavSection from '../sections/NavSection'
import PlansHeroSection from '../sections/PlansHeroSection'
import PricingCardsSection from '../sections/PricingCardsSection'
import AwardBadgesSection from '../sections/AwardBadgesSection'
import PlansTestimonialsSection from '../sections/PlansTestimonialsSection'
import FooterSection from '../sections/FooterSection'

export default function Plans() {
  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#18181c' }}>
      <NavSection />
      <PlansHeroSection />
      <PricingCardsSection />
      <AwardBadgesSection />
      <PlansTestimonialsSection />
      <FooterSection />
    </div>
  )
}
