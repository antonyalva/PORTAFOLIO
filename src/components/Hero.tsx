"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

/**
 * Portada: titular gigante que se desvanece hacia abajo y una silueta a
 * contraluz detrás. Al hacer scroll el texto sube más rápido que la silueta
 * (parallax) y la luz de fondo se apaga.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const figRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".hero-line", { yPercent: 110, opacity: 0, stagger: 0.12, duration: 1.1, ease: "power4.out", delay: 2.4 });
      gsap.from(figRef.current, { scale: 1.08, opacity: 0, duration: 1.6, ease: "power2.out", delay: 2.3 });
      gsap.from(".hero-meta", { opacity: 0, y: 10, stagger: 0.08, duration: 0.8, delay: 3 });

      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom top", scrub: true },
      });
      tl.to(titleRef.current, { yPercent: -40, ease: "none" }, 0)
        .to(figRef.current, { yPercent: 12, scale: 1.06, ease: "none" }, 0)
        .to(glowRef.current, { opacity: 0.1, ease: "none" }, 0);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="top" ref={ref} className="relative flex h-svh flex-col justify-between overflow-hidden bg-paper px-6 pb-8 pt-24 text-ink md:px-10">
      {/* Luz de fondo */}
      <div
        ref={glowRef}
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(60% 55% at 50% 40%, #ffffff 0%, rgba(255,255,255,0) 70%)" }}
      />

      {/* Silueta a contraluz */}
      <div ref={figRef} className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
        <svg viewBox="0 0 400 420" className="h-[62svh] w-auto" aria-hidden="true">
          <defs>
            <linearGradient id="fig" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#0a0a0a" />
              <stop offset="1" stopColor="#0a0a0a" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <path
            fill="url(#fig)"
            d="M200 20c-46 0-80 38-80 92 0 36 14 66 36 84-20 8-40 18-62 32-50 32-74 92-78 192h368c-4-100-28-160-78-192-22-14-42-24-62-32 22-18 36-48 36-84 0-54-34-92-80-92z"
          />
        </svg>
      </div>

      {/* Titular */}
      <div ref={titleRef} className="relative z-10 mt-[6svh] text-center">
        <div className="overflow-hidden">
          <h1 className="hero-line display text-[clamp(2.6rem,11.5vw,10rem)]">{portfolio.hero.linea1}</h1>
        </div>
        <div className="overflow-hidden">
          <h1 className="hero-line display fade-bottom-dark text-[clamp(2.6rem,11.5vw,10rem)]">{portfolio.hero.linea2}</h1>
        </div>
      </div>

      {/* Pie con metadatos */}
      <div className="relative z-10 flex items-end justify-between text-[11px] uppercase tracking-[0.2em] text-ink/70">
        <div className="hero-meta flex flex-col gap-1">
          {portfolio.hero.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </div>
        <div className="hero-meta hidden text-center md:block">
          <p className="max-w-[260px] normal-case tracking-normal text-ink/80">{portfolio.hero.nota}</p>
        </div>
        <div className="hero-meta flex flex-col items-end gap-1">
          <span>{portfolio.ciudad}</span>
          <span className="animate-pulse">Scroll ↓</span>
        </div>
      </div>
    </section>
  );
}
