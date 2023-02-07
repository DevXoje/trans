import { Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from '@mui/material/styles'
import { theme } from '@/utils/themes'
import Porfolio from '@/components/porfolio'
import HeadCustom from '@/pages/_head'

const Home = () =>
  <CssVarsProvider theme={theme}>
    {getInitColorSchemeScript()}
    <HeadCustom />
    <Porfolio />
  </CssVarsProvider>

export default Home
