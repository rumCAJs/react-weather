import { call, put, throttle } from 'redux-saga/effects'
import { GET_SUGGESTIONS, GET_SUGGESTIONS_FAIL, GET_SUGGESTIONS_SUCCESS } from '../actionTypes'
import { getSuggestions } from '../api'

function* fetchSuggestions(action) {
  try {
    const suggestions = yield call(getSuggestions, action.location)
    yield put({ type: GET_SUGGESTIONS_SUCCESS, suggestions, location: action.location })
  } catch (e) {
    yield put({ type: GET_SUGGESTIONS_FAIL, message: e.message })
  }
}

function* getSuggestionsSaga() {
  yield throttle(500, GET_SUGGESTIONS, fetchSuggestions)
}

export default getSuggestionsSaga
