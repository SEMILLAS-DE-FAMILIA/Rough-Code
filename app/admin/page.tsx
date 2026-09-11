'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../src/lib/supabaseClient';
import AdminLogin from '../components/admin/AdminLogin';
import AdminPanel from '../components/admin/AdminPanel';

export default function AdminPage() {
  const [checkingSession, setCheckingSession] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedOutReason, setLoggedOutReason] = useState<'inactivity' | 'unauthorized' | null>(null);

  const verifySession = async () => {
    const { data } = await supabase.auth.getSession();

    if (!data.session) {
      setIsLoggedIn(false);
      setCheckingSession(false);
      return;
    }

    const { data: isAdminData, error: roleError } = await supabase.rpc('is_admin');

    if (roleError || !isAdminData) {
      // Sesión válida pero de una cuenta que NO es admin (ej. un distribuidor): se cierra
      await supabase.auth.signOut();
      setIsLoggedIn(false);
      setLoggedOutReason('unauthorized');
      setCheckingSession(false);
      return;
    }

    setIsLoggedIn(true);
    setCheckingSession(false);
  };

  useEffect(() => {
    verifySession();

    const { data: listener } = supabase.auth.onAuthStateChange(() => {
      verifySession();
    });

    return () => {
      listener.subscription.unsubscribe();
    };
  }, []);

  if (checkingSession) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        Cargando...
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <AdminLogin
        onLoggedIn={() => {
          setLoggedOutReason(null);
          setIsLoggedIn(true);
        }}
        infoMessage={
          loggedOutReason === 'inactivity'
            ? 'Tu sesión se cerró por inactividad. Ingresa de nuevo para continuar.'
            : loggedOutReason === 'unauthorized'
            ? 'Esta cuenta no tiene acceso al panel de administración.'
            : undefined
        }
      />
    );
  }

  return (
    <AdminPanel
      onLoggedOut={(reason) => {
        setLoggedOutReason(reason === 'inactivity' ? 'inactivity' : null);
        setIsLoggedIn(false);
      }}
    />
  );
}