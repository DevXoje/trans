import { Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from '@mui/material/styles'
import { theme } from '@/utils/themes'
import Porfolio from '@/components/porfolio'
import Head from 'next/head'

const headData = {
  title: 'Jose Vilches Porfolio',
  description: 'Este porfolio mola'
}
const Home = () =>
  <CssVarsProvider theme={theme}>
    {getInitColorSchemeScript()}
    <Head>
      <title>{headData.title}</title>
      <meta name='description' content={headData.description} />

      <meta content='width=device-width, initial-scale=1' name='viewport' />
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Porfolio />
  </CssVarsProvider>

export default Home
