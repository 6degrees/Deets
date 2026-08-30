import { CompaniesTeaser } from "../components/CompaniesTeaser"
import { ContactSection } from "../components/ContactSection"
import { FunctionsFilm } from "../components/FunctionsFilm"
import { Hero } from "../components/Hero"
import { PricingSection } from "../components/PricingSection"
import { TemplateCarousel } from "../components/TemplateCarousel"
import { TrustRow } from "../components/TrustRow"

export function HomePage() {
  return (
    <>
      <Hero />
      <CompaniesTeaser />
      <TrustRow />
      <TemplateCarousel />
      <FunctionsFilm />
      <PricingSection />
      <ContactSection />
    </>
  )
}
