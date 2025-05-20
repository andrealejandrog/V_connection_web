// src/components/PartnerLogo.tsx
"use client"; // Mantenemos esta directiva si es necesaria para tu setup

import React from 'react';
import styles from './PartnerLogo.module.css';
import ImageComponent from '@/components/ImageComponent';
import { StaticImageData } from 'next/image';

interface PartnerLogoProps {
  imageUrl: StaticImageData | string;
  alt: string;
  className?: string; // ¡AGREGADO: Ahora PartnerLogo puede recibir un className!
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ imageUrl, alt, className }) => ( // ¡MODIFICADO: className es aceptado aquí!
  // ¡MODIFICADO: Aplicamos el className recibido al div principal!
  <div className={`${styles.logoContainer} ${className || ''}`}>
    <ImageComponent src={imageUrl} alt={alt} fill style={{ objectFit: 'contain' }} />
  </div>
);

export default PartnerLogo;