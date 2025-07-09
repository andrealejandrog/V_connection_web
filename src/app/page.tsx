// app/page.tsx
"use client";

import React, { useEffect } from 'react';
import styles from './page.module.css';
import SectionTitle from '@/components/SectionTitle';
import Paragraph from '@/components/Paragraph';
import ImageComponent from '@/components/ImageComponent';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import PartnerLogo from '@/components/PartnerLogo';
import { useLanguage } from './contexts/LanguageContext';

const heroImagePath = '/images/white-living-room-furniture.webp';
const controladorDomoticaPath = '/images/c419fb0ce87e9e1ae39ea83a9f66e340.webp';

const partnerLogoPaths = {
  partner1: '/images/partners/partnet5.png',
  partner2: '/images/partners/partner2.png',
  partner3: '/images/partners/partner3.png',
  partner4: '/images/partners/partner4.png',
  partner5: '/images/partners/partner1.png', 
  partner6: '/images/partners/partner8.png',
  partner7: '/images/partners/partner9.png',
  partner8: '/images/partners/partner10.png',
  partner9: '/images/partners/partner11.png',
  partner10: '/images/partners/partner6.png',
  partner11: '/images/partners/partner7.png',
  partner12: '/images/partners/partner12.png',
  partner13: '/images/partners/partner13.png',
  partner14: '/images/partners/partner14.png',
  partner15: '/images/partners/partner15.png',
  partner16: '/images/partners/partner16.png',
  partner17: '/images/partners/partner17.png',
  partner18: '/images/partners/partner18.png',
  partner19: '/images/partners/partner19.png',
  partner20: '/images/partners/partner20.png',
  partner21: '/images/partners/partner21.png',
  partner22: '/images/partners/partner22.jpg',
  partner23: '/images/partners/partner23.png',
  partner24: '/images/partners/partner24.png',
};

const servicesData = [
  {
    titleKey: "serviceIoTTitle",
    // CAMBIO AQUÍ: Usamos una clave para la descripción
    descriptionKey: "serviceIoTDescription", 
    imageUrl: "/images/Iot_s.jpg",
    imageAltKey: "serviceIoTAlt",
    buttonTextKey: "viewMoreButton", 
    buttonLink: "/servicios/iot",
  },
  {
    titleKey: "serviceAccessControlTitle",
    // CAMBIO AQUÍ: Usamos una clave para la descripción
    descriptionKey: "serviceAccessControlDescription", 
    imageUrl: "/images/CA.jpg",
    imageAltKey: "serviceAccessControlAlt",
    buttonTextKey: "viewMoreButton",
    buttonLink: "/servicios/control-de-accesos",
  },
  {
    titleKey: "serviceSmartGatesTitle",
    // CAMBIO AQUÍ: Usamos una clave para la descripción
    descriptionKey: "serviceSmartGatesDescription", 
    imageUrl: "/images/porton.jpg",
    imageAltKey: "serviceSmartGatesAlt",
    buttonTextKey: "viewMoreButton",
    buttonLink: "/servicios/Portones-Inteligentes",
  },
  {
    titleKey: "serviceSmartFilmTitle",
    // CAMBIO AQUÍ: Usamos una clave para la descripción
    descriptionKey: "serviceSmartFilmDescription", 
    imageUrl: "/images/sf.jpg",
    imageAltKey: "serviceSmartFilmAlt",
    buttonTextKey: "viewMoreButton",
    buttonLink: "/servicios/smartfilm",
  },
  {
    titleKey: "serviceACCTitle",
    // CAMBIO AQUÍ: Usamos una clave para la descripción
    descriptionKey: "serviceACDescription", 
    imageUrl: "/images/AC-Thermostat-1-300x221.png",
    imageAltKey: "serviceACCAlt",
    buttonTextKey: "viewMoreButton",
    buttonLink: "/servicios/aire-acondicionado/",
  },
  {
    titleKey: "serviceCamerasTitle",
    // CAMBIO AQUÍ: Usamos una clave para la descripción
    descriptionKey: "serviceCamerasDescription", 
    imageUrl: "/images/camera.jpg",
    imageAltKey: "serviceCamerasAlt",
    buttonTextKey: "viewMoreButton",
    buttonLink: "/servicios/camaras-de-seguridad",
  },
  {
    titleKey: "serviceLightingTitle",
    // CAMBIO AQUÍ: Usamos una clave para la descripción
    descriptionKey: "serviceLightingDescription", 
    imageUrl: "/images/ilumina.jpg",
    imageAltKey: "serviceLightingAlt",
    buttonTextKey: "viewMoreButton",
    buttonLink: "/servicios/iluminacion/",
  },
  {
    titleKey: "serviceNetworksTitle",
    // CAMBIO AQUÍ: Usamos una clave para la descripción
    descriptionKey: "serviceNetworksDescription", 
    imageUrl: "/images/aero.jpg",
    imageAltKey: "serviceNetworksAlt",
    buttonTextKey: "viewMoreButton",
    buttonLink: "/servicios/redes",
  },
  {
    titleKey: "serviceProfessionalAudioTitle",
    // CAMBIO AQUÍ: Usamos una clave para la descripción
    descriptionKey: "serviceProfessionalAudioDescription", 
    imageUrl: "/images/audio.jpg",
    imageAltKey: "serviceProfessionalAudioAlt",
    buttonTextKey: "viewMoreButton",
    buttonLink: "/servicios/audio",
  },
];

