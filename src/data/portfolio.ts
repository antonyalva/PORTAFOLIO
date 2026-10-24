/**
 * Todo el contenido del portafolio vive aquí. Los campos marcados con
 * "EDITAR" son suposiciones mías: cámbialos por tus datos reales.
 */
export const portfolio = {
  marca: "ALVA", // EDITAR: iniciales o nombre corto que aparece en el logo
  nombre: "Antony Alva", // EDITAR
  rol: "Desarrollador web · experiencias interactivas",
  ciudad: "Lima, Perú",

  hero: {
    linea1: "EXPLORA MI",
    linea2: "PORTAFOLIO",
    nota: "Webs que se abren, suenan y se sienten vivas.",
    meta: ["Diseño web interactivo", "Animación con scroll", "Next.js · GSAP"],
  },

  sobreMi: {
    titulo: "SOBRE MÍ",
    parrafos: [
      "Odio las páginas aburridas. Las que se ven igual que todas, las que no se mueven, las que nadie recuerda.",
      "Hago webs que se recorren como una historia: sobres que se abren con el dedo, cortinas de flores, tipografía que respira y detalles que nadie pidió pero todos notan.",
      "Trabajo con Next.js, GSAP y Lenis, y entrego sitios estáticos rápidos que se ven perfectos en el celular, que es donde la gente realmente los abre.",
    ],
  },

  frase: "No hago páginas para mirar.\nHago páginas para recorrer.",

  trayectoria: [
    { anio: "2026", titulo: "Invitaciones web", detalle: "Sobres que se abren con el scroll, cortinas de flores, música, mapa y confirmación por WhatsApp." },
    { anio: "2025", titulo: "Análisis de datos e IA", detalle: "Automatizaciones, modelos y tableros para decisiones de negocio." }, // EDITAR
    { anio: "2024", titulo: "Desarrollo web", detalle: "Sitios de una página con animación de scroll, carrito y despliegue estático." },
    { anio: "2023", titulo: "Autodidacta", detalle: "Aprendiendo a construir lo que quería ver en internet." }, // EDITAR
  ],

  proyectos: [
    { slug: "nicasio", nombre: "Nicasio & Anniko", tipo: "Invitación de boda", anio: "2026", img: "/img/proyectos/nicasio.jpg", url: "https://github.com/antonyalva/Nicasio-Anniko", color: "#8B9A6B", nota: "Cortina de flores que se abre y revela la foto." },
    { slug: "milagros", nombre: "Mis 15 · Milagros", tipo: "Invitación de quince", anio: "2026", img: "/img/proyectos/milagros.jpg", url: "https://github.com/antonyalva/Carta", color: "#A3CCAD", nota: "Sobre con sello que se rompe al hacer scroll." },
    { slug: "leonides", nombre: "Leonides y Dora", tipo: "Invitación de boda", anio: "2026", img: "/img/proyectos/leonides.jpg", url: "https://github.com/antonyalva/Leonides-y-Dora-Nuestro-Matrimonio", color: "#67833E", nota: "Sobre oliva, portada con la catarata, hojas de eucalipto cayendo." },
    { slug: "aiko", nombre: "Mis 15 · Aiko", tipo: "Invitación de quince", anio: "2026", img: "/img/proyectos/aiko.jpg", url: "https://github.com/antonyalva/15-A-os-Aiko", color: "#E7AA51", nota: "Sobre kraft, hexágono dorado, destellos y mariposas." },
    { slug: "leonel", nombre: "Leonel & Draisy", tipo: "Invitación de boda", anio: "2026", img: "/img/proyectos/leonel.jpg", url: "#", color: "#AE9CD2", nota: "Lavanda, fotos con borde rasgado, pétalos cayendo." },
    { slug: "mykes", nombre: "Mykes Store", tipo: "Tienda de una página", anio: "2025", img: "/img/proyectos/mykes.jpg", url: "#", color: "#F2C500", nota: "Carrusel de sabores, lata que cae entre nubes, carrito por WhatsApp." },
  ],

  contacto: {
    titulo: "HABLEMOS",
    sub: "¿Tienes un evento, una marca o una idea rara? Escríbeme.",
    enlaces: [
      { label: "WhatsApp", url: "https://wa.me/51999999999" }, // EDITAR
      { label: "Instagram", url: "https://instagram.com/" }, // EDITAR
      { label: "TikTok", url: "https://tiktok.com/" }, // EDITAR
      { label: "GitHub", url: "https://github.com/antonyalva" },
      { label: "Email", url: "mailto:hola@ejemplo.com" }, // EDITAR
    ],
  },
};

export type Portfolio = typeof portfolio;
export type Proyecto = (typeof portfolio.proyectos)[number];
