import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import MainPage from '../components/pages/MainPage';
import MyAccountPage from '../components/pages/MyAccountPage';
import LoginPage from '../components/pages/LoginPage';

const AppRouter = (props) => {
    return (

        <Switch>
            <PublicRoute path="/" component={MainPage} exact={true} sidebar={true}/>
            <PublicRoute path="/login" component={LoginPage} exact={true} sidebar={false}/>
            <PrivateRoute path="/my-account" component={MyAccountPage} sidebar={true}/>
        </Switch>
    );
}



export default AppRouter;
