import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

function PrivateRoute({ location, component: Component, loggedIn, ...rest }) {
  return (
    <Route
      {...rest}
      render={props =>
        loggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn
});

export default connect(mapStateToProps)(PrivateRoute);
