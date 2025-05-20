"use client";
import React from 'react';
import styles from './CamerasSeguridad.module.css';
// import Image from 'next/image';

export default function CamerasSeguridadPage() {
  return (
    <div className={styles.camerasContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>CÁMARAS DE SEGURIDAD</h1>
        <p className={styles.heroText}>
          Cuida de los tuyos y de todo lo que te importa, mantén tu propiedad en constante vigilancia mientras trabajas o mientras estás de vacaciones.
        </p>
        <a href="#verMas" className={styles.ctaButton}>
          VER MÁS
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
              <path d="M488.533,191.04c-14.409-7.302-31.716-5.78-44.629,3.925L404.8,224c-5.544-54.472-51.38-95.931-106.133-96h-1.813  l-87.936-87.915c-11.967-12.051-28.264-18.805-45.248-18.752H21.333C9.551,21.333,0,30.885,0,42.667S9.551,64,21.333,64h142.336  c5.655,0.015,11.075,2.261,15.083,6.251L236.501,128H106.667C47.786,128.071,0.071,175.786,0,234.667v170.667  C0.071,464.214,47.786,511.93,106.667,512h192c54.754-0.069,100.589-41.528,106.133-96l39.04,29.099  c18.851,14.138,45.595,10.318,59.733-8.533c5.539-7.385,8.533-16.368,8.533-25.6V229.184  C512.162,213.015,503.02,198.222,488.533,191.04z M362.667,405.333c0,35.346-28.654,64-64,64h-192c-35.346,0-64-28.654-64-64  V234.667c0-35.346,28.654-64,64-64h192c35.346,0,64,28.654,64,64V405.333z M469.333,410.816l-64-47.701v-86.229l64-47.701V410.816z"></path>
            </svg>
          </div>
          <h4 className={styles.featureTitle}>Seguridad y tranquilidad en un paquete ecológico</h4>
          <p className={styles.featureSubtitle}>Cámaras de Seguridad</p>
          <p className={styles.featureText}>
            Soluciones en seguridad residencial para cámaras completamente inalámbricas conectadas por panel solar compacto.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/camara-de-seguridad-pqzkzqcd1ln74w1iheewl38mfz3c96yez6zqon2nzs.webp"
                alt="Cámara de seguridad"
                width={600}
                height={400}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Foco intermitente ultrabrillante y sirena</h6>
            <p className={styles.cardText}>
              Con un foco intermitente de 600 lúmenes y una potente sirena de 90dB directamente desde su teléfono para ahuyentar a los invitados no deseados.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/camara-de-seguridad-4-pqzl8x7jva84nmowtdfkyrqvjlsjinfxkomnlw36pk.webp"
                alt="Detección de movimiento"
                width={600}
                height={400}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Detección de movimiento</h6>
            <p className={styles.cardText}>
              La tecnología avanzada a bordo solo lo alerta cuando una persona entra a la vista en lugar de mascotas o árboles que se balancean.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/camara-de-seguridad-2-pqzl26p6w105g8h65glu3gxya6zucqp6ncbdsnfnqw.webp"
                alt="Cámara con audio bidireccional"
                width={600}
                height={400}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Haz que tu voz se escuche</h6>
            <p className={styles.cardText}>
              Hable directamente con cualquier persona que se acerque a través del audio bidireccional, incluso si está fuera de casa.
            </p>
          </div>
        </div>

        {/* Demo Video Section */}
        <div className={styles.demoSection}>
          <h2 className={styles.demoTitle}>Vea cómo funcionan nuestras cámaras</h2>
          <div className={styles.videoContainer}>
            <iframe 
              src="https://www.youtube.com/embed/1869zw6_R5Y" 
              title="Demo de cámaras de seguridad"
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