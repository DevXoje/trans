import { Head, Html, Main, NextScript } from 'next/document'

export default function Document () { /* Todo: lang dynamic */
  return (
    <Html lang='en'>
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
