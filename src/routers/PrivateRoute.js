import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { baseHref } from '../config/config';


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
    isAuthenticated: !!state.auth.uid
})

export default connect(mapStateToProps)(PrivateRoute);