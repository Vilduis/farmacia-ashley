import { MessageCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import { whatsappUrl } from "../lib"

type Props = Omit<React.ComponentProps<"a">, "href"> & {
  message: string
  variant?: "solid" | "light" | "outline"
  size?: "md" | "lg"
}

const variants = {
  solid: "bg-primary text-primary-foreground hover:bg-primary-hover shadow-[0_8px_20px_-10px_rgb(21_50_43/0.6)]",
  light: "bg-white text-ink hover:bg-mint shadow-[0_10px_30px_-12px_rgb(0_0_0/0.45)]",
  outline: "border border-current/30 text-current hover:bg-white/10",
}

const sizes = {
  md: "h-11 px-4 text-sm",
  lg: "h-13 px-6 text-[0.95rem]",
}

export function WhatsAppLink({
  message,
  variant = "solid",
  size = "md",
  className,
  children,
  ...props
}: Props) {
  return (
    <a
      href={whatsappUrl(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl font-medium whitespace-nowrap transition-[background-color,translate,box-shadow] duration-300 ease-out-expo active:translate-y-px",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      <MessageCircle className="size-[1.1em]" aria-hidden />
      {children}
      <span className="sr-only"> (abre WhatsApp)</span>
    </a>
  )
}
