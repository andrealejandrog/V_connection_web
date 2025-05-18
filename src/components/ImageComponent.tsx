import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface ImageComponentProps {
  src: StaticImageData | string; // Can be StaticImageData or string for remote URLs
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  style?: React.CSSProperties;
  className?: string;
  priority?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({ src, alt, width, height, fill, style, className, priority }) => {
  if (fill) {
    return <Image src={src} alt={alt} fill style={style} className={className} priority={priority} />;
  }
  if (width && height) {
    return <Image src={src} alt={alt} width={width} height={height} style={style} className={className} priority={priority} />;
  }
  // Fallback for unoptimized images (e.g., remote URLs or missing dimensions)
  return <img src={src} alt={alt} className={className} style={style} />;
};

export default ImageComponent;