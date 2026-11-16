/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  async redirects() {
    return [
      { source: '/map', destination: '/activities', permanent: true },
    ];
  },
  images: {
    domains: ['xyzfqjxmadywqhwvcqxh.supabase.in', 'picsum.photos', 'acti.anzieu.com'],
  },
}
