"use client";
import React from 'react';
import styles from './Iluminacion.module.css';
import Image from 'next/image';

export default function IluminacionPage() {
  return (
    <div className={styles.iluminacionContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Iluminación Inteligente</h1>
        <p className={styles.heroText}>
          Controla el nivel de intensidad y temperatura para cada ambiente o necesidad.
        </p>
        <a href="#verMas" className={styles.ctaButton}>
          VER MÁS
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <h4 className={styles.featureTitle}>Controlada por voz y regulable en intensidad</h4>
          <p className={styles.featureSubtitle}>Iluminación</p>
          <p className={styles.featureText}>
            La iluminación inteligente controla también la intensidad de la luz y ofrece una extensa cantidad de colores para crear distintos escenarios en un mismo ambiente.
            <br />
            Esta tecnología puede suponer un ahorro hasta del 90% en la factura de la luz eléctrica.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/phillips-pvv7i10xg4zc4xdx7pbl2xa1yawtap21hkdsp10n40.jpg"
                alt="App Phillips"
                width={400}
                height={300}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Control por voz</h6>
            <p className={styles.cardText}>
              Enciende y apaga las luces que necesites con la ayuda de tu asistente favorito o incluso Amazon Alexa.
            </p>
            <p className={styles.cardText}>
              ¿Olvidaste apagar la luz de la cocina y no quieres levantarte? simplemente pídeselo a tu asistente.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/phillips-garden-pvv7vlt05zkfu5nxxkll3hxqunzohaygorma8wvxtk.jpg"
                alt="Phillips Garden"
                width={400}
                height={300}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Facilidad de uso</h6>
            <p className={styles.cardText}>
              Nuestras bombillas se instalan de una manera sencilla sin afectar la estética de tus espacios, pueden ser controlados desde cualquier dispositivo móvil.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/phillips-and-amazon-pvv7u9v8hfqte1lkphvm2c18k0jykqo5i6cirsv0mw.webp"
                alt="Phillips y Amazon"
                width={400}
                height={300}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Reduce el consumo</h6>
            <p className={styles.cardText}>
              Al ser luces inteligentes también podemos regular la intensidad de la luz o incluso programar horas de encendido y apagado, todo esto nos permite ahorrar dinero en la factura eléctrica.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        <div className={styles.demoSection}>
          <h4 className={styles.demoTitle}>Una pequeña demostración del producto</h4>
          <p className={styles.demoSubtitle}>¿Cómo funciona?</p>
          <div className={styles.videoContainer}>
            <iframe 
              src="https://www.youtube.com/embed/ND9BCut4NE4" 
              title="Demo de iluminación inteligente"
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