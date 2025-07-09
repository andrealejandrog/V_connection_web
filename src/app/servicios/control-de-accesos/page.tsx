"use client";
import React, { useState } from 'react';
import styles from './ControlAcceso.module.css';
import Image from 'next/image';
import { useLanguage } from '@/app/contexts/LanguageContext'; // Importa el hook de idioma

export default function ControlAccesoPage() {
  const { t } = useLanguage(); // Obtiene la función t para traducir

  // Galería de imágenes
  const galleryImages = [
    { src: "/images/secure/sec1.jpg", alt: t('access', 'imageAlt') },
    { src: "/images/secure/sec2.jpg", alt: t('access', 'imageAlt') },
    { src: "/images/secure/sec3.jpg", alt: t('access', 'imageAlt') },
    { src: "/images/secure/sec4.jpg", alt: t('access', 'imageAlt')},
    { src: "/images/secure/sec5.jpg", alt: t('access', 'imageAlt') },
    { src: "/images/secure/sec6.jpg", alt: t('access', 'imageAlt') },
    { src: "/images/secure/se6.jpg", alt: t('access', 'imageAlt') }
  ];

  // Estado para controlar el modal
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Abrir modal con la imagen seleccionada
  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  // Cerrar modal
  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Navegar entre imágenes
  const navigateImage = (direction: 'prev' | 'next') => {
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentImageIndex + 1) % galleryImages.length;
    } else {
      newIndex = (currentImageIndex - 1 + galleryImages.length) % galleryImages.length;
    }
    setCurrentImageIndex(newIndex);
  };

  return (
    <div className={styles.controlContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>{t('access', 'heroTitle')}</h1>
        <p className={styles.heroText}>
          {t('access', 'heroText')}
        </p>
        <a href="#verMas" className={styles.ctaButton}>
          {t('access', 'ctaButton')}
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
              <path d="M5.972,22.285a1,1,0,0,1-.515-1.857C9,18.3,9,13.73,9,11a3,3,0,0,1,6,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0c0,2.947,0,8.434-4.514,11.143A1,1,0,0,1,5.972,22.285Zm4.963,1.421c2.282-2.3,3.615-5.534,3.961-9.621A1,1,0,0,0,13.985,13a.983.983,0,0,0-1.081.911c-.311,3.657-1.419,6.4-3.388,8.381a1,1,0,0,0,1.419,1.41Zm5.2-.186a17.793,17.793,0,0,0,1.508-3.181,1,1,0,0,0-1.881-.678,15.854,15.854,0,0,1-1.338,2.821,1,1,0,0,0,1.711,1.038ZM18.5,17.191A31.459,31.459,0,0,0,19,11,7,7,0,0,0,6.787,6.333,1,1,0,1,0,8.276,7.667,5,5,0,0,1,17,11a29.686,29.686,0,0,1-.462,5.809,1,1,0,0,0,.79,1.172.979.979,0,0,0,.193.019A1,1,0,0,0,18.5,17.191ZM7,11a5,5,0,0,1,.069-.833A1,1,0,1,0,5.1,9.833,6.971,6.971,0,0,0,5,11c0,4.645-1.346,7-4,7a1,1,0,0,0,0,2C4.869,20,7,16.8,7,11ZM20.7,23.414A29.76,29.76,0,0,0,23,11a10.865,10.865,0,0,0-1.1-4.794,1,1,0,1,0-1.8.875A8.9,8.9,0,0,1,21,11a27.91,27.91,0,0,1-2.119,11.586,1,1,0,0,0,.5,1.324.984.984,0,0,0,.413.09A1,1,0,0,0,20.7,23.414ZM3,14V11a9.01,9.01,0,0,1,9-9,8.911,8.911,0,0,1,5.4,1.8,1,1,0,0,0,1.2-1.6A10.9,10.9,0,0,0,12,0,11.013,11.013,0,0,0,1,11v3a1,1,0,0,0,2,0Z"/>
            </svg>
          </div>
          <h4 className={styles.featureTitle}>{t('access', 'featureTitle')}</h4>
          <p className={styles.featureSubtitle}>{t('access', 'featureSubtitle')}</p>
          <p className={styles.featureText}>
            {t('access', 'featureText')}
          </p>
        </div>

        {/* Video Demo Section */}
        <div className={styles.videoSection}>
          <video controls className={styles.video}>
            <source 
              src="https://cdn.shopify.com/s/files/1/0521/9411/5753/files/6s_1.mp4?v=1612670004" 
              type="video/mp4" 
            />
            {t('access', 'videoNotSupported')}
          </video>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('access', 'featureCard1Title')}</h6>
            <p className={styles.cardText}>
              {t('access', 'featureCard1Text')}
            </p>
            <div className={styles.cardVideo}>
              <iframe
                className={styles.video}
                src="https://www.youtube.com/embed/sxqRBLeUYW4?si=jt363zUxcK3b6lXv"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={t('access', 'featureCard1Title')}
              ></iframe>
            </div>
          </div>

          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('access', 'featureCard2Title')}</h6>
            <p className={styles.cardText}>
              {t('access', 'featureCard2Text')}
            </p>
            <div className={styles.cardVideo}>
              <video controls className={styles.video}>
                <source 
                  src="https://cdn.shopify.com/s/files/1/0521/9411/5753/files/2_1_RRMlL3S9U3.mp4?v=1616748291" 
                  type="video/mp4" 
                />
                {t('access', 'videoNotSupported')}
              </video>
            </div>
          </div>

          <div className={styles.featureCard}>
            <h6 className={styles.cardTitle}>{t('access', 'featureCard3Title')}</h6>
            <p className={styles.cardText}>
              {/* Usamos dangerouslySetInnerHTML porque contiene HTML */}
              <span dangerouslySetInnerHTML={{ __html: t('access', 'featureCard3Text') }} />
            </p>
            <div className={styles.cardVideo}>
              <video controls className={styles.video}>
                <source 
                  src="https://cdn.shopify.com/s/files/1/0521/9411/5753/files/6s_1.mp4?v=1612670004" 
                  type="video/mp4" 
                />
                {t('access', 'videoNotSupported')}
              </video>
            </div>
          </div>
        </div>

        {/* Galería de Portada - Nueva Sección */}
        <div className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>{t('access', 'galleryTitle')}</h2>
          <p className={styles.gallerySubtitle}>{t('access', 'gallerySubtitle')}</p>

          <div className={styles.coverGalleryContainer} onClick={() => openModal(0)}>
            <div className={styles.coverImageWrapper}>
              <Image
                src={galleryImages[0].src}
                alt={galleryImages[0].alt}
                width={800}
                height={500}
                className={styles.coverImage}
              />
            </div>
            <div className={styles.coverOverlay}>
              <div className={styles.overlayContent}>
                <div className={styles.overlayIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48" height="48">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5.972,22.285a1,1,0,0,1-.515-1.857C9,18.3,9,13.73,9,11a3,3,0,0,1,6,0,1,1,0,0,1-2,0,1,1,0,0,0-2,0c0,2.947,0,8.434-4.514,11.143A1,1,0,0,1,5.972,22.285Zm4.963,1.421c2.282-2.3,3.615-5.534,3.961-9.621A1,1,0,0,0,13.985,13a.983.983,0,0,0-1.081.911c-.311,3.657-1.419,6.4-3.388,8.381a1,1,0,0,0,1.419,1.41Zm5.2-.186a17.793,17.793,0,0,0,1.508-3.181,1,1,0,0,0-1.881-.678,15.854,15.854,0,0,1-1.338,2.821,1,1,0,0,0,1.711,1.038ZM18.5,17.191A31.459,31.459,0,0,0,19,11,7,7,0,0,0,6.787,6.333,1,1,0,1,0,8.276,7.667,5,5,0,0,1,17,11a29.686,29.686,0,0,1-.462,5.809,1,1,0,0,0,.79,1.172.979.979,0,0,0,.193.019A1,1,0,0,0,18.5,17.191ZM7,11a5,5,0,0,1,.069-.833A1,1,0,1,0,5.1,9.833,6.971,6.971,0,0,0,5,11c0,4.645-1.346,7-4,7a1,1,0,0,0,0,2C4.869,20,7,16.8,7,11ZM20.7,23.414A29.76,29.76,0,0,0,23,11a10.865,10.865,0,0,0-1.1-4.794,1,1,0,1,0-1.8.875A8.9,8.9,0,0,1,21,11a27.91,27.91,0,0,1-2.119,11.586,1,1,0,0,0,.5,1.324.984.984,0,0,0,.413.09A1,1,0,0,0,20.7,23.414ZM3,14V11a9.01,9.01,0,0,1,9-9,8.911,8.911,0,0,1,5.4,1.8,1,1,0,0,0,1.2-1.6A10.9,10.9,0,0,0,12,0,11.013,11.013,0,0,0,1,11v3a1,1,0,0,0,2,0Z"/>
                  </svg>
                </div>
                <div className={styles.overlayText}>{t('access', 'overlayText')}</div>
                <div className={styles.overlayHint}>{t('access', 'overlayHint')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal para la galería */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>&times;</button>
            
            <div className={styles.mainImageContainer}>
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                width={1200}
                height={800}
                className={styles.modalImage}
              />
            </div>
            
            <div className={styles.imageInfo}>
              <h3 className={styles.modalImageTitle}>
                {t('access', 'modalImageTitle')}
              </h3>
              <p className={styles.imageCounter}>
                {currentImageIndex + 1} / {galleryImages.length}
              </p>
            </div>
            
            <div className={styles.thumbnailGrid}>
              {galleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className={`${styles.thumbnailItem} ${index === currentImageIndex ? styles.activeThumbnail : ''}`}
                  onClick={() => setCurrentImageIndex(index)}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={150}
                    height={100}
                    className={styles.thumbnailImage}
                  />
                </div>
              ))}
            </div>
            
            <button className={styles.navButtonPrev} onClick={() => navigateImage('prev')}>
              &#10094;
            </button>
            <button className={styles.navButtonNext} onClick={() => navigateImage('next')}>
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
}