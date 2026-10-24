"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";
import { portfolio } from "@/data/portfolio";

/**
 * Pantalla de entrada: el logo dentro de una forma orgánica cuyo contorno
 * se dibuja en bucle. A los dos segundos se abre hacia arriba y desaparece.
 */
export function Loader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const tl = gsap.timeline({
      delay: 1.6,
      onComplete: () => {
        document.body.classList.remove("is-loading");
        setDone(true);
      },
    });
    tl.to("#loader-mark", { scale: 1.15, opacity: 0, duration: 0.5, ease: "power2.in" }).to(
      "#loader",
      { yPercent: -100, duration: 0.8, ease: "power4.inOut" },
      "-=0.1",
    );
    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    <div id="loader" className="fixed inset-0 z-[80] flex items-center justify-center bg-ink">
      <div id="loader-mark" className="relative flex h-[220px] w-[260px] items-center justify-center">
        <svg viewBox="0 0 260 220" className="absolute inset-0 h-full w-full" aria-hidden="true">
          <path
            className="loader-path"
            d="M40 110 C 20 60, 70 20, 130 30 C 190 20, 250 60, 225 110 C 250 160, 190 205, 130 190 C 70 205, 15 165, 40 110 Z"
            fill="none"
            stroke="#fff"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M40 110 C 20 60, 70 20, 130 30 C 190 20, 250 60, 225 110 C 250 160, 190 205, 130 190 C 70 205, 15 165, 40 110 Z"
            fill="none"
            stroke="rgba(255,255,255,0.18)"
            strokeWidth="1"
          />
        </svg>
        <span className="display text-[44px] tracking-[0.2em] text-white">{portfolio.marca}</span>
      </div>
    </div>
  );
}
