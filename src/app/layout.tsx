import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// Importa el LanguageProvider
import { LanguageProvider } from './contexts/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// NOTA: La metadata es estática aquí. Si quisieras traducir el título/descripción
// de la metadata, necesitarías un enfoque diferente (ej. usar un hook en un Client Component
// para actualizar el <title> dinámicamente, o usar una librería SSR/SSG-compatible).
// Para 'output: export', esto es menos directo. Por ahora, mantenla estática.
export const metadata: Metadata = {
  title: "Vitrea Smart Home",
  description: "Transforma tu hogar con soluciones inteligentes de última generación",
  keywords: ["domótica", "smart home", "automatización", "hogar inteligente"],
  openGraph: {
    images: '/og-image.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Define un idioma predeterminado para el atributo lang del HTML.
    // El contenido dentro del body cambiará dinámicamente con JS.
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-100 flex flex-col min-h-screen`}>
        {/* Envuelve toda la aplicación con el LanguageProvider */}
        <LanguageProvider>
          {/* El Header (Navbar) debe ser un Client Component para usar el toggle */}
          <Header />
          <main className="flex-1 pt-20"> {/* Contenido principal flexible */}
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {children} {/* Aquí se renderizan las páginas */}
            </div>
          </main>
          <Footer /> {/* Footer agregado aquí */}
        </LanguageProvider>
      </body>
    </html>
  );
}