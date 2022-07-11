import { all } from 'redux-saga/effects'
import handleUserIDSaga from './handleUserIDSaga'

export const userIDSaga = function* root() {
  yield all([handleUserIDSaga()])
}