import { useState } from "react"
import { motion } from "framer-motion"
import { faqItems } from "../data/site"
import { fadeUp, stagger } from "../motion/variants"

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null)

  return (
    <section
      id="faq"
      className="scroll-mt-24 bg-canvas-dim px-5 py-20 sm:py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto max-w-[1440px]"
      >
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[13px] tracking-[0.18em] text-ink-soft uppercase">
            FAQ
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.1rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.045em] lowercase">
            questions, answered.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-[15px] leading-relaxed text-ink-soft">
            Everything you need to know about ordering, sharing, and updating your
            Deets card.
          </p>
        </div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line sm:mt-16"
        >
          {faqItems.map((item) => {
            const open = openId === item.id
            return (
              <motion.li key={item.id} variants={fadeUp}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                  className="flex w-full items-start justify-between gap-6 py-5 text-left sm:py-6"
                >
                  <span className="font-sans text-[1.02rem] font-semibold tracking-tight text-ink sm:text-[1.05rem]">
                    {item.question}
                  </span>
                  <span
                    className={`mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full border border-line text-ink transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                    aria-hidden
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="size-3.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </button>
                <motion.div
                  initial={false}
                  animate={{
                    height: open ? "auto" : 0,
                    opacity: open ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <p className="max-w-2xl pb-5 text-[0.95rem] leading-relaxed text-ink-soft sm:pb-6">
                    {item.answer}
                  </p>
                </motion.div>
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.div>
    </section>
  )
}
