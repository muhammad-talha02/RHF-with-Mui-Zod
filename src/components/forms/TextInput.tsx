import { TextField } from '@mui/material'
import React from 'react'

const TextInput = React.forwardRef(({errors, label, ...rest}:any, ref) => {
  return (
    <TextField
    label={label}
    error={errors && errors?.name ? true : false}
    helperText={errors && errors?.name?.message || ''}
    ref={ref}
    {...rest}
  />
  )
})

export default TextInput