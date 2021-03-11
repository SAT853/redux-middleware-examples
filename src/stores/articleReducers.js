import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = { articles: [], remoteArticles: [] };

// Reducer with createSlice Function
const articleSlice = createSlice({
  name: "articlesReducers",
  initialState,
  reducers: {
    addArticles: (state, action) => {
      state.articles = [...state.articles, action.payload];
    },
    dataLoaded: (state, action) => {
      state.remoteArticles = [...action.payload];
    },
  },
});

const articlesReducers = articleSlice.reducer;
const getDataActions = createAction("FETCH_REQUESTED");
const { addArticles, dataLoaded } = articleSlice.actions;

export { addArticles, getDataActions, articlesReducers, dataLoaded };
