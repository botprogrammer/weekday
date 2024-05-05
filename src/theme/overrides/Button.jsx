// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
  const { button } = theme.palette

  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      },
      styleOverrides: {
        root: {
          boxShadow: 'none',
          '&:hover': {
            cursor: 'pointer',
            boxShadow: 'none'
          }
        },
        contained: {
          backgroundColor: button.primary,
          color: '#222222',
          '&:hover': {
            backgroundColor: button.primary,
            color: '#222222'
          }
        },
        outlined: {
          backgroundColor: button.secondary,
          color: '#ffffa0',
          '&:hover': {
            backgroundColor: button.secondary,
            color: '#ffffa0'
          }
        }
      }
    }
  }
}
