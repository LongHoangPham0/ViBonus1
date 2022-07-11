// import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from "axios";
import { call, put, takeLatest } from "redux-saga/effects";
import { getUserListApi } from "../../../services/userApi";
import { getUserAdminSuccess } from "../../reducer/userAdminReducer";
import { GET_USER_ADMIN_LIST_REQUEST } from "../../reducer/userAdminReducer/actionTypes";

function* getUserAdmin() {
  try {
    const res: AxiosResponse = yield call(getUserListApi);
    yield put(getUserAdminSuccess(res));
  } catch (error: any) {
    console.log(error);
  }
}

export default function* postSaga() {
  yield takeLatest(GET_USER_ADMIN_LIST_REQUEST, getUserAdmin);
}
