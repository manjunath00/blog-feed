import React from "react";
import { withRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";

import { PrivateRoute, Base } from "./components/common";
import { ArticleFeed } from "./components/article";
import { Login, Signup } from "./components/user";
import routes from "./routes";

function App(props) {
  return (
    <Base>
      <Route exact={true} path='/signup' component={Signup} />
      <Route
        exact
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
        {routes.map((route) => (
          <PrivateRoute {...route} />
        ))}
      </Switch>
    </Base>
  );
}

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default withRouter(connect(mapStateToProps, {})(App));
