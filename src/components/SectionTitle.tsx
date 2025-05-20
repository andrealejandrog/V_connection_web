// src/components/SectionTitle.tsx
import React from 'react';
import styles from './SectionTitle.module.css'; // Crea este archivo de estilos si lo deseas

interface SectionTitleProps {
  title: string;
  level?: 1 | 2 | 3 | 4 | 5 | 6; // Para asegurar que 'level' es un número válido de h-tag
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, level = 2, className }) => {
  // CAMBIO CRÍTICO: Usar React.createElement en lugar de la sintaxis JSX directa con la variable
  const HeadingTag = `h${level}`; // Ya no necesitamos 'as keyof JSX.IntrinsicElements' aquí

  return React.createElement(
    HeadingTag, // El nombre de la etiqueta (ej. 'h1', 'h2')
    { className: `${styles.title} ${className || ''}` }, // Las props del elemento
    title // Los children del elemento
  );
};

export default SectionTitle;