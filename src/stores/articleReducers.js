const initialState = { articles: [], remoteArticles: [] };

// Actions Types
export const ADD_ARTICLES = "ADD_ARTICLES";
export const DATA_LOADED = "DATA_LOADED";
export const FETCH_REQUESTED = "FETCH_REQUESTED";

// Actions Creators
export const addArticlesFuntions = (payload) => {
  return { type: ADD_ARTICLES, payload };
};

// export const getDataActions = (props) => (dispatch) => {
//   debugger;
//   return fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((json) => {
//       debugger;
//       dispatch({ type: DATA_LOADED, payload: json });
//     });
// };

export const getDataActions = () => {
  return { type: FETCH_REQUESTED };
};

const articlesReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ARTICLES:
      return Object.assign({}, state, { articles: state.articles.concat(action.payload) });
    case DATA_LOADED: {
      debugger;
      return Object.assign({}, state, { remoteArticles: state.remoteArticles.concat(action.payload) });
    }
    default:
      return state;
  }
};

export default articlesReducers;
