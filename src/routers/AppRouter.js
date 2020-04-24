import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import MainPage from '../components/pages/MainPage';
import MyAccountPage from '../components/pages/MyAccountPage';
import LoginPage from '../components/pages/LoginPage';
import ProductPage from '../components/pages/ProductPage';

const AppRouter = (props) => {
    return (

        <Switch>
            <PublicRoute path="/" component={MainPage} exact={true}/>
            <PublicRoute path="/login" component={LoginPage} exact={true}/>
            <PublicRoute path="/product/:id" component={ProductPage} exact={true}/>
            <PrivateRoute path="/my-account" component={MyAccountPage} />
            <Redirect to="/404" />
        </Switch>
    );
}



export default AppRouter;
