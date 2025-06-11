"use client";

import React, { useEffect } from 'react';
import styles from './page.module.css';
// import Logo from '@/components/Logo'; // Asegúrate de que si lo usas, esté descomentado
import SectionTitle from '@/components/SectionTitle';
import Paragraph from '@/components/Paragraph';
import ImageComponent from '@/components/ImageComponent'; // Assuming this wraps next/image or <img>
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import PartnerLogo from '@/components/PartnerLogo';

// --- IMAGES: Use direct paths relative to the 'public' directory for static export ---
// If your image is in `public/images/white-living-room-furniture.jpg`,
// the path you use is `/images/white-living-room-furniture.jpg`.
const heroImagePath = '/images/white-living-room-furniture.jpg';
const controladorDomoticaPath = '/images/c419fb0ce87e9e1ae39ea83a9f66e340.jpg';

// Paths for partner logos - ENSURE THESE MATCH YOUR ACTUAL FILENAMES EXACTLY (case-sensitive)
const partnerLogoPaths = {
  partner1: '/images/partners/partnet5.png',
  partner2: '/images/partners/partner2.png',
  partner3: '/images/partners/partner3.png',
  partner4: '/images/partners/partner4.png',
  partner5: '/images/partners/partner1.png', // Corrected typo here (was 'partnet5.png')
  partner6: '/images/partners/partner8.png',
  partner7: '/images/partners/partner9.png',
  partner8: '/images/partners/partner10.png',
  partner9: '/images/partners/partner11.png',
  partner10: '/images/partners/partner6.png',
  partner11: '/images/partners/partner7.png',
  partner12: '/images/partners/partner12.png',
  partner13: '/images/partners/partner13.png',
  partner14: '/images/partners/partner14.png',
  partner15: '/images/partners/partner15.png',
  partner16: '/images/partners/partner16.png',
  partner17: '/images/partners/partner17.png',
  partner18: '/images/partners/partner18.png',
  partner19: '/images/partners/partner19.png',
  partner20: '/images/partners/partner20.png',
  partner21: '/images/partners/partner21.png',
  partner22: '/images/partners/partner22.jpg',
};

// --- Datos centralizados para las tarjetas de servicio ---
const servicesData = [
  {
    title: "IoT",
    description: "VITREA: Nuestra marca hogar para automatizar tu vida. Confort, lujo y seguridad a tu medida. Control remoto, por voz, reconocimiento facial o un toque.",
    imageUrl: "/images/smart-home-automation-300x169.png",
    imageAlt: "Icono IoT",
    buttonText: "Ver más",
    buttonLink: "/servicios/iot",
  },
  {
    title: "Control de acceso",
    description: "Sistemas para la apertura de puerta por medio de huella, código, NFC, registrando cada acceso, apertura local o remota.",
    imageUrl: "/images/ingreso-con-huella-2-1-251x300.webp",
    imageAlt: "Icono Control de acceso",
    buttonText: "Ver más",
    buttonLink: "/servicios/control-de-accesos",
  },
  {
    title: "Alarmas",
    description: "Sistemas de Intrusión que alertaran y desorientaran a la persona que intente acceder a tu propiedad.",
    imageUrl: "/images/seguridad-2-300x212.jpg",
    imageAlt: "Icono Alarmas",
    buttonText: "Ver más",
    buttonLink: "/servicios/alarmas",
  },
  {
    title: "Smart film",
    description: "Somos representantes de HoHofilm: La película protectora para ventanas que te da control. Reduce el 94% de UV, hasta 96% de transparencia y 84% de ruido. Con tecnología de cambio de estado para privacidad y confort",
    imageUrl: "/images/cortinas-automaticas-2-300x300.jpg",
    imageAlt: "Icono Smart film",
    buttonText: "Ver más",
    buttonLink: "/servicios/smartfilm",
  },
  {
    title: "Aires acondicionados",
    description: "Desarrollamos proyectos de aires de confort, precision , tipo paquete , tipo mochila, split, entre otros, garantizamos la climatización de tu data center o bien del ambiente que quieras tener confort y calidad de aire , tradicional o automatizado.",
    imageUrl: "/images/AC-Thermostat-1-300x221.png",
    imageAlt: "Icono Aires acondicionados",
    buttonText: "Ver más",
    buttonLink: "/servicios/aire-acondicionado/",
  },
  {
    title: "Cámaras",
    description: "Eufy security marca que representamos para soluciones inalámbricas con opción de panel solar , baterías internas y conectividad wifi o bien con chip 4g, gestión local y/o remota de alta resolución hasta 4k de resolución.",
    imageUrl: "/images/seguridad-300x200.jpg",
    imageAlt: "Icono Cámaras",
    buttonText: "Ver más",
    buttonLink: "/servicios/camaras-de-seguridad",
  },
  {
    title: "Iluminación",
    description: "Controla la intensidad de la luz, combina distintos colores, planifica el apagado de luces cuando no las estés utilizando o pídele a Alexa que lo haga por ti.",
    imageUrl: "/images/luces-tenues-300x200.jpg",
    imageAlt: "Icono Iluminación",
    buttonText: "Ver más",
    buttonLink: "/servicios/iluminacion/",
  },
  {
    title: "Redes",
    description: "Desarrollamos proyectos de redes para que puedas tener internet confiable y de calidad en tu hogar o negocio.",
    imageUrl: "/images/freepik__upload__63591 (1).png",
    imageAlt: "Icono Redes",
    buttonText: "Ver más",
    buttonLink: "/servicios/redes",
  },
  {
    title: "Audio profesional",
    description: "Sistemas de audio diseñados para entornos donde se busca una alta calidad de sonido, creamos cines en casa, separamos ambientes para escuchar musica en tu hogar, oficina y/o comercio, trabajamos con diferentes marcas lideres en el mercado.",
    imageUrl: "/images/audio-2-300x229.jpg",
    imageAlt: "Icono Audio profesional",
    buttonText: "Ver más",
    buttonLink: "/servicios/audio",
  },
];

