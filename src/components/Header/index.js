import React from 'react'
import { StyledHeader, StyledText } from './styled'

const Header = ({ children }) => (
  <StyledHeader>
    <StyledText>{children}</StyledText>
  </StyledHeader>
)

export { Header }
