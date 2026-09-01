export function CarouselArrows({
  onPrev,
  onNext,
  prevLabel = "Previous",
  nextLabel = "Next",
}: {
  onPrev: () => void
  onNext: () => void
  prevLabel?: string
  nextLabel?: string
}) {
  return (
    <div className="flex gap-3">
      <ArrowButton direction="prev" onClick={onPrev} label={prevLabel} />
      <ArrowButton direction="next" onClick={onNext} label={nextLabel} />
    </div>
  )
}

function ArrowButton({
  direction,
  onClick,
  label,
}: {
  direction: "prev" | "next"
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex size-11 items-center justify-center rounded-full bg-ink text-white transition-opacity hover:opacity-85"
    >
      <svg
        viewBox="0 0 24 24"
        className="size-4"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        aria-hidden
      >
        {direction === "prev" ? (
          <path d="M15 18l-6-6 6-6" />
        ) : (
          <path d="M9 18l6-6-6-6" />
        )}
      </svg>
    </button>
  )
}
