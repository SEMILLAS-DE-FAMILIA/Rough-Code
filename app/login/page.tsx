// app/login/page.tsx
'use client';

import { Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import AdminLogin from '../components/admin/AdminLogin';

function LoginContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const reason = searchParams.get('reason');

  const handleLoggedIn = () => {
    router.refresh();
    router.push('/admin/dashboard');
  };

  const infoMessage =
    reason === 'inactivity'
      ? 'Tu sesión se cerró por inactividad. Ingresa de nuevo para continuar.'
      : reason === 'unauthorized'
      ? 'Esta cuenta no tiene acceso al panel de administración.'
      : undefined;

  return <AdminLogin onLoggedIn={handleLoggedIn} infoMessage={infoMessage} />;
}

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginContent />
    </Suspense>
  );
}