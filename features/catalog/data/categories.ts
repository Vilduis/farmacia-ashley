import type { Category, CategorySlug } from "../types"

export const categories: Category[] = [
  { slug: "medicamentos", label: "Medicamentos", image: "/images/categorias/medicamentos.jpg", tint: "#dcefee" },
  { slug: "vitaminas", label: "Vitaminas", image: "/images/categorias/vitaminas.jpg", tint: "#fbefc9" },
  { slug: "cuidado-personal", label: "Cuidado personal", image: "/images/categorias/cuidado-personal.jpg", tint: "#ece4d8" },
  { slug: "dermocosmetica", label: "Dermocosmética", image: "/images/categorias/dermocosmetica.jpg", tint: "#f4e3ea" },
  { slug: "bebe", label: "Mamá y bebé", image: "/images/categorias/bebe.jpg", tint: "#e4e6f7" },
  { slug: "equipos", label: "Equipos médicos", image: "/images/categorias/equipos.jpg", tint: "#fde3d4" },
  { slug: "primeros-auxilios", label: "Primeros auxilios", image: "/images/categorias/primeros-auxilios.jpg", tint: "#d8ecf7" },
  { slug: "natural", label: "Naturales", image: "/images/categorias/natural.jpg", tint: "#e5f2d6" },
]

export function categoryLabel(slug: CategorySlug) {
  return categories.find((c) => c.slug === slug)?.label ?? slug
}
