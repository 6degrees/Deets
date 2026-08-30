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
    ? "inline-flex min-h-9 items-center border border-white/50 px-4 text-[11px] tracking-[0.14em] text-white uppercase transition-colors hover:bg-white/10"
    : "inline-flex min-h-9 items-center border border-ink/40 px-4 text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink/5"

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-[transform,padding,background-color,backdrop-filter] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
        pastHero || open
          ? "bg-white/80 py-3 backdrop-blur-md"
          : "bg-transparent py-6"
      } ${shown ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-5 md:px-10">
        <Link to="/" className="flex items-center">
          <BrandLogo
            className={`h-7 w-auto md:h-8 ${overHero ? "brightness-0 invert" : ""}`}
          />
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {navLinks.map((link) => (
            <NavLink key={link.to} to={link.to} className={linkClass}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link to="/my/login" className={boxCta}>
            Log in
          </Link>
          <a href={STORE_URL} className={boxCta}>
            Order Now
          </a>
        </div>

        <button
          type="button"
          className={`lg:hidden ${
            overHero ? "border border-white/40 px-2.5 py-2" : ""
          }`}
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Menu</span>
          <span className="flex h-5 w-6 flex-col justify-center gap-1.5">
            <span
              className={`block h-px w-full ${overHero ? "bg-white" : "bg-ink"}`}
            />
            <span
              className={`block h-px w-full ${overHero ? "bg-white" : "bg-ink"}`}
            />
          </span>
        </button>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="mt-4 border-t border-line bg-white px-5 py-6 lg:hidden"
        >
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className="text-lg">
                {link.label}
              </NavLink>
            ))}
            <Link
              to="/my/login"
              className="inline-flex min-h-9 items-center justify-center border border-ink/40 px-4 text-[11px] tracking-[0.14em] text-ink uppercase"
            >
              Log in
            </Link>
            <a
              href={STORE_URL}
              className="inline-flex min-h-9 items-center justify-center border border-ink/40 px-4 text-[11px] tracking-[0.14em] text-ink uppercase"
            >
              Order Now
            </a>
          </div>
        </div>
      ) : null}
    </header>
  )
}
