import React from "react";
import PropTypes from 'prop-types';
import {Route, Redirect} from "react-router-dom";
import { useSelector } from 'react-redux'

const guestRender = (Component, auth) => {
  return (props) => (
    auth === false
      ? <Component {...props} />
      : <Redirect to={'/'} />
  );
};

const authenticatedRender = (Component, auth) => {
  return (props) => (
    auth === true
      ? <Component {...props} />
      : <Redirect to={'/register'} />
  );
};

const defaultRender = (Component) => {
  return (props) => (
    <Component {...props} />
  );
};

const getRenderFunction = (Component, rule, auth) => {
  switch (rule) {
    case 'authenticated':
      return authenticatedRender(Component, auth);
    case 'guest':
      return guestRender(Component, auth);
    default:
      return defaultRender(Component, auth);
  }

};

const RuledRoute = ({component: Component, rule, ...rest}) => {
  const auth = useSelector(state => state.auth);
  console.log(auth);

  return (
    <Route {...rest} render={getRenderFunction(Component, rule, !!auth.user)} />
  )};

export default RuledRoute;

RuledRoute.propTypes = {
  rule: PropTypes.oneOf(['authenticated', 'guest']),
  ...Route.propTypes,
};
