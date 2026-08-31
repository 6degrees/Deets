import { CompaniesTeaser } from "../components/CompaniesTeaser"
import { ContactSection } from "../components/ContactSection"
import { FunctionsFilm } from "../components/FunctionsFilm"
import { Hero } from "../components/Hero"
import { HowItWorks } from "../components/HowItWorks"
import { PricingSection } from "../components/PricingSection"
import { TemplateCarousel } from "../components/TemplateCarousel"
import { TestimonialsSection } from "../components/TestimonialsSection"
import { TrustRow } from "../components/TrustRow"

export function HomePage() {
  return (
    <>
      <Hero />
      <CompaniesTeaser />
      <TrustRow />
      <HowItWorks />
      <TemplateCarousel />
      <FunctionsFilm />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  )
}
