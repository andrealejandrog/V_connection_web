/** @type {import('next').NextConfig} */
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static HTML export
  distDir: 'out',   // Set the output directory for the export

  // Configuración de paths (alias)
  baseUrl: ".",
  paths: {
    "@/*": ["./src/*"]
  },

  // Configuración de imágenes
  images: {
    domains: [
      'v-connection.local',
      'v-connection-com-gt-1652853248-complete-2025-05-04.local',
      'cdn.shopify.com',
      'i.ytimg.com' // Para videos de YouTube
    ],
    // Opcional: configuración de tamaños de imagen
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Otras configuraciones que necesites...
};

module.exports = nextConfig;