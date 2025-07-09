"use client";
import React from 'react';
import styles from './SmartFilm.module.css';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext'; // Importa el hook de idioma

export default function SmartFilmPage() {
  const { t } = useLanguage(); // Obtiene la función t para traducir

  // Array con la información de las imágenes para las tarjetas
  const cardImages = [
    {
      src: "https://v-connection.local/wp-content/uploads/elementor/thumbs/f1856248c7cfd15d80db4a3bb3052989-pve12bb147muw4o9o392p3fe5lxc73nj6eskk7ndvc.jpg",
      alt: t('curtains', 'image1Alt'),
    },
    {
      src: "/images/8-16sq-m-Privacy-smart-window-film-PDLC-Smart-window-foil-for-home-office-decals.jpg_Q90.jpg_-300x300.webp",
      alt: t('curtains', 'image2Alt'),
    },
    {
      src: "https://v-connection.local/wp-content/uploads/elementor/thumbs/8-16sq-m-Privacy-smart-window-film-PDLC-Smart-window-foil-for-home-office-decals.jpg_Q90.jpg_-pve12bb147muw4o9o392p3fe5lxc73nj6eskk7ndvc.webp",
      alt: t('curtains', 'image3Alt'),
    },
  ];

  return (
    <div className={styles.smartFilmContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{t('curtains', 'heroTitle')}</h1>
        <p className={styles.heroText}>
          {t('curtains', 'heroText')}
        </p>
        <a href="#verMas" className={styles.ctaButton}>
          {t('curtains', 'ctaButton')}
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
              <path d="M9,14h6a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"></path>
              <path d="M19,0H5A5.006,5.006,0,0,0,0,5V6A3,3,0,0,0,1,8.234V19a5.006,5.006,0,0,0,5,5H18a5.006,5.006,0,0,0,5-5V8.234A3,3,0,0,0,24,6V5A5.006,5.006,0,0,0,19,0ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V6a1,1,0,0,1-1,1H3A1,1,0,0,1,2,6ZM21,19a3,3,0,0,1-3,3H6a3,3,0,0,1-3-3V9H21Z"></path>
            </svg>
          </div>
          <h4 className={styles.featureTitle}>{t('curtains', 'featureTitle')}</h4>
          <p className={styles.featureSubtitle}>{t('curtains', 'featureSubtitle')}</p>
          <p className={styles.featureText}>
            {t('curtains', 'featureText1')}
          </p>
          <p className={styles.featureText}>
            {t('curtains', 'featureText2')}
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
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
            <h6 className={styles.cardTitle}>{t('curtains', 'featureCard1Title')}</h6>
            <p className={styles.cardText}>
              {t('curtains', 'featureCard1Text')}
            </p>
          </div>

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
            <h6 className={styles.cardTitle}>{t('curtains', 'featureCard2Title')}</h6>
            <p className={styles.cardText}>
              {t('curtains', 'featureCard2Text1')}
            </p>
            <p className={styles.cardText}>
              {t('curtains', 'featureCard2Text2')}
            </p>
            <p className={styles.cardText}>
              {t('curtains', 'featureCard2Text3')}
            </p>
          </div>

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
            <h6 className={styles.cardTitle}>{t('curtains', 'featureCard3Title')}</h6>
            <p className={styles.cardText}>
              {t('curtains', 'featureCard3Text1')}
            </p>
            <p className={styles.cardText}>
              {t('curtains', 'featureCard3Text2')}
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className={styles.demoSection}>
          <h4 className={styles.demoTitle}>{t('curtains', 'demoTitle')}</h4>
          <p className={styles.demoSubtitle}>{t('curtains', 'demoSubtitle')}</p>
          <div className={styles.videoContainer}>
            <video controls className={styles.video}>
              <source
                src="/images/WhatsApp-Video-2022-09-27-at-8.05.20-PM.mp4"
                type="video/mp4"
              />
              {t('curtains', 'videoNotSupported')}
            </video>
          </div>
        </div>

        {/* New Section for Provider/More Info */}
        <section className={styles.providerSection}>
          <h5 className={styles.providerTitle}>{t('curtains', 'providerTitle')}</h5>
          <p className={styles.providerText}>
            {t('curtains', 'providerText')}
          </p>
          <a
            href="https://www.gauzy.com/pdlc-smart-film/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.providerLink}
          >
            {t('curtains', 'providerLink')}
          </a>
        </section>
      </section>
    </div>
  );
}