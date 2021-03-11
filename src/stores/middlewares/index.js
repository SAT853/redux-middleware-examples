const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware = ({ dispatch }) => (next) => (action) => {
  // Do your stuff
  if (action.type === "articlesReducers/addArticles") {
    const isWordFound = forbiddenWords.filter((word) => action.payload.title.includes(word));
    if (isWordFound.length) {
      return dispatch({ type: "FOUND_BAD_WORD" });
    }
  }
  return next(action);
};

// export const fetchArticlesMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   if (action.type === FETCH_REQUESTED) {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         return dispatch({ type: "articlesReducers/dataLoaded", payload: json });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }
//   return next(action);
// };
