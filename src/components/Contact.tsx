"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

/** Cierre: "HABLEMOS" gigante que entra letra a letra y los enlaces. */
export function Contact() {
  const ref = useRef<HTMLElement>(null);
  const letters = portfolio.contacto.titulo.split("");

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.from(".c-letter", {
        yPercent: 120,
        opacity: 0,
        stagger: 0.05,
        duration: 0.9,
        ease: "power4.out",
        scrollTrigger: { trigger: ref.current, start: "top 60%" },
      });
      gsap.from(".c-link", {
        y: 20,
        opacity: 0,
        stagger: 0.07,
        duration: 0.6,
        scrollTrigger: { trigger: ref.current, start: "top 45%" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="contacto" ref={ref} className="relative flex min-h-svh flex-col justify-between bg-ink px-6 pb-8 pt-28 text-white md:px-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

      <div>
        <p className="text-[11px] uppercase tracking-[0.25em] text-white/60">Contacto</p>
        <h2 className="display mt-4 flex flex-nowrap whitespace-nowrap text-[clamp(2.8rem,11.5vw,11rem)]">
          {letters.map((l, i) => (
            <span key={i} className="inline-block overflow-hidden">
              <span className="c-letter inline-block">{l}</span>
            </span>
          ))}
        </h2>
        <p className="mt-6 max-w-md text-white/75">{portfolio.contacto.sub}</p>
      </div>

      <div className="mt-16 flex flex-wrap gap-3">
        {portfolio.contacto.enlaces.map((e, i) => (
          <a
            key={e.label}
            href={e.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`c-link btn ${i === 0 ? "btn-lime" : ""}`}
          >
            {e.label} <span aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      <footer className="mt-16 flex flex-col gap-2 border-t border-white/10 pt-6 text-[11px] uppercase tracking-[0.2em] text-white/50 md:flex-row md:items-center md:justify-between">
        <span>
          {portfolio.nombre} · {portfolio.ciudad}
        </span>
        <span>Hecho con Next.js, GSAP y demasiados detalles pequeños.</span>
        <span>© {new Date().getFullYear()}</span>
      </footer>
    </section>
  );
}
