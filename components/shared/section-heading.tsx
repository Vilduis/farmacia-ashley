import { cn } from "@/lib/utils"

export function SectionHeading({
  as: Tag = "h2",
  className,
  ...props
}: React.ComponentProps<"h2"> & { as?: "h2" | "p" }) {
  return (
    <Tag
      className={cn(
        "font-display text-[clamp(2rem,4.2vw,3.4rem)] leading-[1.04] font-medium tracking-[-0.04em] text-ink",
        className
      )}
      {...props}
    />
  )
}
