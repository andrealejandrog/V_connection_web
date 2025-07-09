// app/about/page.tsx
'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useLanguage } from '@/app/contexts/LanguageContext'; // Importa el hook de idioma

export default function AboutPage() {
  const { t } = useLanguage(); // Obtiene la función t para traducir

  const showroomImages = [
    '/images/showroom/show1.webp',
    '/images/showroom/show2.webp',
    '/images/showroom/show3.webp',
    '/images/showroom/show4.webp',
    '/images/showroom/show5.webp',
    '/images/showroom/show6.webp',
    '/images/showroom/show7.webp',
    '/images/showroom/show8.webp',
    '/images/showroom/show9.webp',
    '/images/showroom/show10.webp',
    '/images/showroom/show11.webp',
    '/images/showroom/show12.webp',
    '/images/showroom/show13.webp',
    '/images/showroom/show14.webp',
    '/images/showroom/show15.webp',
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
              <span className={styles.titleGradient}>{t('about', 'heroTitlePart1')}</span><br />
              {t('about', 'heroTitlePart2')}
            </h1>
            <Paragraph className={styles.heroSubtitle}>
              {t('about', 'heroSubtitle')}
            </Paragraph>
            <div className={styles.buttonGroup}>
              <Button
                href="#quienes-somos"
                className={styles.ctaButton}
                aria-label={t('about', 'ctaButton1')}
              >
                {t('about', 'ctaButton1')}
                <span className={styles.buttonArrow}>→</span>
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className={styles.secondaryButton}
              >
                {t('about', 'ctaButton2')}
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

      {/* Sección Quiénes Somos */}
      <section id="quienes-somos" className={`${styles.section} ${styles.sectionAnimation}`}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <SectionTitle level={2} title={t('about', 'whoWeAreTitle')} className={styles.sectionTitle} />
            <Paragraph className={styles.aboutDescription}>
              {/* Usamos dangerouslySetInnerHTML porque la cadena tiene una etiqueta <strong> */}
              <span dangerouslySetInnerHTML={{ __html: t('about', 'whoWeAreDescription1') }} />
            </Paragraph>
            <Paragraph className={styles.aboutDescription}>
              {t('about', 'whoWeAreDescription2')}
            </Paragraph>
            <Button
              href="/contact"
              className={styles.ctaButton}
              style={{ marginTop: '2rem' }}
            >
              {t('about', 'showroomButton')}
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

      {/* Sección Showroom */}
      <section className={`${styles.sectionDark} ${styles.sectionAnimation}`}>
        <div className={styles.aboutContent}>
          <div className={`${styles.aboutImage} ${styles.carouselContainer}`}>
            <Slider {...settings} className={styles.showroomSlider}>
              {showroomImages.map((image, index) => (
                <div key={index} className={styles.slide}>
                  <div className={styles.slideImageWrapper}>
                    <Image
                      src={image}
                      alt={`${t('about', 'showroomImageAlt')} ${index + 1}`}
                      fill
                      className={styles.slideImage}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
          <div className={styles.aboutText}>
            <SectionTitle level={2} title={t('about', 'showroomSectionTitle')} className={styles.sectionTitle} />
            <Paragraph className={styles.aboutDescription}>
              {t('about', 'showroomDescription')}
            </Paragraph>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                {t('about', 'showroomAddress')}
              </li>
              <li className={styles.featureItem}>
                {t('about', 'showroomHours')}
              </li>
              <li className={styles.featureItem}>
                {t('about', 'showroomAppointment')}
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}