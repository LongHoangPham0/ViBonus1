import { all } from 'redux-saga/effects'
import handleTransactionsinfoSaga from './handleTransactionsinfoSaga'

export const TransactionsinfoSaga = function* root() {
  yield all([handleTransactionsinfoSaga()])
}