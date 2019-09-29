import React from 'react'
import styled from 'styled-components'
import { getWeekDay, getNiceDate } from '../utils'
import { Temp } from './Temp'
import { Icon } from './WeatherIcon'

const Wrapper = styled.div`
  min-width: 180px;
  border: 1px solid #0074d9;
  border-radius: 5px;
  padding: 10px;
  margin-right: 15px;
  margin-bottom: 15px;
  flex-grow: 1;
  box-shadow: 0 0 6px rgba(0, 0, 0, 0.5);
  background: #fff;

  :last-child {
    margin-right: 0;
  }
`

const Line = styled.div`
  border-bottom: 1px solid rgba(33, 33, 33, 0.4);
  padding: 15px 0;
  display: flex;
  flex-flow: row;
  justify-content: space-between;
  vertical-align: middle;
  align-items: center;

  :last-child {
    border: none;
  }

  > * {
    margin-right: 5px;
  }
`

const Heading = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #0074d9;
`

const DateRow = styled.div`
  text-align: center;
`

const getTimeOfDay = txt => txt.replace(/^.*?\s(.{5}).*$/, '$1')

const ForecastItem = ({ data }) => {
  const date = new Date(data[0].dt_txt)
  const dayOfWeek = getWeekDay(date)
  return (
    <Wrapper>
      <Heading>{dayOfWeek}</Heading>
      <DateRow>{getNiceDate(date)}</DateRow>
      {data.map(chunk => (
        <Line>
          <span>{getTimeOfDay(chunk.dt_txt)}</span>
          <Temp temp={chunk.main.temp} />
          <Icon icon={chunk.weather && chunk.weather[0] ? chunk.weather[0].icon : null} width={50} height={50} />
        </Line>
      ))}
    </Wrapper>
  )
}

export { ForecastItem }
