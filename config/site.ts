export const site = {
  name: "Farmacia Ashley",
  description:
    "Farmacia en Tingo María: medicamentos, vitaminas y cuidado personal con atención cercana. Haz tu pedido por WhatsApp.",
  url: process.env.NEXT_PUBLIC_SITE_URL
    ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://localhost:3000"),

  // Número con código de país, solo dígitos (ej. "51987654321"). Vacío: WhatsApp deja elegir el contacto.
  whatsapp: "",
  locale: "es-PE",
  currency: "PEN",
  city: "Tingo María",
  region: "Huánuco",
  address: "Av. Antonio Raimondi 245, Tingo María",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Av.+Antonio+Raimondi+Tingo+Mar%C3%ADa+Hu%C3%A1nuco",
  phone: "(062) 56-2140",
  email: "contacto@farmaciaashley.com",
  hours: [
    { days: "Lunes a sábado", time: "8:00 a. m. – 10:00 p. m." },
    { days: "Domingos y feriados", time: "9:00 a. m. – 2:00 p. m." },
  ],
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "TikTok", href: "#" },
  ],
  foundedYear: "2010",
  stats: [
    { value: "15+", label: "Años en el barrio", icon: "award" },
    { value: "2 000+", label: "Productos en tienda", icon: "pill" },
    { value: "150+", label: "Marcas disponibles", icon: "package" },
    { value: "7 días", label: "Atención por WhatsApp", icon: "message" },
  ],
} as const

export type StatIcon = (typeof site.stats)[number]["icon"]

export const navLinks = [
  { href: "#productos", label: "Productos" },
  { href: "#ofertas", label: "Ofertas" },
  { href: "#categorias", label: "Categorías" },
  { href: "#consejos", label: "Consejos" },
  { href: "#contacto", label: "Contacto" },
]
