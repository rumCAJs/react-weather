import React from 'react'
import { Temp } from '../Temp'
import { TYPES } from '../Temp/config'
import { Icon } from '../WeatherIcon'
import conf from '../../config'
import { TempLine, Item } from './styled'

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
