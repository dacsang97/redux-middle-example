import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { increamentAsync } from "./numberSaga";
import * as types from "../constants/actionTypes";

export default function* watchIncreamentAsync() {
  yield takeEvery(types.ADD_ASYNC, increamentAsync);
}
