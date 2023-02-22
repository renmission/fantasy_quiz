import { all, fork } from "redux-saga/effects";
import authSaga from "./authSaga";
import rootQuestionSaga from "./questionSaga";
import rootResultsSaga from "./resultsSaga";

export default function* rootSaga() {
  yield all([fork(authSaga), fork(rootQuestionSaga), fork(rootResultsSaga)]);
}
