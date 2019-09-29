import { combineReducers } from 'redux'

import location from './location'
import suggestions from './suggestions'
import forecast from './forecast'

const reducer = combineReducers({
  location,
  suggestions,
  forecast
})

export default reducer
