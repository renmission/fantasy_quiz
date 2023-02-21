import { all, fork, takeEvery, takeLatest } from 'redux-saga/effects';
import ActionTypes from '../constants/action-types';
import apiGenerator from '../../utils/apiGenerator';

function* loadResultRequest() {
  yield takeEvery(ActionTypes.LOAD_RESULTS_REQUEST, apiGenerator);
}

function* addResultRequest() {
  yield takeLatest(ActionTypes.ADD_RESULTS_REQUEST, apiGenerator);
}

export default function* rootResultSaga() {
  yield all([fork(loadResultRequest), fork(addResultRequest)]);
}
