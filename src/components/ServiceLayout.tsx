"use client";

import React from 'react';
import Image from 'next/image';
import Button from '@/components/Button';
import styles from './ServiceLayout.module.css';

interface ServiceLayoutProps {
  title: string;
  description: string;
  heroImage: string;
  sections: Array<{
    image?: string;
    title: string;
    content: React.ReactNode;
    reverse?: boolean;
  }>;
}

const ServiceLayout = ({ title, description, heroImage, sections }: ServiceLayoutProps) => {
  return (
    <div className={styles.serviceContainer}>
      <section className={styles.heroSection}>
        {/* ... */}
        <div className={styles.heroImage}>
          <Image
            src={heroImage.startsWith('/') ? heroImage : `/${heroImage}`} // Asegurar ruta correcta
            alt={title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 80vw"
            className={styles.image}
          />
        </div>
      </section>

      {/* Content Sections */}
      {sections.map((section, index) => (
        <section key={index} className={`${styles.contentSection} ${section.reverse ? styles.reverse : ''}`}>
          {section.image && (
            <div className={styles.sectionImage}>
              <Image
                src={section.image.startsWith('/') ? section.image : `/${section.image}`}
                alt={section.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={styles.image}
              />
            </div>
          )}
          {/* ... */}
        </section>
      ))}
    </div>
  );
};

export default ServiceLayout;