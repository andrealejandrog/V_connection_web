// app/about/page.tsx
'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';

// Importa los componentes de react-slick
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


export default function AboutPage() {
  const showroomImages = [
    '/images/showroom/show1.jpg', // Asegúrate de que estas rutas existan en /public/images/!
    '/images/showroom/show2.jpg',
    '/images/showroom/show3.jpg',
    '/images/showroom/show4.jpg',
    '/images/showroom/show5.jpg',
    '/images/showroom/show6.jpg',
    '/images/showroom/show7.jpg',
    '/images/showroom/show8.jpg',
    '/images/showroom/show9.jpg',
    '/images/showroom/show10.jpg', // Añadida la imagen original del showroom al carrusel
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    fade: true,
    cssEase: "linear",
  };

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleGradient}>VITREA</span><br />
              Sensación de Seguridad
            </h1>
            <Paragraph className={styles.heroSubtitle}>
              Más de una década transformando hogares en Guatemala con tecnología inteligente
            </Paragraph>
            <div className={styles.buttonGroup}>
              <Button
                href="#quienes-somos"
                className={styles.ctaButton}
                aria-label="Conoce más sobre nosotros"
              >
                Conoce más
                <span className={styles.buttonArrow}>→</span>
              </Button>
              <Button
                href="/agenda-demo"
                variant="outline"
                className={styles.secondaryButton}
              >
                Agenda Demo
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/about1.jpg"
            alt="Showroom VITREA"
            fill
            className={styles.heroImage}
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </section>

      {/* Sección Quiénes Somos (Mantenida como estaba originalmente) */}
      <section id="quienes-somos" className={`${styles.section} ${styles.sectionAnimation}`}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <SectionTitle level={2} title="¿Quiénes somos?" className={styles.sectionTitle} />
            <Paragraph className={styles.aboutDescription}>
              Somos <strong>VITREA</strong>, líderes en sistemas de automatización y seguridad en Guatemala.
              Desde 2010, hemos estado transformando hogares y negocios con tecnología inteligente
              que combina diseño elegante con funcionalidad avanzada.
            </Paragraph>
            <Paragraph className={styles.aboutDescription}>
              Nuestro showroom en Zona 10 es un espacio donde puedes experimentar personalmente
              cómo nuestra tecnología puede mejorar tu calidad de vida.
            </Paragraph>
            <Button
              href="/showroom"
              className={styles.ctaButton}
              style={{ marginTop: '2rem' }}
            >
              Visita nuestro Showroom
            </Button>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/images/zyro-image.jpg"
              alt="Equipo VITREA"
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* NUEVA Sección dedicada EXCLUSIVAMENTE al Showroom con Carrusel */}
      <section className={`${styles.sectionDark} ${styles.sectionAnimation}`}>
        <div className={styles.aboutContent}>
          {/* El Carrusel de Imágenes del Showroom */}
          <div className={`${styles.aboutImage} ${styles.carouselContainer}`}>
            <Slider {...settings} className={styles.showroomSlider}>
              {showroomImages.map((image, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.slideImageWrapper}>
                    <Image
                      src={image}
                      alt={`Imagen ${index + 1} del Showroom VITREA`}
                      fill
                      className={styles.slideImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          {/* El texto descriptivo del Showroom (en el lado opuesto del carrusel) */}
          <div className={styles.aboutText}>
            <SectionTitle level={2} title="Nuestro Showroom" className={styles.sectionTitle} />
            <Paragraph className={styles.aboutDescription}>
              Visita nuestro espacio exclusivo en Zona 10 y experimenta personalmente cómo la
              tecnología inteligente puede transformar tu hogar.
            </Paragraph>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>📍</span> Edificio Torino, Zona 10, 19-70, 17 Avenida, Ciudad de Guatemala 01010, Guatemala
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>🕒</span> Lunes a Viernes: 9:00 - 18:00
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>📅</span> Agenda tu visita con anticipación
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}