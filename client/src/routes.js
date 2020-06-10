import { ArticleNew, ArticleFull } from "./components/article";
import { Settings, Dashboard, AuthorFeed } from "./components/user";
import { CategoryFeed } from "./components/category";

const routes = [
  { exact: true, path: "/article/new", component: ArticleNew },
  { exact: true, path: "/article/edit/:articleId", component: ArticleNew },
  { exact: true, path: "/article/view/:articleId", component: ArticleFull },
  { exact: true, path: "/category/:categoryId", component: CategoryFeed },
  { exact: true, path: "/user/settings", component: Settings },
  { exact: true, path: "/user/dashboard", component: Dashboard },
  { exact: true, path: "/author/:authorId", component: AuthorFeed },
];

export default routes;
