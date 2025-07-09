// src/components/Header.tsx
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './Header.module.css';
import { useLanguage } from '../app/contexts/LanguageContext';

const Header = () => {
  const { language, changeLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false); 

  const navigation = [
    { nameKey: 'homeLink', href: '/' },
    { nameKey: 'servicesLink', href: '/#servicios' },
    { nameKey: 'aboutLink', href: '/about' },
  ];

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLanguageToggle = () => {
    const newLang = language === 'es' ? 'en' : 'es';
    changeLanguage(newLang);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        <Link href="/" className={styles.logoContainer} onClick={isMenuOpen ? closeMenu : undefined}>
          <Image
            src='/images/logo-vc.png'
            alt="V-Connection Logo"
            width={160}
            height={40}
            priority
            className={styles.headerLogo}
          />
        </Link>

        <nav className={styles.navDesktop}>
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.nameKey}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  onClick={closeMenu}
                >
                  {t('common', item.nameKey)}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={styles.navLink}
                onClick={closeMenu}
              >
                {t('common', 'contactLink')}
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.ctaDesktopWrapper}>
            <Button href="/contact" variant="secondary" onClick={closeMenu}>
                {t('common', 'scheduleDemoButton')}
            </Button>
        </div>
        
        {hasMounted && (
          <button
            onClick={handleLanguageToggle}
            className={styles.languageToggleButton}
            aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
          >
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        )}

        <button
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-label={t('common', 'mobileMenuButton')}
        >
          <span className={styles.menuIcon}></span>
        </button>
      </div>

      {isMenuOpen && (
        <div
          className={styles.mobileMenuWrapper}
          onClick={closeMenu}
        >
          <nav
            className={styles.navMobile}
            onClick={(e) => e.stopPropagation()}
          >
            <ul className={styles.navListMobile}>
              {navigation.map((item) => (
                <li key={item.nameKey}>
                  <Link
                    href={item.href}
                    className={styles.navLinkMobile}
                    onClick={closeMenu}
                  >
                    {t('common', item.nameKey)}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className={styles.navLinkMobile}
                  onClick={closeMenu}
                >
                  {t('common', 'contactLink')}
                </Link>
              </li>
              <li>
                <Button
                  href="/contact"
                  className={`${styles.mobileCta} ${styles.mobileCtaOverride}`}
                  fullWidth
                  variant="solid"
                  onClick={(e) => {
                    e.stopPropagation();
                    closeMenu();
                  }}
                  style={{
                    background: 'linear-gradient(90deg, #a88a38 0%, #C7A246 100%)',
                    border: 'none',
                    color: '#ffffff',
                  }}
                >
                  {t('common', 'scheduleDemoButton')}
                </Button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;