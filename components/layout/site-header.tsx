"use client"

import { Menu } from "lucide-react"

import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { navLinks, site } from "@/config/site"
import { messages, WhatsAppLink } from "@/features/whatsapp"
import { Logo } from "./logo"

export function SiteHeader() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="flex items-center justify-between gap-6 px-5 py-5 sm:px-8 lg:px-12 lg:py-7">
        <a href="#inicio" aria-label={`${site.name}, inicio`} className="rounded-lg">
          <Logo tone="light" />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[0.95rem] text-white/90 underline-offset-8 transition-colors hover:text-white hover:underline"
            >
              {link.label}
            </a>
          ))}
          <WhatsAppLink
            message={messages.question}
            variant="outline"
            className="h-10 border-white/60 px-4 text-white hover:bg-white hover:text-ink"
          >
            Escríbenos
          </WhatsAppLink>
        </nav>

        <Sheet>
          <SheetTrigger
            className="grid size-11 place-items-center rounded-xl bg-white/15 text-white backdrop-blur-md transition-colors hover:bg-white/25 lg:hidden"
            aria-label="Abrir menú"
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[86%] gap-0 bg-white p-0">
            <div className="border-b border-border px-6 py-5">
              <SheetTitle render={<div />}>
                <Logo />
              </SheetTitle>
            </div>
            <nav aria-label="Menú móvil" className="flex flex-col px-3 py-4">
              {navLinks.map((link) => (
                <SheetClose
                  key={link.href}
                  render={<a href={link.href} />}
                  className="rounded-xl px-3 py-3.5 font-display text-xl tracking-[-0.02em] text-ink hover:bg-mint"
                >
                  {link.label}
                </SheetClose>
              ))}
            </nav>
            <div className="mt-auto p-6">
              <WhatsAppLink message={messages.question} size="lg" className="w-full">
                Pedir por WhatsApp
              </WhatsAppLink>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
