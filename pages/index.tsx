import { Experimental_CssVarsProvider as CssVarsProvider, getInitColorSchemeScript } from '@mui/material/styles'
import { theme } from '@/utils/themes'
import ModeSwitcher from '@/components/ModeSwitcher'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import Experiences from '@/components/Experiences'

export default function Home () {
  return (
    <CssVarsProvider theme={theme}>
      {getInitColorSchemeScript()}
      <ModeSwitcher />
      <LanguageSwitcher />
      <Experiences />
    </CssVarsProvider>

  )
}
