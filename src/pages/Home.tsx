import NavSection from '../sections/NavSection'
import HeroSection from '../sections/HeroSection'
import SolutionSection from '../sections/SolutionSection'
import IntegrationsSection from '../sections/IntegrationsSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcfc]">
      <NavSection />
      <HeroSection />
      <SolutionSection />
      <IntegrationsSection />
      {/* sections added here one by one */}
    </div>
  )
}
