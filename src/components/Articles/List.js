import React from "react";
import { connect } from "react-redux";

const List = ({ articles = [] }) => {
  return articles ? (
    <div>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>{article.title}</li>
        ))}
      </ul>
    </div>
  ) : null;
};

const mapStateToProps = (state) => {
  return { articles: state.articles.articles };
};

export default connect(mapStateToProps, null)(List);
