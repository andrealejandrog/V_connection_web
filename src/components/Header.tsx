// src/components/Header.tsx
"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Logo from '@/components/Logo';
import Button from '@/components/Button'; // Asegúrate de que este Button.tsx haya sido modificado para aceptar 'secondary'
import styles from './Header.module.css';

// *** IMPORTANTE: Importa tu imagen de logo aquí. Esto la convierte a StaticImageData. ***
import vitreaLogo from '../../public/images/Vitrea-logo-blanco-02.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { name: 'Inicio', href: '/' },
    { name: 'Showroom', href: '/showroom' },
    { name: 'Nosotros', href: '/about' },
  ];

  return (
    <header className={`${styles.header} ${isMenuOpen ? styles.menuOpen : ''}`}>
      <div className={styles.container}>
        {/* Logo */}
        <Link href="/" className={styles.logoContainer}>
          <Logo
            src={vitreaLogo} // *** Usa la variable importada aquí, no la cadena de texto ***
            alt="Vitrea Smart Home"
            width={160}
            height={40}
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
          </ul>
        </nav>

        {/* Botón CTA Desktop */}
        <div className={styles.ctaDesktop}>
          {/*
            Asegúrate de que tu componente Button en 'src/components/Button.tsx'
            tenga 'secondary' incluido en su interfaz de 'variant'
            (ej: variant?: 'outline' | 'solid' | 'text' | 'secondary';)
          */}
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
              {/*
                Asegúrate de que tu componente Button soporte la prop 'fullWidth'
                en su interfaz y que 'solid' (o el variant que uses) sea válido.
              */}
              <Button
                href="#contacto" // Considera cambiar a "/contact" para consistencia
                className={styles.mobileCta}
                fullWidth // Asegúrate de que Button.tsx maneje esta prop
                variant="solid" // Ejemplo, ajusta si necesitas otro variant específico para móvil
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