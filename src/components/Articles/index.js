import React from "react";
import Form from "./Form";
import List from "./List";

const Articles = () => {
  return (
    <>
      <div>
        <h2>Articles List</h2>
        <List />
      </div>
      <div>
        <h2>Add Articles</h2>
        <Form />
      </div>
    </>
  );
};

export default Articles;
