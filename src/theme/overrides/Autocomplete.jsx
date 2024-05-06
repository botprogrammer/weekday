import ArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import CrossIcon from '../../components/svg/CrossIcon'

// ==============================|| OVERRIDES - AUTOCOMPLETE ||============================== //

export default function Autocomplete() {
  return {
    MuiAutocomplete: {
      defaultProps: {
        popupIcon: <ArrowDownIcon />,
        ChipProps: {
          deleteIcon: <CrossIcon />
        }
      },
      styleOverrides: {
        root: {
          '& fieldset': {
            border: 'none'
          },

          '& .MuiInputBase-root': {
            padding: '0 0.4rem',
            fontSize: '0.9rem',
            border: '1px solid grey'
          },

          '& .MuiInputBase-input': {
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
          },

          '& .MuiTextField-root.MuiFormControl-root': {
            border: 'none !important'
          }
        }
      }
    }
  }
}
