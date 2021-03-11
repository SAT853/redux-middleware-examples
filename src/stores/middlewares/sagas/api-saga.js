import { takeEvery, call, put } from "redux-saga/effects";

export default function* watcherSaga() {
  yield takeEvery("FETCH_REQUESTED", workerSaga);
}

function* workerSaga() {
  try {
    const payload = yield call(getData);
    yield put({ type: "articlesReducers/dataLoaded", payload });
  } catch (error) {
    yield put({ type: "API_ERRORED", payload: error });
  }
}

const getData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
};
