"use client";

import { useEffect, useRef } from "react";

/**
 * Punto que sigue al cursor con un poco de retraso y crece sobre enlaces.
 * Usa mix-blend-mode: difference para verse sobre fondo claro y oscuro.
 * En pantallas táctiles se oculta por CSS.
 */
export function Cursor() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let x = window.innerWidth / 2;
    let y = window.innerHeight / 2;
    let tx = x;
    let ty = y;
    let raf = 0;

    const move = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      const t = e.target as HTMLElement | null;
      el.classList.toggle("is-link", !!t?.closest("a, button, [data-cursor]"));
    };
    const tick = () => {
      x += (tx - x) * 0.18;
      y += (ty - y) * 0.18;
      el.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      raf = requestAnimationFrame(tick);
    };
    window.addEventListener("mousemove", move);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", move);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor" aria-hidden="true" />;
}
