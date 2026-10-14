import type { Tone } from "./types"

export const promos: {
  id: string
  productId: string
  title: string
  text: string
  image: string
  tone: Tone
  badge?: string
  priceNote?: string
}[] = [
  {
    id: "promo-bebe",
    productId: "kit-bebe",
    title: "Kit para bebé",
    text: "Pañales, loción y shampoo en un solo pedido.",
    image: "/images/promos/kit-bebe.jpg",
    tone: "sky",
  },
  {
    id: "promo-solar",
    productId: "protector-solar",
    title: "Protector solar FPS 50",
    text: "Para toda la familia.",
    image: "/images/productos/protector-solar.jpg",
    tone: "cream",
  },
  {
    id: "promo-gel",
    productId: "gel-antibacterial",
    badge: "2 x 1",
    title: "Gel antibacterial",
    text: "Llévate dos frascos de 250 ml.",
    priceNote: "por los dos",
    image: "/images/productos/gel-antibacterial.jpg",
    tone: "lilac",
  },
]
