import { LOCATION, ROLES } from '../constants/filters'

export const getLocation = (location) => {
  return LOCATION.find((item) => item?.value === location)?.label || location
}

export const getJobRole = (role) => {
  return ROLES.find((item) => item?.value === role)?.label || role
}
