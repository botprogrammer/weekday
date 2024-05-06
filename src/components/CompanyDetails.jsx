import { Box, Grid, Typography } from '@mui/material'

export default function CompanyDetails() {
  return (
    <Box className='company_info' my={2}>
      <Grid container gap={2}>
        <img
          style={{ width: '5rem', height: '5rem' }}
          src='https://logo.clearbit.com/ebay.com'
        />
        <Box>
          <Typography
            variant='body1'
            color='grey'
            fontWeight='bold'
            letterSpacing={1}
          >
            Apple
          </Typography>
          <Typography variant='body1' my={0.5}>
            Backend Engineer
          </Typography>
          <Typography variant='body2'>Bangalore</Typography>
        </Box>
      </Grid>
      <Typography variant='body1' mt={2} color='#555555'>
        Estimated Salary: ₹18 - 35 LPA
      </Typography>
    </Box>
  )
}
