import { cn } from "@/lib/utils"

export function Logo({ className, tone = "dark" }: { className?: string; tone?: "dark" | "light" }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-[1.35rem] font-medium tracking-[-0.03em]",
        tone === "light" ? "text-white" : "text-ink",
        className
      )}
    >
      <svg viewBox="0 0 32 32" aria-hidden className="size-8 shrink-0">
        <rect
          x="1.5"
          y="1.5"
          width="29"
          height="29"
          rx="9"
          className={tone === "light" ? "fill-white" : "fill-primary"}
        />
        <path
          d="M13.4 8.5h5.2v4.9h4.9v5.2h-4.9v4.9h-5.2v-4.9H8.5v-5.2h4.9z"
          className={tone === "light" ? "fill-primary" : "fill-white"}
        />
      </svg>
      <span>
        Farmacia <span className="font-semibold">Ashley</span>
      </span>
    </span>
  )
}
