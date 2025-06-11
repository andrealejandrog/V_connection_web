import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer'; // Importa el componente Footer
// import logo from 'images/logo-vc.png';  // No relative path needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-900 text-slate-100 flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-1 pt-20"> {/* Contenido principal flexible */}
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
        <Footer /> {/* Footer agregado aquí */}
      </body>
    </html>
  );
}