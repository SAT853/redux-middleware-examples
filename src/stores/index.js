import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { articlesReducers } from "./articleReducers";
import { countReducers } from "./countReducers";
import { forbiddenWordsMiddleware } from "./middlewares/custome-middleware";
import { rootSaga } from "./middlewares/sagas/api-saga";

const initialiseSagaMiddleware = createSagaMiddleware();

const middleware = [forbiddenWordsMiddleware, initialiseSagaMiddleware, ...getDefaultMiddleware()];

const store = configureStore({ reducer: { articles: articlesReducers, count: countReducers }, middleware });

initialiseSagaMiddleware.run(rootSaga);

export default store;
