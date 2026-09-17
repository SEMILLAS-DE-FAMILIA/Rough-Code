import React from 'react';
import styles from './BrandLogo.module.css';

export default function BrandLogo() {
  return (
    <div className={styles.brandContainer}>
      <span className={styles.brandSemillas}>Semillas</span>
      <span className={styles.brandFamilia}>de Familia</span>
      <div className={styles.brandDivider} />
    </div>
  );
}