import { all } from 'redux-saga/effects'
import handleTopProduct from './handleTopProductSaga'

export const topProductSaga = function* root() {
  yield all([handleTopProduct()])
}