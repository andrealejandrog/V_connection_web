"use client";
import React from 'react';
import styles from './SmartFilm.module.css';
// import Image from 'next/image';

export default function SmartFilmPage() {
  return (
    <div className={styles.smartFilmContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>CORTINAS AUTOMÁTICAS</h1>
        <p className={styles.heroText}>
          Elige el nivel de privacidad que necesitas de acuerdo a tus necesidades.<br />
          Todo a al alcance de tu mano y de una manera simple y elegante.
        </p>
        <a href="#verMas" className={styles.ctaButton}>
          VER MÁS
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
          <h4 className={styles.featureTitle}>Cortinas Automáticas</h4>
          <p className={styles.featureSubtitle}>Smart Film</p>
          <p className={styles.featureText}>
            Película de atenuación funcional y conmutable de pantalla de cristal líquido que utiliza cristal líquido dispersos de polímero (PDLC) como estructura de pantalla.
          </p>
          <p className={styles.featureText}>
            Ideal para oficinas, residencias, hoteles, público, display.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/f1856248c7cfd15d80db4a3bb3052989-pve12bb147muw4o9o392p3fe5lxc73nj6eskk7ndvc.jpg"
                alt="Cortinas inteligentes domotica"
                width={600}
                height={400}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>¿Cómo funciona?</h6>
            <p className={styles.cardText}>
              Cuando se aplica electricidad a la película a través del cableado, los cristales líquidos se alinean y la ventana se vuelve transparente al instante. Cuando se apaga la alimentación, los cristales líquidos vuelven a sus posiciones dispersas normales, lo que hace que el vidrio sea opaco.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="/images/8-16sq-m-Privacy-smart-window-film-PDLC-Smart-window-foil-for-home-office-decals.jpg_Q90.jpg_-300x300.webp"
                alt="Cortinas automáticas"
                width={600}
                height={400}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Beneficios</h6>
            <p className={styles.cardText}>
              Protección de privacidad y partición de habitaciones, bloqueo de los rayos del sol, 99% UV, 98% rayos IR.
            </p>
            <p className={styles.cardText}>
              Protegiendo la decoloración y el amarillamiento de sus interiores, buscando proteger a las personas de enfermedades causadas por la luz solar directa.
            </p>
            <p className={styles.cardText}>
              Aislamiento acústico: puede bloquear el ruido 20% más que el vidrio normal. La garantía es de 2 años y se estima una duración de más de 10 años.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/8-16sq-m-Privacy-smart-window-film-PDLC-Smart-window-foil-for-home-office-decals.jpg_Q90.jpg_-pve12bb147muw4o9o392p3fe5lxc73nj6eskk7ndvc.webp"
                alt="Cortina Inteligente Automatizada"
                width={600}
                height={400}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Fácil instalación</h6>
            <p className={styles.cardText}>
              Control múltiple como interruptor de pared, sensores, control remoto, control de voz, aplicación, domótica, etc.
            </p>
            <p className={styles.cardText}>
              Fácil de diseñar, instalar y configurar.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className={styles.demoSection}>
          <h4 className={styles.demoTitle}>Una pequeña demostración del producto</h4>
          <p className={styles.demoSubtitle}>¿Cómo funciona?</p>
          <div className={styles.videoContainer}>
            <video controls className={styles.video}>
              <source 
                src="/images/WhatsApp-Video-2022-09-27-at-8.05.20-PM.mp4" 
                type="video/mp4" 
              />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>
    </div>
  );
}