import React from 'react'
import { StyledInput } from './styled'

let Input = ({ className, defaultValue, onChange, placeholder }) => {
  return (
    <input
      className={className}
      defaultValue={defaultValue}
      onChange={evt => onChange(evt.target.value)}
      placeholder={placeholder}
    />
  )
}

Input = StyledInput(Input)

export { Input }
