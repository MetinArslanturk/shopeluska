import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import MainPage from '../components/pages/MainPage';
import MyAccountPage from '../components/pages/MyAccountPage';
import LoginPage from '../components/pages/LoginPage';
import ProductPage from '../components/pages/ProductPage';
import ShoppingCart from '../components/pages/ShoppingCart';
import CompleteOrder from '../components/pages/CompleteOrder';

const AppRouter = () => {
    return (
        <>
            <Helmet>
                <title>Shopeluska</title>
            </Helmet>
            <Switch>
                <PublicRoute path="/" component={MainPage} exact />
                <PublicRoute path="/login" component={LoginPage} exact />
                <PublicRoute
                    path="/product/:id"
                    component={ProductPage}
                    exact
                />
                <PublicRoute
                    path="/shopping-cart"
                    component={ShoppingCart}
                    exact
                />
                <PrivateRoute
                    path="/my-account"
                    component={MyAccountPage}
                    exact
                />
                <PrivateRoute
                    path="/payment-step"
                    component={CompleteOrder}
                    redirectUrl="payment-step"
                    exact
                />
                <Redirect to="/404" />
            </Switch>
        </>
    );
};

export default AppRouter;
