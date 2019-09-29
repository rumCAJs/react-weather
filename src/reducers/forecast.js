import {
  CHANGE_LOCATION,
  GET_SUGGESTIONS,
  GET_LOCATION_DATA,
  GET_FORECAST,
  GET_FORECAST_FAIL,
  GET_FORECAST_SUCCESS,
  CHANGE_FORECAST
} from '../actionTypes'

const defaultState = {
  current: null,
  cache: {},
  isLoading: false,
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_FORECAST:
      return { ...state, current: action.forecast }
    case GET_FORECAST:
      return { ...state, current: null, isLoading: true, error: null }
    case GET_FORECAST_SUCCESS: {
      const current = { ...action.data, downloaded: Date.now() }
      const cache = { ...state.cache, [current.city.id]: current }
      return { ...state, current, cache, isLoading: false }
    }
    case GET_FORECAST_FAIL:
      state.isLoading = false
      return { ...state, error: action.message, isLoading: false }
    case GET_SUGGESTIONS:
    case GET_LOCATION_DATA:
    case CHANGE_LOCATION:
      return { ...state, current: null }

    default:
      return state
  }
}
