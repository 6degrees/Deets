import { useRef } from "react"
import { motion } from "framer-motion"
import { products } from "../data/site"
import { useLiquidScroll } from "../hooks/useLiquidScroll"
import { fadeUp } from "../motion/variants"
import { CarouselArrows } from "./CarouselArrows"

export function ProductSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  useLiquidScroll(scrollerRef)

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("article")
    const step = card ? card.offsetWidth + 24 : 320
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    })
  }

  return (
    <section
      id="products"
      className="relative scroll-mt-24 overflow-hidden bg-canvas px-5 py-20 sm:py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px]"
      >
        <div className="flex flex-col gap-6 sm:gap-8 lg:grid lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
          <h2 className="font-display text-[clamp(1.85rem,5vw,4.4rem)] leading-[0.95] tracking-[-0.045em] text-ink lowercase">
            Deets card is made for those looking for modernity, convenience, and
            elegance.
          </h2>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between lg:flex-col lg:items-end lg:gap-8">
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
        className="liquid-x -mx-5 mt-12 cursor-grab overflow-x-auto px-5 active:cursor-grabbing sm:mt-14 md:-mx-10 md:px-10 lg:mx-auto lg:mt-16 lg:max-w-[1440px] lg:px-0"
      >
        <div className="flex w-max gap-5 sm:gap-6">
          {products.map((item) => (
            <article
              key={item.id}
              className="w-[min(82vw,18rem)] shrink-0 sm:w-[min(58vw,19rem)] md:w-[min(42vw,20rem)] lg:w-[min(32vw,22rem)] xl:w-[min(28vw,24rem)]"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
                <img
                  src={item.imageSrc}
                  alt=""
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <h3 className="mt-4 font-sans text-[1.05rem] font-semibold tracking-tight text-ink sm:mt-5">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-soft">
                {item.copy}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
