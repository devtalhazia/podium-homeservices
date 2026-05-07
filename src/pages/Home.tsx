import NavSection from '../sections/NavSection'
import HeroSection from '../sections/HeroSection'
import SolutionSection from '../sections/SolutionSection'
import IntegrationsSection from '../sections/IntegrationsSection'
import TestimonialsSection from '../sections/TestimonialsSection'
import CommunicationsSection from '../sections/CommunicationsSection'
import CTASection from '../sections/CTASection'
import FAQSection from '../sections/FAQSection'
import FooterSection from '../sections/FooterSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcfc]">
      <NavSection />
      <HeroSection />
      <SolutionSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <CommunicationsSection />
      <CTASection />
      <FAQSection />
      <FooterSection />
    </div>
  )
}
