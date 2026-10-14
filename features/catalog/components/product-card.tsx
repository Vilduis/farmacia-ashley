import Image from "next/image"

import { WhatsAppLink } from "@/features/whatsapp"
import { formatPrice } from "@/lib/format"
import { cn } from "@/lib/utils"
import { categoryLabel } from "../data/categories"
import { discountPercent, orderMessage } from "../lib"
import type { Product } from "../types"

export function ProductCard({ product, className }: { product: Product; className?: string }) {
  const discount = discountPercent(product)

  return (
    <article
      className={cn(
        "group flex flex-col rounded-[1.75rem] bg-tile p-2 transition-shadow duration-500 ease-out-expo hover:shadow-[0_20px_40px_-24px_rgb(21_50_43/0.45)]",
        className
      )}
    >
      <div className="relative aspect-[5/4] overflow-hidden rounded-[1.35rem]">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(min-width: 1024px) 22rem, (min-width: 640px) 45vw, 90vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
        />
        {discount > 0 && (
          <span className="absolute top-3 left-3 rounded-full bg-white px-2.5 py-1 text-xs font-semibold text-primary">
            −{discount} %
          </span>
        )}
      </div>

      <div className="-mt-6 relative mx-1 mb-1 flex flex-1 flex-col rounded-[1.35rem] bg-white p-4 shadow-[0_2px_8px_-4px_rgb(21_50_43/0.15)]">
        <div className="flex items-baseline justify-between gap-3">
          <p className="min-w-0 truncate text-[0.8rem] text-muted-foreground">{categoryLabel(product.category)}</p>
          <p className="flex items-baseline gap-1.5 whitespace-nowrap tabular-nums">
            {product.oldPrice && (
              <s className="text-[0.8rem] text-muted-foreground">
                <span className="sr-only">Antes </span>
                {formatPrice(product.oldPrice)}
              </s>
            )}
            <span className="text-[1.05rem] font-semibold text-ink">
              {formatPrice(product.price)}
            </span>
          </p>
        </div>
        <h3 className="mt-1.5 text-[1.05rem] leading-snug font-medium text-ink">{product.name}</h3>
        <p className="mt-0.5 text-sm text-muted-foreground">{product.presentation}</p>
        <WhatsAppLink
          message={orderMessage(product)}
          className="mt-4 w-full"
          aria-label={`Pedir ${product.name} por WhatsApp`}
        >
          Pedir por WhatsApp
        </WhatsAppLink>
      </div>
    </article>
  )
}
