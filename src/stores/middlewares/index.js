import { ADD_ARTICLES, FETCH_REQUESTED } from "../articleReducers";

const forbiddenWords = ["spam", "money"];

export const forbiddenWordsMiddleware = ({ dispatch }) => (next) => (action) => {
  // Do your stuff
  debugger;
  if (action.type === ADD_ARTICLES) {
    const isWordFound = forbiddenWords.filter((word) => action.payload.title.includes(word));
    if (isWordFound.length) {
      console.log("Found badWords===>");
      return dispatch({ type: "FOUND_BAD_WORD" });
    }
  }
  return next(action);
};

// export const fetchArticlesMiddleware = ({ dispatch, getState }) => (next) => (action) => {
//   debugger;
//   if (action.type === FETCH_REQUESTED) {
//     console.log(getState());
//     fetch("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => response.json())
//       .then((json) => {
//         return dispatch({ type: "DATA_LOADED", payload: json });
//       })
//       .catch((e) => {
//         console.log(e);
//       });
//   }
//   return next(action);
// };
