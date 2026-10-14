import { site } from "@/config/site"
import { formatPrice } from "@/lib/format"
import type { Product } from "./types"

export function orderMessage(product: Product) {
  return `Hola ${site.name}, quisiera pedir: ${product.name} (${product.presentation}) – ${formatPrice(product.price)}. ¿Lo tienen disponible?`
}

export function discountPercent(product: Product) {
  return product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0
}
