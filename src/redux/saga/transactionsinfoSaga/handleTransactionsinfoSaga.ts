import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getTransactionsinfosuccess } from '../../reducer/transactionsinfoReducer';
import { GET_TRANSACTIONSINFO_REQUEST } from '../../reducer/transactionsinfoReducer/actionTypes';
import { getTransactionsinfoApi } from '../../../services/transactionsinfoApi/index';


function* getTransactionsinfoListRequest() {
  try {
    const res: AxiosResponse = yield call(getTransactionsinfoApi)
    yield put(getTransactionsinfosuccess(res.data.result));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* TransactionsinfoSaga() {
  yield takeLatest(GET_TRANSACTIONSINFO_REQUEST, getTransactionsinfoListRequest)
}
