/* eslint-disable react/prop-types */
import { Box, Modal, Typography } from '@mui/material'

const modalStyles = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  p: 3,
  '&:focus-visible': {
    outline: 'none'
  }
}

export default function JobDetailsModal({ open, onClose, description }) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      slotProps={{
        backdrop: {
          sx: {
            background: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }}
    >
      <Box sx={modalStyles}>
        <Typography variant='h6' fontWeight={700} mb={1}>
          Job Description:
        </Typography>
        <Typography variant='body1'>{description}</Typography>
      </Box>
    </Modal>
  )
}
