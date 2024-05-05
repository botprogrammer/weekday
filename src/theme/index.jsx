/* eslint-disable react/prop-types */
// ==============================|| DEFAULT THEME - MAIN  ||============================== //

import { useMemo } from 'react'

import { CssBaseline, StyledEngineProvider } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'

import Palette from './Palette'
import Typography from './Typography'
import componentsOverride from './overrides'

export default function ThemeCustomization({ children }) {
  const theme = Palette('light')

  const themeTypography = Typography(`'Public Sans', sans-serif`)

  const themeOptions = useMemo(
    () => ({
      breakpoints: {
        values: {
          xs: 0,
          sm: 768,
          md: 1024,
          lg: 1266,
          xl: 1536
        }
      },
      direction: 'ltr',
      palette: theme.palette,
      typography: themeTypography
    }),
    [theme, themeTypography]
  )

  const themes = createTheme(themeOptions)

  themes.components = componentsOverride(themes)

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={themes}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  )
}
