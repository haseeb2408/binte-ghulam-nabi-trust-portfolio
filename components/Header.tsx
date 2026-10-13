"use client";

import { useState } from "react";
import { nav, site } from "@/lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-forest/10 bg-sand/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <a href="#top" className="flex items-center gap-3 font-serif text-lg font-semibold text-forest sm:text-xl">
          {site.logo && (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={site.logo} alt={`${site.name} logo`} className="h-12 w-auto object-contain" />
          )}
          {site.name}
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm font-medium text-ink/80 transition hover:text-forest">
              {item.label}
            </a>
          ))}
          <a href="#donate" className="rounded-full bg-forest px-5 py-2 text-sm font-semibold text-sand transition hover:bg-forest-dark">
            Donate
          </a>
        </nav>

        <button
          type="button"
          className="rounded-md p-2 text-forest md:hidden"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-forest/10 bg-sand px-5 pb-4 md:hidden" aria-label="Mobile">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-ink/85"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
