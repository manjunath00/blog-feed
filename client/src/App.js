import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { connect } from "react-redux";

import Base from "./components/common/Base";
import PrivateRoute from "./components/common/PrivateRoute";
import { ArticleFeed, ArticleNew, ArticleFull } from "./components/article";
import { Login, Signup, Settings, Dashboard } from "./components/user";

function App(props) {
  // const initComponent = props.isAuthenticated ? <ArticleFeed /> : <Login />;
  return (
    <BrowserRouter>
      <Base>
        <Route exact={true} path="/" {props.isAuthenticated ? <Redirect to="/"/> : null} />
        <Route exact={true} path="/signup" component={Signup} />

        <Switch>
          <Route
            to="/articlefeed"
            component={props.isAuthenticated ? ArticleFeed : Login}
          />
          <PrivateRoute
            exact={true}
            path="/article/new"
            component={ArticleNew}
          />
          <PrivateRoute
            exact={true}
            path="/article/:id"
            component={ArticleFull}
          />
          <PrivateRoute
            exact={true}
            path="/article/:id/edit"
            component={ArticleNew}
          />
          <PrivateRoute
            exact={true}
            path="/user/settings"
            component={Settings}
          />
          <PrivateRoute
            exact={true}
            path="/user/dashboard"
            component={Dashboard}
          />
          <PrivateRoute
            exact={true}
            path="/category/science"
            component={Dashboard}
          />
        </Switch>
      </Base>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps, {})(App);
