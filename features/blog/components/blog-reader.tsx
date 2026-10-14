"use client"

import { useState } from "react"
import Image from "next/image"
import { Lightbulb } from "lucide-react"

import { site } from "@/config/site"
import { WhatsAppLink } from "@/features/whatsapp"
import { formatDate } from "@/lib/format"
import { cn } from "@/lib/utils"
import { posts } from "../data"
import { KitChecklist } from "./kit-checklist"

export function BlogReader() {
  const [activeSlug, setActiveSlug] = useState(posts[0].slug)
  const post = posts.find((p) => p.slug === activeSlug) ?? posts[0]

  return (
    <div className="mt-10 grid grid-cols-[minmax(0,1fr)] gap-6 lg:mt-14 lg:grid-cols-[minmax(0,1fr)_22rem] lg:gap-8">
      <nav aria-label="Elegir consejo" className="-mx-5 lg:order-last lg:mx-0">
        <ul className="flex snap-x snap-mandatory scroll-px-5 gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] lg:flex-col lg:overflow-visible lg:px-0 lg:pb-0">
          {posts.map((p) => {
            const active = p.slug === post.slug
            return (
              <li key={p.slug} className="w-72 shrink-0 snap-start lg:w-auto">
                <button
                  type="button"
                  onClick={() => setActiveSlug(p.slug)}
                  aria-pressed={active}
                  className={cn(
                    "group flex h-full w-full items-center gap-3 rounded-2xl p-2 pr-4 text-left ring-1 transition-[background-color,box-shadow] duration-300 ease-out-expo",
                    active
                      ? "bg-white shadow-[0_2px_8px_-4px_rgb(21_50_43/0.15)] ring-primary/30"
                      : "ring-transparent hover:bg-white/70"
                  )}
                >
                  <span className="relative aspect-[3/2] w-24 shrink-0 overflow-hidden rounded-xl bg-tile">
                    <Image src={p.image} alt="" fill sizes="6rem" className="object-cover" />
                  </span>
                  <span
                    className={cn(
                      "line-clamp-2 text-[0.95rem] leading-snug text-ink",
                      active ? "font-semibold" : "font-medium"
                    )}
                  >
                    {p.title}
                  </span>
                </button>
              </li>
            )
          })}
        </ul>
      </nav>

      <article
        key={post.slug}
        className="animate-in rounded-[1.75rem] bg-white p-2 duration-500 fade-in slide-in-from-bottom-2"
      >
        <div className="grid gap-5 sm:grid-cols-[18rem_minmax(0,1fr)] sm:items-center sm:gap-6">
          <div className="relative aspect-[3/2] overflow-hidden rounded-[1.35rem] bg-tile">
            <Image src={post.image} alt="" fill sizes="(min-width: 640px) 18rem, 100vw" className="object-cover" />
          </div>
          <div className="px-4 sm:px-0 sm:pr-6">
            <time dateTime={post.date} className="text-[0.8rem] text-muted-foreground">
              {formatDate(post.date)}
            </time>
            <h3 className="mt-2 font-display text-[1.6rem] leading-[1.1] font-medium tracking-[-0.03em] text-ink">
              {post.title}
            </h3>
            <p className="mt-3 text-[1.05rem] leading-relaxed text-muted-foreground">{post.excerpt}</p>
          </div>
        </div>

        <div className="flex flex-col px-4 pt-1 pb-4 sm:px-6 sm:pb-6">
          {post.checklist ? (
            <KitChecklist items={post.checklist} />
          ) : (
            <ul className="mt-5 space-y-2.5">
              {post.points?.map((point) => (
                <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink">
                  <span aria-hidden className="mt-[0.6em] size-1.5 shrink-0 rounded-full bg-primary" />
                  {point}
                </li>
              ))}
            </ul>
          )}

          <p className="mt-5 flex gap-3 rounded-2xl bg-cream px-4 py-3 text-[0.95rem] leading-relaxed text-ink">
            <Lightbulb className="mt-0.5 size-4 shrink-0 text-ink/70" aria-hidden />
            {post.tip}
          </p>

          {!post.checklist && (
            <WhatsAppLink
              message={`Hola ${site.name}, leí el consejo "${post.title}" y tengo una consulta.`}
              className="mt-6 self-start"
            >
              Preguntar al farmacéutico
            </WhatsAppLink>
          )}
        </div>
      </article>
    </div>
  )
}
