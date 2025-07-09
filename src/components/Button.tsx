"use client";

import React, { ReactNode, MouseEvent } from 'react';
import Link from 'next/link';
import styles from './Button.module.css';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: (e: MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => void;
  variant?: 'text' | 'outline' | 'solid' | 'secondary';
  className?: string;
  ariaLabel?: string;
  fullWidth?: boolean;
  type?: 'button' | 'submit' | 'reset';
  style?: React.CSSProperties;
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
  style,
}) => {
  const buttonClasses = `${styles.button} ${styles[variant]} ${className || ''} ${fullWidth ? styles.fullWidth : ''}`;

  if (href) {
    return (
      <Link
        href={href}
        className={buttonClasses}
        aria-label={ariaLabel}
        style={style}
        onClick={(e) => {
          if (onClick) {
            onClick(e);
          }
        }}
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
      style={style}
    >
      {children}
    </button>
  );
};

export default Button;