/** @type {import('next').NextConfig.i18n} */
const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'es',
  pages: {
    '*': ['common'],
    '/': ['home', 'about', 'experiences', 'projects']
  }
}

module.exports = i18n
