'use client';

import React, { useEffect, useState } from 'react';
import { getStoredConsent, storeConsent } from '../../src/lib/analytics';
import styles from './CookieConsentBanner.module.css';

export default function CookieConsentBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (!getStoredConsent()) setVisible(true);
  }, []);

  const handleChoice = (granted: boolean) => {
    const status = granted ? 'granted' : 'denied';
    
    // 1. Guardar estado en localStorage
    storeConsent(status);

    // 2. Actualizar Consent Mode v2 en Google Analytics
    if (typeof window !== 'undefined' && 'gtag' in window) {
      (window as any).gtag('consent', 'update', {
        analytics_storage: status,
        ad_storage: status,
        ad_user_data: status,
        ad_personalization: status,
      });
    }

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className={styles.banner} role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div className={styles.content}>
        <p className={styles.text}>
          Usamos cookies para analizar el uso del sitio y mejorar tu experiencia (Google Analytics).
          Puedes aceptar o rechazar las cookies de análisis. Consulta nuestros{' '}
          <a href="/terminos" className={styles.link}>Términos y Condiciones</a>.
        </p>
        <div className={styles.actions}>
          <button type="button" className={styles.declineBtn} onClick={() => handleChoice(false)}>
            Rechazar
          </button>
          <button type="button" className={styles.acceptBtn} onClick={() => handleChoice(true)}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}