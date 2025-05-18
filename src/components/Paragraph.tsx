import React from 'react';
import styles from './Paragraph.module.css'; // Crea este archivo de estilos si lo deseas

interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ children, className }) => (
  <p className={`${styles.paragraph} ${className}`}>{children}</p>
);

export default Paragraph;