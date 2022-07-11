import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getPostCategoryListApi } from '../../../services/postCategoryApi'
import { getPostCategorySuccess } from '../../reducer/postCategoryReducer'
import { GET_POST_CATEGORY_LIST_REQUEST } from '../../reducer/postCategoryReducer/actionTypes'

function* getPostCategoryListRequest() {
  try {
    const res: AxiosResponse = yield call(getPostCategoryListApi)
    yield put(getPostCategorySuccess(res.data.result));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* postCategorySaga() {
  yield takeLatest(GET_POST_CATEGORY_LIST_REQUEST, getPostCategoryListRequest)
}