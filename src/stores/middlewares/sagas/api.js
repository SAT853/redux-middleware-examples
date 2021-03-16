export const getData = async () => {
  return fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json());
};

export const authorize = () => {
  // Do something
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("_" + Math.random().toString(36).substr(2, 9));
    }, 2000);
  });
};

export const clearItem = () => {
  // Clear Item
  console.log("item cleared...");
};

export const storeItem = () => {
  // Store item
  console.log("item stored...");
};
