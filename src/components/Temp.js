import React from 'react'
import styled from 'styled-components'

const TYPES = {
  NORMAL: 'NORMAL',
  SMALL: 'SMALL',
  BIG: 'BIG',
  EXTRA_BIG: 'EXTRA_BIG'
}

const SIZES = {
  [TYPES.NORMAL]: '16px',
  [TYPES.SMALL]: '12px',
  [TYPES.BIG]: '24px',
  [TYPES.EXTRA_BIG]: '40px'
}

const RADIUSES = {
  [TYPES.NORMAL]: '20px',
  [TYPES.SMALL]: '20px',
  [TYPES.BIG]: '20px',
  [TYPES.EXTRA_BIG]: '40px'
}

const Temp = ({ className, temp }) => {
  return <span className={className}>{Math.round(temp)}°C</span>
}

const StyledTemp = styled(Temp)`
  padding: 5px 10px;
  background-color: #0074d9;
  color: #fff;
  border-radius: ${props => RADIUSES[props.type] || RADIUSES[TYPES.NORMAL]};
  font-size: ${props => SIZES[props.type] || SIZES[TYPES.NORMAL]};
`

export { StyledTemp as Temp, TYPES }
