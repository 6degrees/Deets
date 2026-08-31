import { STORE_URL } from "../data/site"
import { mediaSlots } from "../media/higgsfield"
import { LoopingVideo } from "./LoopingVideo"

export function FunctionsFilm() {
  return (
    <section id="functions" className="scroll-mt-24 bg-canvas">
      <div className="relative h-[min(50vh,440px)] min-h-[280px] w-full overflow-hidden">
        <LoopingVideo
          slot={mediaSlots.functions}
          fill
          startOn="view"
          className="size-full"
          fallback={<div className="size-full bg-ink" />}
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 z-[2] h-[38%] bg-gradient-to-b from-canvas-dim via-canvas-dim/70 to-transparent"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 z-[2] h-[32%] bg-gradient-to-t from-canvas via-canvas/80 to-transparent"
          aria-hidden
        />
      </div>

      <div className="flex flex-col items-center px-6 pb-20 pt-8 text-center md:pb-28 md:pt-10">
        <p className="max-w-2xl font-display text-[1.45rem] font-semibold leading-[1.1] tracking-[-0.04em] text-ink sm:text-[1.9rem] md:text-[2.35rem]">
          Made For Modernity,
          <br />
          Convenience, And Elegance.
        </p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-soft">
          No app required. Tap, scan, and share your socials and contact info
          instantly.
        </p>
        <a
          href={STORE_URL}
          className="mt-7 inline-flex min-h-10 items-center border border-ink/40 px-5 text-[11px] tracking-[0.14em] text-ink uppercase transition-colors hover:bg-ink/5"
        >
          Order Now
        </a>
      </div>
    </section>
  )
}
