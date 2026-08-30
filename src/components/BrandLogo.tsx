import { withBase } from "../lib/base"

type BrandLogoProps = {
  className?: string
}

export function BrandLogo({ className = "h-7 w-auto" }: BrandLogoProps) {
  return (
    <img
      src={withBase("/logo.png")}
      alt="Deets"
      className={className}
      decoding="async"
    />
  )
}
