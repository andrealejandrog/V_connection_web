// components/Footer.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import { useLanguage } from '@/app/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>{t('footer', 'companySectionTitle')}</h4>
          <p className={styles.companyInfo}>
            {t('footer', 'companyInfo')}
          </p>
          <div className={styles.certification}>
            <span>{t('footer', 'certifiedBy')} </span>
            <a
              href="https://www.vitrea-sh.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.certificationLink}
            >
            </a>
            <Link
              href="https://www.vitrea-sh.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/Vitrea-logo-blanco-02.png"
                alt={t('footer', 'vitreaLogoAlt')}
                width={24}
                height={24}
                className={styles.vitreaLogo}
              />
            </Link>
          </div>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>{t('footer', 'contactSectionTitle')}</h4>
          <ul className={styles.contactInfo}>
            <li>✉️ <a href="mailto:info@v-connection.com.gt" className={styles.footerLink}>{t('footer', 'emailAddress')}</a></li>
            <li>📞 <a href="tel:+50222987512" className={styles.footerLink}>{t('footer', 'phoneNumber')}</a></li>
            <li>📍 {t('footer', 'addressLine1')}</li>
          </ul>
        </div>
      </div>

      <div className={styles.copyRight}>
        <p>© {new Date().getFullYear()} {t('footer', 'copyrightText')}</p>
      </div>
    </footer>
  );
};

export default Footer;