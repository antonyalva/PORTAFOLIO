# Portafolio — webs que se recorren

Portafolio personal de una sola página, inspirado en el reel de echo__builds
("I hate boring portfolio websites") y construido con el mismo stack que las
invitaciones: Next.js 15 con export estático, GSAP ScrollTrigger con bloques
`sticky`, Lenis y Tailwind.

## Arrancar

```bash
npm install
npm run dev
```

Abre http://localhost:3100.

## Publicar

```bash
npm run build
```

Genera la carpeta `out/` lista para Netlify, Vercel o GitHub Pages. Para
probar en local lo que se publicará: `npm start`.

## Secciones y efectos

| Sección | Archivo | Efecto |
| --- | --- | --- |
| Intro | `Loader.tsx` | Logo dentro de una forma orgánica con el contorno dibujándose; se abre hacia arriba. |
| Portada | `Hero.tsx` | "Explora mi portafolio" gigante con degradado, silueta a contraluz, parallax al bajar. |
| Sobre mí | `About.tsx` | Lienzo con miles de trazos grises en remolino (guiño a Van Gogh) y tarjeta que entra girando. |
| Frase | `Spotlight.tsx` | Figura bajo un haz de luz que se enciende con el scroll; frase línea a línea. |
| Trayectoria | `Journey.tsx` | Scroll vertical convertido en horizontal; títulos en contorno detrás con parallax. |
| Landing pages | `Carousel3D.tsx` | Anillo 3D de tarjetas que gira con el scroll. |
| Selección | `HexWheel.tsx` | Rueda hexagonal de miniaturas alrededor de "Works '26". |
| Proyectos | `ProjectList.tsx` | Lista con miniatura flotante que sigue al cursor. |
| Contacto | `Contact.tsx` | "HABLEMOS" letra a letra y botones. |
| Global | `Cursor.tsx`, `globals.css` | Cursor que crece sobre enlaces, grano de película. |

## Qué editar primero

Todo el contenido está en `src/data/portfolio.ts`. Los campos marcados con
`EDITAR` son suposiciones (nombre, trayectoria, enlaces de contacto): cámbialos
por los reales. Las miniaturas están en `public/img/proyectos/`; reemplaza o
añade imágenes de 720x960 y actualiza la lista `proyectos`.

## Notas

- La silueta de la portada es un SVG genérico. Si tienes una foto tuya a
  contraluz con fondo claro, reemplaza el `<svg>` de `Hero.tsx` por un `<img>`
  con la foto recortada (PNG con transparencia) y quedará igual que el reel.
- El lienzo de "Sobre mí" se pausa cuando no está en pantalla y se desactiva
  con `prefers-reduced-motion`.
