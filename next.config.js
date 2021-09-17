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
  },
})
