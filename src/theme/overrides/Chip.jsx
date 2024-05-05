// ==============================|| OVERRIDES - SHIP ||============================== //

export default function Chip() {
  return {
    MuiChip: {
      styleOverrides: {
        root: {
          '&.MuiChip-outlinedDefault': {
            boxShadow: 'rgba(6, 6, 6, 0.05) 0px 2px 6px 0px;',
            background: '#fff',
            height: '1.5rem'
          }
        }
      }
    }
  }
}
