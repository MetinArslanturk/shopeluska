import React from 'react';
import { Router, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import PublicRoute from './PublicRoute';
import MainPage from '../components/MainPage';
import LoginPage from '../components/LoginPage';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Layout } from 'antd';

const { Header: LayoutHeader, Footer, Content } = Layout;

export const history = createBrowserHistory();

const AppRouter = (props) => {
    return (
    <>
        <Layout>
            <LayoutHeader>
                <Header />
            </LayoutHeader>
            <Layout>
                <Sidebar />
                <Content>
                    <Router history={history}>
                        <Switch>
                            <PublicRoute path="/" component={MainPage} exact={true} />
                            <PublicRoute path="/login" component={LoginPage} exact={true}/>
                        </Switch>
                    </Router>
                </Content>
            </Layout>
            <Footer>Footer</Footer>
        </Layout>



    </>
); }



export default AppRouter;
