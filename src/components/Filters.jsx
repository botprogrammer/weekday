import { Autocomplete, Grid, TextField } from '@mui/material'

const options = [
  { label: 'a', value: 'a' },
  { label: 'b', value: 'b' },
  { label: 'c', value: 'c' }
]

export default function Navbar() {
  return (
    <Grid container gap={2}>
      <Autocomplete
        sx={{
          width: 'fit-content',
          '& .MuiInputBase-input': {
            width: '3rem !important'
          }
        }}
        onChange={(a, b) => console.log({ a, b })}
        multiple
        options={options}
        getOptionLabel={(option) => option.label}
        renderInput={(params) => <TextField {...params} placeholder='Roles' />}
      />

      <Autocomplete
        sx={{
          width: 'fit-content',
          '& .MuiInputBase-input': {
            width: '12rem !important'
          }
        }}
        multiple
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} placeholder='Number Of Employees' />
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
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} placeholder='Experience' />
        )}
      />

      <Autocomplete
        sx={{
          width: 'fit-content',

          '& .MuiInputBase-input': {
            width: '5rem !important'
          }
        }}
        multiple
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => <TextField {...params} placeholder='Remote' />}
      />

      <Autocomplete
        sx={{
          width: 'fit-content',
          '& .MuiInputBase-input': {
            width: '12rem !important'
          }
        }}
        size='small'
        multiple
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='outlined'
            placeholder='Minimum Base Pay Salary'
            sx={{ fontSize: 4 }}
          />
        )}
      />
    </Grid>
  )
}
