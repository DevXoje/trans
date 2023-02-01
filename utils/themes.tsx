import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import * as React from 'react'
import { pink } from '@mui/material/colors'

export const theme = extendTheme({
//  components
  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: pink[600]
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: pink[400]
        }
      }
    }
  }
})

export type ThemeOptions = 'dark' | 'light'

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {
  }
})
