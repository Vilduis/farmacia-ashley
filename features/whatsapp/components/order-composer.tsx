"use client"

import { useState } from "react"
import { ArrowUpRight, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { messages, whatsappUrl } from "../lib"

const suggestions = ["Paracetamol", "Protector solar", "Vitamina C", "Pañales"]

export function OrderComposer({ className }: { className?: string }) {
  const [query, setQuery] = useState("")
  const [error, setError] = useState(false)

  function send(text: string) {
    const item = text.trim()
    if (!item) {
      setError(true)
      return
    }
    window.open(
      whatsappUrl(messages.ask(item)),
      "_blank",
      "noopener,noreferrer"
    )
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        send(query)
      }}
      className={cn(
        "rounded-[1.75rem] bg-white/95 p-5 text-ink shadow-[0_24px_60px_-24px_rgb(10_30_25/0.55)] backdrop-blur-xl sm:p-6",
        className
      )}
    >
      <label htmlFor="consulta" className="font-display text-xl font-medium tracking-[-0.025em]">
        ¿Qué estás buscando?
      </label>
      <p className="mt-1 text-sm text-muted-foreground">
        Escríbelo y te respondemos por WhatsApp con precio y disponibilidad.
      </p>

      <div
        className={cn(
          "mt-4 flex items-center gap-2 rounded-2xl border bg-white p-1.5 pl-3.5 transition-colors focus-within:border-primary",
          error ? "border-destructive" : "border-input"
        )}
      >
        <Search className="size-4 shrink-0 text-muted-foreground" aria-hidden />
        <input
          id="consulta"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            if (error) setError(false)
          }}
          placeholder="Ej. ibuprofeno"
          autoComplete="off"
          aria-invalid={error}
          aria-describedby={error ? "consulta-error" : undefined}
          className="h-10 min-w-0 flex-1 bg-transparent text-[0.95rem] outline-none placeholder:text-muted-foreground focus-visible:outline-none"
        />
        <button
          type="submit"
          className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-xl bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
        >
          Consultar
          <ArrowUpRight className="size-4" aria-hidden />
        </button>
      </div>
      {error && (
        <p id="consulta-error" role="alert" className="mt-2 text-sm text-destructive">
          Escribe el nombre de un producto para consultarlo.
        </p>
      )}

      <div className="mt-4 flex flex-wrap gap-2">
        {suggestions.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => send(s)}
            className="rounded-full bg-mint px-3 py-1.5 text-[0.8rem] text-ink transition-colors hover:bg-accent hover:text-primary"
          >
            {s}
          </button>
        ))}
      </div>
    </form>
  )
}
