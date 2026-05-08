import NavSection from '../sections/NavSection'
import LarryHeroSection from '../sections/LarryHeroSection'
import LarryVideoSection from '../sections/LarryVideoSection'
import LarryTestimonialsSection from '../sections/LarryTestimonialsSection'
import LarrySideBySidesSection from '../sections/LarrySideBySidesSection'
import IntegrationsSection from '../sections/IntegrationsSection'
import FooterSection from '../sections/FooterSection'

export default function Larry() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#18181c]">
      <NavSection />
      <LarryHeroSection />
      <LarryVideoSection />
      <LarryTestimonialsSection />
      <LarrySideBySidesSection />
      <IntegrationsSection background={'#ffffff'} />
      <FooterSection />
    </div>
  )
}
