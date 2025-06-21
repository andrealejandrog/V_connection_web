// pages/IoT.tsx
'use client';

import React, { useState } from 'react';
import styles from './IoT.module.css';
import Image from 'next/image';

export default function IoTpage() {
  // TODAS LAS RUTAS DE IMAGENES AQUÍ DEBEN ESTAR EN MINÚSCULAS PARA COINCIDIR CON LOS ARCHIVOS RENOMBRADOS
  const galleryImages = [
    { src: `/images/iot/iot8.jpg`, alt: "Sistema de automatización residencial" },
    { src: `/images/iot/iot2.jpg`, alt: "Control de iluminación inteligente" },
    { src: `/images/iot/iot3.jpg`, alt: "Integración de seguridad IoT" },
    { src: `/images/iot/iot4.jpg`, alt: "Sala de control centralizada" },
    { src: `/images/iot/iot5.jpg`, alt: "Automatización de climatización" },
    { src: `/images/iot/iot6.jpg`, alt: "Sistema de riego inteligente" },
    { src: `/images/iot/iot7.jpg`, alt: "Sistema de riego inteligente" },
    { src: `/images/iot/iot1.jpg`, alt: "Sistema de riego inteligente" }
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
    <div className={styles.iotContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Internet de las cosas</h1>
        <p className={styles.heroText}>
          Vive la experiencia de automatizar tu residencia u oficina.<br />
          Optimiza las funciones e interacción con tus equipos.
        </p>
        <a href="#automation" className={styles.ctaButton}>
          VER MÁS
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512">
              <path d="M14.5,0h-5A5.506,5.506,0,0,0,4,5.5v13A5.506,5.506,0,0,0,9.5,24h5A5.506,5.506,0,0,0,20,18.5V5.5A5.506,5.506,0,0,0,14.5,0Zm-5,3h5A2.5,2.5,0,0,1,17,5.5V18H7V5.5A2.5,2.5,0,0,1,9.5,3ZM12,22h0a1,1,0,0,1-1-1h0a1,1,0,0,1,1-1h0a1,1,0,0,1,1,1h0A1,1,0,0,1,12,22Z"></path>
            </svg>
          </div>
          <h4 className={styles.featureTitle}>Somos tu mejor opción</h4>
          <p className={styles.featureSubtitle}>Automatización</p>
          <p className={styles.featureText}>
            VITREA es un protocolo abierto que permite integrarse e interactuar con diferentes equipos de
            diferentes marcas, por lo que automatizar tu residencia u oficina se vuelve algo que sueñas.
            Te imaginas programar escenarios dependiendo de la actividad que quieras realizar.
            Tu imaginación es el límite.
          </p>
        </div>

        {/* Scenarios Section */}
        <div className={styles.scenariosSection}>
          <h2 className={styles.sectionTitle}>Escenarios de Automatización</h2>

          <div className={styles.scenariosGrid}>
            <div className={styles.scenarioCard}>
              <div className={styles.scenarioImage}>
                <Image
                  // Asegúrate que esta ruta coincida exactamente con el archivo renombrado en minúsculas
                  src={`/images/sistema-de-riego-automatico-300x150.png`}
                  alt="Jardín con luces automáticas"
                  width={600}
                  height={400}
                  className={styles.image}
                  unoptimized // Mantener para explícitud, aunque next.config.js ya lo maneja
                />
              </div>
              <div className={styles.scenarioContent}>
                <h3 className={styles.scenarioTitle}>Sistema de riego en verano</h3>
                <p className={styles.scenarioText}>
                  Programa que en distintas estaciones del año tu sistema de riego se active a ciertos horarios y días,
                  sin necesidad de interacción manual.
                </p>
              </div>
            </div>

            <div className={styles.scenarioCard}>
              <div className={styles.scenarioImage}>
                <Image
                  // Asegúrate que esta ruta coincida exactamente con el archivo renombrado en minúsculas
                  src={`/images/audio-lujoso-casa-2-300x202.jpg`}
                  alt="Sala de cine con luces tenues"
                  width={600}
                  height={400}
                  className={styles.image}
                  unoptimized
                />
              </div>
              <div className={styles.scenarioContent}>
                <h3 className={styles.scenarioTitle}>Escenario de película</h3>
                <p className={styles.scenarioText}>
                  Luces al 50%, música ambiental, climatización perfecta. Al iniciar la película:
                  luces se atenúan, música se apaga, sonido de cine se activa y clima se ajusta.
                </p>
              </div>
            </div>

            <div className={styles.scenarioCard}>
              <div className={styles.scenarioImage}>
                <Image
                  // Asegúrate que esta ruta coincida exactamente con el archivo renombrado en minúsculas
                  src={`/images/luces-de-jardin-300x200.jpg`}
                  alt="Sistema de riego automático"
                  width={600}
                  height={400}
                  className={styles.image}
                  unoptimized
                />
              </div>
              <div className={styles.scenarioContent}>
                <h3 className={styles.scenarioTitle}>Escenario nocturno</h3>
                <p className={styles.scenarioText}>
                  Camino iluminado suavemente hasta la cocina cuando detecta movimiento nocturno,
                  sin molestar a otros dormitorios.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Galería de Portada */}
        <div className={styles.gallerySection}>
          <h2 className={styles.sectionTitle}>Nuestros Proyectos</h2>
          <p className={styles.gallerySubtitle}>Implementaciones reales con tecnología IoT</p>

          <div className={styles.coverGalleryContainer} onClick={() => openModal(0)}>
            <div className={styles.coverImageWrapper}>
              <Image
                src={galleryImages[0].src} // Ahora debe cargar iot8.jpg (minúsculas)
                alt={galleryImages[0].alt}
                width={800}
                height={500}
                className={styles.coverImage}
                unoptimized
              />
            </div>
            <div className={styles.coverOverlay}>
              <div className={styles.overlayContent}>
                <div className={styles.overlayIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="48" height="48">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                  </svg>
                </div>
                <div className={styles.overlayText}>Ver galería completa</div>
                <div className={styles.overlayHint}>Click para explorar nuestros proyectos</div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className={styles.demoSection}>
          <h2 className={styles.demoTitle}>Vea cómo funciona</h2>
          <div className={styles.videoContainer}>
            <iframe
              // Ojo: Si este video de YouTube no funciona, verifica la URL exacta.
              // YouTube usualmente requiere una URL específica como:
              // https://www.youtube.com/embed/VIDEO_ID
              src="https://www.youtube.com/embed/iI5aF3ybmsQ?start=4"
              title="Demo de automatización IoT"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            ></iframe>
          </div>
        </div>
      </section>

      {/* Modal para la galería */}
      {modalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeButton} onClick={closeModal}>×</button>

            <div className={styles.mainImageContainer}>
              <Image
                src={galleryImages[currentImageIndex].src}
                alt={galleryImages[currentImageIndex].alt}
                width={1200}
                height={800}
                className={styles.modalImage}
                unoptimized
              />
            </div>

            <div className={styles.imageInfo}>
              <h3 className={styles.modalImageTitle}>
                {galleryImages[currentImageIndex].alt}
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
                    unoptimized
                  />
                </div>
              ))}
            </div>

            <button className={styles.navButtonPrev} onClick={() => navigateImage('prev')}>
              ❮
            </button>
            <button className={styles.navButtonNext} onClick={() => navigateImage('next')}>
              ❯
            </button>
          </div>
        </div>
      )}
    </div>
  );
}