import { Award, MessageCircle, Package, Pill, type LucideIcon } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { site, type StatIcon } from "@/config/site"

const icons: Record<StatIcon, LucideIcon> = {
  award: Award,
  pill: Pill,
  package: Package,
  message: MessageCircle,
}

export function Intro() {
  return (
    <section aria-labelledby="intro-title" className="mx-auto max-w-7xl px-5 pt-20 pb-16 sm:px-8 lg:pt-28 lg:pb-24">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-16">
        <SectionHeading id="intro-title">
          Cuidando la salud de {site.city} desde {site.foundedYear}
        </SectionHeading>
        <p className="max-w-[36rem] text-[1.05rem] leading-relaxed text-muted-foreground lg:pt-3 lg:text-lg">
          En {site.name}, en el corazón de {site.city}, creemos que una buena farmacia se nota en el trato. Te ayudamos a encontrar tu
          medicamento, te explicamos cómo tomarlo y te avisamos cuando hay una alternativa que te conviene.
          Sin filas ni vueltas: pregunta por WhatsApp y pasa a recoger, o pídelo directo.
        </p>
      </div>

      <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-10 border-t border-border pt-10 lg:mt-20 lg:grid-cols-4">
        {site.stats.map((stat) => {
          const Icon = icons[stat.icon]
          return (
            <div key={stat.label} className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="grid size-14 shrink-0 place-items-center rounded-2xl bg-primary text-white">
                <Icon className="size-6" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="flex flex-col-reverse gap-2">
                <dt className="text-[0.95rem] text-muted-foreground">{stat.label}</dt>
                <dd className="font-display text-[2rem] leading-none font-medium tracking-[-0.03em] text-ink tabular-nums">
                  {stat.value}
                </dd>
              </div>
            </div>
          )
        })}
      </dl>
    </section>
  )
}
