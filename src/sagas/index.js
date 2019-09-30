import { all } from 'redux-saga/effects'

import getLocationDataSaga from './location'
import getForecastSaga from './forecast'
import getSuggestionsSaga from './suggestions'

export default function* rootSaga() {
  yield all([getSuggestionsSaga(), getLocationDataSaga(), getForecastSaga()])
}
