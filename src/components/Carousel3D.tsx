"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

/**
 * Carrusel 3D: las tarjetas de los proyectos están colocadas en un anillo
 * (cada una girada y empujada hacia afuera con translateZ, por CSS) y el
 * anillo entero gira con el scroll. Fondo claro para contrastar.
 */
export function Carousel3D() {
  const ref = useRef<HTMLElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);
  const items = portfolio.proyectos;
  const n = items.length;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = ref.current!;
    const layout = () => {
      const cardW = Math.min(window.innerWidth * 0.52, 300);
      // radio para que las tarjetas queden una al lado de otra con un hueco
      const radius = (cardW * 1.25) / (2 * Math.tan(Math.PI / n));
      el.style.setProperty("--card-w", `${cardW}px`);
      el.style.setProperty("--radius", `${radius}px`);
      el.style.setProperty("--step", `${360 / n}deg`);
    };
    layout();
    window.addEventListener("resize", layout);

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: "top top", end: "bottom bottom", scrub: 0.8 },
      });
      tl.fromTo(ringRef.current, { rotateY: 20, rotateX: 8 }, { rotateY: -340, rotateX: -4, ease: "none" }, 0).fromTo(
        labelRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.1 },
        0.05,
      );
    }, ref);
    return () => {
      window.removeEventListener("resize", layout);
      ctx.revert();
    };
  }, [n]);

  return (
    <section id="trabajos" ref={ref} className="relative h-[280vh] bg-paper text-ink">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-center overflow-hidden">
        <div className="absolute left-6 top-24 md:left-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-ink/60">Trabajos seleccionados</p>
          <h2 className="display mt-2 text-[clamp(2rem,6vw,5rem)]">Landing pages</h2>
        </div>

        <div className="relative h-[60svh] w-full" style={{ perspective: "1400px" }}>
          <div ref={ringRef} className="ring3d absolute inset-0">
            {items.map((p, i) => (
              <a
                key={p.slug}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
                className="ring-card"
                style={{ "--i": i } as React.CSSProperties}
              >
                <img src={p.img} alt={p.nombre} />
                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-4 pb-4 pt-10 text-[12px] uppercase tracking-[0.2em] text-white">
                  {p.nombre}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div ref={labelRef} className="absolute bottom-10 left-6 right-6 flex items-end justify-between text-[11px] uppercase tracking-[0.25em] text-ink/60 md:left-10 md:right-10">
          <span>{n} proyectos · 2025–2026</span>
          <span>Desliza para girar</span>
        </div>
      </div>
    </section>
  );
}
