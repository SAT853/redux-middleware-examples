import React from "react";
import { increment, decrement, reset } from "../stores/countReducers";
import { connect } from "react-redux";

const Button = (props) => {
  const { increment, decrement, reset } = props;

  return (
    <div>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <button onClick={() => reset()}>Reset</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch(increment()),
    decrement: () => dispatch(decrement()),
    reset: () => dispatch(reset()),
  };
};

export default connect(null, mapDispatchToProps)(Button);
