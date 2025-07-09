// app/redes/page.tsx
'use client';

import React from 'react';
import styles from './redes.module.css';
import { useLanguage } from '@/app/contexts/LanguageContext'; // Importa el hook de idioma

export default function RedesPage() {
  const { t } = useLanguage(); // Obtiene la función t para traducir

  return (
    <div className={styles.redesContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{t('network', 'heroTitle')}</h1>
        <p className={styles.heroText}>
          {t('network', 'heroText')}
        </p>
        <a href="#soluciones" className={styles.ctaButton}>
          {t('network', 'ctaButton')}
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <h4 className={styles.featureTitle}>{t('network', 'featureTitle')}</h4>
          <p className={styles.featureSubtitle}>{t('network', 'featureSubtitle')}</p>
          <p className={styles.featureText}>
            {t('network', 'featureText1')}
            <br />
            {t('network', 'featureText2')}
            <br />
            {t('network', 'featureText3')}
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {/* Feature Card 1: Redes Cableadas */}
          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('network', 'featureCard1Title')}</h6>
            <p className={styles.cardText}>
              {t('network', 'featureCard1Text1')}
            </p>
            <p className={styles.cardText}>
              {t('network', 'featureCard1Text2')}
            </p>
          </div>

          {/* Feature Card 2: Redes Inalámbricas */}
          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('network', 'featureCard2Title')}</h6>
            <p className={styles.cardText}>
              {t('network', 'featureCard2Text1')}
            </p>
            <p className={styles.cardText}>
              {t('network', 'featureCard2Text2')}
            </p>
          </div>

          {/* Feature Card 3: Seguridad de Red */}
          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('network', 'featureCard3Title')}</h6>
            <p className={styles.cardText}>
              {t('network', 'featureCard3Text1')}
            </p>
            <p className={styles.cardText}>
              {t('network', 'featureCard3Text2')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}