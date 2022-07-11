import { all } from 'redux-saga/effects'
import handlePostSaga from './handlePostSaga'

export const postSaga = function* root() {
  yield all([handlePostSaga()])
}
