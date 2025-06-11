// app/redes/page.tsx
'use client';

import React from 'react';
import styles from './redes.module.css'; // Importa el nuevo archivo de estilos
// import Image from 'next/image'; // 

export default function RedesPage() {
  return (
    <div className={styles.redesContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>Redes de la Compañía</h1>
        <p className={styles.heroText}>
          Diseñamos e implementamos soluciones de red robustas y seguras para optimizar la conectividad y eficiencia de tu empresa.
        </p>
        <a href="#soluciones" className={styles.ctaButton}>
          VER MÁS
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <h4 className={styles.featureTitle}>Conectividad y Rendimiento Superior</h4>
          <p className={styles.featureSubtitle}>Soluciones de Red a Medida</p>
          <p className={styles.featureText}>
            En V-Connection, entendemos que una red confiable y de alto rendimiento es la columna vertebral de cualquier negocio moderno.
            Ofrecemos servicios de diseño, implementación y mantenimiento de redes que garantizan una comunicación fluida y segura.
            <br />
            Desde pequeñas oficinas hasta grandes corporaciones, nuestras soluciones se adaptan a tus necesidades específicas.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          {/* Feature Card 1: Redes Cableadas */}
          <div className={styles.featureCard}>
            {/* <div className={styles.cardImage}>
              <Image
                src="/images/red-cableada.jpg" // CAMBIA esta ruta por una imagen real
                alt="Redes Cableadas"
                width={400}
                height={300}
                className={styles.image}
              />
            </div> */}
            <h6 className={styles.cardTitle}>Infraestructura Cableada</h6>
            <p className={styles.cardText}>
              Implementamos redes Ethernet confiables y de alta velocidad, esenciales para la transferencia de grandes volúmenes de datos y aplicaciones críticas.
            </p>
            <p className={styles.cardText}>
              Nuestras instalaciones cumplen con los más altos estándares, garantizando estabilidad y seguridad para tus operaciones.
            </p>
          </div>

          {/* Feature Card 2: Redes Inalámbricas */}
          <div className={styles.featureCard}>
            {/* <div className={styles.cardImage}>
              <Image
                src="/images/red-inalambrica.jpg" // CAMBIA esta ruta por una imagen real
                alt="Redes Inalámbricas"
                width={400}
                height={300}
                className={styles.image}
              />
            </div> */}
            <h6 className={styles.cardTitle}>Conectividad Wi-Fi Avanzada</h6>
            <p className={styles.cardText}>
              Diseñamos y desplegamos redes Wi-Fi empresariales seguras y escalables, optimizadas para una cobertura total y un rendimiento constante.
            </p>
            <p className={styles.cardText}>
              Aseguramos una experiencia de usuario fluida para todos tus dispositivos y aplicaciones, desde la oficina hasta los puntos de acceso públicos.
            </p>
          </div>

          {/* Feature Card 3: Seguridad de Red */}
          <div className={styles.featureCard}>
            {/* <div className={styles.cardImage}>
              <Image
                src="/images/seguridad-red.jpg" // CAMBIA esta ruta por una imagen real
                alt="Seguridad de Red"
                width={400}
                height={300}
                className={styles.image}
              />
            </div> */}
            <h6 className={styles.cardTitle}>Seguridad de Red Integral</h6>
            <p className={styles.cardText}>
              Protege tus datos y sistemas con nuestras soluciones de seguridad de red avanzadas, incluyendo firewalls, VPNs y sistemas de detección de intrusiones.
            </p>
            <p className={styles.cardText}>
              Mantenemos tu infraestructura a salvo de amenazas externas e internas, garantizando la continuidad de tu negocio.
            </p>
          </div>
        </div>

        {/* Demo Section */}
        {/* <div className={styles.demoSection}> */}
          {/* <h4 className={styles.demoTitle}>Soluctiones integrales</h4> */}
          {/* <p className={styles.demoSubtitle}>Demostración de Caso de Éxito</p> */}
          {/* <div className={styles.videoContainer}>
            <iframe
              src="/images/redes.jpg" // CAMBIA ESTO por la URL de tu video de YouTube (solo el ID o la URL de embed)
              title="Demo de soluciones de red"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.video}
            ></iframe>
          </div> */}
        {/* </div> */}
      </section>
    </div>
  );
}