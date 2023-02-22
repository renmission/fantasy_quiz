import { all, fork, takeLatest, call, put } from "redux-saga/effects";
import axiosInstance from "../../utils/axiosInstance";

function* postResults({ payload }) {
  try {
    const res = yield call(axiosInstance, {
      method: "POST",
      url: "/answers/results",
      data: payload,
    });

    yield put({
      type: "POST_RESULTS_SUCCESS",
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
}

function* submitResults() {
  yield takeLatest("POST_RESULTS_REQUEST", postResults);
}

export default function* rootResultsSaga() {
  yield all([fork(submitResults)]);
}
