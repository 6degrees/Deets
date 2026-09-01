import { CONTACT_EMAIL, STORE_URL } from "../media/higgsfield"
import { withBase } from "../lib/base"

export const navLinks = [
  { label: "Products", to: "/#products" },
  { label: "Designs", to: "/designs" },
  { label: "Functions", to: "/#functions" },
  { label: "Directory", to: "/directory" },
  { label: "Contact", to: "/#contact" },
] as const

export const products = [
  {
    id: "classic",
    title: "Classic Card",
    copy: "Our standard NFC card — durable, customizable, and ready to share your profile.",
    imageSrc: withBase("/media/products/classic.jpg"),
  },
  {
    id: "metal",
    title: "Metal Card",
    copy: "Premium metal finish with embossed branding for a lasting first impression.",
    imageSrc: withBase("/media/products/metal.jpg"),
  },
  {
    id: "matte-black",
    title: "Matte Black",
    copy: "A sleek matte black card built for minimal, modern professionals.",
    imageSrc: withBase("/media/products/matte-black.jpg"),
  },
  {
    id: "holographic",
    title: "Holographic",
    copy: "Light-catching finishes that stand out at events and on camera.",
    imageSrc: withBase("/media/products/holographic.jpg"),
  },
  {
    id: "sticker",
    title: "NFC Sticker",
    copy: "Stick it on your phone or laptop — tap to share without carrying a card.",
    imageSrc: withBase("/media/products/sticker.jpg"),
  },
  {
    id: "tag",
    title: "Smart Tag",
    copy: "A compact NFC tag for lanyards, wallets, and everyday carry.",
    imageSrc: withBase("/media/products/tag.jpg"),
  },
  {
    id: "username",
    title: "Deets Username",
    copy: "Your own deets.pro link — no physical card required.",
    imageSrc: withBase("/media/products/username.jpg"),
  },
] as const

export const howItWorksSteps = [
  {
    id: "order",
    title: "Order your card",
    copy: "Pick a design, add your details, and we ship your Deets card ready to use.",
    imageSrc: withBase("/media/how-it-works/order.jpg"),
  },
  {
    id: "share",
    title: "Tap or scan",
    copy: "Anyone can tap with their phone or scan the QR — no app download needed.",
    imageSrc: withBase("/media/how-it-works/tap.jpg"),
  },
  {
    id: "update",
    title: "Update anytime",
    copy: "Change your links, photo, or contact info from your account. The card stays current.",
    imageSrc: withBase("/media/how-it-works/update.jpg"),
  },
] as const

export type Template = {
  slug: string
  title: string
  url: string
  foil: string
  previewSrc?: string
  category: (typeof templateCategories)[number]["id"]
}

export const templateCategories = [
  { id: "all", label: "All templates" },
  { id: "corporate", label: "Corporate" },
  { id: "creative", label: "Creative" },
  { id: "aviation", label: "Aviation" },
  { id: "tech", label: "Tech" },
  { id: "personal", label: "Personal" },
] as const

export const templates: Template[] = [
  {
    slug: "six-degrees-technologies",
    title: "6 Degrees Technologies",
    url: "https://www.deets.pro/demo/design-samples/six-degrees-technologies",
    foil: "linear-gradient(135deg, #00d4ff 0%, #1a6dff 55%, #0a0a0a 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
    category: "tech",
  },
  {
    slug: "burooj",
    title: "Burooj",
    url: "https://www.deets.pro/demo/design-samples/burooj",
    foil: "linear-gradient(135deg, #c9a227 0%, #8a5a12 50%, #1a1208 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
    category: "corporate",
  },
  {
    slug: "burooj-air",
    title: "Burooj Air",
    url: "https://www.deets.pro/demo/design-samples/burooj-air",
    foil: "linear-gradient(135deg, #7cf0ff 0%, #3aa0ff 48%, #e8f6ff 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
    category: "aviation",
  },
  {
    slug: "corporate-blue",
    title: "Corporate Blue",
    url: "https://www.deets.pro/demo/design-samples/corporate-blue",
    foil: "linear-gradient(135deg, #0b3a6e 0%, #1f7ae0 60%, #d6ecff 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
    category: "corporate",
  },
  {
    slug: "deets",
    title: "deets",
    url: "https://www.deets.pro/demo/design-samples/deets",
    foil: "linear-gradient(135deg, #00d4ff 0%, #ff2d92 55%, #ff6b1a 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
    category: "creative",
  },
  {
    slug: "efficiency-center",
    title: "Efficiency Center",
    url: "https://www.deets.pro/demo/design-samples/efficiency-center",
    foil: "linear-gradient(135deg, #b6ff3a 0%, #1fa37a 55%, #06332a 100%)",
    previewSrc: withBase("/media/templates/six-degrees-technologies.png"),
    category: "corporate",
  },
]

