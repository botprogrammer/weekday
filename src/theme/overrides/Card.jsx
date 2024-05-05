// ==============================|| OVERRIDES - CARD ||============================== //

export default function Card() {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          padding: 8,
          boxShadow: 'rgba(0, 0, 0, 0.25) 0px 1px 4px 0px',
          borderRadius: '20px'
        }
      }
    }
  }
}
