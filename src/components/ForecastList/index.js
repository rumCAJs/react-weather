import React from 'react'
import { ForecastItem } from '../ForecastItem'
import { prepareForcastData } from './utils'
import { Wrapper, Heading } from './styled'

const whiteListTimes = [6, 12, 18]
const ForecastList = ({ forecast }) => {
  const data = prepareForcastData(forecast, whiteListTimes)

  return (
    <div>
      <Heading>Forecast for the following 4 days</Heading>
      <Wrapper>
        {Object.keys(data).map(key => (
          <ForecastItem key={key} data={data[key]} />
        ))}
      </Wrapper>
    </div>
  )
}
export { ForecastList }
