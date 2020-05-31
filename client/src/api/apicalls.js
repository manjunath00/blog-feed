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
