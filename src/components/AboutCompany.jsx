/* eslint-disable react/prop-types */
import { Box, Button, Typography } from '@mui/material'

const aboutText =
  "This is a sample job and you must have displayed it to understand that its not just some random lorem ipsum text but something which was manually written. Oh well, if random text is what you were looking for then here it is: Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages and now in this assignment."

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

export default function AboutCompany() {
  return (
    <Box>
      <Typography fontWeight='bold'>About Company:</Typography>
      <ExapndableDescription description={aboutText} />
      <Box mt={2}>
        <Typography>Minimum experience</Typography>
        <Typography>2 years</Typography>
      </Box>
    </Box>
  )
}

function ExapndableDescription({ description }) {
  return (
    <Box sx={{ position: 'relative' }}>
      <Box sx={blurButtonStyles}>{description}</Box>
      <Button variant='text' fullWidth sx={{ p: 0 }}>
        Show more
      </Button>
    </Box>
  )
}
