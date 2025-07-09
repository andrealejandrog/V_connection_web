// app/not-found.tsx
import Link from 'next/link';
import React from 'react';
import styles from './page.module.css'; // Puedes reutilizar tus estilos o crear uno nuevo para el 404

export default function NotFound() {
  return (
    <main className={`${styles.main} ${styles.notFoundPage}`}>
      <div className={styles.notFoundContent}>
        <h1 className={styles.notFoundTitle}>404</h1>
        <p className={styles.notFoundDescription}>¡Ups! La página que buscas no existe.</p>
        <p className={styles.notFoundSuggestion}>
          Parece que te has perdido. Te invitamos a regresar a un lugar seguro.
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/" passHref legacyBehavior>
            <a className={styles.ctaButton}>Volver a la Página Principal</a>
          </Link>
          <Link href="/servicios" passHref legacyBehavior>
            <a className={styles.secondaryButton}>Explorar Servicios</a>
          </Link>
        </div>
      </div>
    </main>
  );
}