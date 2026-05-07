import NavSection from '../sections/NavSection'
import WhyPodiumHeroSection from '../sections/WhyPodiumHeroSection'
import WhyPodiumComparisonSection from '../sections/WhyPodiumComparisonSection'
import FooterSection from '../sections/FooterSection'

export default function WhyPodium() {
  return (
    <div className="min-h-screen overflow-hidden" style={{ backgroundColor: '#18181c' }}>
      <NavSection />
      <WhyPodiumHeroSection />
      <WhyPodiumComparisonSection />
      <FooterSection />
    </div>
  )
}
