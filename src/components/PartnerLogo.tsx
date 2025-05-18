import React from 'react';
import styles from './PartnerLogo.module.css';
import ImageComponent from '@/components/ImageComponent';
import { StaticImageData } from 'next/image';

interface PartnerLogoProps {
  imageUrl: StaticImageData | string;
  alt: string;
}

const PartnerLogo: React.FC<PartnerLogoProps> = ({ imageUrl, alt }) => (
  <div className={styles.logoContainer}>
    <ImageComponent src={imageUrl} alt={alt} fill style={{ objectFit: 'contain' }} />
  </div>
);

export default PartnerLogo;