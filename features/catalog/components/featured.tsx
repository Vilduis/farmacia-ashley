import { ArrowDownRight } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { featuredProducts } from "../data/products"
import { ProductCard } from "./product-card"

export function Featured() {
  return (
    <section id="productos" aria-labelledby="featured-title" className="bg-mint py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="featured-title" className="max-w-[14ch]">
            Lo más pedido esta semana
          </SectionHeading>
          <a
            href="#categorias"
            className="inline-flex items-center gap-1.5 text-[0.95rem] font-medium text-ink underline-offset-4 hover:underline"
          >
            Ver todo el catálogo
            <ArrowDownRight className="size-4" aria-hidden />
          </a>
        </div>

        <div className="-mx-5 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-2 [scrollbar-width:none] sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:mt-14 lg:grid-cols-4 lg:gap-5">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              className="w-[78%] shrink-0 snap-start sm:w-auto"
            />
          ))}
        </div>
      </div>
    </section>
  )
}
