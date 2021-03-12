import { takeEvery, call, put } from "redux-saga/effects";

export default function* rootSaga() {
  yield takeEvery("FETCH_REQUESTED", fetchData);
  yield takeEvery("CHECKWORD", forbiddenword);
}

export function* fetchData() {
  try {
    const payload = yield call(getData);
    yield put({ type: "articlesReducers/dataLoaded", payload });
  } catch (error) {
    yield put({ type: "API_ERRORED", payload: error });
  }
}

export function* forbiddenword(action) {
  const forbiddenWords = ["spam", "money"];
  const isWordFound = forbiddenWords.filter((word) => action.payload.title.includes(word));
  if (isWordFound.length) {
    alert("Found Bad Word!");
    yield put({ type: "FOUND_BADWORD" });
  } else {
    yield put({ type: "articlesReducers/addArticles", payload: action.payload });
  }
}

export const getData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
};
