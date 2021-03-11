import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  debugger;
  yield takeEvery("FETCH_REQUESTED", workerSaga);
}

function* workerSaga(actions) {
  debugger;
  try {
    const payload = yield call(getData);
    yield put({ type: "DATA_LOADED", payload });
  } catch (error) {
    yield put({ type: "API_ERRORED", payload: error });
  }
}

const getData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
};
