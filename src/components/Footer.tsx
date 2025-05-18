"use client";

import React from 'react';
import Link from 'next/link';
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
            <span>Certificado por </span>
            <a 
              href="https://www.vitrea-sh.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.certificationLink}
            >
              Vitrea Smart Home
            </a>
          </div>
        </div>

        {/* Enlaces rápidos */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Enlaces rápidos</h4>
          <ul className={styles.linkList}>
            <li><Link href="/servicios" className={styles.footerLink}>Servicios</Link></li>
            <li><Link href="/proyectos" className={styles.footerLink}>Proyectos</Link></li>
            <li><Link href="/contacto" className={styles.footerLink}>Contacto</Link></li>
          </ul>
        </div>

        {/* Legal */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Legal</h4>
          <ul className={styles.linkList}>
            <li><Link href="/legal/terminos" className={styles.footerLink}>Términos y Condiciones</Link></li>
            <li><Link href="/legal/privacidad" className={styles.footerLink}>Política de Privacidad</Link></li>
            <li><Link href="/legal/cookies" className={styles.footerLink}>Política de Cookies</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Contacto</h4>
          <ul className={styles.contactInfo}>
            <li>✉️ <a href="mailto:info@v-connection.com.gt" className={styles.footerLink}>info@v-connection.com.gt</a></li>
            <li>📞 <a href="tel:+50222987512" className={styles.footerLink}>(502) 2298-7512</a></li>
            <li>📍 Edificio Torino, Zona 10</li>
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