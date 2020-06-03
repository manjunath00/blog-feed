const endpoints = {
  login: () => `/api/signin`,
  signUp: () => `/api/signup`,
  signout: () => `/api/signout`,
  getUsersFeed: (userId) => `/api/articles/${userId}/all`,
  usersCategories: (userId) => `/api/user/${userId}`,
  getAnArticle: (userId, articleId) => `/api/article/${articleId}/${userId}`,
  newArticle: (userId) => `/api/article/create/${userId}`,
  allCategories: () => `/api/category`
};

export default endpoints;
 