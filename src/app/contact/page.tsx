"use client"; // ¡IMPORTANTE! Marca este componente como Client Component

import React from 'react'; // Importa React
import styles from './page.module.css';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import ContactForm from '@/components/ContactForm';
import { useLanguage } from '@/app/contexts/LanguageContext'; // Importa el hook de idioma

export default function ContactPage() {
  const { t } = useLanguage(); // Usa el hook para obtener la función de traducción

  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          {t('contact', 'heroTitle')} {/* Usando la traducción */}
        </h1>
        <p className={styles.heroSubtitle}>
          {t('contact', 'heroSubtitle')} {/* Usando la traducción */}
        </p>
      </section>

      {/* Main Content Grid (Contact Form, Info & Map) */}
      <section className={styles.contentGridWrapper}>
        <div className={styles.infoMapSection}>
          {/* PRIMERA COLUMNA: FORMULARIO DE CONTACTO */}
          <ContactForm />

          {/* SEGUNDA COLUMNA: INFORMACIÓN DE CONTACTO */}
          <div className={styles.contactInfoCard}>
            <h2 className={styles.cardTitle}>{t('contact', 'contactInfoCardTitle')}</h2> {/* Usando la traducción */}
            <p className={styles.cardSubtitle}>
              {t('contact', 'contactInfoCardSubtitle')} {/* Usando la traducción */}
            </p>

            <div className={styles.contactDetailItem}>
              <FiPhone className={styles.contactIcon} />
              <div>
                <span className={styles.detailLabel}>{t('contact', 'phoneLabel')}</span> {/* Usando la traducción */}
                <a href="tel:+50230588632" className={styles.contactLink}>+502 3058 8632</a>
              </div>
            </div>

            <div className={styles.contactDetailItem}>
              <FiMail className={styles.contactIcon} />
              <div>
                <span className={styles.detailLabel}>{t('contact', 'emailLabel')}</span> {/* Usando la traducción */}
                <a href="mailto:info@v-connection.com.gt" className={styles.contactLink}>info@v-connection.com.gt</a>
              </div>
            </div>

            <div className={styles.contactDetailItem}>
              <FiMapPin className={styles.contactIcon} />
              <div>
                <span className={styles.detailLabel}>{t('contact', 'locationLabel')}</span> {/* Usando la traducción */}
                <address className={styles.contactAddress}>
                  {t('contact', 'address')} {/* Usando la traducción */}
                </address>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/Vconnectionguatemala" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="https://www.instagram.com/v_connectiongt/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <FiInstagram />
              </a>
            </div>
          </div>

          {/* TERCERA COLUMNA: MAPA */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.1901068397983!2d-90.50673768916164!3d14.588240677320004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a39587c63aa7%3A0xeabb2473a4e3f1f0!2sEdificio%20Torino%2C%2019-70%2C%2017%20Avenida%2C%20Ciudad%20de%20Guatemala%2001010!5e0!3m2!1ses!2sgt!4v1752075228019!5m2!1ses!2sgt"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
              title="V-Connection Location"
            ></iframe>
          </div>
        </div>
      </section>
    </main>
  );
}