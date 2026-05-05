"use client";

import Image from "next/image";
import { useState } from "react";

const navItems = [
  { label: "Korzyści", href: "#prinosy" },
  { label: "Jak to działa", href: "#jak-to-funguje" },
  { label: "Programy", href: "#programy" },
  { label: "Dla kogo", href: "#pro-koho" },
  { label: "Pytania", href: "#faq" },
  { label: "Kontakt", href: "#poptavka" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-3 pt-3 text-white sm:px-5 sm:pt-4">
      <div className="section-shell">
        <div className="relative flex h-16 items-center justify-between overflow-hidden rounded-full border border-white/[0.16] bg-[#4F6B7E]/[0.65] px-4 shadow-[0_18px_70px_rgba(63,88,112,0.18)] backdrop-blur-2xl before:pointer-events-none before:absolute before:inset-x-5 before:top-0 before:h-px before:bg-white/30 after:pointer-events-none after:absolute after:inset-0 after:rounded-full after:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),inset_0_-1px_0_rgba(255,255,255,0.06)] sm:h-[72px] sm:px-5">
          <a href="#top" className="relative z-10 flex items-end gap-2.5" aria-label="Resilium Public">
          <span className="relative block h-10 w-[108px] shrink-0">
            <Image
              src="/logo-resilium-cele-square.png"
              alt="Resilium"
              fill
              sizes="108px"
              className="object-contain"
              priority
            />
          </span>
          <span className="pb-1.5 text-[10px] font-extrabold uppercase tracking-[0.28em] text-resilium-orange/90">
            PUBLIC
          </span>
        </a>

        <nav
          className="relative z-10 hidden items-center gap-1 rounded-full border border-white/[0.14] bg-white/[0.08] p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.18)] lg:flex"
          aria-label="Główna nawigacja"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-2.5 text-sm font-semibold text-white/[0.78] transition hover:bg-white/[0.12] hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#poptavka"
          className="relative z-10 hidden min-h-11 items-center justify-center rounded-full bg-resilium-orange px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-900/15 transition hover:bg-resilium-orangeHover focus:outline-none focus:ring-4 focus:ring-resilium-orange/30 lg:inline-flex"
        >
          Chcę zacząć
        </a>

        <button
          type="button"
          aria-label="Otwórz menu"
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/[0.18] bg-white/[0.12] shadow-[inset_0_1px_0_rgba(255,255,255,0.2)] backdrop-blur-xl transition hover:bg-white/[0.18] lg:hidden"
        >
          <span className="relative h-4 w-5">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 bg-white transition ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 bg-white transition ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[14px] h-0.5 w-5 bg-white transition ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
        </div>
      </div>

      {open ? (
        <div className="px-3 pt-3 sm:px-5 lg:hidden">
          <nav
            className="mx-auto flex max-w-[1240px] flex-col gap-1 rounded-[28px] border border-white/[0.16] bg-[#4F6B7E]/[0.82] p-3 shadow-[0_18px_70px_rgba(63,88,112,0.2),inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl"
            aria-label="Nawigacja mobilna"
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-bold text-white/[0.84] transition hover:bg-white/[0.12] hover:text-white"
              >
                {item.label}
              </a>
            ))}
            <a href="#poptavka" onClick={() => setOpen(false)} className="btn-primary mt-3 w-full">
              Chcę zacząć
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
