"use client";

import { portfolio } from "@/data/portfolio";

const LINKS = [
  ["Sobre mí", "#sobre-mi"],
  ["Trayectoria", "#trayectoria"],
  ["Trabajos", "#trabajos"],
  ["Contacto", "#contacto"],
];

export function Nav() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 mix-blend-difference">
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <a href="#top" className="display pointer-events-auto text-lg tracking-[0.2em] text-white">
          {portfolio.marca}
          <span className="text-lime">.</span>
        </a>
        <nav className="pointer-events-auto hidden gap-8 text-[12px] uppercase tracking-[0.2em] text-white md:flex">
          {LINKS.map(([l, h]) => (
            <a key={h} href={h} className="opacity-80 transition hover:opacity-100">
              {l}
            </a>
          ))}
        </nav>
        <a href="#contacto" className="pointer-events-auto text-[12px] uppercase tracking-[0.2em] text-white md:hidden">
          Contacto
        </a>
      </div>
    </header>
  );
}
