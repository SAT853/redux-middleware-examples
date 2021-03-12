import { createSlice } from "@reduxjs/toolkit";

const initialState = { count: 0 };

// const increment = createAction("INCREMENT");
// const decrement = createAction("DECREMENT");
// const reset = createAction("RESET");

// const countReducers = createReducer(initialState, {
//   [increment]: (state) => {
//     state.count = state.count + 1;
//   },
//   [decrement]: (state) => {
//     state.count = state.count - 1;
//   },
//   [reset]: (state) => {
//     state.count = initialState.count;
//   },
// });

const countSlice = createSlice({
  name: "countReducers",
  initialState,
  reducers: {
    increment: (state) => {
      state.count = state.count + 1;
    },
    decrement: (state) => {
      state.count = state.count - 1;
    },
    reset: (state) => {
      state.count = initialState.count;
    },
  },
});

const countReducers = countSlice.reducer;
const { increment, decrement, reset } = countSlice.actions;

export { countReducers, increment, decrement, reset };
