"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

/**
 * Rueda hexagonal: las seis miniaturas orbitan alrededor del texto central
 * "Works '26". La rueda gira con el scroll y cada miniatura gira en sentido
 * contrario para quedarse siempre derecha.
 */
export function HexWheel() {
  const ref = useRef<HTMLElement>(null);
  const wheelRef = useRef<HTMLDivElement>(null);
  const items = portfolio.proyectos.slice(0, 6);
  const n = items.length;

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const layout = () => {
        const w = Math.min(window.innerWidth * 0.26, 150);
        const radius = Math.min(window.innerWidth * 0.36, 260);
        document.documentElement.style.setProperty("--hex-w", `${w}px`);
        gsap.set(".hex-item", {
          x: (i: number) => Math.cos((i / n) * Math.PI * 2 - Math.PI / 2) * radius,
          y: (i: number) => Math.sin((i / n) * Math.PI * 2 - Math.PI / 2) * radius,
        });
      };
      layout();
      window.addEventListener("resize", layout);

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: 0.8 },
      });
      tl.fromTo(wheelRef.current, { rotate: -30, scale: 0.8, opacity: 0 }, { rotate: 0, scale: 1, opacity: 1, duration: 0.25, ease: "power2.out" }, 0)
        .to(wheelRef.current, { rotate: 300, duration: 0.75, ease: "none" }, 0.25)
        .to(".hex-img", { rotate: -300, duration: 0.75, ease: "none" }, 0.25);

      return () => window.removeEventListener("resize", layout);
    }, ref);
    return () => ctx.revert();
  }, [n]);

  return (
    <section ref={ref} className="relative h-[240vh] bg-paper text-ink">
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <div className="absolute left-6 top-24 md:left-10">
          <p className="text-[11px] uppercase tracking-[0.25em] text-ink/60">Selección</p>
        </div>

        <div ref={wheelRef} className="relative h-[70svh] w-full">
          {items.map((p, i) => (
            <div key={p.slug} className="hex-item" style={{ background: p.color }}>
              <img className="hex-img block" src={p.img} alt={p.nombre} />
            </div>
          ))}
          {/* Hexágono guía */}
          <svg viewBox="-110 -110 220 220" className="pointer-events-none absolute left-1/2 top-1/2 h-[min(72vw,520px)] w-[min(72vw,520px)] -translate-x-1/2 -translate-y-1/2 opacity-30" aria-hidden="true">
            <polygon points="0,-100 86.6,-50 86.6,50 0,100 -86.6,50 -86.6,-50" fill="none" stroke="#0a0a0a" strokeWidth="0.8" />
          </svg>
        </div>

        <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="display block text-[clamp(1.8rem,6vw,4.5rem)]">Works</span>
          <span className="display block text-[clamp(1.8rem,6vw,4.5rem)] text-ink/40">'26</span>
        </div>
      </div>
    </section>
  );
}
