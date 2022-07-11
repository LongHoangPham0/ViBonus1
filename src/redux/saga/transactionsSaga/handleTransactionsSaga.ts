import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getTransactionssuccess } from '../../reducer/transactionsReducer';
import { GET_TRANSACTIONS_REQUEST } from '../../reducer/transactionsReducer/actionTypes';
import { getTransactionsApi } from '../../../services/transactionsApi/index';


function* getTransactionsListRequest() {
  try {
    const res: AxiosResponse = yield call(getTransactionsApi)
    yield put(getTransactionssuccess(res.data.result));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* TransactionsSaga() {
  yield takeLatest(GET_TRANSACTIONS_REQUEST, getTransactionsListRequest)
}
