'use client';

import React from 'react';
import styles from './page.module.css';
import ImageComponent from '@/components/ImageComponent';
import SectionTitle from '@/components/SectionTitle';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';
import { FiFacebook, FiInstagram, FiMail } from 'react-icons/fi';

export default function ContactPage() {
  return (
    <main className={styles.container}>
      {/* Sección Hero */}
      <section className={styles.hero}>
        <ImageComponent
          src="/images/Vitrea-logo-blanco-02.png"
          alt="Logo Vitrea"
          width={800}
          height={183}
          className={styles.logo}
          priority
        />
      </section>

      {/* Contenido Principal */}
      <div className={styles.contentWrapper}>
        {/* Información de Contacto */}
        <section className={styles.contactSection}>
          <SectionTitle level={2} title="Contáctanos" />
          <Paragraph className={styles.leadText}>¿Hablamos?</Paragraph>
          
          <div className={styles.contactGrid}>
            <div className={styles.contactInfo}>
              <SectionTitle level={3} title="Ubicación y contacto" />
              <Paragraph className={styles.contactDetail}>
                <strong>Teléfonos:</strong><br />
                <a href="tel:+50222987512" className={styles.contactLink}>+502 2298-7512</a><br />
                <a href="tel:+50253196768" className={styles.contactLink}>+502 5319-6768</a>
              </Paragraph>
              
              <Paragraph className={styles.contactDetail}>
                <strong>Dirección:</strong><br />
                Edificio Torino Zona 10 Local 105
              </Paragraph>
              
              <div className={styles.socialLinks}>
                <a
                  href="https://www.facebook.com/Vconnectionguatemala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FiFacebook size={24} />
                </a>
                <a
                  href="mailto:info@v-connection.com.gt"
                  className={styles.socialLink}
                >
                  <FiMail size={24} />
                </a>
                <a
                  href="https://www.instagram.com/v_connectiongt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FiInstagram size={24} />
                </a>
              </div>
            </div>

            {/* Mapa */}
            <div className={styles.mapContainer}>
              <iframe
                src="https://maps.google.com/maps?q=Edificio%20Torino&t=m&z=18&output=embed&iwloc=near"
                title="Ubicación Edificio Torino"
                className={styles.mapIframe}
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Sección Email */}
        <section className={styles.emailSection}>
          <SectionTitle level={4} title="Email" />
          <Paragraph className={styles.emailText}>
            Para cualquier consulta te dejamos nuestro email
          </Paragraph>
          <Button
            href="mailto:info@v-connection.com.gt"
            variant="outline"
            className={styles.emailButton}
          >
            info@v-connection.com.gt
          </Button>
        </section>
      </div>
    </main>
  );
}