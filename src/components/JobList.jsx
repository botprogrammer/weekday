/* eslint-disable react/prop-types */
import { Grid, Typography } from '@mui/material'

import JobCard from './JobCard'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loader from './Loader'

export default function JobList({ jobData, getData }) {
  return (
    <InfiniteScroll
      dataLength={jobData.jobs.length}
      next={getData}
      hasMore={jobData.totalCount > jobData.loaded}
      loader={<Loader />}
      scrollThreshold={1}
      endMessage={
        <Typography variant='h6' textAlign='center'>
          That is all for now!
        </Typography>
      }
    >
      <Grid container spacing={4} py={4}>
        {jobData.jobs.map((jobItem) => {
          const { jdUid } = jobItem
          return (
            <Grid key={jdUid} item xs={12} sm={6} md={4} lg={3}>
              <JobCard data={jobItem} />
            </Grid>
          )
        })}
      </Grid>
    </InfiniteScroll>
  )
}
