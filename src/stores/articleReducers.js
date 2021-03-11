const initialState = { articles: [] };

// Actions Types
const ADD_ARTICLES = "ADD_ARTICLES";

// Actions Creators
export const addArticlesFuntions = (payload) => {
  return { type: ADD_ARTICLES, payload };
};

const articlesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLES:
      return Object.assign({}, state, { articles: state.articles.concat(action.payload) });
    default:
      return state;
  }
};

export default articlesReducers;
