import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { baseHref } from '../config/config';
import {isAuthenticated} from '../selectors/auth';


export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  ...rest
}) => {

  // Logic has defined here to prevent twice render
  let TargetComponent = Component;


  // If you want to protect a route use this

  if (!isAuthenticated) { 
    TargetComponent = Redirect;
    TargetComponent.defaultProps = {
      to: baseHref
    };
  }
 

  return (
    <Route {...rest} component={TargetComponent} />
  )};


  const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state.auth.user)
})

export default connect(mapStateToProps)(PrivateRoute);