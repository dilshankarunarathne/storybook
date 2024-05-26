import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import AuthContext from './AuthContext';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { token, loading } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={props =>
        loading ? (
          <div>Loading...</div> // Or your loading component
        ) : token ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
