import { all, fork, takeEvery } from "redux-saga/effects";
// import axiosInstance from "../../utils/axiosInstance";
import ActionTypes from "../constants/action-types";
import apiGenerator from "../../utils/apiGenerator";

function* loadQuizRequest() {
    yield takeEvery(ActionTypes.LOAD_QUIZ_REQUEST,  apiGenerator);
}

export default function* rootQuizSaga() {
    yield all([fork(loadQuizRequest)])
}