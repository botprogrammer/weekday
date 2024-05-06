import { Box, Grid, Typography } from '@mui/material'

export default function CompanyDetails() {
  return (
    <Box className='company_info' my={2}>
      <Grid container>
        <Box>img</Box>
        <Box>
          <Typography variant='body1'>Apple</Typography>
          <Typography variant='body1'>Backend Engineer</Typography>
          <Typography variant='body1'>Bangalore</Typography>
        </Box>
      </Grid>
      <Typography variant='body1' mt={2}>
        Estimated Salary: ₹18 - 35 LPA
      </Typography>
    </Box>
  )
}
