'use client';

import React, { useEffect, useState } from 'react';
import { supabase } from '../../src/lib/supabaseClient';
import AdminLogin from '../components/admin/AdminLogin';
import AdminPanel from '../components/admin/AdminPanel';

export default function AdminPage() {
  const [checkingSession, setCheckingSession] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedOutReason, setLoggedOutReason] = useState<'inactivity' | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      setIsLoggedIn(!!data.session);
      setCheckingSession(false);
    });

    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setIsLoggedIn(!!session);
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