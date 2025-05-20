"use client";
import React from 'react';
import styles from './AireAcondicionado.module.css';
// import Image from 'next/image';

export default function AireAcondicionadoPage() {
  return (
    <div className={styles.aireContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>AIRES ACONDICIONADOS Y CLIMATIZACIÓN</h1>
        <p className={styles.heroText}>
          Mantente cómodo y fresco con la temperatura adecuada a tus necesidades, de la mano de un buen servicio y productos garantizados.
        </p>
        <a href="#verMas" className={styles.ctaButton}>
          VER MÁS
        </a>
      </section>

      {/* Main Content */}
      <section className={styles.contentSection}>
        <div className={styles.feature}>
          <div className={styles.featureIcon}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.292 512.292" width="512" height="512">
              <path d="M256.061,0L256.061,0c17.673,0,32,14.327,32,32v106.667c0,17.673-14.327,32-32,32l0,0c-17.673,0-32-14.327-32-32V32 C224.061,14.327,238.387,0,256.061,0z"/>
              <path d="M330.727,105.387L330.727,105.387c-0.157,10.742,5.259,20.8,14.315,26.581c80.432,49.143,105.796,154.185,56.652,234.616 S247.51,472.38,167.078,423.237S61.282,269.052,110.426,188.62c14.042-22.982,33.324-42.315,56.269-56.418 c9.211-5.781,14.773-15.92,14.699-26.795l0,0c0.049-17.673-14.238-32.039-31.911-32.088c-6.07-0.017-12.02,1.693-17.155,4.931 C22.233,146.634-11.58,291.318,56.803,401.412s213.067,143.907,323.161,75.524s143.907-213.067,75.524-323.161 c-19.035-30.645-44.879-56.489-75.524-75.524c-14.997-9.461-34.824-4.973-44.285,10.024 C332.447,93.397,330.731,99.33,330.727,105.387z"/>
            </svg>
          </div>
          <h4 className={styles.featureTitle}>Ambientes agradables y acogedores</h4>
          <p className={styles.featureSubtitle}>Climatización</p>
          <p className={styles.featureText}>
            Desarrollamos proyectos de aires acondicionados convencionales o automatizados, para que controles el ambiente de tu hogar.
          </p>
        </div>

        {/* Features Grid */}
        <div className={styles.featuresGrid}>
          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/AC-Thermostat-1-pqzi3dbg8ss43hmsvsf38xb82vh8mznaanfzhnt8u0.png"
                alt="Termostato inteligente"
                width={600}
                height={400}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Calentadores de agua eléctricos</h6>
            <p className={styles.cardText}>
              Agrega un toque final de elegancia al interruptor de tu calentador de agua eléctrico, no solo se ve elegante sino que también funciona como un temporizador digital que te permitirá configurar su funcionamiento en incrementos de cada 15 minutos.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/elementor/thumbs/eficiencia-energetica-pqzkst94qi67o83bvwqrqc3h0v72lehjoy42ibbzso.jpg"
                alt="Eficiencia energética"
                width={600}
                height={400}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Disfruta del ambiente</h6>
            <p className={styles.cardText}>
              Asegúrate de que tus <strong>termostatos inteligentes</strong> estén ajustados a la temperatura correcta mientras estás fuera de casa.<br />
              Controla tu sistema de aire acondicionado con solo tocar el termostato o mediante la aplicación &quot;ControlPro&quot; de VITREA.
            </p>
          </div>

          <div className={styles.featureCard}>
            <div className={styles.cardImage}>
              {/* <Image 
                src="https://v-connection.local/wp-content/uploads/2022/06/control-de-temperatura-para-bano-y-ducha.jpg"
                alt="Control de temperatura para baño"
                width={600}
                height={400}
                className={styles.image}
              /> */}
            </div>
            <h6 className={styles.cardTitle}>Eficiencia energética</h6>
            <p className={styles.cardText}>
              Con nuestro sistema no solo transformas tu vida en un lugar de confort sino que también disminuyes el consumo eléctrico al utilizar tus sistemas solo cuando lo necesitas.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}