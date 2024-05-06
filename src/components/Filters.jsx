import { Autocomplete, Grid, TextField } from '@mui/material'
import {
  EXPERIENCE,
  LOCATION,
  MINIMUM_BASE_PAY,
  REMOTE,
  ROLES,
  TECH_STACK
} from '../constants/filters'

export default function Navbar() {
  return (
    <Grid container gap={2}>
      <Autocomplete
        sx={{
          width: 'fit-content',
          '& .MuiInputBase-input': {
            width: '6rem !important'
          }
        }}
        multiple
        options={ROLES}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} placeholder='Roles' />}
      />

      <Autocomplete
        sx={{
          width: 'fit-content',
          '& .MuiInputBase-input': {
            width: '6rem !important'
          }
        }}
        multiple
        options={TECH_STACK}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} placeholder='Tech Stack' />
        )}
      />

      <Autocomplete
        sx={{
          width: 'fit-content',
          '& .MuiInputBase-input': {
            width: '6rem !important'
          }
        }}
        options={EXPERIENCE}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} placeholder='Experience' />
        )}
      />

      <Autocomplete
        sx={{
          width: 'fit-content',
          '& .MuiInputBase-input': {
            width: '6rem !important'
          }
        }}
        multiple
        options={LOCATION}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} placeholder='Location' />
        )}
      />

      <Autocomplete
        sx={{
          width: 'fit-content',

          '& .MuiInputBase-input': {
            width: '8rem !important'
          }
        }}
        multiple
        options={REMOTE}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField {...params} placeholder='Remote/In-office' />
        )}
      />

      <Autocomplete
        sx={{
          width: 'fit-content',
          '& .MuiInputBase-input': {
            width: '12rem !important'
          }
        }}
        size='small'
        options={MINIMUM_BASE_PAY}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='outlined'
            placeholder='Minimum Base Pay Salary'
            sx={{ fontSize: 4 }}
          />
        )}
      />

      <TextField
        size='small'
        placeholder='Search company name'
        sx={{ border: '1px solid grey', borderRadius: 1 }}
      />
    </Grid>
  )
}
