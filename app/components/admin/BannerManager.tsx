'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

interface Banner {
  id: number;
  message: string;
  type: 'info' | 'alerta';
  active: boolean;
}

export default function BannerManager() {
  const [banner, setBanner] = useState<Banner | null>(null);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<'info' | 'alerta'>('info');
  const [active, setActive] = useState(false);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  const fetchBanner = async () => {
    setLoading(true);
    // Usamos el más reciente si existe más de uno; para este proyecto basta con un solo banner.
    const { data } = await supabase
      .from('site_banner')
      .select('*')
      .order('id', { ascending: false })
      .limit(1)
      .maybeSingle();

    if (data) {
      setBanner(data);
      setMessage(data.message);
      setType(data.type);
      setActive(data.active);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchBanner();
  }, []);

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setSaved(false);

    const payload = { message: message.trim(), type, active };

    if (banner) {
      await supabase.from('site_banner').update(payload).eq('id', banner.id);
    } else {
      const { data } = await supabase.from('site_banner').insert(payload).select().maybeSingle();
      if (data) setBanner(data);
    }

    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return <p className={styles.emptyState}>Cargando...</p>;

  return (
    <div>
      <div className={styles.sectionHeader}>
        <h2>Banner de Alerta</h2>
      </div>

      <div className={styles.dashboardPanel} style={{ maxWidth: 520 }}>
        <form onSubmit={handleSave}>
          <div className={styles.field}>
            <label>Mensaje</label>
            <textarea
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Ej: Envíos gratis por compras sobre $30.000 esta semana"
              required
            />
          </div>

          <div className={styles.field}>
            <label>Tipo</label>
            <select value={type} onChange={(e) => setType(e.target.value as 'info' | 'alerta')}>
              <option value="info">Información (verde)</option>
              <option value="alerta">Alerta (rojo)</option>
            </select>
          </div>

          <label className={styles.switchRow}>
            <input
              type="checkbox"
              className={styles.switchInput}
              checked={active}
              onChange={(e) => setActive(e.target.checked)}
            />
            <span className={styles.switchTrack}>
              <span className={styles.switchThumb} />
            </span>
            <span className={styles.switchLabel}>Mostrar banner en la tienda</span>
          </label>

          <button type="submit" className={styles.primaryBtn} disabled={saving}>
            {saving ? 'Guardando...' : saved ? '✓ Guardado' : 'Guardar banner'}
          </button>
        </form>
      </div>
    </div>
  );
}