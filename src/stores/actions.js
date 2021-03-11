// Actions Type
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// Actions creators
const incrementAction = () => {
  return { type: INCREMENT };
};

const decrementAction = () => {
  return { type: DECREMENT };
};

const resetAction = () => {
  return { type: RESET };
};

export { incrementAction, decrementAction, resetAction, INCREMENT, DECREMENT, RESET };
