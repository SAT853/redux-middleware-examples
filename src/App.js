import React from "react";
import { connect } from "react-redux";
import Button from "./components/Common/Button";
// import Articles from "./components/Articles";
// import Post from "./components/Post";
// import Button from "./components/Button";
// import Count from "./components/Count";

function App({ login, logout }) {
  return (
    <div className="App">
      <h1> Redux-Saga Examples </h1>
      {/* <Count />
      <Button />
      <Articles />
      <div>
        <h2>API posts</h2>
        <Post />
      </div> */}
      <Button onClick={() => login()}>Login</Button>
      <Button onClick={() => logout()}>Logout</Button>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: () => dispatch({ type: "LOGIN_REQUEST" }),
    logout: () => dispatch({ type: "LOGOUT" }),
  };
};

export default connect(null, mapDispatchToProps)(App);
