"use client";

import { useRef, useState } from "react";
import { portfolio, type Proyecto } from "@/data/portfolio";
import { Reveal } from "@/components/Reveal";

/**
 * Lista de proyectos. En escritorio, al pasar el cursor por una fila aparece
 * la miniatura flotando y siguiendo al ratón; en móvil se muestra fija.
 */
export function ProjectList() {
  const [active, setActive] = useState<Proyecto | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  const move = (e: React.MouseEvent) => {
    const el = previewRef.current;
    if (!el) return;
    el.style.left = `${e.clientX + 40}px`;
    el.style.top = `${e.clientY}px`;
  };

  return (
    <section className="relative bg-paper px-6 pb-28 pt-10 text-ink md:px-10" onMouseMove={move}>
      <Reveal className="mb-10 flex items-end justify-between">
        <h2 className="display text-[clamp(2rem,6vw,5rem)]">Proyectos</h2>
        <span className="text-[11px] uppercase tracking-[0.25em] text-ink/60">{portfolio.proyectos.length} en total</span>
      </Reveal>

      <ul>
        {portfolio.proyectos.map((p, i) => (
          <Reveal key={p.slug} as="li" delay={i * 50}>
            <a
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="row group"
              onMouseEnter={() => setActive(p)}
              onMouseLeave={() => setActive(null)}
            >
              <div>
                <span className="display block text-[clamp(1.6rem,4.5vw,3.4rem)] leading-none">{p.nombre}</span>
                <span className="mt-2 block text-sm text-ink/60">{p.nota}</span>
                <img src={p.img} alt="" className="mt-4 block w-40 rounded-md md:hidden" aria-hidden="true" />
              </div>
              <div className="text-right text-[11px] uppercase tracking-[0.2em] text-ink/60">
                <span className="block">{p.tipo}</span>
                <span className="block">{p.anio}</span>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>

      <div ref={previewRef} className={`preview hidden md:block ${active ? "is-on" : ""}`} aria-hidden="true">
        {active && <img src={active.img} alt="" />}
      </div>
    </section>
  );
}
