import { all } from 'redux-saga/effects'
import { postSaga } from './postSaga'
import { userSaga } from './userSaga'
import { postCategorySaga } from './postCategorySaga'
import {rewardSaga} from './rewardSaga';
import { tagSaga } from './tagSaga';
import { userIDSaga } from './userIDSaga';
import { topReceiverSaga } from './topreceiverSaga';
import { topProductSaga } from './topproductSaga';
import { TransactionsinfoSaga } from './transactionsinfoSaga';
import { TransactionsSaga } from './transactionsSaga';

export const rootSaga = function* () {
  yield all([
    postSaga(), 
    userSaga(), 
    postCategorySaga(),
    rewardSaga(),
    tagSaga(),
    userIDSaga(),
    topReceiverSaga(),
    topProductSaga(),
    TransactionsinfoSaga(),
    TransactionsSaga(),
  ])
}