import { Box } from '@mui/material'

import Filters from '../components/Filters'
import JobList from '../components/JobList'

export default function Home() {
  return (
    <Box className='main' sx={{ p: 4 }}>
      <Filters />
      <JobList />
    </Box>
  )
}
