/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Линт и тайп-чек выполняются отдельными шагами (npm run lint / npm run typecheck),
  // а не внутри `next build`: на этом окружении (Node 24 + Windows) воркеры проверки
  // нестабильно падают (Jest worker). Типобезопасность сохраняется через tsc.
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    formats: ['image/avif', 'image/webp'],
    // Локальные SVG-сертификаты-образцы — доверенный собственный контент
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
  },
};

export default nextConfig;
