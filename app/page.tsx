import { Header } from "@/components/kobas/header"
import { Hero } from "@/components/kobas/hero"
import { Services } from "@/components/kobas/services"
import { Contact } from "@/components/kobas/contact"
import { MapSection } from "@/components/kobas/map-section"
import { Footer } from "@/components/kobas/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Contact />
        <MapSection />
      </main>
      <Footer />
    </div>
  )
}
