import React from 'react'
import { StyledTemp } from './styled'

let Temp = ({ className, temp }) => {
  return <span className={className}>{Math.round(temp)}°C</span>
}

Temp = StyledTemp(Temp)

export { Temp }
