import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuración de paths (alias)
  baseUrl: ".",
  paths: {
    "@/*": ["./src/*"]
  },
  
  // Configuración de imágenes (necesaria para el error)
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

export default nextConfig;