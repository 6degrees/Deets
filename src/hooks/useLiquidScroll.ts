import { useEffect, type RefObject } from "react"

export function useLiquidScroll(ref: RefObject<HTMLDivElement | null>) {
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
