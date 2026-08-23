'use client';

import React from 'react';
import styles from './TrustBanner.module.css';

export default function TrustBanner() {
  return (
    <section className={styles.trustSection}>
      <div className={styles.trustGrid}>
        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className={styles.trustText}>
            <h4>100% Orgánico</h4>
            <p>Semillas libres de transgénicos</p>
          </div>
        </div>

        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <div className={styles.trustText}>
            <h4>Envíos Seguros</h4>
            <p>Despacho directo a todo el país</p>
          </div>
        </div>

        <div className={styles.trustItem}>
          <div className={styles.trustIcon}>
            <svg width="22" height="22" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className={styles.trustText}>
            <h4>Calidad Probada</h4>
            <p>Alta tasa de germinación</p>
          </div>
        </div>
      </div>
    </section>
  );
}