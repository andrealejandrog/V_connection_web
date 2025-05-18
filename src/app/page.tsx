"use client";

import React, { useEffect } from 'react';
import styles from './page.module.css';
import Logo from '@/components/Logo';
import SectionTitle from '@/components/SectionTitle';
import Paragraph from '@/components/Paragraph';
import ImageComponent from '@/components/ImageComponent';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import PartnerLogo from '@/components/PartnerLogo';

// Imágenes corregidas
import logoVitrea from '../../public/images/Vitrea-logo-blanco-02.png';
import heroImage from '../../public/images/white-living-room-furniture.jpg';
import controladorDomotica from '../../public/images/c419fb0ce87e9e1ae39ea83a9f66e340.jpg';
import partnerLogo1 from '../../public/images/Vitrea-logo-blanco-02.png';
import partnerLogo2 from '../../public/images/Vitrea-logo-blanco-02.png';

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
              src={heroImage}
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
          <ServiceCard
            title="IoT"
            description="Convierte tu hogar en un espacio automatizado y hecho a la medida. Controla cada espacio de manera fácil y elegante"
            imageUrl="/images/smart-home-automation-300x169.png" // Reemplaza con la imagen correcta
            imageAlt="Icono IoT"
            buttonText="Ver más"
            buttonLink="/servicios/iot"
          />
          <ServiceCard
            title="Control de acceso"
            description="Apertura de puertas por medio de huella, código, NFC, registrando cada acceso, apertura local o remota."
            imageUrl="/images/ingreso-con-huella-2-1-251x300.webp" // Reemplaza con la imagen correcta
            imageAlt="Icono Control de acceso"
            buttonText="Ver más"
            buttonLink="/servicios/control-de-accesos"
          />
          <ServiceCard
            title="Alarmas"
            description="Sistemas de Intrusión que alertaran y desorientaran a la persona que intente acceder a tu propiedad."
            imageUrl="/images/seguridad-2-300x212.jpg" // Reemplaza con la imagen correcta
            imageAlt="Icono Alarmas"
            buttonText="Ver más"
            buttonLink="/servicios/alarmas"
          />
          <ServiceCard
            title="Smart film"
            description="Manten tu privacidad y controla la luminosidad definiendo la apertura de tus cortinas de manera automatizada"
            imageUrl="/images/cortinas-automaticas-2-300x300.jpg" // Reemplaza con la imagen correcta
            imageAlt="Icono Smart film"
            buttonText="Ver más"
            buttonLink="/servicios/smartfilm"
          />
          <ServiceCard
            title="Aires acondicionados"
            description="Desarrollamos proyectos de aires acondicionados convencionales o automatizados, para que controles el ambiente de tu hogar."
            imageUrl="/images/AC-Thermostat-1-300x221.png" // Reemplaza con la imagen correcta
            imageAlt="Icono Aires acondicionados"
            buttonText="Ver más"
            buttonLink="/servicios/aire-acondicionado/"
          />
          <ServiceCard
            title="Cámaras"
            description="Soluciones en seguridad residencial para cámaras completamente inalámbricas conectadas por panel solar compacto."
            imageUrl="/images/seguridad-300x200.jpg" // Reemplaza con la imagen correcta
            imageAlt="Icono Cámaras"
            buttonText="Ver más"
            buttonLink="/servicios/camaras-de-seguridad"
          />
          <ServiceCard
            title="Iluminación"
            description="Controla la intensidad de la luz, combina distintos colores, planifica el apago de luces cuando no las estés utilizando o pídele a Alexa que lo haga por ti."
            imageUrl="/images/luces-tenues-300x200.jpg" // Reemplaza con la imagen correcta
            imageAlt="Icono Iluminación"
            buttonText="Ver más"
            buttonLink="/servicios/iluminacion/"
          />
          <ServiceCard
            title="Redes"
            description="Desarrollamos proyectos de redes para que puedas tener internet confiable y de calidad en tu hogar o negocio."
            imageUrl="/images/freepik__upload__63591 (1).png" // Reemplaza con la imagen correcta
            imageAlt="Icono Redes"
            buttonText="Ver más"
            buttonLink="https://v-connection-com-gt-1652853248-complete-2025-05-04.local/redes/"
          />
          <ServiceCard
            title="Audio profesional"
            description="Desarrollamos proyectos de audio profesional y ambiental para tu hogar, comercio o industria"
            imageUrl="/images/audio-2-300x229.jpg" // Reemplaza con la imagen correcta
            imageAlt="Icono Audio profesional"
            buttonText="Ver más"
            buttonLink="/servicios/audio"
          />
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
                Instalamos: Realizamos la instalación y configuración de tu equipo, te entregamos memoria técnica y garantía de 2 años, además de garantizarte un buen servicios post-venta.
              </li>
            </ul>
          </div>
          <div className={styles.aboutImage}>
            <ImageComponent
              src={controladorDomotica}
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
          <PartnerLogo
            imageUrl={partnerLogo1}
            alt="Partner 1"
            className={styles.partnerLogo}
          />
          <PartnerLogo
            imageUrl={partnerLogo2}
            alt="Partner 2"
            className={styles.partnerLogo}
          />
        </div>
      </section>
    </main>
  );
}