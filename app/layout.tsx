import type { Metadata, Viewport } from "next"
import { Inter, Sora } from "next/font/google"

import "./globals.css"
import { site } from "@/config/site"
import { cn } from "@/lib/utils"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

const sora = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-display",
})

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `${site.name} · Tu farmacia de confianza`,
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PE",
    siteName: site.name,
    title: `${site.name} · Tu farmacia de confianza`,
    description: site.description,
    images: [{ url: "/images/hero.jpg", alt: "Farmacéutico atendiendo a una clienta en el mostrador" }],
  },
}

export const viewport: Viewport = {
  themeColor: "#2b7468",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={cn("antialiased font-sans", inter.variable, sora.variable)}>
      <body>{children}</body>
    </html>
  )
}