export const extraTemplates: Template[] = [
  {
    slug: "linktree-base",
    title: "Linktree base",
    url: "https://www.deets.pro/demo/design-samples/linktree-base",
    foil: "linear-gradient(135deg, #39e07b 0%, #111 100%)",
    category: "personal",
  },
  {
    slug: "midnight",
    title: "Midnight",
    url: "https://www.deets.pro/demo/design-samples/midnight",
    foil: "linear-gradient(135deg, #1b1030 0%, #4b2a8a 60%, #00d4ff 100%)",
    category: "creative",
  },
  {
    slug: "naqsh",
    title: "Naqsh",
    url: "https://www.deets.pro/demo/design-samples/naqsh",
    foil: "linear-gradient(135deg, #d4af77 0%, #5c3d1e 100%)",
    category: "creative",
  },
  {
    slug: "neon-lime",
    title: "Neon Lime",
    url: "https://www.deets.pro/demo/design-samples/neon-lime",
    foil: "linear-gradient(135deg, #d8ff3f 0%, #1a1a1a 100%)",
    category: "personal",
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

export const testimonials = [
  {
    id: "mohannad",
    quote:
      "I stopped reprinting cards every time my title changed. One tap and people have everything.",
    name: "Mohannad Faihan Al Otaibi",
    title: "Founder",
    company: "6 Degrees Technologies",
    location: "Riyadh, Saudi Arabia",
    initials: "MO",
  },
  {
    id: "nabil",
    quote:
      "Clients actually save my details now. No more lost cards at events — they tap and go.",
    name: "Nabil Aljabery",
    title: "Marketing consultant",
    company: "Independent",
    location: "Riyadh, Saudi Arabia",
    initials: "NA",
  },
  {
    id: "sara",
    quote:
      "Our team cards look sharp and stay on brand. Updating profiles takes minutes, not a reprint run.",
    name: "Sara Al-Rashid",
    title: "Marketing Director",
    company: "Riyadh Creative Co.",
    location: "Riyadh, Saudi Arabia",
    initials: "SA",
  },
  {
    id: "layla",
    quote:
      "Networking feels effortless now. People remember me because the card actually does something.",
    name: "Layla Hassan",
    title: "Partnerships Lead",
    company: "Burooj Air",
    location: "Jeddah, Saudi Arabia",
    initials: "LH",
  },
] as const

export const pricingPlans = [
  {
    id: "solo",
    name: "Solo",
    price: "149",
    unit: "SAR",
    note: "One card",
    features: ["NFC and QR", "Your profile, your design", "No app required"],
    cta: "Order Now",
    href: STORE_URL,
    wash: "linear-gradient(115deg, #161b26 0%, #3d5368 52%, #7d93a8 100%)",
  },
  {
    id: "pair",
    name: "Pair",
    price: "269",
    unit: "SAR",
    note: "Two cards",
    features: ["Share a look", "Two profiles", "One order"],
    cta: "Order Now",
    href: STORE_URL,
    wash: "linear-gradient(115deg, #2a1810 0%, #8a4a28 48%, #d4b49a 100%)",
  },
  {
    id: "team",
    name: "Team",
    price: "599",
    unit: "SAR",
    note: "Five cards",
    features: ["Branded set", "Five profiles", "Ready for a small crew"],
    cta: "Order Now",
    href: STORE_URL,
    wash: "linear-gradient(115deg, #121a14 0%, #3d5a42 52%, #8fa88c 100%)",
  },
  {
    id: "company",
    name: "Company",
    price: "Custom",
    unit: "",
    note: "Portal and bulk",
    features: ["Companies portal", "Issue and update cards", "Volume pricing"],
    cta: "Open portal",
    href: "/companies",
    wash: "linear-gradient(115deg, #1a1a1a 0%, #4a4540 50%, #9a938c 100%)",
  },
] as const

export { CONTACT_EMAIL, STORE_URL }
