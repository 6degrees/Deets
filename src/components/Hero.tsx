import { mediaSlots } from "../media/higgsfield"
import { STORE_URL } from "../data/site"
import { GradientCta } from "./GradientCta"
import { LoopingVideo } from "./LoopingVideo"

export function Hero() {
  return (
    <section className="relative h-dvh w-full overflow-hidden bg-ink">
      <LoopingVideo
        slot={mediaSlots.hero}
        fill
        startOn="view"
        className="size-full"
        fallback={
          <img
            src={mediaSlots.hero.posterSrc}
            alt=""
            className="size-full object-cover"
          />
        }
      />
      <div className="pointer-events-none absolute inset-0 z-[1] bg-[radial-gradient(ellipse_at_center,transparent_0%,rgb(0_0_0_/_0.45)_70%,rgb(0_0_0_/_0.65)_100%)]" />

      <div className="pointer-events-none relative z-20 flex h-full flex-col items-center justify-center px-6 text-center">
        <h1 className="font-display text-[1.85rem] font-extrabold leading-[1.08] tracking-[-0.04em] text-white drop-shadow-[0_2px_24px_rgb(0_0_0_/_0.85)] sm:text-[2.35rem] md:text-[3rem] md:leading-[1.05]">
          A Card That
          <br />
          Speaks For You
        </h1>
        <p className="mt-6 max-w-md text-sm leading-relaxed text-white drop-shadow-[0_2px_16px_rgb(0_0_0_/_0.9)] md:text-[15px]">
          Get instant access to more information about your social media and
          contact information directly from your Deets card.
        </p>
      </div>

      <a
        href={STORE_URL}
        className="absolute bottom-6 right-5 z-20 hidden items-center gap-3 rounded-sm border border-white/50 bg-black/50 px-4 py-3 backdrop-blur-sm md:flex md:right-10"
      >
        <span className="text-[11px] tracking-[0.14em] text-white uppercase">
          Order Now
        </span>
      </a>

      <div className="absolute bottom-6 left-5 z-20 md:hidden">
        <GradientCta href={STORE_URL} className="min-h-11 px-6 text-[13px]">
          Order Now
        </GradientCta>
      </div>
    </section>
  )
}
