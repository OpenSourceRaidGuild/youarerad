const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})
module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },

  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    domains: ['res.cloudinary.com', 'pbs.twimg.com', 'abs.twimg.com'],
  },
  i18n: {
    locales: ['en-US'],
    defaultLocale: 'en-US',

    domains: [
      {
        domain: 'youarerad.org',
        defaultLocale: 'en-US',
      },

      {
        domain: 'de.youarerad.org',
        defaultLocale: 'de',
      },
      {
        domain: 'es.youarerad.org',
        defaultLocale: 'es',
      },
      {
        domain: 'fr.youarerad.org',
        defaultLocale: 'fr',
      },
      {
        domain: 'ja.youarerad.org',
        defaultLocale: 'ja',
      },
      {
        domain: 'ko.youarerad.org',
        defaultLocale: 'ko',
      },
      {
        domain: 'pt.youarerad.org',
        defaultLocale: 'pt',
      },
      {
        domain: 'ru.youarerad.org',
        defaultLocale: 'ru',
      },
      {
        domain: 'th.youarerad.org',
        defaultLocale: 'th',
      },
      {
        domain: 'vi.youarerad.org',
        defaultLocale: 'vi',
      },
      {
        domain: 'zh.youarerad.org',
        defaultLocale: 'zh',
      },
    ],
  },
})
