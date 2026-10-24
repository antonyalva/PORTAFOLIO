"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { portfolio } from "@/data/portfolio";

/**
 * "Sobre mí": un lienzo con miles de trazos grises que fluyen en remolinos
 * (el guiño a La noche estrellada) y una tarjeta que entra girando y crece
 * mientras se hace scroll. Sección de 220vh con bloque sticky.
 */
export function About() {
  const ref = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Lienzo de remolinos
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let w = 0, h = 0, raf = 0, t = 0, running = false;
    type P = { x: number; y: number; life: number };
    let parts: P[] = [];

    const spawn = (): P => ({ x: Math.random() * w, y: Math.random() * h, life: 60 + Math.random() * 140 });
    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      w = canvas.clientWidth; h = canvas.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.fillStyle = "#0a0a0a"; ctx.fillRect(0, 0, w, h);
      parts = Array.from({ length: Math.round(Math.min(1400, (w * h) / 900)) }, spawn);
    };
    // Campo de flujo: remolinos grandes que se desplazan lentamente
    const angle = (x: number, y: number) => {
      const s = 0.0035;
      return Math.sin(x * s + t * 0.3) * Math.cos(y * s * 1.3 - t * 0.2) * Math.PI * 2 + Math.sin((x + y) * s * 0.5 + t * 0.1) * 1.5;
    };
    const draw = () => {
      t += 0.004;
      ctx.fillStyle = "rgba(10,10,10,0.03)";
      ctx.fillRect(0, 0, w, h);
      ctx.lineWidth = 1.3;
      for (const p of parts) {
        const a = angle(p.x, p.y);
        const nx = p.x + Math.cos(a) * 2.2;
        const ny = p.y + Math.sin(a) * 2.2;
        const shade = 150 + Math.floor(105 * (0.5 + 0.5 * Math.sin(a)));
        ctx.strokeStyle = `rgba(${shade},${shade},${shade},0.7)`;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
        p.x = nx; p.y = ny; p.life -= 1;
        if (p.life <= 0 || nx < 0 || ny < 0 || nx > w || ny > h) Object.assign(p, spawn());
      }
      raf = requestAnimationFrame(draw);
    };
    const start = () => { if (!running && !reduced) { running = true; raf = requestAnimationFrame(draw); } };
    const stop = () => { running = false; cancelAnimationFrame(raf); };

    resize();
    if (reduced) { /* un solo fotograma estático */ for (let i = 0; i < 40; i++) { t += 0.004; for (const p of parts) { const a = angle(p.x, p.y); const nx = p.x + Math.cos(a) * 1.6, ny = p.y + Math.sin(a) * 1.6; ctx.strokeStyle = "rgba(160,160,160,0.3)"; ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke(); p.x = nx; p.y = ny; } } }
    const io = new IntersectionObserver((e) => (e[0].isIntersecting ? start() : stop()), { threshold: 0.05 });
    io.observe(canvas);
    window.addEventListener("resize", resize);
    return () => { stop(); io.disconnect(); window.removeEventListener("resize", resize); };
  }, []);

  // Tarjeta y texto atados al scroll
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: ref.current, start: "top top", end: "bottom bottom", scrub: 0.6 },
      });
      tl.fromTo(cardRef.current, { scale: 0.55, rotate: -8, yPercent: 40, opacity: 0 }, { scale: 1, rotate: 0, yPercent: 0, opacity: 1, duration: 0.45, ease: "power2.out" }, 0)
        .fromTo(textRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.3 }, 0.45)
        .to(cardRef.current, { yPercent: -8, duration: 0.25, ease: "none" }, 0.75);
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="sobre-mi" ref={ref} className="relative h-[220vh] bg-ink">
      <div className="sticky top-0 flex h-svh items-center justify-center overflow-hidden">
        <canvas ref={canvasRef} className="absolute inset-0 h-full w-full" aria-hidden="true" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(70%_60%_at_50%_50%,rgba(10,10,10,0)_0%,rgba(10,10,10,0.75)_100%)]" />

        <div className="relative z-10 flex w-full max-w-5xl flex-col items-center gap-8 px-6 md:flex-row md:items-center md:gap-14 md:px-10">
          <div
            ref={cardRef}
            className="flex aspect-[3/4] w-[min(66vw,300px)] flex-none items-center justify-center rounded-2xl border border-white/15 bg-gradient-to-b from-[#1b1b1b] to-[#050505] shadow-[0_40px_80px_rgba(0,0,0,0.6)]"
          >
            <h2 className="display text-center text-[clamp(2.2rem,8vw,4rem)] leading-[0.9] text-white">
              {portfolio.sobreMi.titulo.split(" ").map((w) => (
                <span key={w} className="block">
                  {w}
                </span>
              ))}
            </h2>
          </div>
          <div ref={textRef} className="max-w-xl space-y-5 text-[clamp(1rem,1.6vw,1.25rem)] leading-relaxed text-white/85">
            {portfolio.sobreMi.parrafos.map((p) => (
              <p key={p.slice(0, 20)}>{p}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
