import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import * as React from 'react'
/*
* */
export const theme = extendTheme({
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          color: 'black'
        }
      }
    }
  },
  /*  breakpoints: {
                      values: {
                        xs: 0,
                        sm: 600,
                        md: 900,
                        lg: 1200,
                        xl: 1536
                      }
                    }, */

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
        },
        background: {
          paper: '#f6f7f8'
        }
      }

    },
    dark: {
      palette: {
        text: {
          primary: '#373a3c',
          secondary: '#f8f9fa'
        },
        primary: {
          main: '#929495ff'
        },
        secondary: {
          main: '#277fe1'
        },
        background: {
          paper: '#f6f7f8'
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
