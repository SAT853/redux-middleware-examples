import { INCREMENT, DECREMENT, RESET } from "./actions";

const initialState = { count: 0 };

const countReducers = (state = initialState, { type }) => {
  switch (type) {
    case INCREMENT:
      return Object.assign({}, state, { count: state.count + 1 });
    case DECREMENT:
      return Object.assign({}, state, { count: state.count - 1 });
    case RESET:
      return Object.assign({}, state, initialState);
    default:
      return state;
  }
};

export default countReducers;
