import React from 'react';
import Image from 'next/image';

interface LogoProps {
  src: StaticImageData; // Import type for static image data
  alt: string;
  width: number;
  height: number;
}

const Logo: React.FC<LogoProps> = ({ src, alt, width, height }) => (
  <Image src={src} alt={alt} width={width} height={height} priority />
);

export default Logo;