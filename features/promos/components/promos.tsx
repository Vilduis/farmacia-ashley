import Image from "next/image"

import { site } from "@/config/site"
import { discountPercent, products, type Product } from "@/features/catalog"
import { WhatsAppLink } from "@/features/whatsapp"
import { formatPrice } from "@/lib/format"
import { cn } from "@/lib/utils"
import { promos } from "../data"

const tones = { sky: "bg-sky", cream: "bg-cream", lilac: "bg-lilac" } as const

type Promo = (typeof promos)[number] & { product: Product; label: string }

const offers: Promo[] = promos.flatMap((promo) => {
  const product = products.find((p) => p.id === promo.productId)
  if (!product) return []
  return [{ ...promo, product, label: promo.badge ?? `${discountPercent(product)} % dscto.` }]
})

export function Promos() {
  const [lead, ...rest] = offers

  return (
    <section id="ofertas" aria-labelledby="ofertas-title" className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
      <h2 id="ofertas-title" className="sr-only">
        Ofertas
      </h2>
      <div className="grid gap-4 lg:grid-cols-[1.25fr_1fr] lg:gap-5">
        <article
          className={cn(
            "grid overflow-hidden rounded-[2rem] sm:grid-cols-2",
            tones[lead.tone]
          )}
        >
          <div className="flex flex-col p-7 sm:p-10">
            <PromoBody promo={lead} large />
          </div>
          <div className="relative order-first aspect-[4/3] sm:order-none sm:aspect-auto">
            <Image
              src={lead.image}
              alt={lead.product.name}
              fill
              sizes="(min-width: 1024px) 24rem, (min-width: 640px) 50vw, 100vw"
              className="object-cover object-[center_30%] sm:object-center"
            />
          </div>
        </article>

        <div className="grid gap-4 lg:gap-5">
          {rest.map((promo) => (
            <article
              key={promo.id}
              className={cn(
                "relative isolate grid min-h-[15rem] grid-cols-[1fr_38%] overflow-hidden rounded-[2rem]",
                tones[promo.tone]
              )}
            >
              <div className="flex flex-col p-7 sm:p-8">
                <PromoBody promo={promo} />
              </div>
              <div className="relative">
                <Image
                  src={promo.image}
                  alt={promo.product.name}
                  fill
                  sizes="(min-width: 1024px) 14rem, 38vw"
                  className="object-cover"
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function PromoBody({ promo, large }: { promo: Promo; large?: boolean }) {
  const { price, oldPrice } = promo.product

  return (
    <>
      <span className="self-start rounded-full bg-white px-3 py-1 text-[0.8rem] font-medium text-ink">
        {promo.label}
      </span>
      <h3
        className={cn(
          "mt-5 font-display font-medium tracking-[-0.035em] text-ink",
          large ? "max-w-[12ch] text-[clamp(2rem,3.6vw,3rem)] leading-[1.02]" : "text-[1.6rem] leading-[1.08]"
        )}
      >
        {promo.title}
      </h3>
      <p className={cn("mt-2 text-ink/75", large ? "max-w-[24ch] text-lg" : "text-[0.95rem]")}>{promo.text}</p>
      <p className="mt-auto flex flex-wrap items-baseline gap-x-2.5 pt-6 tabular-nums">
        <span
          className={cn(
            "font-display font-medium tracking-[-0.03em] text-ink",
            large ? "text-[2.4rem]" : "text-[1.75rem]"
          )}
        >
          {formatPrice(price)}
        </span>
        {oldPrice && (
          <s className="text-[0.95rem] text-ink/70">
            <span className="sr-only">Antes </span>
            {formatPrice(oldPrice)}
          </s>
        )}
        {promo.priceNote && <span className="text-[0.95rem] text-ink/70">{promo.priceNote}</span>}
      </p>
      <WhatsAppLink
        message={`Hola ${site.name}, me interesa la oferta: ${promo.title} (${promo.label}) a ${formatPrice(price)}.`}
        variant={large ? "solid" : "light"}
        className={cn("mt-4 self-start", !large && "h-10 shadow-none")}
      >
        Pedir oferta
      </WhatsAppLink>
    </>
  )
}
