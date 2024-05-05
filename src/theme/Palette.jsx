import { createTheme } from '@mui/material/styles'

// ==============================|| DEFAULT THEME - PALETTE  ||============================== //

const Palette = (mode) => {
  return createTheme({
    palette: {
      mode,
      button: {
        primary: '#54efc3',
        secondary: '#4943d9'
      }
    }
  })
}

export default Palette
