import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { useEffect, useRef, type RefObject } from "react"
import { templates } from "../data/site"
import { fadeUp } from "../motion/variants"
import { HolographicCard } from "./HolographicCard"

function useLiquidScroll(ref: RefObject<HTMLDivElement | null>) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) return

    let target = el.scrollLeft
    let current = el.scrollLeft
    let raf = 0
    let dragging = false
    let dragX = 0
    let dragStart = 0

    const maxScroll = () => el.scrollWidth - el.clientWidth

    const tick = () => {
      current += (target - current) * 0.085
      if (Math.abs(target - current) < 0.4) current = target
      el.scrollLeft = current
      if (current !== target) raf = requestAnimationFrame(tick)
      else raf = 0
    }

    const go = (next: number) => {
      target = Math.max(0, Math.min(maxScroll(), next))
      if (!raf) raf = requestAnimationFrame(tick)
    }

    const onWheel = (e: WheelEvent) => {
      if (maxScroll() <= 0) return
      const delta =
        Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY
      if (delta === 0) return
      e.preventDefault()
      go(target + delta * 0.42)
    }

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return
      dragging = true
      dragX = e.clientX
      dragStart = target
      el.setPointerCapture(e.pointerId)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!dragging) return
      go(dragStart - (e.clientX - dragX))
    }

    const onPointerUp = () => {
      dragging = false
    }

    el.addEventListener("wheel", onWheel, { passive: false })
    el.addEventListener("pointerdown", onPointerDown)
    el.addEventListener("pointermove", onPointerMove)
    el.addEventListener("pointerup", onPointerUp)
    el.addEventListener("pointercancel", onPointerUp)

    return () => {
      cancelAnimationFrame(raf)
      el.removeEventListener("wheel", onWheel)
      el.removeEventListener("pointerdown", onPointerDown)
      el.removeEventListener("pointermove", onPointerMove)
      el.removeEventListener("pointerup", onPointerUp)
      el.removeEventListener("pointercancel", onPointerUp)
    }
  }, [ref])
}

export function TemplateCarousel() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  useLiquidScroll(scrollerRef)

  return (
    <section className="relative z-10 bg-canvas-dim py-24 md:py-32">
      <div className="mx-auto max-w-[1440px]">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          className="px-5 md:px-10"
        >
          <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
            Choose your design
          </p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,4.2rem)] leading-[0.95] tracking-[-0.045em] lowercase">
            Browse professionally crafted profile templates.
          </h2>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            Each design is fully customizable to match your brand.
          </p>
        </motion.div>

        <div className="carousel-edge-fade relative mt-12">
          <div
            ref={scrollerRef}
            className="liquid-x cursor-grab overflow-x-auto overflow-y-hidden active:cursor-grabbing"
          >
            <div className="flex w-max gap-16 px-8 md:gap-24 md:px-16">
              {templates.map((tpl) => (
                <a
                  key={tpl.slug}
                  href={tpl.url}
                  className="group w-[min(68vw,280px)] shrink-0"
                  draggable={false}
                >
                  <HolographicCard
                    title={tpl.title}
                    foil={tpl.foil}
                    previewSrc={tpl.previewSrc}
                    interactive
                  />
                  <div className="mt-4 flex items-baseline justify-between gap-4">
                    <p className="font-display text-lg tracking-tight">
                      {tpl.title}
                    </p>
                    <span className="text-xs tracking-wide text-ink-soft">
                      View template
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 px-5 md:px-10">
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
