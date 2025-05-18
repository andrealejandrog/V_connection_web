import React from 'react';
import styles from './SectionTitle.module.css'; // Crea este archivo de estilos si lo deseas

interface SectionTitleProps {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, level = 2, className }) => {
  const HeadingTag = `h${level}` as keyof React.ReactHTML;
  return <HeadingTag className={`${styles.title} ${className}`}>{title}</HeadingTag>;
};

export default SectionTitle;