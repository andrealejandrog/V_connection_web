// components/ContactForm/index.tsx
'use client'; // This is a client component

import React, { useState } from 'react';
import styles from './ContactForm.module.css'; // Asegúrate que la ruta sea correcta a TU CSS de este componente
import { FiPhone } from 'react-icons/fi'; // Importa el icono del teléfono

export default function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    company: '',
    comments: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [showCallPopup, setShowCallPopup] = useState(false); // Estado para controlar la visibilidad del popup

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    // --- Aquí iría la lógica para enviar el formulario a tu API ---
    // Por ahora, simulamos un envío exitoso con un retraso:
    await new Promise((resolve) => setTimeout(resolve, 2000)); // Simula retraso de red
    setSubmitMessage('¡Mensaje enviado con éxito! Nos pondremos en contacto pronto.');
    setFormData({ // Limpia el formulario después del envío
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      company: '',
      comments: '',
    });
    setIsSubmitting(false);
  };

  // Función para abrir el popup (al hacer clic en "Solicitar código de distribuidor")
  const handleRequestDistributorCode = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault(); // Evita que el enlace # salte a la parte superior de la página
    setShowCallPopup(true);
  };

  // Función para cerrar el popup
  const handleClosePopup = () => {
    setShowCallPopup(false);
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>Envíanos un Mensaje</h3>
      <p className={styles.formSubtitle}>Completa el formulario y te contactaremos a la brevedad.</p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>Nombre</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="lastName" className={styles.label}>Apellido</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="phone" className={styles.label}>Teléfono</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email" className={styles.label}>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="company" className={styles.label}>Empresa (Opcional)</label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className={styles.input}
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="comments" className={styles.label}>Comentarios</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleChange}
            className={`${styles.input} ${styles.textarea}`}
            rows={5}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
        </button>

        {submitMessage && (
          <p className={styles.submitMessage}>{submitMessage}</p>
        )}

        {/* --- AÑADIDO: BOTÓN "Solicitar código de distribuidor" que abre el popup --- */}
        <a href="#" className={styles.distributorButton} onClick={handleRequestDistributorCode}>
          <FiPhone className={styles.distributorIcon} />
          Solicitar código de distribuidor
        </a>
        {/* ---------------------------------------------------------------------------------- */}
      </form>

      {/* --- AÑADIDO: Popup de Llamada --- */}
      {showCallPopup && (
        <div className={styles.callPopupOverlay}>
          <div className={styles.callPopup}>
            <button className={styles.closePopupButton} onClick={handleClosePopup}>&times;</button>
            <h4 className={styles.popupTitle}>Llámanos</h4>
            <p className={styles.popupText}>
              Para solicitar tu código de distribuidor o para cualquier consulta, puedes contactarnos directamente:
            </p>
            <a href="tel:+50230588632" className={styles.callNowButton}>
              <FiPhone className={styles.callNowIcon} />
              +502 3058 8632
            </a>
            <p className={styles.popupDisclaimer}>
                Horario de atención: Lunes a Viernes, 9:00 AM - 5:00 PM (hora de Guatemala).
            </p>
          </div>
        </div>
      )}
      {/* ----------------------------------------------------- */}
    </div>
  );
}