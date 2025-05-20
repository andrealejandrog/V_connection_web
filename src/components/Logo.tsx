// src/components/Logo.tsx
import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image'; // ¡AGREGA ESTA LÍNEA!

interface LogoProps {
  src: StaticImageData; // Ahora este tipo será reconocido
  alt: string;
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ src, alt, width, height }) => (
  <Image src={src} alt={alt} width={width} height={height} priority />
);

export default Logo;