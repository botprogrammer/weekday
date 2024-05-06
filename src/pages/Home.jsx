import { useCallback, useEffect, useState } from 'react'

import { Box } from '@mui/material'

import Filters from '../components/Filters'
import JobList from '../components/JobList'
import axios from 'axios'
import Loader from '../components/Loader'
import { filterJobs } from '../utils/filterJobs'

export default function Home() {
  const [jobData, setJobData] = useState({
    jobs: [],
    allJobs: [],
    loaded: 0,
    totalCount: 0
  })
  const [filters, setFilters] = useState({})
  const [offset, setOffset] = useState(0)

  const getData = useCallback(async () => {
    const { data } = await axios.post(
      'https://api.weekday.technology/adhoc/getSampleJdJSON',
      {
        limit: 25,
        offset: offset
      }
    )

    const hasFilters = Object.keys(filters).length > 0

    if (data) {
      const updatedData = jobData.jobs.concat(data.jdList)

      if (hasFilters) {
        const filteredJobs = filterJobs(filters, data.jdList)

        setJobData((prev) => ({
          jobs: prev.jobs.concat(filteredJobs),
          totalCount: data.totalCount,
          loaded: updatedData.length,
          allJobs: updatedData
        }))
      } else {
        setJobData({
          jobs: updatedData,
          totalCount: data.totalCount,
          loaded: updatedData.length,
          allJobs: updatedData
        })
      }

      setOffset(updatedData.length)
    }
  }, [filters, jobData.jobs, offset])

  useEffect(() => {
    const hasFilters = Object.values(filters).length > 0

    if (hasFilters) {
      setJobData((prev) => ({
        ...prev,
        jobs: filterJobs(filters, prev.allJobs)
      }))
    } else {
      setJobData((prev) => ({
        ...prev,
        jobs: prev.allJobs
      }))
    }
  }, [filters])

  useEffect(() => {
    if (!jobData.allJobs.length) {
      getData()
    }
  }, [getData, jobData])

  return (
    <Box className='main' sx={{ p: 4 }}>
      <Filters setFilters={setFilters} />

      {jobData.jobs.length ? (
        <JobList jobData={jobData} getData={getData} />
      ) : (
        <Loader />
      )}
    </Box>
  )
}
