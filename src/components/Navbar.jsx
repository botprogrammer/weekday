import { Autocomplete, Button, Card, Chip, TextField } from '@mui/material'
import CrossIcon from './svg/CrossIcon'

const options = [
  { title: 'a', value: 'a' },
  { title: 'b', value: 'b' },
  { title: 'c', value: 'c' }
]

export default function Navbar() {
  return (
    <>
      <Card sx={{ width: '10rem', height: 200 }}>this is my card</Card>
      <Chip variant='outlined' label='Wow' />

      <Autocomplete
        sx={{ width: 'fit-content' }}
        multiple
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} placeholder='Favorites' />
        )}
        ChipProps={{
          deleteIcon: <CrossIcon />,
          onClick: () => console.log('clicked')
        }}
      />

      <Autocomplete
        sx={{ width: 'fit-content' }}
        multiple
        options={options}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField {...params} placeholder='Favorites' />
        )}
      />

      <Button variant='contained'>Wow</Button>
      <Button variant='outlined'>Outlined</Button>
    </>
  )
}
