import type { NextConfig } from 'next';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';
let supabaseHost = 'placeholder.supabase.co';

try {
  supabaseHost = new URL(supabaseUrl).hostname;
} catch {
  // Manejo por si la URL no es válida durante el build inicial
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: supabaseHost,
        pathname: '/storage/v1/object/public/**',
      },
    ],
    qualities: [60, 75],
  },
};

export default nextConfig;