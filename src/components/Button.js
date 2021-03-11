import React from "react";
import { incrementAction, decrementAction, resetAction } from "../stores/actions";
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
    increment: () => dispatch(incrementAction()),
    decrement: () => dispatch(decrementAction()),
    reset: () => dispatch(resetAction()),
  };
};

export default connect(null, mapDispatchToProps)(Button);
