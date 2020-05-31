const endpoints = {
  login: () => `/api/signin`,
  signup: () => `/api/signup`,
  getUsersFeed: (userId) => `/api/articles/${userId}/all`,
  usersCategories: (userId) => `/api/user/${userId}`,
  getAnArticle: (userId, articleId) => `api/article/${articleId}/${userId}`,
};

export default endpoints;
