import { useState, type FormEvent } from "react"
import { motion } from "framer-motion"
import { fadeUp } from "../motion/variants"

type ContactSectionProps = {
  heading?: string
}

export function ContactSection({ heading = "Let's talk" }: ContactSectionProps) {
  const [sent, setSent] = useState(false)

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="scroll-mt-24 bg-canvas px-5 py-24 md:px-10 md:py-32">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="mx-auto grid max-w-[1440px] gap-16 lg:grid-cols-2"
      >
        <div>
          <h2 className="font-display text-[clamp(2.4rem,6vw,5rem)] leading-[0.92] tracking-[-0.05em] lowercase">
            {heading}
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
            Whether you're ordering your first card, planning a bulk rollout for
            your team, or need help with your account — we'd love to hear from
            you.
          </p>
          <ul className="mt-8 space-y-2 text-sm text-ink-soft">
            <li>Personal and business inquiries welcome</li>
            <li>Corporate orders and custom branding</li>
            <li>Account support and technical questions</li>
          </ul>
        </div>

        {sent ? (
          <p className="self-center font-display text-3xl tracking-tight lowercase">
            message sent — we'll be in touch.
          </p>
        ) : (
          <form className="flex flex-col gap-6" onSubmit={onSubmit}>
            <label className="block">
              <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
                Full name
              </span>
              <input
                name="name"
                required
                autoComplete="name"
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
                Phone
              </span>
              <input
                name="phone"
                type="tel"
                required
                autoComplete="tel"
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
                Email
              </span>
              <input
                name="email"
                type="email"
                required
                autoComplete="email"
                className="mt-2 w-full border-b border-line bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
            </label>
            <label className="block">
              <span className="text-xs tracking-[0.14em] text-ink-soft uppercase">
                Message
              </span>
              <textarea
                name="message"
                required
                rows={4}
                className="mt-2 w-full resize-none border-b border-line bg-transparent py-3 text-ink outline-none focus:border-ink"
              />
            </label>
            <button
              type="submit"
              className="mt-4 inline-flex min-h-12 w-fit items-center rounded-full bg-ink px-8 text-sm font-medium text-white transition-opacity hover:opacity-85"
            >
              Send message
            </button>
          </form>
        )}
      </motion.div>
    </section>
  )
}
