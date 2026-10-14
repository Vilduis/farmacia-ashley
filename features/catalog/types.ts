export type CategorySlug =
  | "medicamentos"
  | "vitaminas"
  | "cuidado-personal"
  | "dermocosmetica"
  | "bebe"
  | "equipos"
  | "primeros-auxilios"
  | "natural"

export type Category = { slug: CategorySlug; label: string; image: string; tint: string }

export type Product = {
  id: string
  name: string
  category: CategorySlug
  presentation: string
  price: number
  oldPrice?: number
  image: string
}