// --- Datos centralizados para los logos de partners ---
const partnersData = [
  { imageUrl: partnerLogoPaths.partner1, alt: "Logo Partner 1" },
  { imageUrl: partnerLogoPaths.partner2, alt: "Logo Partner 2" },
  { imageUrl: partnerLogoPaths.partner3, alt: "Logo Partner 3" },
  { imageUrl: partnerLogoPaths.partner4, alt: "Logo Partner 4" },
  { imageUrl: partnerLogoPaths.partner5, alt: "Logo Partner 5" },
  { imageUrl: partnerLogoPaths.partner6, alt: "Logo Partner 6" },
  { imageUrl: partnerLogoPaths.partner7, alt: "Logo Partner 7" },
  { imageUrl: partnerLogoPaths.partner8, alt: "Logo Partner 8" },
  { imageUrl: partnerLogoPaths.partner9, alt: "Logo Partner 9" },
  { imageUrl: partnerLogoPaths.partner10, alt: "Logo Partner 10" },
  { imageUrl: partnerLogoPaths.partner11, alt: "Logo Partner 11" },
  { imageUrl: partnerLogoPaths.partner12, alt: "Logo Partner 12" },
  { imageUrl: partnerLogoPaths.partner13, alt: "Logo Partner 13" },
  { imageUrl: partnerLogoPaths.partner14, alt: "Logo Partner 14" },
  { imageUrl: partnerLogoPaths.partner15, alt: "Logo Partner 15" },
  { imageUrl: partnerLogoPaths.partner16, alt: "Logo Partner 16" },
  { imageUrl: partnerLogoPaths.partner17, alt: "Logo Partner 17" },
  { imageUrl: partnerLogoPaths.partner18, alt: "Logo Partner 18" },
  { imageUrl: partnerLogoPaths.partner19, alt: "Logo Partner 19" },
  { imageUrl: partnerLogoPaths.partner20, alt: "Logo Partner 20" },
  { imageUrl: partnerLogoPaths.partner21, alt: "Logo Partner 21" },
  { imageUrl: partnerLogoPaths.partner22, alt: "Logo Partner 22" },
];

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle(styles['in-view'], entry.isIntersecting);
      });
    }, { threshold: 0.1 });

    const sections = document.querySelectorAll(`.${styles.sectionAnimation}`);
    sections.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <main className={styles.main}>
      <header className={`${styles.hero} ${styles.sectionAnimation}`}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleGradient}>Transforma</span> tu Hogar
              <br />
              <span className={styles.titleHighlight}>en Inteligente</span>
            </h1>
            <Paragraph className={styles.heroSubtitle}>
              Controla tu casa desde cualquier lugar con tecnología de última generación
            </Paragraph>
            <div className={styles.buttonGroup}>
              <Button
                href="#servicios"
                className={styles.ctaButton}
                aria-label="Explora nuestros servicios"
              >
                Descubre cómo
                <span className={styles.buttonArrow}>→</span>
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className={styles.secondaryButton}
              >
                Agenda demostración
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageContainer}>
            <ImageComponent
              src={heroImagePath} // NOW A STRING PATH
              alt="Sistema de automatización inteligente"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.imageOverlay}></div>
        </div>
      </header>

      <section id="servicios" className={`${styles.services} ${styles.sectionAnimation}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Nuestros servicios</span>
          <SectionTitle
            title="Soluciones inteligentes para cada espacio"
            level={2}
            className={styles.sectionTitle}
          />
        </div>
        <div className={styles.servicesGrid}>
          {/* --- Aquí usamos el map para renderizar las ServiceCard --- */}
          {servicesData.map((service) => (
            <ServiceCard
              key={service.title} // Siempre usa una key única cuando uses map
              {...service} // Pasa todas las propiedades del objeto 'service' al componente ServiceCard
            />
          ))}
        </div>
      </section>

      <section className={`${styles.about} ${styles.sectionAnimation}`}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <SectionTitle
              title="¿Cómo trabajamos?"
              level={2}
              className={styles.sectionTitle}
            />
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>📐</span>
                Diseñamos: Creamos tus proyectos en base a tus gustos y necesidades integrando un ambiente elegante con un ambiente fresco y tecnológico.
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>💡</span>
                Asesoramos: Te brindamos asesoría técnica para poder tomar la mejor elección y cumplir cada una de tus necesidades durante el desarrollo de la obra.
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>🛠️</span>
                Instalamos: Realizamos la instalación y configuración de tu equipo, te entregamos memoria técnica y garantía de 2 años, además de garantizarte un buen servicio post-venta.
              </li>
            </ul>
          </div>
          <div className={styles.aboutImage}>
            <ImageComponent
              src={controladorDomoticaPath} // NOW A STRING PATH
              alt="Sistema de control inteligente"
              fill
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>

      <section className={`${styles.partners} ${styles.sectionAnimation}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Nuestros aliados</span>
          <SectionTitle
            title="Trabajamos con las mejores marcas"
            level={2}
            className={styles.sectionTitle}
          />
        </div>
        <div className={styles.partnersGrid}>
          {/* Aquí mapeamos el array de partners para mostrar los logos */}
          {partnersData.map((partner, index) => (
            <PartnerLogo
              key={index} // Usa el index como key si no hay un id único para los partners
              imageUrl={partner.imageUrl}
              alt={partner.alt}
              className={styles.partnerLogo}
            />
          ))}
        </div>
      </section>
    </main>
  );
}