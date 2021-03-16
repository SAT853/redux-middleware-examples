export const getData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
};
