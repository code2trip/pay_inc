import { Header } from "@/components/layout/header"
import { HeroSection } from "@/components/layout/hero-section"
import { SolutionsSection } from "@/components/layout/solutions-section"
import { ExploreAllFeaturesSection } from "@/components/layout/explore-all-features-section"
import { CtaSection } from "@/components/layout/cta-section"
import { Footer } from "@/components/layout/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#ffffff]">
      <Header />
      <HeroSection />
      <ExploreAllFeaturesSection />
      <SolutionsSection />
      <CtaSection />
      <Footer />
    </div>
  )
}
