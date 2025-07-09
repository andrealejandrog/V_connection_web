// components/ContactForm/index.tsx
'use client';

import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { FiPhone } from 'react-icons/fi';
import { useLanguage } from '@/app/contexts/LanguageContext';

import { functions, httpsCallable } from '../../firebaseConfig';

// Define la interfaz para la respuesta esperada de la Cloud Function
interface CloudFunctionResponse {
  success: boolean;
  message: string;
}

export default function ContactForm() {
  const { t } = useLanguage();

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
  const [showCallPopup, setShowCallPopup] = useState(false);

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

    try {
      const submitForm = httpsCallable<typeof formData, CloudFunctionResponse>(functions, 'submitContactForm');

      const result = await submitForm(formData);

      if (result.data && result.data.success) {
        setSubmitMessage(t('contactForm', 'submitSuccessMessage'));
        setFormData({
          firstName: '',
          lastName: '',
          phone: '',
          email: '',
          company: '',
          comments: '',
        });
      } else {
        const errorMessage = result.data?.message || t('contactForm', 'submitErrorMessage');
        setSubmitMessage(errorMessage);
        console.error('Cloud Function reported an issue:', result.data?.message);
      }
    } catch (error: unknown) { // CAMBIO AQUÍ: Usar 'unknown' en lugar de 'any'
      console.error('Error submitting form:', error);
      
      let errorMessage = t('contactForm', 'submitGenericError'); // Mensaje por defecto

      // Intenta extraer un mensaje si 'error' tiene una propiedad 'message'
      if (typeof error === 'object' && error !== null && 'message' in error) {
        errorMessage = (error as { message: string }).message; // Castea para acceder a 'message'
      }
      
      setSubmitMessage(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleRequestDistributorCode = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setShowCallPopup(true);
  };

  const handleClosePopup = () => {
    setShowCallPopup(false);
  };

  return (
    <div className={styles.formContainer}>
      <h3 className={styles.formTitle}>{t('contactForm', 'title')}</h3>
      <p className={styles.formSubtitle}>{t('contactForm', 'subtitle')}</p>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div className={styles.formGroup}>
          <label htmlFor="firstName" className={styles.label}>{t('contactForm', 'firstNameLabel')}</label>
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
          <label htmlFor="lastName" className={styles.label}>{t('contactForm', 'lastNameLabel')}</label>
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
          <label htmlFor="phone" className={styles.label}>{t('contactForm', 'phoneLabel')}</label>
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
          <label htmlFor="email" className={styles.label}>{t('contactForm', 'emailLabel')}</label>
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
          <label htmlFor="company" className={styles.label}>{t('contactForm', 'companyLabel')}</label>
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
          <label htmlFor="comments" className={styles.label}>{t('contactForm', 'commentsLabel')}</label>
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
          {isSubmitting ? t('contactForm', 'submittingButton') : t('contactForm', 'submitButton')}
        </button>

        {submitMessage && (
          <p className={styles.submitMessage}>{submitMessage}</p>
        )}

        <a href="#" className={styles.distributorButton} onClick={handleRequestDistributorCode}>
          <FiPhone className={styles.distributorIcon} />
          {t('contactForm', 'requestDistributorCodeButton')}
        </a>
      </form>

      {showCallPopup && (
        <div className={styles.callPopupOverlay}>
          <div className={styles.callPopup}>
            <button className={styles.closePopupButton} onClick={handleClosePopup}>×</button>
            <h4 className={styles.popupTitle}>{t('contactForm', 'callUsPopupTitle')}</h4>
            <p className={styles.popupText}>
              {t('contactForm', 'callUsPopupText')}
            </p>
            <a href="tel:+50230588632" className={styles.callNowButton}>
              <FiPhone className={styles.callNowIcon} />
              +502 3058 8632
            </a>
            <p className={styles.popupDisclaimer}>
              {t('contactForm', 'callUsPopupDisclaimer')}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}