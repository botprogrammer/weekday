// ==============================|| OVERRIDES - TextField ||============================== //

export default function TextField() {
  return {
    MuiTextField: {
      defaultProps: {},
      styleOverrides: {
        root: {
          '&.MuiTextField-root.MuiFormControl-root': {
            border: '1px solid grey'
          },

          '& input': {
            fontSize: '0.9rem'
          },

          '& fieldset': {
            border: 'none !important'
          }
        }
      }
    }
  }
}
