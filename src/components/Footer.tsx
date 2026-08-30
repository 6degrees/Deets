import { Link } from "react-router-dom"
import { CONTACT_EMAIL, STORE_URL } from "../data/site"
import { BrandLogo } from "./BrandLogo"

export function Footer() {
  return (
    <footer className="border-t border-line bg-canvas px-5 py-16 md:px-10">
      <div className="mx-auto grid max-w-[1440px] gap-12 md:grid-cols-4">
        <div>
          <BrandLogo className="h-8 w-auto" />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-soft">
            A smart NFC/QR card that shares your socials and contact info with a
            tap. No app required.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-ink-soft uppercase">Product</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:text-magenta" to="/#why-deets">
                Why Deets
              </Link>
            </li>
            <li>
              <Link className="hover:text-magenta" to="/designs">
                Designs
              </Link>
            </li>
            <li>
              <Link className="hover:text-magenta" to="/#functions">
                Functions
              </Link>
            </li>
            <li>
              <a className="hover:text-magenta" href={STORE_URL}>
                Buy Now
              </a>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-ink-soft uppercase">Account</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:text-magenta" to="/my/login">
                Log in
              </Link>
            </li>
            <li>
              <Link className="hover:text-magenta" to="/directory">
                Directory
              </Link>
            </li>
            <li>
              <Link className="hover:text-magenta" to="/help">
                Help
              </Link>
            </li>
            <li>
              <Link className="hover:text-magenta" to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.16em] text-ink-soft uppercase">Legal</p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link className="hover:text-magenta" to="/terms">
                Terms
              </Link>
            </li>
            <li>
              <Link className="hover:text-magenta" to="/privacy">
                Privacy
              </Link>
            </li>
            <li>
              <a className="hover:text-magenta" href={`mailto:${CONTACT_EMAIL}`}>
                {CONTACT_EMAIL}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-[1440px] flex-col gap-2 border-t border-line pt-6 text-xs text-ink-soft md:flex-row md:justify-between">
        <p>Built by 6 Degrees Technologies</p>
        <p>© {new Date().getFullYear()} Deets</p>
      </div>
    </footer>
  )
}
