import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { fadeUp } from "../motion/variants"
import { withBase } from "../lib/base"

export function CompaniesTeaser() {
  return (
    <section className="bg-canvas-dim px-5 py-20 md:px-10 md:py-24">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.35 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px]"
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="font-display text-[clamp(2.1rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.045em] lowercase">
              companies portal.
            </h2>
            <p className="mt-5 text-[15px] leading-relaxed text-ink-soft">
              Issue branded cards, keep team profiles current, and send people to
              your company — not a stack of paper.
            </p>
          </div>
          <Link
            to="/companies"
            className="inline-flex min-h-10 shrink-0 items-center border border-ink/40 px-5 text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink/5 md:mb-1"
          >
            Open portal
          </Link>
        </div>

        <img
          src={withBase("/media/companies-portal.jpg")}
          alt=""
          className="mt-12 h-[min(52vh,420px)] w-full rounded-[2.75rem] object-cover md:mt-16 md:rounded-[3.5rem]"
        />
      </motion.div>
    </section>
  )
}
