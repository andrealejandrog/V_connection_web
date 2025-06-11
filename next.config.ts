// next.config.js
import type { NextConfig } from 'next';

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  output: 'export', // Necesario para Firebase Hosting estático

  images: {
    unoptimized: true, // Necesario porque Firebase Hosting no ejecuta el optimizador de Next.js
  },

  // Importante: Usa '/' para que las rutas de los assets sean absolutas desde la raíz del dominio,
  // lo cual resuelve el error de `next/font` y es compatible con Firebase Hosting.
  assetPrefix: '/',
};

export default nextConfig;