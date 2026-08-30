import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { pricingPlans } from "../data/site"
import { fadeUp, stagger } from "../motion/variants"

const ctaClass =
  "mt-10 inline-flex min-h-10 w-fit items-center border border-white/50 px-5 text-[11px] tracking-[0.14em] text-white uppercase transition-colors hover:bg-white/10"

export function PricingSection() {
  return (
    <section
      id="pricing"
      className="scroll-mt-24 bg-canvas px-5 py-20 md:px-10 md:py-28"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px] text-center"
      >
        <h2 className="font-display text-[clamp(2.1rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.045em] lowercase">
          plans.
        </h2>
        <p className="mx-auto mt-5 max-w-md text-[15px] leading-relaxed text-ink-soft">
          One card, a pair, a team, or the whole company.
        </p>
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        variants={stagger}
        className="mx-auto mt-16 grid max-w-[1440px] grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      >
        {pricingPlans.map((plan) => (
          <motion.li
            key={plan.id}
            variants={fadeUp}
            className="grain-panel grain-card flex flex-col rounded-[1.35rem] px-7 py-8 text-white"
            style={{ background: plan.wash }}
          >
            <div className="relative z-10 flex flex-1 flex-col">
              <p className="text-[13px] tracking-[0.18em] text-white/70 uppercase">
                {plan.note}
              </p>
              <h3 className="mt-4 font-display text-[1.85rem] leading-none tracking-tight">
                {plan.name}
              </h3>
              <p className="mt-6 font-display text-[2.4rem] leading-none tracking-[-0.04em]">
                {plan.price}
                {plan.unit ? (
                  <span className="ml-1.5 font-sans text-sm tracking-wide text-white/70">
                    {plan.unit}
                  </span>
                ) : null}
              </p>
              <ul className="mt-8 flex-1 space-y-2 text-[15px] leading-relaxed text-white/80">
                {plan.features.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              {plan.href.startsWith("/") ? (
                <Link to={plan.href} className={ctaClass}>
                  {plan.cta}
                </Link>
              ) : (
                <a href={plan.href} className={ctaClass}>
                  {plan.cta}
                </a>
              )}
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
