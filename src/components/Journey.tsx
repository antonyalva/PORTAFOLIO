"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

/**
 * Trayectoria: el scroll vertical se convierte en desplazamiento horizontal.
 * Delante, las etapas en tipografía gigante; detrás, los mismos títulos en
 * contorno moviéndose a otra velocidad (parallax).
 */
export function Journey() {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const ghostRef = useRef<HTMLDivElement>(null);
  const items = portfolio.trayectoria;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const dist = () => (trackRef.current?.scrollWidth || 0) - window.innerWidth;
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: 0.7, invalidateOnRefresh: true },
      });
      tl.to(trackRef.current, { x: () => -dist(), ease: "none" }, 0).to(ghostRef.current, { x: () => -dist() * 0.45, ease: "none" }, 0);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="trayectoria" ref={ref} className="relative bg-ink" style={{ height: `${120 + items.length * 90}vh` }}>
      <div className="sticky top-0 h-svh overflow-hidden">
        {/* Capa fantasma en contorno */}
        <div ref={ghostRef} className="pointer-events-none absolute left-0 top-1/2 flex -translate-y-1/2 items-center gap-[8vw] pl-[60vw] will-change-transform">
          {items.map((it) => (
            <span key={it.anio} className="display outline whitespace-nowrap text-[clamp(6rem,22vw,20rem)]">
              {it.titulo}
            </span>
          ))}
        </div>

        <p className="absolute left-6 top-24 text-[11px] uppercase tracking-[0.25em] text-white/60 md:left-10">
          Dónde he estado
        </p>

        {/* Pista principal */}
        <div ref={trackRef} className="absolute left-0 top-0 flex h-full items-center gap-[12vw] pl-6 pr-[20vw] will-change-transform md:pl-10">
          <div className="w-[70vw] flex-none md:w-[36vw]">
            <h2 className="display text-[clamp(2.8rem,9vw,8rem)] text-white">
              Dónde
              <br />
              he estado
            </h2>
            <p className="mt-6 max-w-sm text-white/70">Mi recorrido por etapas, de la más reciente a la primera.</p>
          </div>
          {items.map((it, i) => (
            <article key={it.anio} className="w-[78vw] flex-none md:w-[44vw]">
              <span className="display block text-[clamp(3rem,9vw,8rem)] text-lime">{it.anio}</span>
              <h3 className="display mt-2 text-[clamp(1.8rem,5vw,4.2rem)] leading-[0.95] text-white">{it.titulo}</h3>
              <p className="mt-5 max-w-md text-[clamp(0.95rem,1.4vw,1.15rem)] leading-relaxed text-white/75">{it.detalle}</p>
              <span className="mt-6 block text-[11px] uppercase tracking-[0.25em] text-white/40">
                {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
