/* eslint-disable react/prop-types */
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
import HourglassIcon from './svg/HourglassIcon'

export default function JobCard({ data }) {
  return (
    <Card>
      <CardContent>
        <Chip
          variant='outlined'
          label={
            <Grid
              container
              alignItems='center'
              justifyContent='center'
              gap={0.5}
            >
              <HourglassIcon width={12} />
              <Typography variant='subtitle2' fontSize={10}>
                Posted 13 days ago
              </Typography>
            </Grid>
          }
        />
        <CompanyDetails data={data} />
        <AboutCompany data={data} />
      </CardContent>
      <CardActions>
        <Grid container flexDirection='column' gap={2}>
          <Button variant='contained'>
            <LightningIcon /> <Typography ml={1}>Easy Apply</Typography>
          </Button>
          <Button variant='outlined'>
            <Typography>Unlock referral asks</Typography>
          </Button>
        </Grid>
      </CardActions>
    </Card>
  )
}
