export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

declare global {
  interface Window {
    dataLayer: any[];
  }
}

function gtag(...args: any[]) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

export type ConsentValue = 'granted' | 'denied';
const CONSENT_STORAGE_KEY = 'cookie_consent_v1';

export function getStoredConsent(): ConsentValue | null {
  if (typeof window === 'undefined') return null;
  const v = localStorage.getItem(CONSENT_STORAGE_KEY);
  return v === 'granted' || v === 'denied' ? v : null;
}

export function storeConsent(value: ConsentValue) {
  if (typeof window === 'undefined') return;
  localStorage.setItem(CONSENT_STORAGE_KEY, value);
}

export function initGtag() {
  // Si ya había consentimiento guardado de una visita anterior, se aplica
  // ANTES del 'config' — así el pageview automático ya sale con el estado correcto.
  const stored = getStoredConsent();
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: stored === 'granted' ? 'granted' : 'denied',
  });
  gtag('js', new Date());
  if (GA_MEASUREMENT_ID) {
    gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
  }
}

export function updateConsent(granted: boolean) {
  gtag('consent', 'update', {
    analytics_storage: granted ? 'granted' : 'denied',
  });
  if (granted) {
    // Sin esto, aceptar el banner no genera ningún hit hasta la próxima navegación
    gtag('event', 'page_view');
  }
}