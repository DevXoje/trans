import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import * as React from 'react'
/*
* */
export const theme = extendTheme({
//  components
  colorSchemes: {
    light: {
      palette: {
        text: {
          primary: '#f8f9fa',
          secondary: '#373a3c'
        },
        primary: {
          main: '#383b3d'
        },
        secondary: {
          main: '#277fe1'
        }
      }

    },
    dark: {
      palette: {
        text: {
          primary: '#f8f9fa',
          secondary: '#373a3c'
        },
        primary: {
          main: '#929495ff'
        },
        secondary: {
          main: '#277fe1'
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
