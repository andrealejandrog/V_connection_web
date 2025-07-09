// components/AudioProfesionalPage.js

"use client";
import React from 'react';
import styles from './AudioProfesional.module.css';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext'; // Importa el hook de idioma

export default function AudioProfesionalPage() {
  const { t } = useLanguage(); // Obtiene la función t para traducir

  // Array con la información de las imágenes para las tarjetas
  const cardImages = [
    {
      src: "/images/audios/adio4.jpg",
      alt: t('audio', 'featureCard1ImageAlt'),
    },
    {
      src: "/images/audios/audio1.jpg",
      alt: t('audio', 'featureCard2ImageAlt'),
    },
    {
      src: "/images/audios/audio2.jpg",
      alt: t('audio', 'featureCard3ImageAlt'),
    },
  ];

  return (
    <div className={styles.audioContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{t('audio', 'heroTitle')}</h1>
        <p className={styles.heroText}>
          {t('audio', 'heroText')}
        </p>
        <a href="#verMas" className={styles.ctaButton}>
          {t('audio', 'ctaButton')}
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
              <path d="M16,0H8A5.006,5.006,0,0,0,3,5V19a5.006,5.006,0,0,0,5,5h8a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,16,0Zm3,19a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V5A3,3,0,0,1,8,2h8a3,3,0,0,1,3,3Z"></path>
              <circle cx="12" cy="6" r="1.5"></circle>
              <path d="M12,10a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,10Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,18Z"></path>
              <circle cx="12" cy="15" r="1"></circle>
            </svg>
          </div>
          <h4 className={styles.featureTitle}>{t('audio', 'featureTitle')}</h4>
          <p className={styles.featureSubtitle}>{t('audio', 'featureSubtitle')}</p>
          <p className={styles.featureText}>
            {t('audio', 'featureText1')}
          </p>
          <p className={styles.featureText}>
            {t('audio', 'featureText2')}
          </p>
          <p className={styles.featureText}>
            {t('audio', 'featureText3')}
          </p>
          <p className={styles.featureText}>
            {t('audio', 'featureText4')}
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {/* Tarjeta 1: Integración */}
          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              <Image
                src={cardImages[0].src}
                alt={cardImages[0].alt}
                fill
                style={{ objectFit: 'cover' }}
                className={styles.image}
              />
            </div>
            <h6 className={styles.cardTitle}>{t('audio', 'featureCard1Title')}</h6>
            <p className={styles.cardText}>
              {t('audio', 'featureCard1Text')}
            </p>
          </div>

          {/* Tarjeta 2: Alta Fidelidad */}
          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              <Image
                src={cardImages[1].src}
                alt={cardImages[1].alt}
                fill
                style={{ objectFit: 'cover' }}
                className={styles.image}
              />
            </div>
            <h6 className={styles.cardTitle}>{t('audio', 'featureCard2Title')}</h6>
            <p className={styles.cardText}>
              {t('audio', 'featureCard2Text')}
            </p>
          </div>

          {/* Tarjeta 3: Comunicación constante */}
          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              <Image
                src={cardImages[2].src}
                alt={cardImages[2].alt}
                fill
                style={{ objectFit: 'cover' }}
                className={styles.image}
              />
            </div>
            <h6 className={styles.cardTitle}>{t('audio', 'featureCard3Title')}</h6>
            <p className={styles.cardText}>
              {t('audio', 'featureCard3Text')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}