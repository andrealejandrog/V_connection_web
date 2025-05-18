// src/components/Button.tsx
import Link from 'next/link';
import styles from './Button.module.css'; // Si tienes estilos para el botón

interface ButtonProps {
  href?: string; // '?' indica que la prop es opcional
  children: React.ReactNode;
  className?: string;
  role?: string;
  onClick?: () => void; // Si el botón también puede tener una función onClick
}

const Button: React.FC<ButtonProps> = ({ href, children, className, role, onClick }) => {
  if (href) {
    return (
      <Link href={href} className={`${styles.button} ${className}`} role={role}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${styles.button} ${className}`} role={role}>
      {children}
    </button>
  );
};

export default Button;