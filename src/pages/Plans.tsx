import NavSection from '../sections/NavSection'
import PlansHeroSection from '../sections/PlansHeroSection'
import PricingCardsSection from '../sections/PricingCardsSection'

export default function Plans() {
  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#18181c' }}>
      <NavSection />
      <PlansHeroSection />
      <PricingCardsSection />
    </div>
  )
}
