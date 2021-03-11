import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import articleReducers from "./articleReducers";
import countReducers from "./countReducers";
// import { forbiddenWordsMiddleware, fetchArticlesMiddleware } from "./middlewares";
import { forbiddenWordsMiddleware } from "./middlewares";
import thunk from "redux-thunk";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const allReducers = combineReducers({
  articles: articleReducers,
  count: countReducers,
});

const store = createStore(allReducers, storeEnhancers(applyMiddleware(forbiddenWordsMiddleware, thunk)));

export default store;
