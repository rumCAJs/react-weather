import React from 'react'
import { getWeekDay, getNiceDate } from '../../utils'
import { Temp } from '../Temp'
import { Icon } from '../WeatherIcon'
import { Wrapper, Line, Heading, DateRow } from './styled'
import { getTimeOfDay } from './utils'

const ForecastItem = ({ data }) => {
  const date = new Date(data[0].dt_txt)
  const dayOfWeek = getWeekDay(date)
  return (
    <Wrapper>
      <Heading>{dayOfWeek}</Heading>
      <DateRow>{getNiceDate(date)}</DateRow>
      {data.map(chunk => (
        <Line key={chunk.dt_txt}>
          <span>{getTimeOfDay(chunk.dt_txt)}</span>
          <Temp temp={chunk.main.temp} />
          <Icon icon={chunk.weather && chunk.weather[0] ? chunk.weather[0].icon : null} width={50} height={50} />
        </Line>
      ))}
    </Wrapper>
  )
}

export { ForecastItem }
