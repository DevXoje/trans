import type { AppProps } from 'next/app'
import '@/styles/global.scss'
import { Analytics } from '@vercel/analytics/react'

export default function App ({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  )
}
