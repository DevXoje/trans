/** @type {import('next').NextConfig.i18n} */
const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'es',
  pages: {
    '*': ['common'],
    '/': ['home']
  }
}

module.exports = i18n
