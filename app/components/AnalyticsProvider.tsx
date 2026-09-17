'use client';

import { useEffect } from 'react';
import Script from 'next/script';
import { GA_MEASUREMENT_ID, initConsentDefaults, getStoredConsent, updateConsent } from '../../src/lib/analytics';

export default function AnalyticsProvider() {
  useEffect(() => {
    initConsentDefaults();
    const stored = getStoredConsent();
    if (stored) updateConsent(stored === 'granted');
  }, []);

  if (!GA_MEASUREMENT_ID) return null;

  return (
    <Script
      src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      strategy="afterInteractive"
    />
  );
}