"use client"

import { useState } from "react"
import { Check } from "lucide-react"

import { WhatsAppLink } from "@/features/whatsapp"
import { cn } from "@/lib/utils"
import { missingItemsMessage } from "../lib"

export function KitChecklist({ items }: { items: string[] }) {
  const [owned, setOwned] = useState<Set<string>>(new Set())
  const missing = items.filter((i) => !owned.has(i))

  function toggle(item: string) {
    setOwned((prev) => {
      const next = new Set(prev)
      if (next.has(item)) next.delete(item)
      else next.add(item)
      return next
    })
  }

  return (
    <fieldset className="mt-5">
      <legend className="sr-only">Productos del botiquín que ya tienes</legend>
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4">
        {items.map((item) => {
          const checked = owned.has(item)
          return (
            <li key={item}>
              <label
                className={cn(
                  "flex min-h-11 cursor-pointer items-center gap-2.5 rounded-xl px-3 py-2 text-[0.95rem] leading-tight text-ink transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring",
                  checked ? "bg-accent" : "bg-mint hover:bg-accent"
                )}
              >
                <input type="checkbox" checked={checked} onChange={() => toggle(item)} className="sr-only" />
                <span
                  aria-hidden
                  className={cn(
                    "grid size-5 shrink-0 place-items-center rounded-md border transition-colors",
                    checked ? "border-primary bg-primary text-white" : "border-input bg-white"
                  )}
                >
                  {checked && <Check className="size-3.5" strokeWidth={3} />}
                </span>
                <span className={cn(checked && "text-muted-foreground line-through")}>{item}</span>
              </label>
            </li>
          )
        })}
      </ul>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[0.95rem] text-ink" aria-live="polite">
          {missing.length === 0
            ? "¡Tu botiquín está completo!"
            : `Te ${missing.length === 1 ? "falta 1 producto" : `faltan ${missing.length} productos`}`}
        </p>
        {missing.length > 0 && (
          <WhatsAppLink message={missingItemsMessage(missing)}>Pedir lo que me falta</WhatsAppLink>
        )}
      </div>
    </fieldset>
  )
}
