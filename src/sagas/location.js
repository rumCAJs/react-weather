import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_LOCATION_DATA, GET_LOCATION_DATA_FAIL, GET_LOCATION_DATA_SUCCESS } from '../actionTypes'
import { getLocationById } from '../api'

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

export default getLocationDataSaga
