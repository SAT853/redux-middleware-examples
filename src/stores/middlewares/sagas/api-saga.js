import { takeEvery, call, put, all, select, take, fork, cancel, cancelled } from "redux-saga/effects";

import * as api from "./api";

// Multiwatcher....
export function* rootSaga() {
  yield all([
    makeApiRequest(),
    checkWord(),
    // watchAndLog(),
    loginFlow(),
  ]);
  // yield fork(makeApiRequest);
  // yield fork(checkWord);
  // yield fork(watchAndLog);
}

export function* makeApiRequest() {
  yield takeEvery("FETCH_REQUESTED", fetchData);
}

export function* checkWord() {
  // yield takeEvery("CHECKWORD", forbiddenword);
  const action = yield take("CHECKWORD");
  yield fork(forbiddenword, { ...action });
}

/* ========== Effects Behaviour ============
1. call ===> resulting behaviour of the "call" effect is the same as when middleware suspends the generator 
             untill a promises resolves.
2. take ===> It'll suspend the generator untill a matching action is dispatched
3. takeEvery ===> the invoked tasks have no control on when they'll be called. 
                  They will be invoked again and again on each matching action.
                  They also have no control on when to stop the observation.
4. fork ===> To express non-blocking calls.
             
========== Effects Behaviour ============ */
export function* fetchData() {
  try {
    const payload = yield call(api.getData);
    yield put({ type: "articlesReducers/dataLoaded", payload });
  } catch (error) {
    yield put({ type: "API_ERRORED", payload: error });
  }
}

export function* forbiddenword(action) {
  debugger;
  const forbiddenWords = ["spam", "money"];
  const isWordFound = forbiddenWords.filter((word) => action.payload.title.includes(word));
  if (isWordFound.length) {
    alert("Found Bad Word!");
    yield put({ type: "FOUND_BADWORD" });
  } else {
    yield put({ type: "articlesReducers/addArticles", payload: action.payload });
  }
}

// export function* watchAndLog() {
//   // yield takeEvery("*", function* logger(action) {
//   //   const state = yield select();
//   //   console.log("state ====>", state);
//   //   console.log("action ====>", action);
//   // });
//   while (true) {
//     const action = yield take("*");
//     const state = yield select();
//     console.log("state ====>", state);
//     console.log("action ====>", action);
//   }
// }

// Pulling future action & Non blocking calls

function* authorize(user, password) {
  try {
    const token = yield call(api.authorize, user, password);
    yield put({ type: "LOGIN_SUCCESS", token });
    yield call(api.storeItem, { token });
  } catch (error) {
    yield put({ type: "LOGIN_ERROR", error });
  } finally {
    if (yield cancelled()) {
      // DO additional Stuff
    }
  }
}

/*
UI                              loginFlow
--------------------------------------------------------
LOGIN_REQUEST -----------> call authorize -----------> waiting to resolve
........................................................
........................................................
LOGOUT.................................................. missed!
........................................................
................................authorize returned...... dispatch a `LOGIN_SUCCESS`!!
........................................................
*/

function* loginFlow() {
  while (true) {
    const { user = "sathish", password = "12345678" } = yield take("LOGIN_REQUEST");
    const task = yield fork(authorize, user, password);
    // We're also doing yield take(['LOGOUT', 'LOGIN_ERROR']). It means we are watching for 2 concurrent
    const action = yield take(["LOGOUT", "LOGIN_ERROR"]);
    if (action.type === "LOGOUT") yield cancel(task);
    yield call(api.clearItem, "token");
  }
}
