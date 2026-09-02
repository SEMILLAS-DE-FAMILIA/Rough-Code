import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  // Verifica si la ruta empieza con /admin
  if (request.nextUrl.pathname.startsWith('/admin')) {
    // Busca la cookie de sesión que guarda Supabase al autenticar
    const authCookie = request.cookies.get('sb-access-token') || request.cookies.get('supabase-auth-token');

    // Si no hay token de sesión, redirige al login
    if (!authCookie) {
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};