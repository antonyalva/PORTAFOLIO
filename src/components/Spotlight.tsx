"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

/**
 * Una figura en la oscuridad bajo un haz de luz que se enciende con el
 * scroll, y la frase del portafolio apareciendo línea a línea.
 */
export function Spotlight() {
  const ref = useRef<HTMLElement>(null);
  const beamRef = useRef<HTMLDivElement>(null);
  const figRef = useRef<HTMLDivElement>(null);
  const lines = portfolio.frase.split("\n");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: 0.6 },
      });
      tl.fromTo(beamRef.current, { opacity: 0, scaleY: 0.2 }, { opacity: 1, scaleY: 1, duration: 0.4, ease: "power2.out" }, 0)
        .fromTo(figRef.current, { opacity: 0, y: 60 }, { opacity: 1, y: 0, duration: 0.35 }, 0.15)
        .fromTo(".spot-line", { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, stagger: 0.12, duration: 0.3 }, 0.45)
        .to(beamRef.current, { opacity: 0.35, duration: 0.2 }, 0.85);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="relative h-[200vh] bg-black">
      <div className="sticky top-0 flex h-svh flex-col items-center justify-end overflow-hidden pb-[12svh]">
        {/* Haz de luz */}
        <div
          ref={beamRef}
          className="pointer-events-none absolute left-1/2 top-0 h-[85%] w-[min(90vw,620px)] -translate-x-1/2 origin-top"
          style={{
            background: "linear-gradient(180deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.35) 35%, rgba(255,255,255,0) 100%)",
            clipPath: "polygon(46% 0, 54% 0, 100% 100%, 0 100%)",
            filter: "blur(6px)",
          }}
        />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[85%] w-[min(90vw,620px)] -translate-x-1/2 bg-[radial-gradient(50%_40%_at_50%_100%,rgba(255,255,255,0.18),rgba(255,255,255,0))]" />

        {/* Figura */}
        <div ref={figRef} className="relative mb-6">
          <svg viewBox="0 0 120 160" className="h-[22svh] w-auto" aria-hidden="true">
            <path
              fill="#fff"
              d="M60 6c-10 0-18 9-18 21 0 9 4 16 9 20-8 4-14 9-20 19-6 10-9 24-9 44v10c0 4 3 7 7 7h8l5 27h36l5-27h8c4 0 7-3 7-7v-10c0-20-3-34-9-44-6-10-12-15-20-19 5-4 9-11 9-20C78 15 70 6 60 6z"
            />
          </svg>
          <div className="absolute -bottom-3 left-1/2 h-3 w-[140%] -translate-x-1/2 rounded-full bg-white/40 blur-md" />
        </div>

        {/* Frase */}
        <div className="relative z-10 px-6 text-center">
          {lines.map((l) => (
            <div key={l} className="overflow-hidden">
              <p className="spot-line display text-[clamp(1.6rem,5.2vw,4rem)] text-white">{l}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
