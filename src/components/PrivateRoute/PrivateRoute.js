import React, { useContext } from "react";
import { Redirect, Route, useHistory, useLocation } from "react-router-dom";
import { LocalContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [showPlace, setShowPlace, loggedInUser, setLoggedInUser] = useContext(
    LocalContext
  );

  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
