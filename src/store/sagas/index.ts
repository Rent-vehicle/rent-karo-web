import authSaga from "@/store/sagas/auth-saga";
import { all, fork } from "redux-saga/effects";
import userSaga from "./user-saga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(userSaga)]);
}
