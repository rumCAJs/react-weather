import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { Input } from '../Input'
import { Header } from '../Header'
import {
  getLocationData,
  changeLocation,
  getSuggestions,
  getForecast,
  changeForecast,
  changeSuggestions
} from '../../actions'
import { SuggestList } from '../SuggestList'
import conf from '../../config'
import { LocationDetail } from '../../components/LocationDetail'

const searchInCached = (id, state, type = 'LOCATION') => {
  const cache = state.cache || {}
  const item = cache[id]
  if (item && item.downloaded && item.downloaded + conf[`${type}_CACHE_TIME`] > Date.now()) {
    return item
  }

  return null
}

const Wrapper = styled.div`
  font-family: sans-serif;
`

const App = ({ store }) => {
  const { dispatch, subscribe } = store
  const state = store.getState()

  const [searchInput, setSearchInput] = useState('')
  const [suggestions, setSuggestions] = useState(state.suggestions)
  const [location, setLocation] = useState(state.location)
  const [forecast, setForecast] = useState(state.forecast)

  useEffect(() => {
    const unsubscribe = subscribe(() => {
      const state = store.getState()
      setSuggestions(state.suggestions)
      setLocation(state.location)
      setForecast(state.forecast)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  useEffect(() => {
    if (searchInput.length > 2) {
      const cached = searchInCached(searchInput, store.getState().suggestions, 'SUGGESTIONS')
      cached ? dispatch(changeSuggestions(cached)) : dispatch(getSuggestions(searchInput))
    } else {
      setSuggestions([])
    }
  }, [searchInput])

  const handleSuggestItemClick = locationId => {
    const cached = searchInCached(locationId, store.getState().location)
    cached ? dispatch(changeLocation(cached)) : dispatch(getLocationData(locationId))
  }

  const handleForcastClick = locationId => {
    const cached = searchInCached(locationId, store.getState().forecast, 'FORECAST')
    cached ? dispatch(changeForecast(cached)) : dispatch(getForecast(locationId))
  }

  let currentForecast = forecast.current
  if (location.current) {
    currentForecast = currentForecast || searchInCached(location.current.id, store.getState().forecast)
  }

  return (
    <Wrapper>
      <Header>React Weather App</Header>
      <Input
        defaultValue={searchInput}
        onChange={setSearchInput}
        placeholder="Enter City (Prague, etc...). At least 3 letters required"
      />
      <SuggestList
        items={suggestions.current}
        onSuggestItemClick={handleSuggestItemClick}
        isLoading={suggestions.isLoading}
        error={suggestions.error}
        activeItem={location.current}
      />
      <LocationDetail
        onLoadForecast={() => handleForcastClick(location.current.id)}
        location={location.current}
        error={location.error}
        forecast={currentForecast}
        forecastError={forecast.error}
      />
    </Wrapper>
  )
}

export { App }
