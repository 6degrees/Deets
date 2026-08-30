import { useEffect } from "react"
import { Route, Routes, useLocation } from "react-router-dom"
import { LandingReveal, OpeningProvider } from "./components/OpeningScreen"
import { PageShell } from "./components/PageShell"
import { CompaniesPage } from "./pages/CompaniesPage"
import { DesignsPage } from "./pages/DesignsPage"
import { DirectoryPage } from "./pages/DirectoryPage"
import { HelpPage } from "./pages/HelpPage"
import { HomePage } from "./pages/HomePage"
import { LoginPage } from "./pages/LoginPage"
import { PrivacyPage } from "./pages/PrivacyPage"
import { TermsPage } from "./pages/TermsPage"

function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: "smooth" })
        return
      }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <OpeningProvider>
      <HashScroll />
      <LandingReveal>
        <Routes>
          <Route element={<PageShell />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/companies" element={<CompaniesPage />} />
            <Route path="/designs" element={<DesignsPage />} />
            <Route path="/directory" element={<DirectoryPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/my/login" element={<LoginPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Route>
        </Routes>
      </LandingReveal>
    </OpeningProvider>
  )
}
