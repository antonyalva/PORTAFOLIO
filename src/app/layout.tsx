import type { Metadata, Viewport } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Cursor } from "@/components/Cursor";
import { portfolio } from "@/data/portfolio";

const display = Archivo_Black({ weight: "400", subsets: ["latin"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  title: `${portfolio.nombre} — Portafolio`,
  description: `${portfolio.rol}. ${portfolio.hero.nota}`,
  openGraph: {
    title: `${portfolio.nombre} — Portafolio`,
    description: portfolio.hero.nota,
    images: ["/img/proyectos/nicasio.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0a0a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${display.variable} ${body.variable}`}>
      <body className="is-loading font-body antialiased">
        <SmoothScroll>{children}</SmoothScroll>
        <div className="grain" aria-hidden="true" />
        <Cursor />
      </body>
    </html>
  );
}
