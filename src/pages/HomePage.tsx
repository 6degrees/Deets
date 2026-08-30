import { ContactSection } from "../components/ContactSection"
import { FunctionsFilm } from "../components/FunctionsFilm"
import { Hero } from "../components/Hero"
import { TemplateCarousel } from "../components/TemplateCarousel"
import { TrustRow } from "../components/TrustRow"

export function HomePage() {
  return (
    <>
      <Hero />
      <TrustRow />
      <TemplateCarousel />
      <FunctionsFilm />
      <ContactSection />
    </>
  )
}
