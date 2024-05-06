/* eslint-disable react/prop-types */
import { Grid } from '@mui/material'

import JobCard from './JobCard'
import InfiniteScroll from 'react-infinite-scroll-component'

export default function JobList({ jobData, getData }) {
  return (
    <InfiniteScroll
      dataLength={jobData.jobs.length}
      next={getData}
      hasMore={jobData.totalCount > jobData.jobs.length}
      loader={<h4>Loading...</h4>}
      scrollThreshold={1}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yay! You have seen it all</b>
        </p>
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
