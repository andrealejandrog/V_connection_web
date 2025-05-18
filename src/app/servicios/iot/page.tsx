"use client";
import React from 'react';
import styles from './IoT.module.css';
import Image from 'next/image';

export default function IoTpage() {
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
                  src="/images/sistema-de-riego-automatico-300x150.png"
                  alt="Jardín con luces automáticas"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.scenarioTitle}>Sistema de riego en verano</h3>
              <p className={styles.scenarioText}>
                Programa que en distintas estaciones del año tu sistema de riego se active a ciertos horarios y días, 
                sin necesidad de interacción manual.
              </p>
            </div>

            <div className={styles.scenarioCard}>
              <div className={styles.scenarioImage}>
                <Image
                  src="/images/audio-lujoso-casa-2-300x202.jpg"
                  alt="Sala de cine con luces tenues"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.scenarioTitle}>Escenario de película</h3>
              <p className={styles.scenarioText}>
                Luces al 50%, música ambiental, climatización perfecta. Al iniciar la película: 
                luces se atenúan, música se apaga, sonido de cine se activa y clima se ajusta.
              </p>
            </div>

            <div className={styles.scenarioCard}>
              <div className={styles.scenarioImage}>
                <Image
                  src="/images/luces-de-jardin-300x200.jpg"
                  alt="Sistema de riego automático"
                  width={600}
                  height={400}
                  className={styles.image}
                />
              </div>
              <h3 className={styles.scenarioTitle}>Escenario nocturno</h3>
              <p className={styles.scenarioText}>
                Camino iluminado suavemente hasta la cocina cuando detecta movimiento nocturno, 
                sin molestar a otros dormitorios.
              </p>
            </div>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className={styles.demoSection}>
          <h2 className={styles.demoTitle}>Vea cómo funciona</h2>
          <div className={styles.videoContainer}>
            <iframe 
              src="https://www.youtube.com/embed/iI5aF3ybmsQ?start=4" 
              title="Demo de automatización IoT"
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