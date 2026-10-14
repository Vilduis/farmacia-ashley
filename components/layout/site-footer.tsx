import { Clock, Mail, MapPin, Phone } from "lucide-react"

import { SectionHeading } from "@/components/shared/section-heading"
import { navLinks, site } from "@/config/site"
import { categories } from "@/features/catalog"
import { messages, WhatsAppLink } from "@/features/whatsapp"
import { Logo } from "./logo"

export function SiteFooter() {
  return (
    <footer id="contacto" className="p-2 sm:p-3">
      <div className="rounded-[1.75rem] bg-primary px-5 pt-14 pb-8 text-white sm:rounded-[2.25rem] sm:px-8 lg:px-12 lg:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-12 lg:flex-row lg:items-end">
            <SectionHeading as="p" className="max-w-[18ch] text-white">
              ¿Necesitas algo hoy? Escríbenos.
            </SectionHeading>
            <WhatsAppLink
              message={messages.order}
              variant="light"
              size="lg"
              className="self-start lg:self-auto"
            >
              Pedir por WhatsApp
            </WhatsAppLink>
          </div>

          <div className="grid gap-10 pt-12 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
            <div>
              <Logo tone="light" />
              <ul className="mt-7 space-y-3 text-[0.95rem] text-white/90">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0" aria-hidden />
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline-offset-4 hover:text-white hover:underline"
                  >
                    {site.address}
                    <span className="sr-only"> (abre Google Maps)</span>
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0" aria-hidden />
                  {site.phone}
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0" aria-hidden />
                  {site.email}
                </li>
              </ul>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-medium">
                <Clock className="size-4" aria-hidden />
                Horario
              </h2>
              <dl className="mt-5 space-y-3 text-[0.95rem]">
                {site.hours.map((h) => (
                  <div key={h.days}>
                    <dt className="text-white/75">{h.days}</dt>
                    <dd>
                      {h.time}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <nav aria-label="Pie de página">
              <h2 className="font-medium">Explora</h2>
              <ul className="mt-5 space-y-2.5 text-[0.95rem] text-white/90">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <a href={l.href} className="underline-offset-4 hover:text-white hover:underline">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h2 className="font-medium">Síguenos</h2>
              <ul className="mt-5 space-y-2.5 text-[0.95rem] text-white/90">
                {site.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="underline-offset-4 hover:text-white hover:underline">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-white/75">
                {categories.length} categorías · atención por WhatsApp
              </p>
            </div>
          </div>

          <div className="mt-14 flex flex-col justify-between gap-2 border-t border-white/20 pt-6 text-sm text-white/75 sm:flex-row">
            <p>
              © {new Date().getFullYear()} {site.name}. Todos los derechos reservados.
            </p>
            <p>
              {site.city}, {site.region} · Perú
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
