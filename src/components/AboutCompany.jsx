/* eslint-disable react/prop-types */
import { Box, Button, Typography } from '@mui/material'
import JobDetailsModal from './JobDetailsModal'
import { useState } from 'react'

const blurButtonStyles = {
  height: 200,
  overflow: 'hidden',
  position: 'relative',
  '&:after': {
    width: '100%',
    content: `''`,
    position: 'absolute',
    bottom: 0,
    left: 0,
    height: '5rem',
    backgroundImage:
      'linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255, 1) 90%)'
  }
}

export default function AboutCompany({ data }) {
  const [open, setOpen] = useState(false)

  const { jobDetailsFromCompany, minExp } = data

  return (
    <Box>
      <Typography mb={0.5} fontWeight={700} variant='body1'>
        About Company:
      </Typography>
      <ExapndableDescription
        description={jobDetailsFromCompany}
        setOpen={setOpen}
      />
      <JobDetailsModal
        open={open}
        onClose={() => setOpen(false)}
        description={jobDetailsFromCompany}
      />
      {minExp ? (
        <Box mt={2}>
          <Typography letterSpacing={1} fontWeight={500} color='grey'>
            Minimum experience
          </Typography>
          <Typography>{minExp}</Typography>
        </Box>
      ) : null}
    </Box>
  )
}

function ExapndableDescription({ description, setOpen }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={blurButtonStyles}>{description}</Box>
      <Button
        variant='text'
        fullWidth
        sx={{ p: 0 }}
        onClick={() => setOpen(true)}
      >
        Show more
      </Button>
    </Box>
  )
}
