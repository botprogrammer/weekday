import { Grid } from '@mui/material'
import JobCard from './JobCard'

export default function JobList() {
  return (
    <Grid container spacing={4} py={4}>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JobCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JobCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JobCard />
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={3}>
        <JobCard />
      </Grid>
    </Grid>
  )
}
