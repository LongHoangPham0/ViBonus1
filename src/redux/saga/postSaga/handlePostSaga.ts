import { GET_POST_LIST_2_REQUEST } from './../../reducer/postReducer/actionTypes';
// import { PayloadAction } from '@reduxjs/toolkit'
import { AxiosResponse } from "axios";
import { call, delay, put, takeLatest } from "redux-saga/effects";
import { getPostList2Api, getPostListApi, postPostIdApi } from "../../../services/postApi";
import { postPostApi } from "./../../../services/postApi";
import {
  getPostSuccess,
  postPostSuccess,
  setLoading,
  getPostByIdSuccess,
  getPostREQUEST,
} from "../../reducer/postReducer";
import {
  GET_POST_ID_REQUEST,
  GET_POST_LIST_REQUEST,
  POST_POST_LIST_REQUEST,
} from "../../reducer/postReducer/actionTypes";

function* getPostList2Request(action: any) {
  try {
    yield put(setLoading(true));
    const res: AxiosResponse = yield call(getPostList2Api, action.payload);
    yield delay(1000);
    yield put(getPostREQUEST(res.data.result));

    yield put(setLoading(false));
  } catch (error: any) {
    console.log(error);
  }
}
function* getPostListRequest(action: any) {
  try {
    yield put(setLoading(true));
    const res: AxiosResponse = yield call(getPostListApi);
    yield delay(1000);
    yield put(getPostSuccess(res.data.result));

    yield put(setLoading(false));
  } catch (error: any) {
    console.log(error);
  }
}

function* postPostListRequest(action: any) {
  try {
    const res: AxiosResponse = yield call(postPostApi, {
      item: action.payload,
    }); // TODO: learn
    yield put(postPostSuccess(res.data.result));
  } catch (error: any) {
    console.log(error);
  }
}

function* getPostIdRequest(action: any) {
  try {
    const res: AxiosResponse = yield call(postPostIdApi, action.payload);
    yield put(getPostByIdSuccess(res.data.result));
  } catch (error: any) {
    alert("Can't find post");
    console.log(error);
  }
}

export default function* postSaga() {
  yield takeLatest(GET_POST_LIST_REQUEST, getPostListRequest);
  yield takeLatest(GET_POST_LIST_2_REQUEST, getPostList2Request);
  yield takeLatest(POST_POST_LIST_REQUEST, postPostListRequest);
  yield takeLatest(GET_POST_ID_REQUEST, getPostIdRequest);
}
