// src/app/contact/page.tsx
import styles from './page.module.css';
// import Button from '@/components/Button';
import { FiFacebook, FiInstagram, FiMail, FiPhone, FiMapPin } from 'react-icons/fi';
import ContactForm from '@/components/ContactForm'; // Importa el nuevo componente de formulario de contacto

// Importa el logo de V-Connection
// import VcLogo from '../../public/vc-removebg-preview.png';

export default function ContactPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        {/* Si quieres poner un logo aquí, descomenta esto */}
        {/* <img src={VcLogo.src} alt="V-Connection Logo" className={styles.heroLogo} /> */}
        <h1 className={styles.heroTitle}>
          Conéctate con Nosotros
        </h1>
        <p className={styles.heroSubtitle}>
          ¿Listo para transformar tu visión en realidad? Contáctanos hoy mismo para comenzar tu proyecto. Estamos aquí para escuchar tus ideas y ayudarte a construir el futuro digital de tu negocio.
        </p>
      </section>

      {/* Main Content Grid (Contact Form, Info & Map) */}
      <section className={styles.contentGridWrapper}>
        <div className={styles.infoMapSection}>
          {/* PRIMERA COLUMNA: FORMULARIO DE CONTACTO */}
          <ContactForm />

          {/* SEGUNDA COLUMNA: INFORMACIÓN DE CONTACTO */}
          <div className={styles.contactInfoCard}>
            <h2 className={styles.cardTitle}>Información de Contacto</h2>
            <p className={styles.cardSubtitle}>
              Estamos listos para ayudarte. ¡No dudes en contactarnos a través de cualquiera de los siguientes canales!
            </p>

            <div className={styles.contactDetailItem}>
              <FiPhone className={styles.contactIcon} />
              <div>
                <span className={styles.detailLabel}>Teléfono:</span>
                <a href="tel:+50230588632" className={styles.contactLink}>+502 3058 8632</a>
              </div>
            </div>

            <div className={styles.contactDetailItem}>
              <FiMail className={styles.contactIcon} />
              <div>
                <span className={styles.detailLabel}>Email:</span>
                <a href="mailto:info@vconnection.net" className={styles.contactLink}>info@vconnection.net</a>
              </div>
            </div>

            <div className={styles.contactDetailItem}>
              <FiMapPin className={styles.contactIcon} />
              <div>
                <span className={styles.detailLabel}>Ubicación:</span>
                <address className={styles.contactAddress}>
                  Guatemala, Ciudad de Guatemala
                </address>
              </div>
            </div>

            <div className={styles.socialLinks}>
              <a href="https://www.facebook.com/vconnectionGT" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <FiFacebook />
              </a>
              <a href="https://www.instagram.com/vconnection_gt/" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <FiInstagram />
              </a>
              {/* <a href="#" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="LinkedIn">
                <FiLinkedin />
              </a> */}
            </div>
          </div>

          {/* TERCERA COLUMNA: MAPA */}
          <div className={styles.mapContainer}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15433.87508688439!2d-90.52844583151853!3d14.61904791556094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8589a19d7b87c71b%3A0x6b772b2d0b5d9d70!2sGuatemala%20City%2C%20Guatemala!5e0!3m2!1sen!2sgt!4v1700000000000!5m2!1sen!2sgt"
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className={styles.mapIframe}
              title="V-Connection Location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Call to Action Section (Comentada en tu CSS) */}
      {/* <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>¿Listo para empezar?</h2>
        <p className={styles.ctaText}>
          Agenda una demostración gratuita con nuestro equipo y descubre cómo podemos ayudarte a alcanzar tus objetivos digitales.
        </p>
        <Button href="/contact" className={styles.ctaButton}>
          Agenda una Demo
        </Button>
      </section> */}
    </main>
  );
}