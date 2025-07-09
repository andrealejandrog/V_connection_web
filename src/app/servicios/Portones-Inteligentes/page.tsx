// components/AlarmasPage.js

"use client";
import React, { useState } from 'react'; 
import styles from './Alarmas.module.css';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext'; // Importa el hook de idioma

export default function AlarmasPage() {
  const { t } = useLanguage(); // Obtiene la función t para traducir

  // Estado para controlar la visibilidad del modal y la imagen seleccionada
  const [showModal, setShowModal] = useState(false);
  const [selectedImageSrc, setSelectedImageSrc] = useState('');
  const [selectedImageAlt, setSelectedImageAlt] = useState('');

  // Función para abrir el modal
  const openModal = (src: string, alt: string) => {
    setSelectedImageSrc(src);
    setSelectedImageAlt(alt);
    setShowModal(true);
    document.body.style.overflow = 'hidden';
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedImageSrc('');
    setSelectedImageAlt('');
    document.body.style.overflow = 'unset';
  };

  return (
    <div className={styles.alarmasContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{t('gates', 'heroTitle')}</h1>
        <p className={styles.heroText}>
          {t('gates', 'heroText')}
        </p>
        <a href="#verMas" className={styles.ctaButton}>
          {t('gates', 'ctaButton')}
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
              <path d="M5.972,22.285a1,1,0,0,1-.515-1.857C9,18.3,9,13.73,9,11a3,3,0,0,1,6,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0c0,2.947,0,8.434-4.514,11.143A1,1,0,0,1,5.972,22.285Zm4.963,1.421c2.282-2.3,3.615-5.534,3.961-9.621A1,1,0,0,0,13.985,13a.983.983,0,0,0-1.081.911c-.311,3.657-1.419,6.4-3.388,8.381a1,1,0,0,0,1.419,1.41Zm5.2-.186a17.793,17.793,0,0,0,1.508-3.181,1,1,0,0,0-1.881-.678,15.854,15.854,0,0,1-1.338,2.821,1,1,0,0,0,1.711,1.038ZM18.5,17.191A31.459,31.459,0,0,0,19,11A7,7,0,0,0,6.787,6.333,1,1,0,1,0,8.276,7.667,5,5,0,0,1,17,11a29.686,29.686,0,0,1-.462,5.809,1,1,0,0,0,.79,1.172.979.979,0,0,0,.193.019A1,1,0,0,0,18.5,17.191ZM7,11a5,5,0,0,1,.069-.833A1,1,0,1,0,5.1,9.833,6.971,6.971,0,0,0,5,11c0,4.645-1.346,7-4,7a1,1,0,0,0,0,2C4.869,20,7,16.8,7,11ZM20.7,23.414A29.76,29.76,0,0,0,23,11a10.865,10.865,0,0,0-1.1-4.794,1,1,0,1,0-1.8.875A8.9,8.9,0,0,1,21,11a27.91,27.91,0,0,1-2.119,11.586,1,1,0,0,0,.5,1.324.984.984,0,0,0,.413.09A1,1,0,0,0,20.7,23.414ZM3,14V11a9.01,9.01,0,0,1,9-9,8.911,8.911,0,0,1,5.4,1.8,1,1,0,0,0,1.2-1.6A10.9,10.9,0,0,0,12,0,11.013,11.013,0,0,0,1,11v3a1,1,0,0,0,2,0Z"/>
            </svg>
          </div>
          <h4 className={styles.featureTitle}>{t('gates', 'featureTitle')}</h4>
          <p className={styles.featureSubtitle}>{t('gates', 'featureSubtitle')}</p>
          <p className={styles.featureText}>
            {t('gates', 'featureText1')}
          </p>
          <p className={styles.featureText}>
            {t('gates', 'featureText2')}
          </p>
        </div>

        {/* Sección de Imagen Principal */}
        <div className={styles.videoSectionWrapper} onClick={() => openModal('/images/pi/pa.jpg', t('gates', 'mainImageAlt'))}>
          <Image
            src="/images/pi/pa.jpg"
            alt={t('gates', 'mainImageAlt')}
            fill
            style={{ objectFit: 'cover' }}
            className={styles.video}
            priority
          />
        </div>

        {/* Grid de Características */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('gates', 'featureCard1Title')}</h6>
            <p className={styles.cardText}>
              {t('gates', 'featureCard1Text')}
            </p>
            <div className={styles.cardVideoWrapper} onClick={() => openModal('/images/pi/pi3.jpg', t('gates', 'featureCard1ImageAlt'))}>
              <Image
                src="/images/pi/pi3.jpg"
                alt={t('gates', 'featureCard1ImageAlt')}
                fill
                style={{ objectFit: 'cover' }}
                className={styles.video}
              />
            </div>
          </div>

          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('gates', 'featureCard2Title')}</h6>
            <p className={styles.cardText}>
              {t('gates', 'featureCard2Text')}
            </p>
            <div className={styles.cardVideoWrapper} onClick={() => openModal('/images/pi/pi2.jpg', t('gates', 'featureCard2ImageAlt'))}>
              <Image
                src="/images/pi/pi2.jpg"
                alt={t('gates', 'featureCard2ImageAlt')}
                fill
                style={{ objectFit: 'cover' }}
                className={styles.video}
              />
            </div>
          </div>

          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('gates', 'featureCard3Title')}</h6>
            <p className={styles.cardText}>
              {t('gates', 'featureCard3Text')}
            </p>
            <div className={styles.cardVideoWrapper} onClick={() => openModal('/images/pi/pi8.jpg', t('gates', 'featureCard3ImageAlt'))}>
              <Image
                src="/images/pi/pi8.jpg"
                alt={t('gates', 'featureCard3ImageAlt')}
                fill
                style={{ objectFit: 'cover' }}
                className={styles.video}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Modal para la imagen ampliada */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseButton} onClick={closeModal}>
              &times;
            </button>
            <Image
              src={selectedImageSrc}
              alt={selectedImageAlt}
              fill
              style={{ objectFit: 'contain' }}
              className={styles.modalImage}
            />
          </div>
        </div>
      )}
    </div>
  );
}