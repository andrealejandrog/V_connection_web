// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link'; // <--- ¡Importa Link de Next.js!
import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        {/* Sección de información */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>V-Connection</h4>
          <p className={styles.companyInfo}>
            Especialistas en automatización residencial e integración tecnológica
          </p>
          <div className={styles.certification}>
            <span>Certified by </span>
            {/* El texto "Vitrea Smart Home" sigue siendo un enlace */}
            <a
              href="https://www.vitrea-sh.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificationLink}
            >
            </a>
            {/* Aquí es donde envolvemos el logo de Vitrea con Link */}
            <Link
              href="https://www.vitrea-sh.com" // <--- La URL a la que quieres que dirija el logo
              target="_blank" // <--- Abre en una nueva pestaña (opcional)
              rel="noopener noreferrer" // <--- Buena práctica para target="_blank"
            >
              <Image
                src="/images/Vitrea-logo-blanco-02.png" // <--- Tu ruta de imagen
                alt="Vitrea Smart Home Logo"
                width={24}
                height={24}
                className={styles.vitreaLogo}
              />
            </Link>
          </div>
        </div>
{/*
        Legal
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Legal</h4>
          <ul className={styles.linkList}>
            <li><Link href="/legal/terminos" className={styles.footerLink}>Términos y Condiciones</Link></li>
            <li><Link href="/legal/privacidad" className={styles.footerLink}>Política de Privacidad</Link></li>
            <li><Link href="/legal/cookies" className={styles.footerLink}>Política de Cookies</Link></li>
          </ul>
        </div> */}

        {/* Contacto */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Contacto</h4>
          <ul className={styles.contactInfo}>
            <li>✉️ <a href="mailto:info@v-connection.com.gt" className={styles.footerLink}>info@v-connection.com.gt</a></li>
            <li>📞 <a href="tel:+50222987512" className={styles.footerLink}>(502) 2298-7512</a></li>
            <li>📍 Edificio Torino, Zona 10, 19-70, 17 Avenida, Ciudad de Guatemala 01010, Guatemala</li>
          </ul>
        </div>
      </div>

      {/* Derechos de autor */}
      <div className={styles.copyRight}>
        <p>© {new Date().getFullYear()} V-Connection. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;