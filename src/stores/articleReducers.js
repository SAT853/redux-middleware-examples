import { createAction, createReducer } from "@reduxjs/toolkit";

const initialState = { articles: [], remoteArticles: [] };

// Actions Types
export const ADD_ARTICLES = "ADD_ARTICLES";
export const DATA_LOADED = "DATA_LOADED";
export const FETCH_REQUESTED = "FETCH_REQUESTED";

// Actions Creators with reduxToolKit
export const addArticlesActions = createAction(ADD_ARTICLES);
export const getDataActions = createAction(FETCH_REQUESTED);
const dataLoaded = createAction(DATA_LOADED);

// Thunk middleware examples
// export const getDataActions = () => async (dispatch) => {
//   debugger;
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => {
//       debugger;
//       dispatch({ type: DATA_LOADED, payload: json });
//     });
// };

const articlesReducers = createReducer(initialState, {
  [addArticlesActions]: (state, action) => {
    state.articles = action.payload;
  },
  [dataLoaded]: (state, action) => {
    state.remoteArticles = action.payload;
  },
});

export default articlesReducers;
