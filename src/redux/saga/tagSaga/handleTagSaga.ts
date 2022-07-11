import {AxiosResponse} from 'axios';
import { put, takeLatest, call } from 'redux-saga/effects';
import { getTagListApi } from '../../../services/tagApi/index';
import { getTagSuccess } from '../../reducer/tagReducer';
import { GET_TAG_LIST_REQUEST } from '../../reducer/tagReducer/actionTypes';

function* getTagListRequest() {
    try {
        const res: AxiosResponse = yield call(getTagListApi)
        yield put(getTagSuccess(res.data.result))
    } catch (error: any) {
        console.log(error)
    }
}

export default function* rewardSaga() {
    yield takeLatest(GET_TAG_LIST_REQUEST, getTagListRequest)
}