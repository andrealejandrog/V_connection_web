'use client';

import React from 'react';
import styles from './page.module.css';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';
import Paragraph from '@/components/Paragraph';
import Button from '@/components/Button';

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleGradient}>VITREA</span><br />
              Sensación de Seguridad
            </h1>
            <Paragraph className={styles.heroSubtitle}>
              Más de una década transformando hogares en Guatemala con tecnología inteligente
            </Paragraph>
            <div className={styles.buttonGroup}>
              <Button
                href="#quienes-somos"
                className={styles.ctaButton}
                aria-label="Conoce más sobre nosotros"
              >
                Conoce más
                <span className={styles.buttonArrow}>→</span>
              </Button>
              <Button
                href="/agenda-demo"
                variant="outline"
                className={styles.secondaryButton}
              >
                Agenda Demo
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <Image
            src="/images/showroom-vitrea.jpg"
            alt="Showroom VITREA"
            fill
            className={styles.heroImage}
            priority
            sizes="(max-width: 768px) 100vw, 100vw"
          />
          <div className={styles.imageOverlay}></div>
        </div>
      </section>

      {/* Sección Quiénes Somos */}
      <section id="quienes-somos" className={`${styles.section} ${styles.sectionAnimation}`}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <SectionTitle level={2} title="¿Quiénes somos?" className={styles.sectionTitle} />
            <Paragraph className={styles.aboutDescription}>
              Somos <strong>VITREA</strong>, líderes en sistemas de automatización y seguridad en Guatemala. 
              Desde 2010, hemos estado transformando hogares y negocios con tecnología inteligente 
              que combina diseño elegante con funcionalidad avanzada.
            </Paragraph>
            <Paragraph className={styles.aboutDescription}>
              Nuestro showroom en Zona 10 es un espacio donde puedes experimentar personalmente 
              cómo nuestra tecnología puede mejorar tu calidad de vida.
            </Paragraph>
            <Button
              href="/showroom"
              className={styles.ctaButton}
              style={{ marginTop: '2rem' }}
            >
              Visita nuestro Showroom
            </Button>
          </div>
          <div className={styles.aboutImage}>
            <Image
              src="/images/equipo-vitrea.jpg"
              alt="Equipo VITREA"
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* Sección Valores */}
      <section className={`${styles.partners} ${styles.sectionAnimation}`}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>Nuestra esencia</span>
          <SectionTitle
            title="Lo que nos define"
            level={2}
            className={styles.sectionTitle}
          />
        </div>
        <div className={styles.valuesGrid}>
          {[
            { title: 'Innovación', icon: '💡', desc: 'Siempre a la vanguardia tecnológica' },
            { title: 'Confianza', icon: '🤝', desc: 'Relaciones transparentes y duraderas' },
            { title: 'Excelencia', icon: '⭐', desc: 'Calidad en cada detalle' },
            { title: 'Seguridad', icon: '🛡️', desc: 'Protección integral para tu hogar' }
          ].map((value) => (
            <div key={value.title} className={styles.valueCard}>
              <div className={styles.valueIcon}>{value.icon}</div>
              <h3 className={styles.valueTitle}>{value.title}</h3>
              <Paragraph>{value.desc}</Paragraph>
            </div>
          ))}
        </div>
      </section>

      {/* Sección Showroom */}
      <section className={`${styles.sectionDark} ${styles.sectionAnimation}`}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutImage}>
            <Image
              src="/images/showroom-interior.jpg"
              alt="Interior del Showroom VITREA"
              fill
              className={styles.aboutImage}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className={styles.aboutText}>
            <SectionTitle level={2} title="Nuestro Showroom" className={styles.sectionTitle} />
            <Paragraph className={styles.aboutDescription}>
              Visita nuestro espacio exclusivo en Zona 10 y experimenta personalmente cómo la 
              tecnología inteligente puede transformar tu hogar.
            </Paragraph>
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>📍</span> Edificio Torino, Zona 10
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>🕒</span> Lunes a Viernes: 9:00 - 18:00
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>📅</span> Agenda tu visita con anticipación
              </li>
            </ul>
            <Button
              href="/agenda-demo"
              className={styles.secondaryButton}
              style={{ marginTop: '2rem' }}
            >
              Agenda tu visita
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}