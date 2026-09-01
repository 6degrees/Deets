import { useMemo, useRef, useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { templateCategories, templates } from "../data/site"
import { useLiquidScroll } from "../hooks/useLiquidScroll"
import { fadeUp, stagger } from "../motion/variants"
import { CarouselArrows } from "./CarouselArrows"
import { TemplateScreenPreview } from "./TemplateScreenPreview"

export function TemplateCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  useLiquidScroll(scrollerRef)

  const [activeCategory, setActiveCategory] = useState<
    (typeof templateCategories)[number]["id"]
  >("all")

  const visible = useMemo(() => {
    if (activeCategory === "all") return templates
    return templates.filter((tpl) => tpl.category === activeCategory)
  }, [activeCategory])

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("li")
    const step = card ? card.offsetWidth + 20 : 280
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    })
  }

  return (
    <section className="relative z-10 overflow-hidden bg-[#f3f3f3] px-5 py-20 sm:py-24 md:px-10 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="font-display text-[clamp(1.85rem,5vw,3.75rem)] leading-[1.05] tracking-[-0.04em] text-ink">
            A Deets template to suit every brand and creator
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-soft sm:mt-5">
            Different layouts, colors, and styles. Pick a starting point, then
            make it yours with your links, photo, and brand.
          </p>
        </motion.div>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-[220px_minmax(0,1fr)] lg:gap-12">
          <motion.aside
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp}
            className="lg:sticky lg:top-28 lg:self-start"
          >
            <div className="flex items-end justify-between gap-4 lg:block">
              <p className="text-[11px] tracking-[0.16em] text-ink-soft uppercase">
                Browse by category
              </p>
              <div className="lg:hidden">
                <CarouselArrows
                  onPrev={() => scrollByCard("prev")}
                  onNext={() => scrollByCard("next")}
                  prevLabel="Previous template"
                  nextLabel="Next template"
                />
              </div>
            </div>
            <nav className="mt-4 flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] lg:flex-col lg:overflow-visible [&::-webkit-scrollbar]:hidden">
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

          <div
            ref={scrollerRef}
            className="liquid-x -mx-5 cursor-grab overflow-x-auto px-5 active:cursor-grabbing lg:mx-0 lg:cursor-auto lg:overflow-visible lg:px-0"
          >
            <motion.ul
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              variants={stagger}
              className="flex w-max gap-5 sm:gap-6 lg:grid lg:w-full lg:max-w-none lg:grid-cols-2 lg:gap-8 xl:grid-cols-2"
            >
              {visible.map((tpl) => (
                <motion.li
                  key={tpl.slug}
                  variants={fadeUp}
                  className="w-[min(72vw,15.5rem)] shrink-0 sm:w-[min(42vw,16.5rem)] lg:w-full lg:max-w-[18rem] lg:shrink lg:justify-self-center xl:max-w-[19rem]"
                >
                  <a href={tpl.url} className="group block">
                    {tpl.previewSrc ? (
                      <TemplateScreenPreview
                        src={tpl.previewSrc}
                        className="w-full transition-transform duration-300 group-hover:-translate-y-1"
                      />
                    ) : (
                      <div className="aspect-[459/892] w-full rounded-[1.25rem] bg-canvas-dim" />
                    )}
                    <p className="mt-3 text-center font-display text-base tracking-tight text-ink sm:mt-4 sm:text-lg">
                      {tpl.title}
                    </p>
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>

        <div className="mt-10 text-center sm:mt-12">
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
