'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../src/lib/supabaseClient';
import styles from './AlertBanner.module.css';

interface Banner {
  id: number;
  message: string;
  type: 'info' | 'alerta';
}

export default function AlertBanner() {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    async function fetchBanner() {
      const { data } = await supabase
        .from('site_banner')
        .select('id, message, type')
        .eq('active', true)
        .order('id', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (data) setBanner(data);
    }

    fetchBanner();
  }, []);

  if (!banner || dismissed) return null;

  return (
    <div className={`${styles.banner} ${banner.type === 'alerta' ? styles.alerta : styles.info}`}>
      <p className={styles.message}>{banner.message}</p>
      <button className={styles.closeBtn} onClick={() => setDismissed(true)} aria-label="Cerrar aviso">
        ✕
      </button>
    </div>
  );
}