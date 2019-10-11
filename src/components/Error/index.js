import React from 'react'
import styled from 'styled-components'
import { Icon } from './styled'

const Error = ({ className, children }) => (
  <div className={className}>
    <Icon>X</Icon>
    {children}
  </div>
)

const StyledError = styled(Error)`
  border: 2px solid #ff4136;
  padding: 16px;
  font-size: 24px;
  border-radius: 8px;
  color: #85144b;
`

export { StyledError as Error }
