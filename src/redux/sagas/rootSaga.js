import { all, fork } from 'redux-saga/effects';
import authSaga from './authSaga';
import rootQuizSaga from './quizSaga';
import rootQuestionSaga from './questionSaga';
import rootResultSaga from './resultSaga';

export default function* rootSaga() {
  yield all([fork(authSaga), fork(rootQuizSaga), fork(rootQuestionSaga), fork(rootResultSaga)]);
}
