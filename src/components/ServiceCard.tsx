"use client";

import React from 'react';
import styles from './ServiceCard.module.css';
import Button from './Button';
import Image from 'next/image'; // Importa Image

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  buttonText: string;
  buttonLink: string;
  variant?: 'gradient-blue' | 'gradient-purple' | 'gradient-teal';
}

const ServiceCard = ({
  title,
  description,
  imageUrl,
  imageAlt,
  buttonText,
  buttonLink,
  variant = 'gradient-blue'
}: ServiceCardProps) => {
  return (
    <div className={`${styles.card} ${styles[variant]}`}>
      <div className={styles.imageContainer}>
        <Image
          src={imageUrl}
          alt={imageAlt}
          className={styles.image}
          fill
          style={{ objectFit: 'cover' }}
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