'use client';

import React, { useState } from 'react';
import { supabase } from '../../../src/lib/supabaseClient';
import styles from './Admin.module.css';

export default function AdminLogin({
  onLoggedIn,
  infoMessage,
}: {
  onLoggedIn: () => void;
  infoMessage?: string;
}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({ email, password });


    if (error) {
      setLoading(false);
      // Mostramos el mensaje real de Supabase temporalmente para diagnosticar
      // (usuario no confirmado, credenciales inválidas, error de red, etc.)
      setError(`${error.message} (código: ${error.status ?? 's/n'})`);
      return;
    }
   const { data: isAdminData, error: roleError } = await supabase.rpc('is_admin');

   if (roleError || !isAdminData) {
     await supabase.auth.signOut();
     setLoading(false);
     setError('Esta cuenta no tiene acceso al panel de administración.');
     return;
   }

   setLoading(false);

    onLoggedIn();
  };

  return (
    <div className={styles.loginWrapper}>
      <div className={styles.loginCard}>
        <h2>Panel Admin</h2>
        <p className={styles.loginSubtitle}>Semillas de Familia</p>

        {infoMessage && (
          <p
            style={{
              background: '#fef9c3',
              color: '#854d0e',
              fontSize: '0.8rem',
              padding: '0.65rem 0.85rem',
              borderRadius: '0.6rem',
              marginBottom: '1.25rem',
            }}
          >
            {infoMessage}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className={styles.field}>
            <label htmlFor="email">Correo</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              autoComplete="username"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="password">Contraseña</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>

          <button type="submit" className={styles.primaryBtn} disabled={loading}>
            {loading ? 'Ingresando...' : 'Ingresar'}
          </button>

          {error && <p className={styles.errorText}>{error}</p>}
        </form>
      </div>
    </div>
  );
}