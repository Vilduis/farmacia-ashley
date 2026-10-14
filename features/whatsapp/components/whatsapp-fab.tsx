"use client"

import { useEffect, useState } from "react"

import { cn } from "@/lib/utils"
import { messages } from "../lib"
import { WhatsAppLink } from "./whatsapp-link"

export function WhatsAppFab() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById("inicio")
    if (!hero) return
    const observer = new IntersectionObserver(([entry]) => setVisible(!entry.isIntersecting))
    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  return (
    <WhatsAppLink
      message={messages.order}
      aria-label="Pedir por WhatsApp"
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
      className={cn(
        "fixed right-4 bottom-4 z-30 size-14 rounded-full p-0 shadow-[0_12px_28px_-8px_rgb(21_50_43/0.6)] transition-[opacity,translate] duration-500 lg:hidden [&_svg]:size-6",
        visible ? "opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      )}
    />
  )
}
