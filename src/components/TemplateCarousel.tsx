import { useMemo, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { templateCategories, templates } from "../data/site"
import { fadeUp, stagger } from "../motion/variants"
import { TemplateScreenPreview } from "./TemplateScreenPreview"

export function TemplateCarousel() {
  const [activeCategory, setActiveCategory] = useState<
    (typeof templateCategories)[number]["id"]
  >("all")

  const visible = useMemo(() => {
    if (activeCategory === "all") return templates
    return templates.filter((tpl) => tpl.category === activeCategory)
  }, [activeCategory])

  return (
    <section className="relative z-10 bg-[#f3f3f3] px-5 py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-[clamp(2rem,4.8vw,3.75rem)] leading-[1.05] tracking-[-0.04em] text-ink">
            A Deets template to suit every brand and creator
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-relaxed text-ink-soft">
            Different layouts, colors, and styles. Pick a starting point, then
            make it yours with your links, photo, and brand.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <p className="text-[11px] tracking-[0.16em] text-ink-soft uppercase">
              Browse by category
            </p>
            <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 lg:flex-col lg:overflow-visible">
              {templateCategories.map((cat) => {
                const active = activeCategory === cat.id
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setActiveCategory(cat.id)}
                    className={`shrink-0 rounded-full px-4 py-2.5 text-left text-sm transition-colors ${
                      active
                        ? "bg-ink text-white"
                        : "border border-line bg-white text-ink hover:bg-white/80"
                    }`}
                  >
                    {cat.label}
                  </button>
                )
              })}
            </nav>
          </motion.aside>

          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
            className="grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2"
          >
            {visible.map((tpl) => (
              <motion.li key={tpl.slug} variants={fadeUp} className="w-full max-w-[260px]">
                <a href={tpl.url} className="group block">
                  {tpl.previewSrc ? (
                    <TemplateScreenPreview
                      src={tpl.previewSrc}
                      className="mx-auto w-full transition-transform duration-300 group-hover:-translate-y-1"
                    />
                  ) : (
                    <div className="mx-auto w-full rounded-[1.25rem] bg-canvas-dim aspect-[459/892]" />
                  )}
                  <p className="mt-4 text-center font-display text-lg tracking-tight text-ink">
                    {tpl.title}
                  </p>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/designs"
            className="text-sm tracking-wide text-ink underline decoration-line underline-offset-4"
          >
            Browse all designs
          </Link>
        </div>
      </div>
    </section>
  )
}
