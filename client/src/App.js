import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import Base from "./components/common/Base";
import PrivateRoute from "./components/common/PrivateRoute";
import { ArticleFeed, ArticleNew, ArticleFull } from "./components/article";
import { Login, Signup, Settings, Dashboard } from "./components/user";
import { CategoryFeed } from "./components/category";

function App(props) {
  return (
    <Base>
      <Route exact={true} path='/signup' component={Signup} />
      <Route
        exact={true}
        path='/'
        render={() => {
          if (props.isAuthenticated) {
            return <ArticleFeed />;
          } else {
            return <Login />;
          }
        }}
      />
      <Switch>
        {/* <Switch> */}
        <PrivateRoute
          exact={true}
          path='/category/:categoryId'
          component={CategoryFeed}
        />
        <PrivateRoute
          exact={true}
          path='/category/:categorddyId'
          component={CategoryFeed}
        />
        {/* </Switch> */}

        <Switch>
          <PrivateRoute
            exact={true}
            path='/article/view/:articleId'
            component={ArticleFull}
          />
          <PrivateRoute exact path='/article/new' component={ArticleNew} />
          <PrivateRoute
            exact={true}
            path='/article/edit/:id'
            component={ArticleNew}
          />
        </Switch>

        {/* <Switch> */}

        <PrivateRoute exact={true} path='/user/settings' component={Settings} />
        <PrivateRoute
          exact={true}
          path='/user/dashboard'
          component={Dashboard}
        />
        {/* </Switch> */}
      </Switch>
    </Base>
  );
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default withRouter(connect(mapStateToProps, {})(App));
