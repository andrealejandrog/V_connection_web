// components/ServiceCard.tsx
"use client";

import React from 'react';
import styles from './ServiceCard.module.css';
import Button from './Button'; // Asegúrate de que esta ruta sea correcta
import Image from 'next/image';

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'gradient-blue' | 'gradient-gold' | 'gradient-dark'; // Tus variantes existentes
  // --- ¡AÑADIR ESTA LÍNEA PARA SOLUCIONAR EL ERROR DE TYPESCRIPT! ---
  className?: string; // Permite pasar una clase adicional desde el componente padre
  // ------------------------------------------------------------------
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  buttonText,
  buttonLink,
  variant = 'gradient-blue',
  className, // <-- Asegúrate de desestructurar 'className' aquí
}: ServiceCardProps) => {
  return (
    // Combina la clase pasada (className) con las clases de tu módulo CSS
    // 'styles.card' y 'styles[variant]'
    <div className={`${styles.card} ${styles[variant]} ${className || ''}`}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          fill
          style={{ objectFit: 'cover' }}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <Button
        href={buttonLink}
        className={styles.button}
        ariaLabel={`Ver más sobre ${title}`}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default ServiceCard;