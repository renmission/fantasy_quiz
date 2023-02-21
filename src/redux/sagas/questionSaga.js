import { all, fork, takeEvery } from "redux-saga/effects";
import ActionTypes from "../constants/action-types";
import apiGenerator from "../../utils/apiGenerator";

function* loadQuestionRequest() {
    yield takeEvery(ActionTypes.LOAD_QUESTIONS_REQUEST,  apiGenerator);
}

export default function* rootQuestionSaga() {
    yield all([fork(loadQuestionRequest)])
}