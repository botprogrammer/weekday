// ==============================|| OVERRIDES - AUTOCOMPLETE ||============================== //

export default function Autocomplete() {
  return {
    MuiAutocomplete: {
      styleOverrides: {
        root: {
          '& .MuiInputBase-root': {
            padding: '0 0.4rem'
          },

          '& .MuiInputBase-input': {
            width: '5rem !important',
            padding: 0
          },

          '& span': {
            paddingLeft: 0,
            paddingRight: '0.5rem'
          },

          '& .MuiButtonBase-root': {
            height: '24px',
            borderRadius: '4px',
            padding: '0 0.5rem'
          },

          '& .MuiAutocomplete-endAdornment .MuiButtonBase-root': {
            padding: 2
          }
        }
      }
    }
  }
}
