/* eslint-disable react/prop-types */
import { Autocomplete, Grid, TextField } from '@mui/material'
import {
  EXPERIENCE,
  LOCATION,
  MINIMUM_BASE_PAY,
  REMOTE,
  ROLES,
  TECH_STACK
} from '../constants/filters'

export default function Navbar({ setFilters, filters }) {
  return (
    <Grid container gap={2}>
      <Autocomplete
        sx={{
          width: 'fit-content',
          '& .MuiInputBase-input': {
            width: '6rem !important'
          }
        }}
        onChange={(event, value) => {
          if (value.length > 0) {
            setFilters((prev) => ({
              ...prev,
              roles: value.map((item) => item.value)
            }))
          } else {
            const allFilters = { ...filters }

            delete allFilters['roles']

            setFilters(allFilters)
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
        onChange={(event, value) =>
          setFilters((prev) => ({
            ...prev,
            techStack: value.map((item) => item.value)
          }))
        }
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
        onChange={(event, value) => {
          if (value) {
            setFilters((prev) => ({
              ...prev,
              experience: value.value
            }))
          } else {
            const allFilters = { ...filters }

            delete allFilters['experience']

            setFilters(allFilters)
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
        onChange={(event, value) => {
          if (value.length > 0) {
            setFilters((prev) => ({
              ...prev,
              location: value.map((item) => item.value)
            }))
          } else {
            const allFilters = { ...filters }

            delete allFilters['location']

            setFilters(allFilters)
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
        onChange={(event, value) =>
          setFilters((prev) => ({
            ...prev,
            remote: value.map((item) => item.value)
          }))
        }
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
        onChange={(event, value) =>
          setFilters((prev) => ({
            ...prev,
            basePay: value.value
          }))
        }
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
        onChange={(event) => {
          if (event.target.value) {
            setFilters((prev) => ({
              ...prev,
              companyName: event.target.value
            }))
          } else {
            const allFilters = { ...filters }

            delete allFilters['companyName']

            setFilters(allFilters)
          }
        }}
      />
    </Grid>
  )
}