const partnersData = [
  { imageUrl: partnerLogoPaths.partner1, altKey: "partner1Alt" },
  { imageUrl: partnerLogoPaths.partner2, altKey: "partner2Alt" },
  { imageUrl: partnerLogoPaths.partner3, altKey: "partner3Alt" },
  { imageUrl: partnerLogoPaths.partner4, altKey: "partner4Alt" },
  { imageUrl: partnerLogoPaths.partner5, altKey: "partner5Alt" }, 
  { imageUrl: partnerLogoPaths.partner6, altKey: "partner6Alt" },
  { imageUrl: partnerLogoPaths.partner7, altKey: "partner7Alt" },
  { imageUrl: partnerLogoPaths.partner8, altKey: "partner8Alt" },
  { imageUrl: partnerLogoPaths.partner9, altKey: "partner9Alt" },
  { imageUrl: partnerLogoPaths.partner10, altKey: "partner10Alt" },
  { imageUrl: partnerLogoPaths.partner11, altKey: "partner11Alt" },
  { imageUrl: partnerLogoPaths.partner12, altKey: "partner12Alt" },
  { imageUrl: partnerLogoPaths.partner13, altKey: "partner13Alt" },
  { imageUrl: partnerLogoPaths.partner14, altKey: "partner14Alt" },
  { imageUrl: partnerLogoPaths.partner15, altKey: "partner15Alt" },
  { imageUrl: partnerLogoPaths.partner16, altKey: "partner16Alt" },
  { imageUrl: partnerLogoPaths.partner17, altKey: "partner17Alt" },
  { imageUrl: partnerLogoPaths.partner18, altKey: "partner18Alt" },
  { imageUrl: partnerLogoPaths.partner19, altKey: "partner19Alt" },
  { imageUrl: partnerLogoPaths.partner20, altKey: "partner20Alt" },
  { imageUrl: partnerLogoPaths.partner21, altKey: "partner21Alt" },
  { imageUrl: partnerLogoPaths.partner22, altKey: "partner22Alt" },
  { imageUrl: partnerLogoPaths.partner23, altKey: "partner23Alt" },
  { imageUrl: partnerLogoPaths.partner24, altKey: "partner24Alt" },
];

