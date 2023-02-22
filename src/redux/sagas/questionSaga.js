import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInstance";

function* getQuestions() {
  try {
    const res = yield call(axiosInstance, {
      method: "GET",
      url: "questions",
      // url: "660/questions",
    });

    yield put({
      type: "LOAD_QUESTION_SUCCESS",
      payload: res,
    });
  } catch (error) {
    console.error(error);
  }
}

function* allQuestionsRequest() {
  yield takeLatest("LOAD_QUESTION_REQUEST", getQuestions);
}

export default function* rootQuestionSaga() {
  yield all([fork(allQuestionsRequest)]);
}
