import { useRef } from "react"
import { motion } from "framer-motion"
import { products } from "../data/site"
import { useLiquidScroll } from "../hooks/useLiquidScroll"
import { fadeUp } from "../motion/variants"
import { CarouselArrows } from "./CarouselArrows"

const productCardWidth =
  "w-[min(88vw,calc((min(100vw-2.5rem,90rem)-3rem)/3))]"

export function ProductSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  useLiquidScroll(scrollerRef)

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("article")
    const step = card ? card.offsetWidth + 24 : 400
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="products"
      className="relative scroll-mt-24 bg-canvas px-5 py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px]"
      >
        <div className="grid items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <h2 className="font-display text-[clamp(2.1rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.045em] text-ink lowercase">
            Deets card is made for those looking for modernity, convenience, and
            elegance.
          </h2>
          <div className="flex flex-col gap-8 lg:items-end">
            <p className="max-w-md text-[15px] leading-relaxed text-ink-soft lg:text-right">
              Get instant access to more information about your social media and
              contact information directly from your Deets card.
            </p>
            <CarouselArrows
              onPrev={() => scrollByCard("prev")}
              onNext={() => scrollByCard("next")}
              prevLabel="Previous product"
              nextLabel="Next product"
            />
          </div>
        </div>
      </motion.div>

      <div
        ref={scrollerRef}
        className="liquid-x mx-auto mt-16 max-w-[1440px] cursor-grab overflow-x-auto overflow-y-hidden pb-2 active:cursor-grabbing"
      >
        <div className="flex w-max gap-6">
          {products.map((item) => (
            <article key={item.id} className={`${productCardWidth} shrink-0`}>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={item.imageSrc}
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <h3 className="mt-5 font-sans text-[1.05rem] font-semibold tracking-tight text-ink">
                {item.title}
              </h3>
              <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
