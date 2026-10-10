import type { NextConfig } from 'next';

// Na Vercel: defina BACKEND_URL (ex.: http://<dns-do-alb>) e NÃO defina
// NEXT_PUBLIC_BACKEND_URL. O front chama /api/* e o servidor da Vercel
// repassa para o backend (evita mixed content http/https e CORS).
// Na AWS (Docker) nada muda: NEXT_PUBLIC_BACKEND_URL continua sendo usado.
const backendUrl = process.env.BACKEND_URL?.replace(/\/$/, '');

const nextConfig: NextConfig = {
  async rewrites() {
    if (!backendUrl) return [];
    return [{ source: '/api/:path*', destination: `${backendUrl}/api/:path*` }];
  },
};

export default nextConfig;
