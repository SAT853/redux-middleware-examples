import React, { useState } from "react";
import { connect } from "react-redux";
import { addArticlesActions } from "../../stores/articleReducers";

const Form = (props) => {
  const [title, setTitle] = useState("");

  const idMaker = (function* () {
    while (true) {
      yield "_" + Math.random().toString(36).substr(2, 9);
    }
  })();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.addArticle({ title, id: idMaker.next().value });
    setTitle("");
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <div>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const mapDispathToProps = (dispatch) => {
  return {
    addArticle: (article) => dispatch(addArticlesActions(article)),
  };
};

export default connect(null, mapDispathToProps)(Form);
