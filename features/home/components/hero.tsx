import Image from "next/image"
import { ArrowDown } from "lucide-react"

import { SiteHeader } from "@/components/layout/site-header"
import { messages, OrderComposer, WhatsAppLink } from "@/features/whatsapp"

export function Hero() {
  return (
    <section id="inicio" className="relative p-2 sm:p-3">
      <div className="relative isolate flex min-h-[min(calc(100svh-1rem),46rem)] flex-col overflow-hidden rounded-[1.75rem] bg-ink sm:rounded-[2.25rem] lg:min-h-[min(calc(100svh-1.5rem),56rem)]">
        <Image
          src="/images/hero.jpg"
          alt="Farmacéutico mostrando un medicamento a una clienta en el mostrador"
          fill
          preload
          sizes="100vw"
          className="-z-20 object-cover object-[62%_30%] lg:object-[center_28%]"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgb(16_38_33/0.55)_0%,rgb(16_38_33/0)_22%,rgb(16_38_33/0.15)_45%,rgb(16_38_33/0.92)_100%)] lg:bg-[linear-gradient(90deg,rgb(16_38_33/0.9)_0%,rgb(16_38_33/0.55)_38%,rgb(16_38_33/0)_62%),linear-gradient(180deg,rgb(16_38_33/0.5)_0%,rgb(16_38_33/0)_25%)]"
        />

        <SiteHeader />

        <div className="mt-auto px-5 pt-40 pb-7 sm:px-8 sm:pb-9 lg:px-12 lg:pb-12">
          <div className="max-w-[40rem] text-white">
            <h1 className="font-display text-[clamp(2.4rem,4.8vw,4.25rem)] leading-[1] font-medium tracking-[-0.04em]">
              <span className="rise block" style={{ "--i": 0 } as React.CSSProperties}>
                Tu farmacia
              </span>
              <span className="rise block" style={{ "--i": 1 } as React.CSSProperties}>
                de confianza,
              </span>
              <span className="rise block" style={{ "--i": 2 } as React.CSSProperties}>
                a un mensaje.
              </span>
            </h1>
            <p
              className="rise mt-5 max-w-[31rem] text-[1.05rem] leading-relaxed text-white/85 sm:text-lg"
              style={{ "--i": 3 } as React.CSSProperties}
            >
              Medicamentos, vitaminas y cuidado personal con la atención de siempre. Escríbenos por
              WhatsApp y te dejamos tu pedido listo.
            </p>
            <div className="rise mt-8 flex flex-wrap gap-3" style={{ "--i": 4 } as React.CSSProperties}>
              <WhatsAppLink
                message={messages.order}
                variant="light"
                size="lg"
              >
                Pedir por WhatsApp
              </WhatsAppLink>
              <a
                href="#productos"
                className="inline-flex h-13 items-center gap-2 rounded-xl px-5 text-[0.95rem] font-medium text-white ring-1 ring-white/40 transition-colors ring-inset hover:bg-white/10"
              >
                Ver productos
                <ArrowDown className="size-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>

      <OrderComposer className="relative z-10 mx-auto -mt-5 w-[calc(100%-1.5rem)] max-w-md border border-border lg:absolute lg:right-15 lg:bottom-15 lg:mt-0 lg:w-[25rem] lg:border-transparent" />
    </section>
  )
}
