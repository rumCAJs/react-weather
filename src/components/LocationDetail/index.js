import React from 'react'
import { Button } from '../Button'
import { ForecastList } from '../ForecastList'
import { Loader } from '../Loader'
import { Temp } from '../Temp'
import { TYPES } from '../Temp/config'
import { Icon } from '../WeatherIcon'
import { Wrapper, Line, WeatherDescription, Heading } from './styled'

const LocationDetail = ({ location, onLoadForecast, forecast, isLoading, error }) => {
  const weather = location && location.weather && location.weather[0] ? location.weather[0] : null
  return (
    <Wrapper hide={!location}>
      {isLoading && <Loader />}
      {location && (
        <>
          <Heading>
            Weather in {location.name}, {location.sys.country}
          </Heading>
          <Line>
            {weather && <Icon icon={weather.icon} />}
            <Temp temp={location.main.temp} type={TYPES.EXTRA_BIG} />
          </Line>
          <Line>
            <WeatherDescription>{weather.description}</WeatherDescription>
          </Line>

          <Line>
            <span>Coordinates/Map: </span>
            <a href={`https://www.google.com/maps/@${location.coord.lat},${location.coord.lon},14z`} target="_BLANK">
              {location.coord.lat},{location.coord.lon}
            </a>
          </Line>
          {!forecast && <Button onClick={onLoadForecast}>Get 4 days Forecast</Button>}
          {forecast && <ForecastList forecast={forecast.list} />}
        </>
      )}
    </Wrapper>
  )
}

export { LocationDetail }
