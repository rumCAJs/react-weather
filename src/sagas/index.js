import { call, put, throttle, delay, takeLatest, all, takeEvery } from 'redux-saga/effects'
import {
  GET_SUGGESTIONS,
  GET_SUGGESTIONS_FAIL,
  GET_SUGGESTIONS_SUCCESS,
  GET_LOCATION_DATA,
  GET_LOCATION_DATA_FAIL,
  GET_LOCATION_DATA_SUCCESS,
  GET_FORECAST,
  GET_FORECAST_FAIL,
  GET_FORECAST_SUCCESS
} from '../actionTypes'
import { getForecast, getSuggestions, getLocationById } from '../api'

function* fetchLocationData(action) {
  try {
    const data = yield call(getLocationById, action.locationId)
    yield put({
      type: GET_LOCATION_DATA_SUCCESS,
      data
    })
  } catch (e) {
    yield put({ type: GET_LOCATION_DATA_FAIL, message: e.message })
  }
}

function* getLocationDataSaga() {
  yield takeEvery(GET_LOCATION_DATA, fetchLocationData)
}

function* fetchForecast(action) {
  try {
    const data = yield call(getForecast, action.locationId)
    yield put({
      type: GET_FORECAST_SUCCESS,
      data
    })
  } catch (e) {
    yield put({ type: GET_FORECAST_FAIL, message: e.message })
  }
}

function* getForecastSaga() {
  yield takeEvery(GET_FORECAST, fetchForecast)
}

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

export default function* rootSaga() {
  yield all([getSuggestionsSaga(), getLocationDataSaga(), getForecastSaga()])
}
