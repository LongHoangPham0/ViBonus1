import { all } from "redux-saga/effects";
import handleRewardSaga from './handleRewardSaga'

export const rewardSaga = function* root() {
    yield all([handleRewardSaga()])
}