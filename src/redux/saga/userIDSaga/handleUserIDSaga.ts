import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserIDListApi } from '../../../services/userIDApi';
import { getUserIDSuccess } from '../../reducer/userIDReducer';
import { GET_USER_ID_LIST_REQUEST } from '../../reducer/userIDReducer/actionTypes';

function* getUserIDListRequest() {
  try {
    const res: AxiosResponse = yield call(getUserIDListApi)
    yield put(getUserIDSuccess(res.data.result));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* userIDSaga() {
  yield takeLatest(GET_USER_ID_LIST_REQUEST, getUserIDListRequest)
}
