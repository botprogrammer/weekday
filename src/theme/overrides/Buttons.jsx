// ==============================|| OVERRIDES - BUTTON ||============================== //

export default function Button(theme) {
  console.log({ theme })

  return {
    MuiButton: {
      defaultProps: {
        disableRipple: true
      }
    }
  }
}
