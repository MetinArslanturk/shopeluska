import React from 'react';
import { Switch } from 'react-router-dom';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';
import MainPage from '../components/MainPage';
import LoginPage from '../components/LoginPage';


const AppRouter = (props) => {
    return (

        <Switch>
            <PublicRoute path="/" component={MainPage} exact={true} sidebar={true}/>
            <PublicRoute path="/login" component={LoginPage} exact={true} sidebar={false}/>
            <PrivateRoute path="/secret" component={MainPage} exact={true} sidebar={true}/>
        </Switch>
    );
}



export default AppRouter;