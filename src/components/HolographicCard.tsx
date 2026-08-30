import { useRef, useState, type PointerEvent } from "react"

type HolographicCardProps = {
  title: string
  foil: string
  previewSrc?: string
  interactive?: boolean
  floating?: boolean
  className?: string
}

export function HolographicCard({
  title,
  foil,
  previewSrc,
  interactive = false,
  floating = false,
  className = "",
}: HolographicCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!interactive || !ref.current) return
    const r = ref.current.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width - 0.5
    const py = (e.clientY - r.top) / r.height - 0.5
    setTilt({ x: py * -14, y: px * 18 })
  }

  return (
    <div
      ref={ref}
      className={`[perspective:900px] ${className}`}
      onPointerMove={onMove}
      onPointerLeave={() => setTilt({ x: 0, y: 0 })}
    >
      <div
        className={`relative w-full ${previewSrc ? "aspect-[428/876]" : "aspect-[1.586/1]"} ${floating ? "card-float" : ""}`}
        style={{
          transform: interactive
            ? `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
            : undefined,
          transformStyle: "preserve-3d",
          transition: interactive ? "transform 0.15s ease-out" : undefined,
        }}
      >
        {previewSrc ? (
          <div className="absolute inset-0 overflow-hidden rounded-[18px]">
            <img
              src={previewSrc}
              alt=""
              className="size-full object-contain object-left"
            />
          </div>
        ) : (
          <div
            className="absolute inset-0 overflow-hidden rounded-[18px] shadow-[0_28px_70px_rgb(255_45_146_/_0.18),0_10px_30px_rgb(0_212_255_/_0.12)]"
            style={{ background: foil }}
          >
            <div className="foil absolute inset-0 mix-blend-soft-light opacity-80" />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgb(255_255_255_/_0.28),transparent_42%,rgb(0_0_0_/_0.18))]" />
            <div className="absolute left-5 top-5 size-8 rounded-full border border-white/50" />
            <p className="absolute bottom-5 left-5 font-display text-[11px] uppercase tracking-[0.22em] text-white">
              deets
            </p>
            <p className="absolute bottom-5 right-5 max-w-[55%] text-right font-sans text-[10px] leading-snug text-white/90">
              {title}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
