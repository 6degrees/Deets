import { Outlet } from "react-router-dom"
import { Footer } from "./Footer"
import { SiteNav } from "./SiteNav"

export function PageShell() {
  return (
    <>
      <div className="grain" aria-hidden />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-white focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <SiteNav />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
