import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { baseHref } from '../config/config';
import { isAuthenticated as checkIsAuthenticated } from '../selectors/auth';
import { setLoginRedirectUrl } from '../actions/auth';

export const PrivateRoute = ({
    component: Component,
    isAuthenticated,
    redirectUrl = '',
    setLoginRedirect,
    ...rest
}) => {
    // Logic has defined here to prevent twice render
    let TargetComponent = Component;

    // If you want to protect a route use this

    if (!isAuthenticated) {
        TargetComponent = Redirect;
        if (redirectUrl) {
            setLoginRedirect(redirectUrl);
        }

        TargetComponent.defaultProps = {
            to: `${baseHref}login`,
        };
    }

    return <Route {...rest} component={TargetComponent} />;
};

PrivateRoute.propTypes = {
    isAuthenticated: PropTypes.bool,
    setLoginRedirect: PropTypes.func,
    redirectUrl: PropTypes.string,
    component: PropTypes.any,
};

const mapStateToProps = (state) => ({
    isAuthenticated: checkIsAuthenticated(state.auth.user),
});

const mapDispatchToProps = (dispatch) => ({
    setLoginRedirect: (url) => dispatch(setLoginRedirectUrl(url)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PrivateRoute);
