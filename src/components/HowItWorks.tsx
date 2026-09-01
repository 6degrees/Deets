import { motion } from "framer-motion"
import { howItWorksSteps } from "../data/site"
import { fadeUp, stagger } from "../motion/variants"

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 bg-canvas-dim px-5 py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px] text-center"
      >
        <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
          How it works
        </p>
        <h2 className="mx-auto mt-4 max-w-2xl font-display text-[clamp(2.1rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.045em] lowercase">
          tap, scan, share — in seconds.
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
          No app required. Your Deets card opens your profile the moment someone
          taps or scans it.
        </p>
      </motion.div>

      <motion.ol
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mx-auto mt-16 grid max-w-[1440px] grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-3"
      >
        {howItWorksSteps.map((step, index) => (
          <motion.li key={step.id} variants={fadeUp} className="min-w-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={step.imageSrc}
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <p className="mt-5 font-display text-[2.5rem] leading-none tracking-tight text-ink/15">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className="mt-4 font-sans text-[1.05rem] font-semibold tracking-tight text-ink">
              {step.title}
            </h3>
            <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
              {step.copy}
            </p>
          </motion.li>
        ))}
      </motion.ol>
    </section>
  )
}
