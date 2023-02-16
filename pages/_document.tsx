import { Head, Html, Main, NextScript } from 'next/document'
import useTranslation from 'next-translate/useTranslation'

export default function Document () { /* Todo: lang dynamic */
  const { lang } = useTranslation('common')

  return (
    <Html lang={lang}>
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
