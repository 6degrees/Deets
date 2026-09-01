import { useEffect, useRef, useState } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { navLinks, STORE_URL } from "../data/site"
import { BrandLogo } from "./BrandLogo"

export function SiteNav() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [pastHero, setPastHero] = useState(location.pathname !== "/")
  const [shown, setShown] = useState(true)
  const lastY = useRef(0)

  useEffect(() => {
    setOpen(false)
    setShown(true)
  }, [location.pathname, location.hash])

  useEffect(() => {
    if (location.pathname !== "/") {
      setPastHero(true)
      lastY.current = window.scrollY
      return
    }

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY.current
      lastY.current = y
      const past = y > window.innerHeight - 48
      setPastHero(past)

      if (open) {
        setShown(true)
        return
      }
      if (!past || y < 16) {
        setShown(true)
        return
      }
      if (delta > 4) setShown(false)
      else if (delta < -4) setShown(true)
    }

    lastY.current = window.scrollY
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update)
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [location.pathname, open])

  const overHero = location.pathname === "/" && !pastHero && !open

  const linkClass = overHero
    ? "text-[13px] tracking-wide text-white/80 transition-colors hover:text-white"
    : "text-[13px] tracking-wide text-ink-soft transition-colors hover:text-ink"

  const boxCta = overHero
    ? "inline-flex min-h-8 items-center rounded-full border border-white/45 px-4 text-[11px] tracking-[0.14em] text-white uppercase transition-colors hover:bg-white/10"
    : "inline-flex min-h-8 items-center rounded-full border border-ink/25 px-4 text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink/5"

  const pillClass = overHero
    ? "border border-white/15 bg-black/35 text-white shadow-[0_8px_32px_rgb(0_0_0_/_0.18)] backdrop-blur-xl"
    : "border border-line bg-white/85 text-ink shadow-[0_8px_32px_rgb(0_0_0_/_0.06)] backdrop-blur-xl"

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-40 px-4 pt-4 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:px-6 md:pt-5 ${
        shown ? "translate-y-0" : "-translate-y-[calc(100%+1rem)]"
      }`}
    >
      <div className="mx-auto w-full max-w-5xl">
        <div
          className={`pointer-events-auto rounded-full px-3 py-2 transition-[background-color,border-color,box-shadow] duration-500 sm:px-4 sm:py-2.5 md:px-5 md:py-3 ${pillClass}`}
        >
          <div className="flex items-center justify-between gap-2 sm:gap-4">
            <Link to="/" className="flex min-w-0 shrink items-center">
              <BrandLogo
                className={`h-5 w-auto sm:h-6 md:h-7 ${overHero ? "brightness-0 invert" : ""}`}
              />
            </Link>

            <nav
              className="hidden items-center gap-6 xl:gap-8 lg:flex"
              aria-label="Primary"
            >
              {navLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={linkClass}>
                  {link.label}
                </NavLink>
              ))}
            </nav>

            <div className="hidden items-center gap-2 lg:flex">
              <Link to="/my/login" className={boxCta}>
                Log in
              </Link>
              <a href={STORE_URL} className={boxCta}>
                Order Now
              </a>
            </div>

            <button
              type="button"
              className={`rounded-full p-2 lg:hidden ${
                overHero ? "text-white hover:bg-white/10" : "text-ink hover:bg-ink/5"
              }`}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <span className="flex h-4 w-5 flex-col justify-center gap-1">
                <span
                  className={`block h-px w-full ${overHero ? "bg-white" : "bg-ink"}`}
                />
                <span
                  className={`block h-px w-full ${overHero ? "bg-white" : "bg-ink"}`}
                />
              </span>
            </button>
          </div>
        </div>

        {open ? (
          <div
            id="mobile-nav"
            className={`pointer-events-auto mt-3 rounded-[1.5rem] border px-5 py-6 lg:hidden ${
              overHero
                ? "border-white/15 bg-black/80 text-white backdrop-blur-xl"
                : "border-line bg-white/95 text-ink backdrop-blur-xl"
            }`}
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`text-lg ${overHero ? "text-white" : "text-ink"}`}
                >
                  {link.label}
                </NavLink>
              ))}
              <Link
                to="/my/login"
                className={`inline-flex min-h-9 items-center justify-center rounded-full border px-4 text-[11px] tracking-[0.14em] uppercase ${
                  overHero
                    ? "border-white/45 text-white"
                    : "border-ink/25 text-ink"
                }`}
              >
                Log in
              </Link>
              <a
                href={STORE_URL}
                className={`inline-flex min-h-9 items-center justify-center rounded-full border px-4 text-[11px] tracking-[0.14em] uppercase ${
                  overHero
                    ? "border-white/45 text-white"
                    : "border-ink/25 text-ink"
                }`}
              >
                Order Now
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  )
}
