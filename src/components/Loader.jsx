import { CircularProgress, Grid, Typography } from '@mui/material'

export default function Loader() {
  return (
    <Grid
      container
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      height='80vh'
    >
      <CircularProgress />
      <Typography mt={2}>Fetching Data...</Typography>
    </Grid>
  )
}
