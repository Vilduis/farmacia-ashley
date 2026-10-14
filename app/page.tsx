import { SiteFooter } from "@/components/layout/site-footer"
import { Blog } from "@/features/blog"
import { Catalog, Featured } from "@/features/catalog"
import { Hero, Intro } from "@/features/home"
import { Promos } from "@/features/promos"
import { WhatsAppFab } from "@/features/whatsapp"

export default function Page() {
  return (
    <>
      <main>
        <Hero />
        <Intro />
        <Featured />
        <Promos />
        <Catalog />
        <Blog />
      </main>
      <SiteFooter />
      <WhatsAppFab />
    </>
  )
}
