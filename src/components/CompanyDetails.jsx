/* eslint-disable react/prop-types */
import { Box, Grid, Typography } from '@mui/material'
import { getJobRole, getLocation } from '../utils/getFormattedData'

export default function CompanyDetails({ data }) {
  const { companyName, location, jobRole, logoUrl, minJdSalary, maxJdSalary } =
    data
  return (
    <Box className='company_info' my={2}>
      <Grid container gap={2} alignItems='center'>
        <img
          alt={`${companyName} logo`}
          style={{ width: '4rem', height: '4rem' }}
          src={logoUrl}
        />
        <Box>
          <Typography
            variant='body1'
            color='grey'
            fontWeight='bold'
            letterSpacing={1}
          >
            {companyName}
          </Typography>
          <Typography variant='body1' my={0.5}>
            {getJobRole(jobRole)}
          </Typography>
          <Typography variant='body2'>{getLocation(location)}</Typography>
        </Box>
      </Grid>
      <Typography variant='body1' mt={2} color='#555555'>
        Estimated Salary:{' '}
        {minJdSalary
          ? `₹${minJdSalary} - ${maxJdSalary} LPA`
          : `₹${maxJdSalary} LPA`}
      </Typography>
    </Box>
  )
}
