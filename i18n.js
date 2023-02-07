/** @type {import('next').NextConfig.i18n} */
const i18n = {
  locales: ['en', 'es'],
  defaultLocale: 'es',
  pages: {
    '*': ['common'],
    '/': ['home', 'about', 'experiences', 'projects', 'gallery_experiences', 'gallery_projects', 'skills']
  }
  // pagesInDir: 'app'
}

module.exports = i18n
