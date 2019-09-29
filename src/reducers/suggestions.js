import {
  CHANGE_LOCATION,
  GET_SUGGESTIONS,
  GET_SUGGESTIONS_SUCCESS,
  GET_SUGGESTIONS_FAIL,
  CHANGE_SUGGESTIONS
} from '../actionTypes'

const defaultState = {
  current: [],
  cache: {},
  isLoading: false,
  error: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case GET_SUGGESTIONS:
      return { ...state, current: [], isLoading: false }
    case GET_SUGGESTIONS_SUCCESS: {
      const current = action.suggestions.list.slice(0, 5)
      current.downloaded = Date.now()
      const cache = { ...state.cache, [action.location]: current }
      return { ...state, current, cache, isLoading: false }
    }
    case GET_SUGGESTIONS_FAIL:
      return { ...state, current: [], isLoading: false }
    case CHANGE_SUGGESTIONS:
      return { ...state, current: action.suggestions }

    default:
      return state
  }
}
