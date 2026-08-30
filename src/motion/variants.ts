import type { Transition, Variants } from "framer-motion"

export const easeOut: Transition["ease"] = [0.22, 1, 0.36, 1]

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: easeOut },
  },
}

export const fade: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
}

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
}

export const ctaHover = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { duration: 0.35, ease: easeOut } },
  tap: { scale: 0.98 },
}
