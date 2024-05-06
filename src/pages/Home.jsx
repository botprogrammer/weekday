import Filters from '../components/Filters'
import { Box } from '@mui/material'

export default function Home() {
  return (
    <Box className='main' sx={{ p: 2 }}>
      <Filters />
    </Box>
  )
}
