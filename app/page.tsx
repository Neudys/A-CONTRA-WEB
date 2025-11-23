import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { ServicesGrid } from "@/components/services-grid"
import { DetailedServices } from "@/components/detailed-services"
import { AboutSection } from "@/components/about-section"
import { Features } from "@/components/features"
import { FinalCTA } from "@/components/final-cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/20 selection:text-primary-foreground">
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <ServicesGrid />
        <DetailedServices />
        <AboutSection />
        <Features />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
