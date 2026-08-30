import { motion } from "framer-motion"
import type { ReactNode } from "react"
import { STORE_URL } from "../data/site"
import { ctaHover } from "../motion/variants"

type GradientCtaProps = {
  href?: string
  children: ReactNode
  className?: string
}

export function GradientCta({
  href = STORE_URL,
  children,
  className = "",
}: GradientCtaProps) {
  return (
    <motion.a
      href={href}
      variants={ctaHover}
      initial="rest"
      whileHover="hover"
      whileTap="tap"
      className={`shine-hover inline-flex min-h-12 items-center justify-center rounded-full bg-accent px-8 font-sans text-sm font-medium tracking-wide text-ink ${className}`}
    >
      {children}
    </motion.a>
  )
}
