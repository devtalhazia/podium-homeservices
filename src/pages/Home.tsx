import NavSection from '../sections/NavSection'
import HeroSection from '../sections/HeroSection'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fffcfc]">
      <NavSection />
      <HeroSection />
      {/* sections added here one by one */}
    </div>
  )
}
