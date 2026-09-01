type TemplateScreenPreviewProps = {
  src: string
  alt?: string
  className?: string
}

export function TemplateScreenPreview({
  src,
  alt = "",
  className = "",
}: TemplateScreenPreviewProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={`block w-full rounded-[1.25rem] ${className}`}
    />
  )
}
