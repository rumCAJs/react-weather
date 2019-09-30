import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_FORECAST, GET_FORECAST_FAIL, GET_FORECAST_SUCCESS } from '../actionTypes'
import { getForecast } from '../api'

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

export default getForecastSaga
