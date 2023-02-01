import { Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from '@mui/material/styles'
import { theme } from '@/utils/themes'
import Porfolio from '@/components/porfolio'

export default function Home () {
  return (
    <CssVarsProvider theme={theme}>
      {getInitColorSchemeScript()}
      <Porfolio />
    </CssVarsProvider>

  )
}
