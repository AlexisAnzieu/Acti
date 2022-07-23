/** @type {import('next').NextConfig} */
const { i18n } = require('./next-i18next.config');

module.exports = {
  reactStrictMode: true,
  i18n,
  images: {
    domains: ['xyzfqjxmadywqhwvcqxh.supabase.in', 'picsum.photos', 'acti.anzieu.fr'],
  },
}
