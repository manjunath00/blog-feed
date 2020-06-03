import endpoints from "./endpoints";
import { buzzfeed } from "./buzzfeed";

export const loginApi = (data) => {
  const url = endpoints.login();
  return buzzfeed.post(url, data);
};

/* user's feed */
export const getUsersFeed = (userId, token) => {
  const url = endpoints.getUsersFeed(userId);
  return buzzfeed.get(url);
};

/* user's preferred categories */
export const getUserCategories = (userId) => {
  const url = endpoints.usersCategories(userId);
  return buzzfeed.get(url);
};

/* get an article */
export const getAnArticle = (userId, articleId) => {
  const url = endpoints.getAnArticle(userId, articleId);
  return buzzfeed.get(url);
};

/* post an article */
export const createAnArticle = (userId, body) => {
  const url = endpoints.newArticle(userId);
  return buzzfeed.post(url, body);
};

/* sign out */
export const signout = () => {
  const url = endpoints.signout();
  return buzzfeed.get(url);
};

/* get all categories */
export const allCategories = () => {
  const url = endpoints.allCategories();
  return buzzfeed.get(url);
};

/* user sign up */
export const signUp = (body) => {
  console.log("Body is ", body);
  const url = endpoints.signUp();
  return buzzfeed.post(url, body);
};
