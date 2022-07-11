import { putRewardListApi } from './../../../services/rewardApi/index';
import { AxiosResponse } from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { getRewardListApi } from '../../../services/rewardApi/index';
import { getRewardSuccess } from '../../reducer/rewardReducer';
import { putRewardSuccess } from '../../reducer/rewardReducer';
import { GET_REWARD_LIST_REQUEST } from '../../reducer/rewardReducer/actionTypes';
import { PUT_REWARD_REQUEST } from '../../reducer/rewardReducer/actionTypes';

function* getRewardListRequest() {
   try {
       const res: AxiosResponse = yield call(getRewardListApi)
       yield put(getRewardSuccess(res.data.result))
   } catch (error: any) {
       console.log(error)
   } 
}
function* putRewardRequest(action:any) {
    
    try {
        const res: AxiosResponse = yield call(putRewardListApi, action.payload)
        yield put(putRewardSuccess(res.data.result))
        
    } catch (error: any) {
        console.log(error)
    } 
 }

export default function* rewardSaga() {
    yield takeLatest(GET_REWARD_LIST_REQUEST, getRewardListRequest);
    yield takeLatest(PUT_REWARD_REQUEST, putRewardRequest)

}
