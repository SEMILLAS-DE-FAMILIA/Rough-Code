// next.config.ts — se queda solo con esto, sin duplicar CSP en ningún lado
import type { NextConfig } from 'next';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseHost = new URL(supabaseUrl).hostname;

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