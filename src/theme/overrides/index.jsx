import merge from 'lodash.merge'

import Button from './Button'
import Card from './Card'
import Chip from './Chip'
import Autocomplete from './Autocomplete'
import TextField from './TextField'

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
  return merge(
    Button(theme),
    Card(theme),
    Chip(theme),
    TextField(theme),
    Autocomplete(theme)
  )
}
