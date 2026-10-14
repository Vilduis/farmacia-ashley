import { SectionHeading } from "@/components/shared/section-heading"
import { BlogReader } from "./blog-reader"

export function Blog() {
  return (
    <section id="consejos" aria-labelledby="consejos-title" className="border-t border-border bg-mint/60">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading id="consejos-title">Consejos de salud</SectionHeading>
          <p className="text-[0.95rem] text-muted-foreground">Elige un tema y léelo en un minuto</p>
        </div>

        <BlogReader />
      </div>
    </section>
  )
}
