'use client';

import React, { useState } from 'react';
import { useDistributorStore } from '../../src/lib/useDistributorStore';
import { isValidRut, formatRut } from '../../src/lib/rut';

export default function WholesaleAuthModal({ onClose }: { onClose: () => void }) {
  const login = useDistributorStore((s) => s.login);
  const register = useDistributorStore((s) => s.register);

  const [mode, setMode] = useState<'login' | 'register'>('login');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [rut, setRut] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [phone, setPhone] = useState('');
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');

  const inputStyle: React.CSSProperties = { width: '100%', padding: '0.6rem', borderRadius: '8px', border: '1px solid #e2e8f0' };
  const labelStyle: React.CSSProperties = { fontSize: '0.8rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    const { error } = await login(email.trim(), password);
    setLoading(false);
    if (error) return setError(error);
    onClose();
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!isValidRut(rut)) return setError('El RUT ingresado no es válido.');
    if (!companyName.trim() || !phone.trim() || !regEmail.trim() || regPassword.length < 6) {
      return setError('Completa todos los campos. La contraseña debe tener al menos 6 caracteres.');
    }

    setLoading(true);
    const { error } = await register({
      rut: formatRut(rut),
      company_name: companyName.trim(),
      phone: phone.trim(),
      email: regEmail.trim(),
      password: regPassword,
    });
    setLoading(false);

    if (error) return setError(error);

    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
    if (whatsappNumber) {
      const message = `Me acabo de inscribir para distribuidor, revisa mi solicitud.\n\nEmpresa: ${companyName.trim()}\nRUT: ${formatRut(rut)}\nTeléfono: ${phone.trim()}\nCorreo: ${regEmail.trim()}`;
      window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, '_blank');
    }

    setSuccess(true);
  };

  return (
    <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, padding: '1rem' }}>
      <div style={{ background: '#fff', padding: '2rem', borderRadius: '12px', maxWidth: '420px', width: '100%', position: 'relative', maxHeight: '90vh', overflowY: 'auto' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '12px', right: '12px', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.2rem' }}>✕</button>

        {success ? (
          <>
            <h3 style={{ marginBottom: '0.75rem', fontWeight: 'bold' }}>¡Solicitud enviada!</h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.5rem' }}>
              Recibimos tu inscripción. Te avisaremos cuando tu cuenta esté aprobada y podrás iniciar sesión aquí mismo.
            </p>
            <button onClick={onClose} style={{ width: '100%', padding: '10px', background: '#1c1917', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
              Entendido
            </button>
          </>
        ) : (
          <>
            <h3 style={{ marginBottom: '0.25rem', fontWeight: 'bold' }}>Portal de Distribuidores</h3>
            <p style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '1.25rem' }}>
              {mode === 'login' ? 'Ingresa con tu cuenta de distribuidor.' : 'Inscríbete para acceder a precios mayoristas.'}
            </p>

            <div style={{ display: 'flex', gap: '8px', marginBottom: '1.25rem' }}>
              <button type="button" onClick={() => { setMode('login'); setError(null); }}
                style={{ flex: 1, padding: '8px', borderRadius: '8px', border: mode === 'login' ? '2px solid #16a34a' : '1px solid #e2e8f0', background: mode === 'login' ? '#f0fdf4' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>
                Iniciar sesión
              </button>
              <button type="button" onClick={() => { setMode('register'); setError(null); }}
                style={{ flex: 1, padding: '8px', borderRadius: '8px', border: mode === 'register' ? '2px solid #16a34a' : '1px solid #e2e8f0', background: mode === 'register' ? '#f0fdf4' : '#fff', fontWeight: 600, cursor: 'pointer', fontSize: '0.85rem' }}>
                Inscribirme
              </button>
            </div>

            {mode === 'login' ? (
              <form onSubmit={handleLogin}>
                <div style={{ marginBottom: '0.9rem' }}>
                  <label style={labelStyle}>Correo</label>
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Contraseña</label>
                  <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
                </div>
                {error && <p style={{ color: '#dc2626', fontSize: '0.82rem', marginBottom: '0.9rem' }}>{error}</p>}
                <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                  {loading ? 'Ingresando...' : 'Ingresar'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleRegister}>
                <div style={{ marginBottom: '0.7rem' }}>
                  <label style={labelStyle}>RUT</label>
                  <input value={rut} onChange={(e) => setRut(e.target.value)} placeholder="12345678-9" required style={inputStyle} />
                </div>
                <div style={{ marginBottom: '0.7rem' }}>
                  <label style={labelStyle}>Nombre de la empresa</label>
                  <input value={companyName} onChange={(e) => setCompanyName(e.target.value)} required style={inputStyle} />
                </div>
                <div style={{ marginBottom: '0.7rem' }}>
                  <label style={labelStyle}>Teléfono</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} required style={inputStyle} />
                </div>
                <div style={{ marginBottom: '0.7rem' }}>
                  <label style={labelStyle}>Correo</label>
                  <input type="email" value={regEmail} onChange={(e) => setRegEmail(e.target.value)} required style={inputStyle} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label style={labelStyle}>Contraseña</label>
                  <input type="password" value={regPassword} onChange={(e) => setRegPassword(e.target.value)} required minLength={6} style={inputStyle} />
                </div>
                {error && <p style={{ color: '#dc2626', fontSize: '0.82rem', marginBottom: '0.9rem' }}>{error}</p>}
                <button type="submit" disabled={loading} style={{ width: '100%', padding: '10px', background: '#16a34a', color: '#fff', border: 'none', borderRadius: '8px', fontWeight: 600, cursor: 'pointer' }}>
                  {loading ? 'Enviando...' : 'Enviar solicitud'}
                </button>
              </form>
            )}
          </>
        )}
      </div>
    </div>
  );
}