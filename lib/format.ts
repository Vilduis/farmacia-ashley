import { site } from "@/config/site"

const priceFormat = new Intl.NumberFormat(site.locale, {
  style: "currency",
  currency: site.currency,
  minimumFractionDigits: 2,
})

export function formatPrice(value: number) {
  return priceFormat.format(value)
}

const dateFormat = new Intl.DateTimeFormat(site.locale, {
  day: "numeric",
  month: "long",
  year: "numeric",
})

export function formatDate(iso: string) {
  return dateFormat.format(new Date(`${iso}T12:00:00`))
}
