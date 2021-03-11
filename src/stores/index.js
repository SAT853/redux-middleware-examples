import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import articleReducers from "./articleReducers";
import countReducers from "./countReducers";
import { forbiddenWordsMiddleware } from "./middlewares";
import apiSaga from "./middlewares/sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const middleware = [forbiddenWordsMiddleware, initialiseSagaMiddleware];

const store = configureStore({ reducer: { articles: articleReducers, count: countReducers }, middleware });

initialiseSagaMiddleware.run(apiSaga);

export default store;
