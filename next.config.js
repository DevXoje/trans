const nextTranslate = require('next-translate')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true
  //, experimental: { appDir: true }
  /*, modularizeImports: {
    '@mui/material/': {
      transform: '@mui/material/{{member}}'
    }
  } */
}

module.exports = nextTranslate({
  ...nextConfig
})
