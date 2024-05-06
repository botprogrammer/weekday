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
          textTransform: 'none',
          borderRadius: 8,
          padding: '0.75rem 0',
          '&:hover': {
            cursor: 'pointer',
            boxShadow: 'none'
          }
        },
        contained: {
          backgroundColor: button.primary,
          color: '#222222',
          fontWeight: 'bold',
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
