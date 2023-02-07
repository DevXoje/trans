import Head from 'next/head'

const HeadCustom = () => {
  const headData = {
    title: 'Jose Vilches Porfolio',
    description: 'Este porfolio mola'
  }
  return (
    <Head>
      <title>{headData.title}</title>
      <meta name='description' content={headData.description} />

      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}
export default HeadCustom
