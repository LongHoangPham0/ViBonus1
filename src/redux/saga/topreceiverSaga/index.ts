import { all } from 'redux-saga/effects'
import handleTopReceiver from './handleTopReceiverSaga'

export const topReceiverSaga = function* root() {
  yield all([handleTopReceiver()])
}