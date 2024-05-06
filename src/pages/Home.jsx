import { useCallback, useEffect, useState } from 'react'

import { Box } from '@mui/material'

import Filters from '../components/Filters'
import JobList from '../components/JobList'
import axios from 'axios'

export default function Home() {
  const [jobData, setJobData] = useState({ jobs: [], totalCount: 0 })
  const [offset, setOffset] = useState(0)

  const getData = useCallback(async () => {
    const { data } = await axios.post(
      'https://api.weekday.technology/adhoc/getSampleJdJSON',
      {
        limit: 25,
        offset: offset
      }
    )

    if (data) {
      const updatedData = jobData.jobs.concat(data.jdList)
      setJobData({ jobs: updatedData, totalCount: data.totalCount })
      setOffset(updatedData.length)
    }
  }, [jobData, offset])

  useEffect(() => {
    if (!jobData.jobs.length) {
      getData()
    }
  }, [getData, jobData])

  return (
    <Box className='main' sx={{ p: 4 }}>
      <Filters />
      {jobData.jobs.length ? (
        <JobList jobData={jobData} getData={getData} />
      ) : null}
    </Box>
  )
}
