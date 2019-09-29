import {
  CHANGE_LOCATION,
  GET_SUGGESTIONS,
  GET_LOCATION_DATA,
  GET_LOCATION_DATA_FAIL,
  GET_LOCATION_DATA_SUCCESS
} from '../actionTypes'

const defaultState = {
  current: null,
  cache: {},
  isLoading: false,
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case CHANGE_LOCATION:
      return { ...state, current: action.location }
    case GET_SUGGESTIONS:
      return { ...state, current: null }
    case GET_LOCATION_DATA:
      return { ...state, current: null, isLoading: false, error: null }
    case GET_LOCATION_DATA_SUCCESS: {
      const current = { ...action.data, downloaded: Date.now() }
      const cache = { ...state.cache, [current.id]: current }
      return { ...state, current, cache, isLoading: false }
    }
    case GET_LOCATION_DATA_FAIL:
      return { ...state, error: action.message, isLoading: false }

    default:
      return state
  }
}
