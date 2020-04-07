import React from 'react';
import { Route } from 'react-router-dom';

// It seems unnecessary but it can be used for Dependency Injection
export const PublicRoute = ({
  component: Component,
  ...rest
}) => {

  // Logic has defined here to prevent twice render
  let TargetComponent = Component;


  // If you want to protect a route use this

  // if (false) { 
  //   TargetComponent = Redirect;
  //   TargetComponent.defaultProps = {
  //     to: '/dash'
  //   };
  // }
 

  return (
    <Route {...rest} component={TargetComponent} />
  )};


export default PublicRoute;