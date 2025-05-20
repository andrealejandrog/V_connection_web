import React from 'react';
import Image, { ImageProps, StaticImageData } from 'next/image';

interface ImageComponentProps extends Omit<ImageProps, 'alt'> { // Omitimos 'alt' de ImageProps
  src: StaticImageData | string;
  alt: string;
  className?: string;
  priority?: boolean;
}

const ImageComponent: React.FC<ImageComponentProps> = ({
  src,
  alt,
  width,
  height,
  fill,
  style,
  className,
  priority,
  sizes,
  ...props
}) => {
  const sharedProps = {
    src,
    style,
    className,
    priority,
    sizes,
    ...props
  };

  if (fill) {
    return <Image {...sharedProps} alt={alt} fill />;
  }

  return <Image {...sharedProps} alt={alt} width={width} height={height} />;
};

export default ImageComponent;