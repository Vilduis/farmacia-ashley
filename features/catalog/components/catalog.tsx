"use client"

import { useState } from "react"
import Image from "next/image"
import { LayoutGrid, MessageCircle } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { site } from "@/config/site"
import { whatsappUrl } from "@/features/whatsapp"
import { cn } from "@/lib/utils"
import { categories } from "../data/categories"
import { products } from "../data/products"
import type { CategorySlug } from "../types"
import { CategoryButton } from "./category-button"
import { ProductCard } from "./product-card"

type Filter = CategorySlug | "todos"

const MOBILE_LIMIT = 6

const askSpan = {
  0: "sm:col-span-2 lg:col-span-4",
  1: "sm:col-span-1 lg:col-span-3",
  2: "sm:col-span-2 lg:col-span-2",
  3: "sm:col-span-1 lg:col-span-1",
} as const

export function Catalog() {
  const [filter, setFilter] = useState<Filter>("todos")
  const [expanded, setExpanded] = useState(false)
  const visible = filter === "todos" ? products : products.filter((p) => p.category === filter)
  const activeLabel = categories.find((c) => c.slug === filter)?.label
  const span = askSpan[(visible.length % 4) as 0 | 1 | 2 | 3]

  return (
    <section id="categorias" aria-labelledby="catalogo-title" className="mx-auto max-w-7xl px-5 pb-20 sm:px-8 lg:pb-28">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <SectionHeading id="catalogo-title">Busca por categoría</SectionHeading>
        <p className="text-[0.95rem] text-muted-foreground" aria-live="polite">
          {visible.length} {visible.length === 1 ? "producto" : "productos"}
          {activeLabel ? ` en ${activeLabel}` : ""}
        </p>
      </div>

      <div
        role="group"
        aria-label="Filtrar por categoría"
        className="-mx-5 mt-8 flex gap-3 overflow-x-auto px-5 pt-2 pb-3 [scrollbar-width:none] sm:-mx-2 sm:px-2 lg:justify-between lg:gap-2"
      >
        <CategoryButton
          active={filter === "todos"}
          onClick={() => setFilter("todos")}
          label="Todos"
          tint="#dbe9e5"
        >
          <LayoutGrid className="size-8 text-primary" strokeWidth={1.5} aria-hidden />
        </CategoryButton>
        {categories.map((c) => (
          <CategoryButton
            key={c.slug}
            active={filter === c.slug}
            onClick={() => setFilter(c.slug)}
            label={c.label}
            tint={c.tint}
          >
            <Image src={c.image} alt="" fill sizes="96px" className="object-cover" />
          </CategoryButton>
        ))}
      </div>

      <div
        key={filter}
        className="mt-10 grid animate-in gap-4 duration-500 fade-in slide-in-from-bottom-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5"
      >
        {visible.map((product, i) => (
          <ProductCard
            key={product.id}
            product={product}
            className={cn(!expanded && i >= MOBILE_LIMIT && "max-sm:hidden")}
          />
        ))}
        {!expanded && visible.length > MOBILE_LIMIT && (
          <button
            type="button"
            onClick={() => setExpanded(true)}
            className="h-12 rounded-xl border border-input text-[0.95rem] font-medium text-ink transition-colors hover:bg-mint sm:hidden"
          >
            Ver {visible.length - MOBILE_LIMIT} productos más
          </button>
        )}
        <a
          href={whatsappUrl(
            `Hola ${site.name}, estoy buscando un producto${activeLabel ? ` de ${activeLabel.toLowerCase()}` : ""} que no encuentro en la web.`
          )}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "@container flex min-h-[16rem] rounded-[1.75rem] bg-primary p-7 text-white transition-colors hover:bg-primary-hover sm:p-8",
            span
          )}
        >
          <div className="flex w-full flex-col justify-between gap-6 @xl:flex-row @xl:items-end">
            <MessageCircle className="size-9 shrink-0 @xl:order-last @xl:size-14" strokeWidth={1.5} aria-hidden />
            <div className="max-w-md">
              <p className="font-display text-[1.6rem] leading-[1.1] font-medium tracking-[-0.03em]">
                ¿No encuentras lo que buscas?
              </p>
              <p className="mt-2 text-white/80">
                Tenemos mucho más en tienda. Escríbenos y te confirmamos al momento.
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm font-medium underline underline-offset-4">
                Preguntar por WhatsApp
              </span>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
