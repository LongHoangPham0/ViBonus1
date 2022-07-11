import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getUserListApi } from '../../../services/userApi'
import { getUserSuccess } from '../../reducer/userReducer'
import { GET_USER_LIST_REQUEST } from '../../reducer/userReducer/actionTypes'

function* getUserListRequest() {
  try {
    const res: AxiosResponse = yield call(getUserListApi)
    yield put(getUserSuccess(res.data.result));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* userSaga() {
  yield takeLatest(GET_USER_LIST_REQUEST, getUserListRequest)
}
