import React from 'react'
import styled from 'styled-components'
import { ForecastItem } from './ForecastItem'

const whiteListTimes = [6, 12, 18].map(num => `${(num < 10 ? '0' : '') + num}:00:00`)
const currentDate = new Date().toISOString().split('T')[0]

const prepareForcastData = list =>
  Object.values(
    list
      .filter(chunk => !chunk.dt_txt.includes(currentDate))
      .reduce((acc, chunk) => {
        const [key, time] = chunk.dt_txt.split(' ')
        if (!whiteListTimes.includes(time)) {
          return acc
        }
        if (!acc[key]) {
          acc[key] = []
        }

        acc[key].push(chunk)

        return acc
      }, {})
  ).slice(0, 4)

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`

const Heading = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
`

const ForecastList = ({ forecast }) => {
  const data = prepareForcastData(forecast)
  console.log(data)

  return (
    <div>
      <Heading>Forecast for the following 4 days</Heading>
      <Wrapper>
        {data.map(day => (
          <ForecastItem data={day} />
        ))}
      </Wrapper>
    </div>
  )
}
export { ForecastList }
