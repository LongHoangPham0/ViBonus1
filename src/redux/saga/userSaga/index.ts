import { all } from 'redux-saga/effects'
import handleUserSaga from './handleUserSaga'

export const userSaga = function* root() {
  yield all([handleUserSaga()])
}