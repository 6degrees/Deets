import { useEffect, useRef, useState, type ReactNode } from "react"
import type { VideoSlot } from "../media/higgsfield"

type LoopingVideoProps = {
  slot: VideoSlot
  className?: string
  fallback: ReactNode
  /** CRED pattern: poster first, then play on click or scroll into view */
  startOn?: "view" | "gesture"
  /** Skip the reserved aspect-ratio box (hero full-bleed). */
  fill?: boolean
}

export function LoopingVideo({
  slot,
  className = "",
  fallback,
  startOn = "view",
  fill = false,
}: LoopingVideoProps) {
  const ref = useRef<HTMLVideoElement>(null)
  const [failed, setFailed] = useState(!slot.ready)
  const [armed, setArmed] = useState(startOn === "view")

  useEffect(() => {
    setFailed(!slot.ready)
  }, [slot.ready, slot.desktopSrc])

  useEffect(() => {
    const el = ref.current
    if (!el || failed || !armed) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          void el.play().catch(() => setFailed(true))
        } else {
          el.pause()
        }
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [armed, failed])

  const boxStyle = fill ? undefined : { aspectRatio: slot.aspect }

  const boxClass = fill
    ? `absolute inset-0 z-0 overflow-hidden bg-ink ${className}`
    : `relative z-0 overflow-hidden bg-ink ${className}`

  if (failed) {
    return (
      <div className={boxClass} style={boxStyle}>
        {fallback}
      </div>
    )
  }

  const hasDistinctMobile = Boolean(
    (slot.mobileSrc && slot.mobileSrc !== slot.desktopSrc) ||
      slot.mobileWebmSrc,
  )

  return (
    <div className={boxClass} style={boxStyle}>
      <video
        ref={ref}
        className="absolute inset-0 size-full object-cover"
        muted
        loop
        playsInline
        preload={startOn === "gesture" ? "metadata" : "auto"}
        poster={slot.posterSrc}
        autoPlay={armed}
        onClick={() => setArmed(true)}
        onError={() => setFailed(true)}
      >
        {slot.desktopWebmSrc ? (
          <source
            src={slot.desktopWebmSrc}
            type="video/webm"
            media={hasDistinctMobile ? "(min-width: 768px)" : undefined}
          />
        ) : null}
        <source
          src={slot.desktopSrc}
          type="video/mp4"
          media={hasDistinctMobile ? "(min-width: 768px)" : undefined}
        />
        {hasDistinctMobile && slot.mobileWebmSrc ? (
          <source
            src={slot.mobileWebmSrc}
            type="video/webm"
            media="(max-width: 767px)"
          />
        ) : null}
        {hasDistinctMobile && slot.mobileSrc ? (
          <source
            src={slot.mobileSrc}
            type="video/mp4"
            media="(max-width: 767px)"
          />
        ) : null}
      </video>
    </div>
  )
}
