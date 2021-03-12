import { createAction, createSlice } from "@reduxjs/toolkit";

const initialState = { articles: [], remoteArticles: [] };

// Redux-thunk example
// const getData = createAsyncThunk("articlesReducers/getData", () =>
//   fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json())
// );

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
  // extraReducers: {
  //   // Redux-thunk Example
  //   [getData.fulfilled]: (state, action) => {
  //     state.remoteArticles = [...action.payload];
  //   },
  // },
});

const articlesReducers = articleSlice.reducer;
const getData = createAction("FETCH_REQUESTED");
const checkWord = createAction("CHECKWORD");
const { addArticles, dataLoaded } = articleSlice.actions;

export { addArticles, getData, articlesReducers, dataLoaded, checkWord };
