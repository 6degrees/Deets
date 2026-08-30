import { extraTemplates, templates, type Template } from "../data/site"
import { HolographicCard } from "./HolographicCard"

type DesignsGalleryProps = {
  items?: Template[]
}

export function DesignsGallery({
  items = [...templates, ...extraTemplates],
}: DesignsGalleryProps) {
  return (
    <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((tpl) => (
        <li key={tpl.slug}>
          <a href={tpl.url} className="group block">
            <div className="transition-shadow duration-500 group-hover:shadow-[0_24px_80px_rgb(0_212_255_/_0.2)]">
              <HolographicCard
                title={tpl.title}
                foil={tpl.foil}
                previewSrc={tpl.previewSrc}
                interactive
              />
            </div>
            <div className="mt-4 flex items-baseline justify-between gap-3">
              <h2 className="font-display text-xl tracking-tight">{tpl.title}</h2>
              <span className="text-xs tracking-wide text-ink-soft">
                View template
              </span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}
