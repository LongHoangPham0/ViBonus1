import { all } from "redux-saga/effects";
import handlePostCategorySaga from './handlePostCategorySaga'

export const postCategorySaga = function* root() {
    yield all([handlePostCategorySaga()])
}