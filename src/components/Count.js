import React from "react";
import { connect } from "react-redux";

const Count = ({ count }) => {
  return (
    <div>
      <p>Count: {count} </p>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { count: state.count.count };
};
export default connect(mapStateToProps, null)(Count);
