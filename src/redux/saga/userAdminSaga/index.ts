import { all } from "redux-saga/effects";
import handleUserAdminSaga from "./handleUserAdminSaga";

export const userAdminSaga = function* root() {
  yield all([handleUserAdminSaga()]);
};
