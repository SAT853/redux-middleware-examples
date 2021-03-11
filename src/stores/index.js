import { createStore, combineReducers } from "redux";
import articleReducers from "./articleReducers";
import countReducers from "./countReducers";

const allReducers = combineReducers({
  articles: articleReducers,
  count: countReducers,
});

const store = createStore(allReducers);

export default store;
