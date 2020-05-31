const endpoints = {
  login: () => `/api/signin`,
  signup: () => `/api/signup`,
  signout: () => `/api/signout`,
  getUsersFeed: (userId) => `/api/articles/${userId}/all`,
  usersCategories: (userId) => `/api/user/${userId}`,
  getAnArticle: (userId, articleId) => `/api/article/${articleId}/${userId}`,
  newArticle: (userId) => `/api/article/create/${userId}`
};

export default endpoints;
 