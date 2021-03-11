import React from "react";
import Articles from "./components/Articles";
import Post from "./components/Post";
import Button from "./components/Button";
import Count from "./components/Count";

function App() {
  return (
    <div className="App">
      <h1> Redux-Saga Examples </h1>
      <Count />
      <Button />
      <Articles />
      <div>
        <h2>API posts</h2>
        <Post />
      </div>
    </div>
  );
}

export default App;
