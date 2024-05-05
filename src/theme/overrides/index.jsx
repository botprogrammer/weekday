import merge from 'lodash.merge'

import Button from './Button'
import Card from './Card'
import Chip from './Chip'
import Autocomplete from './Autocomplete'

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(Button(theme), Card(theme), Chip(theme), Autocomplete(theme))
}
