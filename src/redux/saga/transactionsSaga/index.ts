import { all } from 'redux-saga/effects'
import handleTransactionsSaga from './handleTransactionsSaga'

export const TransactionsSaga = function* root() {
  yield all([handleTransactionsSaga()])
}