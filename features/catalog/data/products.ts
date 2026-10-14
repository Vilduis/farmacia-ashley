import type { Product } from "../types"

export const products: Product[] = [
  { id: "paracetamol", name: "Paracetamol 500 mg", category: "medicamentos", presentation: "Caja x 100 tabletas", price: 12, image: "/images/productos/analgesico.jpg" },
  { id: "jarabe-tos", name: "Jarabe para la tos", category: "medicamentos", presentation: "Frasco 120 ml", price: 18.5, image: "/images/productos/jarabe.jpg" },
  { id: "zinc", name: "Zinc + vitamina C", category: "vitaminas", presentation: "Frasco x 90 cápsulas", price: 32.5, image: "/images/productos/zinc.jpg" },
  { id: "serum", name: "Sérum hidratante facial", category: "dermocosmetica", presentation: "Gotero 30 ml", price: 58.9, image: "/images/productos/serum.jpg" },
  { id: "gel-antibacterial", name: "Gel antibacterial", category: "cuidado-personal", presentation: "Frasco 250 ml", price: 9.9, image: "/images/productos/gel-antibacterial.jpg" },
  { id: "crema-corporal", name: "Crema corporal hidratante", category: "cuidado-personal", presentation: "Dispensador 400 ml", price: 27.5, image: "/images/productos/crema-corporal.jpg" },
  { id: "shampoo", name: "Shampoo hidratante", category: "cuidado-personal", presentation: "Frasco 400 ml", price: 21.9, image: "/images/productos/shampoo.jpg" },
  { id: "kit-bebe", name: "Kit de cuidado para bebé", category: "bebe", presentation: "Pañales, loción y shampoo", price: 89.9, oldPrice: 106, image: "/images/productos/bebe.jpg" },
  { id: "termometro", name: "Termómetro digital", category: "equipos", presentation: "Punta flexible", price: 24.9, image: "/images/productos/termometro.jpg" },
  { id: "botiquin", name: "Botiquín de primeros auxilios", category: "primeros-auxilios", presentation: "Estuche completo", price: 69, image: "/images/productos/botiquin.jpg" },
  { id: "omega-3", name: "Omega 3", category: "natural", presentation: "Frasco x 60 perlas", price: 54, image: "/images/productos/omega-3.jpg" },
  { id: "probiotico", name: "Probiótico digestivo", category: "natural", presentation: "Frasco x 30 cápsulas", price: 48, image: "/images/productos/capsulas.jpg" },
  { id: "vitamina-d3", name: "Vitamina D3 en gomitas", category: "vitaminas", presentation: "Frasco x 60 gomitas", price: 45, oldPrice: 52, image: "/images/productos/vitamina-d3.jpg" },
  { id: "protector-solar", name: "Protector solar FPS 50", category: "dermocosmetica", presentation: "Tubo 50 ml", price: 62, oldPrice: 75, image: "/images/productos/protector-solar.jpg" },
  { id: "tensiometro", name: "Tensiómetro digital de brazo", category: "equipos", presentation: "Medición automática", price: 129, oldPrice: 149, image: "/images/productos/tensiometro.jpg" },
  { id: "multivitaminico", name: "Multivitamínico diario", category: "vitaminas", presentation: "Frasco x 60 tabletas", price: 39.9, oldPrice: 49.9, image: "/images/productos/multivitaminico.jpg" },
]

const featuredIds = ["vitamina-d3", "protector-solar", "tensiometro", "multivitaminico"]

export const featuredProducts = featuredIds
  .map((id) => products.find((p) => p.id === id))
  .filter((p) => p !== undefined)
