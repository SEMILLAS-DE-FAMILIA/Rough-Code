/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'yczueyygfqjqfcvastse.supabase.co',
        pathname: '/storage/v1/object/public/**',
      },
    ],
    // Next.js exige declarar explícitamente qué valores de "quality" se usarán
    qualities: [60, 75],
  },
};

module.exports = nextConfig;