import { all } from "redux-saga/effects";
import handleTagListSaga from './handleTagSaga'

export const tagSaga = function* root() {
    yield all([handleTagListSaga()])
}