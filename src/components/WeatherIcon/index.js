import React from 'react'
import styled from 'styled-components'
import conf from '../../config'

const StyledImg = styled.img`
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 0 4px #999;
`

const Icon = ({ icon, width, height }) => {
  return <StyledImg src={`${conf.ICON_BASE_URL}${icon}@2x.png`} width={width} height={height} />
}

export { Icon }
