import React from "react";

const Button = (props) => {
  return <button onClick={() => props.onClick()}>{props.children || "Click"}</button>;
};

export default Button;