export default function HomePage() {
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        entry.target.classList.toggle(styles['in-view'], entry.isIntersecting);
      });
    }, { threshold: 0.1 });

    const animatableElements = document.querySelectorAll(`
      .${styles.sectionHeader},
      .${styles.servicesGrid} > *,
      .${styles.aboutContent},
      .${styles.featuresList} > *,
      .${styles.partnersGrid} > *
    `);

    animatableElements.forEach(el => observer.observe(el));

    return () => animatableElements.forEach(el => observer.unobserve(el));
  }, []);

  const currentDomain = "https://v-connection-webpage.web.app";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": t('schema', 'organizationName'),
    "url": currentDomain,
    "logo": `${currentDomain}/images/Vitrea-logo-blanco-02.png`, 
    "sameAs": [
      "https://www.vitrea-sh.com",
      "https://www.facebook.com/Vconnectionguatemala",
      "https://www.instagram.com/v_connectiongt/"
    ]
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "HomeAutomationCompany", 
    "name": t('schema', 'businessName'),
    "image": `${currentDomain}/images/white-living-room-furniture.webp`,
    "url": currentDomain,
    "telephone": "+50222987512",
    "email": "mailto:info@v-connection.com.gt",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": t('schema', 'addressStreet'),
      "addressLocality": t('schema', 'addressLocality'),
      "addressRegion": t('schema', 'addressRegion'),
      "postalCode": "01010",
      "addressCountry": "GT"
    },
    "sameAs": [
      "https://www.vitrea-sh.com",
      "https://www.facebook.com/Vconnectionguatemala",
      "https://www.instagram.com/v_connectiongt/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": currentDomain,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${currentDomain}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <main className={styles.main}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <header className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              <span className={styles.titleGradient}>{t('home', 'heroTitlePart1')}</span> {t('home', 'heroTitlePart2')}
              <br />
              <span className={styles.titleHighlight}>{t('home', 'heroTitlePart3')}</span>
            </h1>
            <Paragraph className={styles.heroSubtitle}>
              {t('home', 'heroSubtitle')}
            </Paragraph>
            <div className={styles.buttonGroup}>
              <Button
                href="#servicios"
                className={styles.ctaButton}
                ariaLabel={t('home', 'exploreServicesAriaLabel')}
              >
                {t('home', 'discoverHowButton')}
                <span className={styles.buttonArrow}>→</span>
              </Button>
              <Button
                href="/contact"
                variant="outline"
                className={styles.secondaryButton}
              >
                {t('common', 'scheduleDemoButton')}
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageContainer}>
            <ImageComponent
              src={heroImagePath}
              alt={t('home', 'heroImageAlt')}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 60vw"
              className={styles.heroImage}
            />
          </div>
          <div className={styles.imageOverlay}></div>
        </div>
      </header>

      <section id="servicios" className={styles.services}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>{t('home', 'servicesBadge')}</span>
          <SectionTitle
            title={t('home', 'servicesSectionTitle')}
            level={2}
            className={styles.sectionTitle}
          />
        </div>
        <div className={styles.servicesGrid}>
          {servicesData.map((service) => (
            <ServiceCard
              key={service.titleKey}
              title={t('home', service.titleKey)}
              // CAMBIO AQUÍ: Traducimos la descripción
              description={t('home', service.descriptionKey)} 
              imageUrl={service.imageUrl}
              imageAlt={t('home', service.imageAltKey)}
              buttonText={t('common', service.buttonTextKey)} 
              buttonLink={service.buttonLink}
            />
          ))}
        </div>
      </section>

      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <div className={styles.aboutText}>
            <SectionTitle
              title={t('home', 'aboutSectionTitle')}
              level={2}
              className={styles.sectionTitle}
            />
            <ul className={styles.featuresList}>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>📐</span>
                {t('home', 'designFeature')}
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>💡</span>
                {t('home', 'adviseFeature')}
              </li>
              <li className={styles.featureItem}>
                <span className={styles.featureIcon}>🛠️</span>
                {t('home', 'installFeature')}
              </li>
            </ul>
          </div>
          <div className={styles.aboutImage}>
            <ImageComponent
              src={controladorDomoticaPath}
              alt={t('home', 'aboutImageAlt')}
              fill
              className={styles.aboutImage}
            />
          </div>
        </div>
      </section>

      <section className={styles.partners}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionBadge}>{t('home', 'partnersBadge')}</span>
          <SectionTitle
            title={t('home', 'partnersSectionTitle')}
            level={2}
            className={styles.sectionTitle}
          />
        </div>
        <div className={styles.partnersGrid}>
          {partnersData.map((partner, index) => (
            <PartnerLogo
              key={index} 
              imageUrl={partner.imageUrl}
              alt={t('home', partner.altKey)}
              className={styles.partnerLogo}
            />
          ))}
        </div>
      </section>
    </main>
  );
}