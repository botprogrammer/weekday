import { Grid } from '@mui/material'
import JobCard from './JobCard'

export default function JobList() {
  return (
    <Grid container spacing={4} py={4}>
      <Grid item xs={3}>
        <JobCard />
      </Grid>
      <Grid item xs={3}>
        <JobCard />
      </Grid>
      <Grid item xs={3}>
        <JobCard />
      </Grid>
      <Grid item xs={3}>
        <JobCard />
      </Grid>
    </Grid>
  )
}
