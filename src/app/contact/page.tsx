// app/contact/page.tsx
'use client';

import React from 'react';
import styles from './page.module.css';
// import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import Paragraph from '@/components/Paragraph';
// import Button from '@/components/Button';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';

// Importa el logo de V-Connection
// import VcLogo from '../../public/vc-removebg-preview.png';

export default function ContactPage() {
  return ( // <--- Asegúrate de que no hay un ">" aquí
    <main className={styles.main}>
      {/* Sección Hero */}
      <section className={styles.heroSection}>
        {/* <Image
          src={VcLogo}
          alt="V-Connection Logo"
          width={800}
          height={183}
          className={styles.heroLogo}
          priority
        /> */}
        <h1 className={styles.heroTitle}>Conéctate con el Futuro</h1>
        <Paragraph className={styles.heroSubtitle}>
          ¿Listo para transformar tu espacio con tecnología inteligente? Estamos aquí para ayudarte.
        </Paragraph>
      </section>

      {/* Contenido Principal */}
      <div className={styles.contentGridWrapper}>
        {/* Información de Contacto y Mapa */}
        <section className={styles.infoMapSection}>
          <div className={styles.contactInfoCard}>
            <SectionTitle level={2} title="Información de Contacto" className={styles.cardTitle} />
            <Paragraph className={styles.cardSubtitle}>Nos encantaría escucharte.</Paragraph>

            <div className={styles.contactDetailItem}>
              <FiPhone size={24} className={styles.contactIcon} />
              <div>
                <span className={styles.detailLabel}>Llámanos</span>
                <a href="tel:+50222987512" className={styles.contactLink}>+502 2298-7512</a><br />
                <a href="tel:+50253196768" className={styles.contactLink}>+502 5319-6768</a>
              </div>
            </div>

            <div className={styles.contactDetailItem}>
              <FiMail size={24} className={styles.contactIcon} /> {/* Corregido styles={styles.contactIcon} a className={styles.contactIcon} */}
              <div>
                <span className={styles.detailLabel}>Envíanos un Email</span>
                <a href="mailto:info@v-connection.com.gt" className={styles.contactLink}>info@v-connection.com.gt</a>
              </div>
            </div>

            <div className={styles.contactDetailItem}>
              <FiMapPin size={24} className={styles.contactIcon} />
              <div>
                <span className={styles.detailLabel}>Visítanos</span>
                <address className={styles.contactAddress}>
                  Edificio Torino, Zona 10, Local 105<br />
                  17 Avenida, Ciudad de Guatemala 01010, Guatemala
                </address>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/Vconnectionguatemala"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Facebook"
              >
                <FiFacebook size={28} />
              </a>
              <a
                href="https://www.instagram.com/v_connectiongt/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram"
              >
                <FiInstagram size={28} />
              </a>
            </div>
          </div>

          {/* Mapa */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3874.5204123530665!2d-90.52848552554743!3d14.606782877545938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a1f5c6b9d62d%3A0xc3f1a0e1c0c1b4b7!2sEdificio%20Torino!5e0!3m2!1ses!2sgt!4v1700000000000!5m2!1ses!2sgt"
              title="Ubicación Edificio Torino, Zona 10, Guatemala"
              className={styles.mapIframe}
              loading="lazy"
              allowFullScreen={true}
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
      </div>

      {/* Sección Agenda Demo */}
      {/* <section className={styles.ctaSection}>
        <SectionTitle level={2} title="¿Listo para una demostración?" className={styles.ctaTitle} />
        <Paragraph className={styles.ctaText}>
          Agenda una demostración personalizada en nuestro showroom para experimentar el futuro de tu hogar.
        </Paragraph>
        <Button
          href="/agenda-demo"
          variant="solid"
          className={styles.ctaButton}
        >
          Agenda una Demo
        </Button>
      </section> */}
    </main>
  );
}