import { put, takeEvery, takeLatest } from "redux-saga/effects";
import { delay } from "redux-saga";
import { addValue, subValue } from "../actions/numberActions";

// Action add async, +1 sau 1s
function* increamentAsync(action) {
  yield delay(1000);
  // put ~ dispatch
  yield put(addValue(action.value));
}

export { increamentAsync };
