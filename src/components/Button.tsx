// src/components/Button.tsx
"use client";

import React, { ReactNode } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  // Make sure 'secondary' is here if you use it in the Header
  variant?: 'text' | 'outline' | 'solid' | 'secondary';
  className?: string;
  ariaLabel?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties; // <--- IMPORTANT CHANGE: Add this line!
}

const Button: React.FC<ButtonProps> = ({
  children,
  href,
  onClick,
  variant = 'solid',
  className,
  ariaLabel,
  fullWidth,
  type = 'button',
  style, // <--- IMPORTANT CHANGE: Destructure the style prop!
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className || ''} ${fullWidth ? styles.fullWidth : ''}`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
        style={style} // <--- IMPORTANT CHANGE: Pass style to the Link!
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={buttonClasses}
      aria-label={ariaLabel}
      type={type}
      style={style} // <--- IMPORTANT CHANGE: Pass style to the button!
    >
      {children}
    </button>
  );
};

export default Button;