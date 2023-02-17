import { Head, Html, Main, NextScript } from 'next/document'
import useTranslation from 'next-translate/useTranslation'
import { roboto } from '@/utils/themes'

export default function Document () { /* Todo: lang dynamic */
  const { lang } = useTranslation('common')

  return (
    <Html lang={lang} className={roboto.className}>
      <Head>
        {/* <link rel='preload' as='image' href='/images/person1.jpeg' /> */}
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
