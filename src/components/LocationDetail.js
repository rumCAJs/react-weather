import React from 'react'
import { Button } from './Button'
import { ForecastList } from './ForecastList'
import { Loader } from './Loader'
import { Temp, TYPES } from './Temp'
import styled from 'styled-components'
import { Icon } from './WeatherIcon'

const Wrapper = styled.div`
  text-align: center;
  padding: ${props => (props.hide ? '0' : '15px')};
  background: rgba(150, 150, 150, 0.1);

  a {
    color: #0074d9;
  }
`

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;

  > * {
    margin-right: 10px;
  }

  > *:last-child {
    margin-right: 0;
  }
`

const WeatherDescription = styled.span`
  font-style: italic;
  font-size: 24px;
`

const Heading = styled.div`
  margin: 10px;
  text-align: center;
  font-size: 32px;
  font-weight: bold;
  text-shadow: 2px 2px 0px #fff;
`

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
