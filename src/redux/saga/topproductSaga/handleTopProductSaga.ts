import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getTopproductsuccess } from '../../reducer/topproductReducer';
import { GET_TOP_PRODUCTS_REQUEST } from '../../reducer/topproductReducer/actionTypes';
import { getTopProductApi } from '../../../services/topproductApi/index';


function* getTopProductListRequest() {
  try {
    const res: AxiosResponse = yield call(getTopProductApi)
    yield put(getTopproductsuccess(res.data.result));
  } catch (error: any) {
    console.log(error)
  }
}

export default function* topProductSaga() {
  yield takeLatest(GET_TOP_PRODUCTS_REQUEST, getTopProductListRequest)
}
