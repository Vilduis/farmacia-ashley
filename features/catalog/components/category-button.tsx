import { cn } from "@/lib/utils"

export function CategoryButton({
  active,
  onClick,
  label,
  tint,
  children,
}: {
  active: boolean
  onClick: () => void
  label: string
  tint: string
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className="group flex w-24 shrink-0 flex-col items-center gap-3 rounded-2xl text-center outline-offset-4"
    >
      <span
        className={cn(
          "relative grid size-[5.5rem] place-items-center overflow-hidden rounded-full ring-2 ring-offset-4 transition-[box-shadow,translate] duration-500 ease-out-expo group-hover:-translate-y-1",
          active ? "ring-primary" : "ring-transparent"
        )}
        style={{ backgroundColor: tint }}
      >
        {children}
      </span>
      <span
        className={cn(
          "text-[0.9rem] leading-tight transition-colors",
          active ? "font-semibold text-primary" : "text-ink"
        )}
      >
        {label}
      </span>
    </button>
  )
}
