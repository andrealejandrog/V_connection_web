"use client";
import React from 'react';
import styles from './AudioProfesional.module.css';
// import Image from 'next/image';

export default function AudioProfesionalPage() {
  return (
    <div className={styles.audioContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Audio Profesional y VoIP</h1>
        <p className={styles.heroText}>
          Enriquecemos tus ambientes con sonido de la más alta fidelidad sin comprometer la estética de tu habitación u oficina.
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
              <path d="M16,0H8A5.006,5.006,0,0,0,3,5V19a5.006,5.006,0,0,0,5,5h8a5.006,5.006,0,0,0,5-5V5A5.006,5.006,0,0,0,16,0Zm3,19a3,3,0,0,1-3,3H8a3,3,0,0,1-3-3V5A3,3,0,0,1,8,2h8a3,3,0,0,1,3,3Z"></path>
              <circle cx="12" cy="6" r="1.5"></circle>
              <path d="M12,10a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,10Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,18Z"></path>
              <circle cx="12" cy="15" r="1"></circle>
            </svg>
          </div>
          <h4 className={styles.featureTitle}>Alta fidelidad y comunicación efectiva</h4>
          <p className={styles.featureSubtitle}>Audio Profesional y VoIP</p>
          <p className={styles.featureText}>
            ¿Te gusta la música y realmente quieres apreciarla?
          </p>
          <p className={styles.featureText}>
            Te presentamos soluciones ambientales y profesionales con manejo inalámbrico y con diferentes equipos para que vivas una experiencia única en tu casa, oficina, salas de reuniones o proyectos de eventos donde quieres la discreción de los equipos pero quieres potencia y fidelidad.
          </p>
          <p className={styles.featureText}>
            ¿Necesitas estar comunicado?
          </p>
          <p className={styles.featureText}>
            Tenemos soluciones de telefonía IP para que puedas estar comunicado en todo el mundo donde el costo que ocupas es únicamente tu internet, integramos equipos de video conferencias para que tus reuniones sean puntuales y eficientes sin la necesidad de tener que viajar de un lugar a otro.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/Audio-casa-lujoso-pqzj5979pen61olonnyr8v520yqtvt1t661iu5n01k.png"
                alt="Audio casa lujoso"
                width={400}
                height={300}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Integración</h6>
            <p className={styles.cardText}>
              Maneja el apagado y encendido de luces, música en reproducción y búsqueda de información en internet con el poder de tu voz y Amazon Alexa.
            </p>
              <div className={styles.videoContainer}>
              <iframe 
                src="https://www.youtube.com/embed/NxZ1fOmOcNk?si=uuJSGvn7NZsb7L-S" 
                title="Video de comunicación VoIP"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/audio-casa-lujoso-3-pqzjmgmwt874kplx6lpwe0tthvxpsccx7byi3i4k54.jpg"
                alt="Audio casa lujoso"
                width={400}
                height={300}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Alta Fidelidad</h6>
            <p className={styles.cardText}>
              Trabajamos con exclusivas marcas para que puedas disfrutar de una calidad de audio inigualable, algunas de ellas son Polk y Amazon Alexa.
            </p>
            <div className={styles.videoContainer}>
              <iframe 
                src="https://www.youtube.com/embed/0W0p78VA3o4?si=1ImBE_-I7UKwHa20" 
                title="Video de comunicación VoIP"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/alexa-pumv1ntbypn6ij7fgyfplvjckcw59jqrrrdxirva5c.jpg"
                alt="Amazon Alexa"
                width={400}
                height={300}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Comunicación constante</h6>
            <p className={styles.cardText}>
              Te proporcionamos ambientes ideales para que tus videollamadas importantes se realicen de la manera más cómoda y eficiente.
            </p>
            <div className={styles.videoContainer}>
              <iframe 
                src="https://www.youtube.com/embed/qSCAlYDLjR8" 
                title="Video de comunicación VoIP"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className={styles.video}
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}