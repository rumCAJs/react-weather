import {
  CHANGE_LOCATION,
  GET_LOCATION_DATA,
  GET_SUGGESTIONS,
  GET_FORECAST,
  CHANGE_FORECAST,
  CHANGE_SUGGESTIONS
} from '../actionTypes'

const getSuggestions = location => ({
  type: GET_SUGGESTIONS,
  location
})

const changeSuggestions = suggestions => ({
  type: CHANGE_SUGGESTIONS,
  suggestions
})

const changeLocation = location => ({
  type: CHANGE_LOCATION,
  location
})

const getLocationData = locationId => ({
  type: GET_LOCATION_DATA,
  locationId
})

const getForecast = locationId => ({
  type: GET_FORECAST,
  locationId
})

const changeForecast = forecast => ({
  type: CHANGE_FORECAST,
  forecast
})

export { getLocationData, changeLocation, getSuggestions, getForecast, changeForecast, changeSuggestions }
