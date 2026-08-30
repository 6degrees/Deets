import { CONTACT_EMAIL, STORE_URL } from "../media/higgsfield"
import { withBase } from "../lib/base"

export const navLinks = [
  { label: "Why", to: "/#why-deets" },
  { label: "Designs", to: "/designs" },
  { label: "Functions", to: "/#functions" },
  { label: "Directory", to: "/directory" },
  { label: "Contact", to: "/#contact" },
] as const

export const trustItems = [
  {
    id: "privacy",
    title: "Privacy",
    copy: "Your info. will be limited to those you share the card with.",
    imageSrc: withBase("/media/trust/privacy.jpg"),
  },
  {
    id: "convenience",
    title: "Convenience",
    copy: "No apps are required to share your info. with others!",
    imageSrc: withBase("/media/trust/convenience.jpg"),
  },
  {
    id: "elegance",
    title: "Elegance",
    copy: "A size and shape that fits your needs and serves your goals.",
    imageSrc: withBase("/media/trust/elegance.jpg"),
  },
] as const

export type Template = {
  slug: string
  title: string
  url: string
  foil: string
  previewSrc?: string
}

export const templates: Template[] = [
  {
    slug: "six-degrees-technologies",
    title: "6 Degrees Technologies",
    url: "https://www.deets.pro/demo/design-samples/six-degrees-technologies",
    foil: "linear-gradient(135deg, #00d4ff 0%, #1a6dff 55%, #0a0a0a 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
  },
  {
    slug: "burooj",
    title: "Burooj",
    url: "https://www.deets.pro/demo/design-samples/burooj",
    foil: "linear-gradient(135deg, #c9a227 0%, #8a5a12 50%, #1a1208 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
  },
  {
    slug: "burooj-air",
    title: "Burooj Air",
    url: "https://www.deets.pro/demo/design-samples/burooj-air",
    foil: "linear-gradient(135deg, #7cf0ff 0%, #3aa0ff 48%, #e8f6ff 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
  },
  {
    slug: "corporate-blue",
    title: "Corporate Blue",
    url: "https://www.deets.pro/demo/design-samples/corporate-blue",
    foil: "linear-gradient(135deg, #0b3a6e 0%, #1f7ae0 60%, #d6ecff 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
  },
  {
    slug: "deets",
    title: "deets",
    url: "https://www.deets.pro/demo/design-samples/deets",
    foil: "linear-gradient(135deg, #00d4ff 0%, #ff2d92 55%, #ff6b1a 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
  },
  {
    slug: "efficiency-center",
    title: "Efficiency Center",
    url: "https://www.deets.pro/demo/design-samples/efficiency-center",
    foil: "linear-gradient(135deg, #b6ff3a 0%, #1fa37a 55%, #06332a 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
  },
]

export const extraTemplates: Template[] = [
  {
    slug: "linktree-base",
    title: "Linktree base",
    url: "https://www.deets.pro/demo/design-samples/linktree-base",
    foil: "linear-gradient(135deg, #39e07b 0%, #111 100%)",
  },
  {
    slug: "midnight",
    title: "Midnight",
    url: "https://www.deets.pro/demo/design-samples/midnight",
    foil: "linear-gradient(135deg, #1b1030 0%, #4b2a8a 60%, #00d4ff 100%)",
  },
  {
    slug: "naqsh",
    title: "Naqsh",
    url: "https://www.deets.pro/demo/design-samples/naqsh",
    foil: "linear-gradient(135deg, #d4af77 0%, #5c3d1e 100%)",
  },
  {
    slug: "neon-lime",
    title: "Neon Lime",
    url: "https://www.deets.pro/demo/design-samples/neon-lime",
    foil: "linear-gradient(135deg, #d8ff3f 0%, #1a1a1a 100%)",
  },
]

export const directoryPeople = [
  {
    name: "Mohannad Faihan Al Otaibi",
    handle: "@admin",
    blurb:
      "Techno-maniac; Founder of @6degrees_sa, CTO @promoefficiency, @zahmaola. Embracing change, coding, and innovation. #HODL",
    href: "https://www.deets.pro/directory",
  },
  {
    name: "Nabil Aljabery",
    handle: "@nabil",
    blurb: "خبير في التجارة الالكترونية والتسويق الالكتروني مستشار تسويق",
    href: "https://www.deets.pro/directory",
  },
]

export { CONTACT_EMAIL, STORE_URL }
