import { site } from "@/config/site"

export function whatsappUrl(message: string) {
  const base = site.whatsapp ? `https://wa.me/${site.whatsapp}` : "https://wa.me/"
  return `${base}?text=${encodeURIComponent(message)}`
}

export const messages = {
  order: `Hola ${site.name}, quisiera hacer un pedido.`,
  question: `Hola ${site.name}, quisiera hacer una consulta.`,
  ask: (item: string) => `Hola ${site.name}, ¿tienen disponible ${item}? Quisiera hacer un pedido.`,
}
