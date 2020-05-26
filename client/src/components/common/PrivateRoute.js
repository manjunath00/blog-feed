import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const PrivateRoute = (props) => {
  if (props.isAuthenticated) {
    return (
      <Route
        exact={props.exact}
        path={props.path}
        component={props.component}
      />
    );
  } else {
    return <Redirect to="/" />;
  }
};

PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool,
};

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.isAuthenticated };
};

export default connect(mapStateToProps, null)(PrivateRoute);
