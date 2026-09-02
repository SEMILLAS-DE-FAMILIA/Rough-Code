'use client';

import { useRouter } from 'next/navigation';
import AdminLogin from '../components/admin/AdminLogin'; // o '@/components/admin/AdminLogin'

export default function LoginPage() {
  const router = useRouter();

  const handleLoggedIn = () => {
    // router.refresh() actualiza el contexto del servidor (las cookies para el middleware)
    router.refresh();
    router.push('/admin');
  };

  return <AdminLogin onLoggedIn={handleLoggedIn} />;
}