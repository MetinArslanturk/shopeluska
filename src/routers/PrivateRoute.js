import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { baseHref } from '../config/config';
import { isAuthenticated } from '../selectors/auth';
import { setLoginRedirectUrl } from '../actions/auth'


export const PrivateRoute = ({
  component: Component,
  isAuthenticated,
  redirectUrl,
  setLoginRedirectUrl,
  ...rest
}) => {

  // Logic has defined here to prevent twice render
  let TargetComponent = Component;


  // If you want to protect a route use this

  if (!isAuthenticated) {
    TargetComponent = Redirect;
    if(redirectUrl) {
      setLoginRedirectUrl(redirectUrl);
    }
    
    TargetComponent.defaultProps = {
      to: baseHref + 'login'
    };
  }


  return (
    <Route {...rest} component={TargetComponent} />
  )
};


const mapStateToProps = (state) => ({
  isAuthenticated: isAuthenticated(state.auth.user)
});

const mapDispatchToProps = (dispatch) => ({
  setLoginRedirectUrl: (url) => dispatch(setLoginRedirectUrl(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);