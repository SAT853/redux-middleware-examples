import React from "react";
import { connect } from "react-redux";
import { getDataActions } from "../stores/articleReducers";

const Post = (props) => {
  React.useEffect(() => {
    props.getData();
  }, []);
  return (
    <ul>
      {props.articles.map((el) => (
        <li key={el.id}>{el.title}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    articles: state.articles.remoteArticles.slice(0, 10),
  };
};

const mapDispatchToProps = (dispatch) => {
  return { getData: () => dispatch(getDataActions()) };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);
