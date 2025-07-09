"use client";
import React from 'react';
import styles from './Iluminacion.module.css';
import { useLanguage } from '@/app/contexts/LanguageContext';

export default function IluminacionPage() {
  const { t } = useLanguage();

  return (
    <div className={styles.iluminacionContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{t('lighting', 'heroTitle')}</h1>
        <p className={styles.heroText}>
          {t('lighting', 'heroText')}
        </p>
        <a href="#verMas" className={styles.ctaButton}>
          {t('lighting', 'ctaButton')}
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <h4 className={styles.featureTitle}>{t('lighting', 'featureTitle')}</h4>
          <p className={styles.featureSubtitle}>{t('lighting', 'featureSubtitle')}</p>
          <p className={styles.featureText}>
            {t('lighting', 'featureText1')}
            <br />
            {t('lighting', 'featureText2')}
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('lighting', 'featureCard1Title')}</h6>
            <p className={styles.cardText}>
              {t('lighting', 'featureCard1Text1')}
            </p>
            <p className={styles.cardText}>
              {t('lighting', 'featureCard1Text2')}
            </p>
          </div>

          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('lighting', 'featureCard2Title')}</h6>
            <p className={styles.cardText}>
              {t('lighting', 'featureCard2Text')}
            </p>
          </div>

          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('lighting', 'featureCard3Title')}</h6>
            <p className={styles.cardText}>
              {t('lighting', 'featureCard3Text')}
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className={styles.demoSection}>
          <h4 className={styles.demoTitle}>{t('lighting', 'demoTitle')}</h4>
          <p className={styles.demoSubtitle}>{t('lighting', 'demoSubtitle')}</p>
          <div className={styles.videoContainer}>
            <iframe 
              src="https://www.youtube.com/embed/ND9BCut4NE4" 
              title={t('lighting', 'demoTitle')}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}