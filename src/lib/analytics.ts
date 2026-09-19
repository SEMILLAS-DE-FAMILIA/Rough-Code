// Exportamos el ID de medición si existe en las variables de entorno
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || '';

const CONSENT_KEY = 'sf_cookie_consent';

export type ConsentStatus = 'granted' | 'denied';

// Función para obtener el estado guardado
export const getStoredConsent = (): ConsentStatus | null => {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem(CONSENT_KEY) as ConsentStatus | null;
};

// Función para guardar el estado en localStorage
export const storeConsent = (status: ConsentStatus): void => {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_KEY, status);
};

// Función para actualizar el estado de consentimiento en GA (sin declare global)
export const updateConsent = (granted: boolean): void => {
  const status: ConsentStatus = granted ? 'granted' : 'denied';

  if (typeof window !== 'undefined' && 'gtag' in window) {
    (window as any).gtag('consent', 'update', {
      analytics_storage: status,
      ad_storage: status,
      ad_user_data: status,
      ad_personalization: status,
    });
  }
};