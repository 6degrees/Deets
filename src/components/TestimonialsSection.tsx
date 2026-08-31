import { useEffect, useRef, type RefObject } from "react"
import { motion } from "framer-motion"
import { testimonials } from "../data/site"
import { fadeUp } from "../motion/variants"

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

function ArrowButton({
  direction,
  onClick,
}: {
  direction: "prev" | "next"
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "prev" ? "Previous review" : "Next review"}
      className="flex size-11 items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-85"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  )
}

export function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  useLiquidScroll(scrollerRef)

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scrollerRef.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("article")
    const step = card ? card.offsetWidth + 20 : 400
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    })
  }

  return (
    <section className="bg-canvas px-5 py-20 md:px-10 md:py-28">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px]"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
              Our reviews
            </p>
            <h2 className="mt-4 font-display text-[clamp(2.2rem,5vw,4.5rem)] leading-[0.95] tracking-[-0.045em]">
              What{" "}
              <span className="text-ink-soft">Our Clients</span> Say
            </h2>
          </div>
          <div className="flex gap-3">
            <ArrowButton direction="prev" onClick={() => scrollByCard("prev")} />
            <ArrowButton direction="next" onClick={() => scrollByCard("next")} />
          </div>
        </div>
      </motion.div>

      <div
        ref={scrollerRef}
        className="liquid-x mx-auto mt-12 max-w-[1440px] cursor-grab overflow-x-auto overflow-y-hidden pb-2 active:cursor-grabbing md:mt-16"
      >
        <div className="flex w-max gap-5 px-0 md:gap-6">
          {testimonials.map((item) => (
            <article
              key={item.id}
              className="flex w-[min(88vw,24rem)] shrink-0 flex-col rounded-[1.75rem] bg-[#f3f3f3] p-6 md:w-[24rem] md:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div
                  className="flex size-11 shrink-0 items-center justify-center rounded-full bg-white text-xs font-semibold tracking-wide text-ink"
                  aria-hidden
                >
                  {item.initials}
                </div>
                <span className="inline-flex max-w-[58%] items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[11px] font-medium tracking-wide text-ink uppercase">
                  <span className="size-1.5 shrink-0 rounded-full bg-cyan" />
                  <span className="truncate">{item.company}</span>
                </span>
              </div>

              <p
                className="mt-8 font-display text-[3.25rem] font-thin leading-none text-cyan"
                aria-hidden
              >
                “
              </p>
              <blockquote className="mt-2 flex-1 font-display text-[1.35rem] leading-[1.2] tracking-[-0.03em] text-ink md:text-[1.45rem]">
                {item.quote}
              </blockquote>

              <footer className="mt-10 flex gap-4">
                <div className="w-px shrink-0 bg-line" aria-hidden />
                <div>
                  <p className="font-sans text-sm font-semibold tracking-tight text-ink">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-soft">
                    {item.title}, {item.company}
                  </p>
                  <p className="mt-0.5 text-sm text-ink-soft">{item.location}</p>
                </div>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
