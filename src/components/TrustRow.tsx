import { motion } from "framer-motion"
import { trustItems } from "../data/site"
import { fadeUp, stagger } from "../motion/variants"

export function TrustRow() {
  return (
    <section
      id="why-deets"
      className="relative scroll-mt-24 bg-canvas px-5 py-24 md:px-10 md:py-32"
    >
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.4 }}
        variants={fadeUp}
        className="mx-auto grid max-w-[1440px] items-end gap-8 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <h2 className="font-display text-[clamp(2.1rem,4.6vw,4.4rem)] leading-[0.95] tracking-[-0.045em] text-ink lowercase">
          Deets card is made for those looking for modernity, convenience, and
          elegance.
        </h2>
        <p className="max-w-md text-[15px] leading-relaxed text-ink-soft lg:justify-self-end lg:pb-1">
          Get instant access to more information about your social media and
          contact information directly from your Deets card.
        </p>
      </motion.div>

      <motion.ul
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        variants={stagger}
        className="mx-auto mt-16 grid max-w-[1440px] grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-2 lg:grid-cols-3"
      >
        {trustItems.map((item) => (
          <motion.li key={item.id} variants={fadeUp} className="min-w-0">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src={item.imageSrc}
                alt=""
                className="absolute inset-0 size-full object-cover"
              />
            </div>
            <h3 className="mt-5 font-sans text-[1.05rem] font-semibold tracking-tight text-ink">
              {item.title}
            </h3>
            <p className="mt-2 max-w-sm text-[0.95rem] leading-relaxed text-ink-soft">
              {item.copy}
            </p>
          </motion.li>
        ))}
      </motion.ul>
    </section>
  )
}
