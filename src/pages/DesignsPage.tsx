import { DesignsGallery } from "../components/DesignsGallery"

export function DesignsPage() {
  return (
    <section className="px-5 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40">
      <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
        Gallery
      </p>
      <h1 className="mt-4 max-w-3xl font-display text-[clamp(2.6rem,7vw,5.5rem)] leading-[0.92] tracking-[-0.05em] lowercase">
        Choose your design
      </h1>
      <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
        Browse professionally crafted profile templates. Each design is fully
        customizable to match your brand.
      </p>
      <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft">
        Coming soon · Layouts will add pre-designed page structures and default
        schemas for profiles — different orders and sub-layouts for profile
        components so you can start from a composition, not just colors and
        typography.
      </p>
      <div className="mt-16">
        <DesignsGallery />
      </div>
    </section>
  )
}
