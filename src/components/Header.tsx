"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './Header.module.css';

// import vcLogo from '../../public/images/logo-vc.png'; // <--- Usamos la ruta absoluta '/images/logo-vc.png'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Servicios', href: '/#servicios' },
    { name: 'Nosotros', href: '/about' },
  ];

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoContainer}>
          <Image
            src='/images/logo-vc.png' // Usa la variable importada
            alt="V-Connection Logo"
            width={160}
            height={40}
            priority
            className={styles.headerLogo}
          />
        </Link>

        {/* Menú Desktop */}
        <nav className={styles.navDesktop}>
          <ul className={styles.navList}>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
                <Link
                    href="/contact"
                    className={styles.navLink}
                    onClick={() => setIsMenuOpen(false)}
                >
                    Contacto
                </Link>
            </li>
          </ul>
        </nav>

        {/* Botón CTA Desktop */}
        <div className={styles.ctaDesktop}>
          <Button href="/contact" variant="secondary">
            Agenda Demo
          </Button>
        </div>

        {/* Menú Mobile */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú móvil"
        >
          <span className={styles.menuIcon}></span>
        </button>
      </div>

      {/* Menú Mobile Content */}
      <div className={styles.mobileMenuWrapper}>
        <nav className={styles.navMobile}>
          <ul className={styles.navListMobile}>
            {navigation.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className={styles.navLinkMobile}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Button
                href="/contact"
                className={styles.mobileCta}
                fullWidth
                variant="solid"
                onClick={() => setIsMenuOpen(false)}
              >
                Agenda Demo
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;