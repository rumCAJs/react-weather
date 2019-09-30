import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Temp, TYPES } from './Temp'
import { Icon } from './WeatherIcon'
import conf from '../config'

const TempLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 5px;
`

const Item = styled.div`
  padding: 8px;
  border: 1px solid ${props => (props.isActive ? '#0074D9' : '#AAAAAA')};
  border-radius: 5px;
  margin-right: 5px;
  background-color: ${props => (props.isActive ? 'rgba(150, 150, 150, 0.1)' : 'transparent')};
  font-size: 24px;
  box-shadow: 0 0 5px ${props => (props.isActive ? 'rgba(0, 0, 0, 0.7)' : 'transparent')};

  :last-child {
    margin-right: 0;
  }
`

const SuggestItem = ({ item, onClick, isActive }) => {
  return (
    <Item onClick={onClick} isActive={isActive}>
      {item.name}, {item.sys.country} <img src={`${conf.FLAG_BASE_URL}${item.sys.country.toLowerCase()}.png`} />
      <TempLine>
        <Temp temp={item.main.temp} type={TYPES.NORMAL} />
        <Icon icon={item.weather && item.weather[0] ? item.weather[0].icon : null} width={28} height={28} />
      </TempLine>
    </Item>
  )
}

export { SuggestItem }
