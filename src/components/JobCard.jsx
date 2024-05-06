import {
  Button,
  Card,
  CardActions,
  CardContent,
  Chip,
  Grid,
  Typography
} from '@mui/material'
import CompanyDetails from './CompanyDetails'
import AboutCompany from './AboutCompany'
import LightningIcon from './svg/LightningIcon'

export default function JobCard() {
  return (
    <Card>
      <CardContent>
        <Chip variant='outlined' label='Posted 13 days ago' />
        <CompanyDetails />
        <AboutCompany />
      </CardContent>
      <CardActions>
        <Grid container flexDirection='column' gap={2}>
          <Button variant='contained'>
            <LightningIcon /> <Typography ml={1}>Easy Apply</Typography>
          </Button>
          <Button variant='outlined'>Unlock referral asks</Button>
        </Grid>
      </CardActions>
    </Card>
  )
}
