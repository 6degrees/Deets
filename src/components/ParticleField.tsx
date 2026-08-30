import { useEffect, useRef } from "react"

type ParticleFieldProps = {
  className?: string
}

export function ParticleField({ className = "" }: ParticleFieldProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    const colors = ["#00d4ff", "#5b8cff", "#ff2d92", "#ff6b1a"]
    const dots = Array.from({ length: 36 }, (_, i) => ({
      a: (i / 36) * Math.PI * 2,
      r: 110 + (i % 5) * 28,
      s: 0.0018 + (i % 7) * 0.0004,
      size: 1.2 + (i % 4) * 0.7,
      color: colors[i % colors.length],
    }))

    let frame = 0
    let raf = 0
    let viewW = 0
    let viewH = 0

    const paint = () => {
      ctx.clearRect(0, 0, viewW, viewH)
      const cx = viewW / 2
      const cy = viewH / 2 + viewH * 0.04
      for (const d of dots) {
        const t = reduce ? d.a : d.a + frame * d.s
        const x = cx + Math.cos(t) * d.r * (viewW / 720)
        const y = cy + Math.sin(t * 0.92) * d.r * 0.55 * (viewH / 720)
        ctx.beginPath()
        ctx.fillStyle = d.color
        ctx.globalAlpha = 0.7
        ctx.arc(x, y, d.size, 0, Math.PI * 2)
        ctx.fill()
      }
      ctx.globalAlpha = 1
    }

    const tick = () => {
      frame += 1
      paint()
      raf = requestAnimationFrame(tick)
    }

    const resize = () => {
      const rect = canvas.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      viewW = rect.width
      viewH = rect.height
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      paint()
    }

    resize()
    if (!reduce) raf = requestAnimationFrame(tick)
    const ro = new ResizeObserver(resize)
    ro.observe(canvas)
    return () => {
      cancelAnimationFrame(raf)
      ro.disconnect()
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 size-full ${className}`}
      aria-hidden
    />
  )
}
