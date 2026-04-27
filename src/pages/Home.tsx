import PodiumNavbar from "@/components/layout/PodiumNavbar";
import PodiumFooter from "@/components/layout/PodiumFooter";
import HeroSection from "@/components/sections/HeroSection";
import AiEmployeeSection from "@/components/sections/AiEmployeeSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ProductSection from "@/components/sections/ProductSection";
// import SupportSection from "@/components/sections/SupportSection";
import RevenueCTA from "@/components/sections/RevenueCTA";
import FAQSection from "@/components/sections/FAQSection";
// import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen">
      <PodiumNavbar />
      <main>
        <HeroSection />
        <AiEmployeeSection />
        <IntegrationsSection />
        <TestimonialsSection />
        {/* <SupportSection /> */}
        <ProductSection />
        <RevenueCTA />
        <FAQSection />
        {/* <FinalCTA /> */}
      </main>
      <PodiumFooter />
    </div>
  );
}
