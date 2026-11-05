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
      "Software Engineer con más de 6 años construyendo plataformas de banca y fintech. Experiencia sólida en Java 17 y Spring Boot, Angular y AWS, con enfoque en programación funcional, reactividad y arquitectura en la nube.",
      "He trabajado en créditos hipotecarios, medios de pago y banca en proyectos ágiles: backend reactivo, serverless en AWS (Lambda, API Gateway, DynamoDB, Cognito), migraciones de Java 8 a 17 y CI/CD de punta a punta.",
    ],
  },

  frase: "No hago páginas para mirar.\nHago páginas para recorrer.",

  trayectoria: [
    { anio: "2025", titulo: "Prestaclub", rol: "Software Engineer", periodo: "Ago 2025 — Actualidad", detalle: "Plataforma fintech de créditos hipotecarios con Java 17, Spring Boot 3 y Angular 17: minutas notariales automáticas, reembolsos, auditoría de usuarios, servidores en AWS y PostgreSQL." },
    { anio: "2024", titulo: "Popular Bank", rol: "Software Engineer", periodo: "Jul 2024 — Jul 2025", detalle: "Front-end con Angular 17 y backend serverless en AWS: Lambda con Python, API Gateway, DynamoDB, Kinesis, Cognito y CI/CD con CodePipeline." },
    { anio: "2023", titulo: "Diners Club", rol: "Software Engineer", periodo: "Abr 2023 — Jun 2024", detalle: "Plataforma web para comercios con Spring Boot y Angular 17, migración de Java 8 a Java 17 y sistemas legados en AS/400 con DB2." },
    { anio: "2022", titulo: "Entel", rol: "Full Stack Developer · RIT", periodo: "Feb 2022 — Mar 2023", detalle: "APIs de ventas para la plataforma web de Entel Chile con Spring Boot y Oracle PL/SQL, y front-end con React y TypeScript bajo Scrum." },
    { anio: "2021", titulo: "Zenprice", rol: "Developer · RIT", periodo: "Nov 2021 — Jun 2022", detalle: "Catálogos de productos con AWS Lambda en Python, Apache Spark en EMR y scripts de Ruby que recogen precios de múltiples operadores." },
    { anio: "2020", titulo: "RIT", rol: "Ingeniero TI Chile / Perú", periodo: "Sep 2020 — Oct 2021", detalle: "Administración de AWS (EC2, ECS, Lambda, S3, IAM), monitoreo con CloudWatch, CloudTrail y X-Ray, y servidores Linux." },
  ],

  proyectos: [
    { slug: "aiko", nombre: "Mis 15 · Aiko", tipo: "Invitación de quince", anio: "2026", img: "/img/proyectos/aiko.jpg", url: "https://15-a-os-aiko.vercel.app/", color: "#E7AA51", nota: "Sobre kraft, hexágono dorado, destellos y mariposas." },
    { slug: "leonel", nombre: "Leonel & Draisy", tipo: "Invitación de boda", anio: "2026", img: "/img/proyectos/leonel.jpg", url: "#", color: "#AE9CD2", nota: "Lavanda, fotos con borde rasgado, pétalos cayendo." },
    { slug: "flores", nombre: "Boutique de flores", tipo: "Tienda virtual", anio: "2026", img: "/img/proyectos/flores.jpg", url: "https://proyecto-floreria-alpha.vercel.app/", color: "#C9719A", nota: "Catálogo de arreglos, pedidos y pago en línea, pensado para celular." },
    { slug: "bebida", nombre: "Marca de bebida", tipo: "Marca de producto", anio: "2026", img: "/img/proyectos/bebida.jpg", url: "https://proyecto-myke.vercel.app/", color: "#F2C500", nota: "Landing de producto con catálogo y presencia lista para redes." },
    { slug: "comida", nombre: "Marca de comida", tipo: "Marca gastronómica", anio: "2026", img: "/img/proyectos/comida.jpg", url: "https://burgerlab-motion-website.vercel.app/", color: "#E0582B", nota: "Pieza de producto e identidad lista para campañas." },
    { slug: "agencia", nombre: "Agencia digital", tipo: "Web de servicios", anio: "2026", img: "/img/proyectos/agencia.jpg", url: "#", color: "#378ADD", nota: "Sitio de servicios con secciones claras y navegación desde el celular." },
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
