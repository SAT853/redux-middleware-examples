import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import articleReducers from "./articleReducers";
import countReducers from "./countReducers";
import { forbiddenWordsMiddleware } from "./middlewares";
import apiSaga from "./middlewares/sagas/api-saga";

import createSagaMiddleware from "redux-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

// Init Redux Dev Tool
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  articles: articleReducers,
  count: countReducers,
});

const store = createStore(allReducers, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, initialiseSagaMiddleware)));

initialiseSagaMiddleware.run(apiSaga);

export default store;
