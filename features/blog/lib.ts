import { site } from "@/config/site"

export function missingItemsMessage(items: string[]) {
  return `Hola ${site.name}, para completar mi botiquín necesito:\n${items.map((i) => `• ${i}`).join("\n")}\n¿Me confirman precio y disponibilidad?`
}
