import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getTopReceiverSuccess } from '../../reducer/topreceiverReducer';
import { GET_TOP_RECEIVER_REQUEST } from '../../reducer/topreceiverReducer/actionTypes';
import { getTopReceiverApi } from '../../../services/topreceiverApi/index';


function* getTopReceiverListRequest() {
  try {
    const res: AxiosResponse = yield call(getTopReceiverApi)
    yield put(getTopReceiverSuccess(res.data.result));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* topReceiverSaga() {
  yield takeLatest(GET_TOP_RECEIVER_REQUEST, getTopReceiverListRequest)
}
