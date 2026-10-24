/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Export estático: `npm run build` genera la carpeta `out/` lista para
  // subir a Netlify, Vercel, GitHub Pages o cualquier hosting de archivos.
  output: "export",
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
