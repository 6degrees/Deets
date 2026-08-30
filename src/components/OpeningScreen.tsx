import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { mediaSlots } from "../media/higgsfield"

export type IntroPhase = "show" | "out" | "done"

const OpeningContext = createContext<IntroPhase>("done")

let introPlayed = false

const liquidEase = [0.16, 1, 0.3, 1] as const
const PLAYBACK_RATE = 1.85
const REVEAL_MS = 1400

export function useIntroPhase() {
  return useContext(OpeningContext)
}

export function OpeningProvider({ children }: { children: ReactNode }) {
  const { pathname, hash } = useLocation()
  const [phase, setPhase] = useState<IntroPhase>(() => {
    if (introPlayed || pathname !== "/" || hash) {
      introPlayed = true
      return "done"
    }
    return "show"
  })

  const beginReveal = useCallback(() => {
    introPlayed = true
    setPhase((p) => (p === "show" ? "out" : p))
  }, [])

  const finish = useCallback(() => setPhase("done"), [])

  return (
    <OpeningContext.Provider value={phase}>
      <OpeningGate phase={phase} beginReveal={beginReveal} finish={finish} />
      {children}
    </OpeningContext.Provider>
  )
}

function OpeningGate({
  phase,
  beginReveal,
  finish,
}: {
  phase: IntroPhase
  beginReveal: () => void
  finish: () => void
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (phase === "done") return
    const prev = document.body.style.overflow
    document.body.style.overflow = "hidden"
    return () => {
      document.body.style.overflow = prev
    }
  }, [phase])

  useEffect(() => {
    if (phase !== "out") return
    const done = window.setTimeout(finish, REVEAL_MS + 80)
    return () => window.clearTimeout(done)
  }, [phase, finish])

  useEffect(() => {
    if (phase !== "show") return

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      beginReveal()
      return
    }

    const el = videoRef.current
    const speedUp = () => {
      if (!el) return
      el.playbackRate = PLAYBACK_RATE
      el.defaultPlaybackRate = PLAYBACK_RATE
    }
    speedUp()
    el?.addEventListener("loadedmetadata", speedUp)
    el?.addEventListener("playing", speedUp)
    void el?.play().catch(beginReveal)

    const fallback = window.setTimeout(beginReveal, 3600)
    return () => {
      el?.removeEventListener("loadedmetadata", speedUp)
      el?.removeEventListener("playing", speedUp)
      window.clearTimeout(fallback)
    }
  }, [phase, beginReveal])

  if (phase === "done") return null

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex cursor-pointer items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === "out" ? 0 : 1 }}
      transition={{ duration: REVEAL_MS / 1000, ease: liquidEase }}
      onClick={beginReveal}
      role="presentation"
    >
      <video
        ref={videoRef}
        className="pointer-events-none w-20 mix-blend-multiply sm:w-24"
        muted
        playsInline
        preload="auto"
        poster={mediaSlots.opening.posterSrc}
        autoPlay
        onEnded={beginReveal}
      >
        <source src={mediaSlots.opening.desktopSrc} type="video/mp4" />
      </video>
    </motion.div>
  )
}

export function LandingReveal({ children }: { children: ReactNode }) {
  return <>{children}</>
}
