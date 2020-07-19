import React from 'react';
import { useDispatch } from 'react-redux';
import { Layout } from 'antd';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';
import { checkLogin } from '../actions/auth';
import { startSetProducts } from '../actions/products';
import AppRouter from '../routers/AppRouter';

const { Header: LayoutHeader, Footer: LayoutFooter, Content } = Layout;

const App = () => {
    const dispatch = useDispatch();
    dispatch(startSetProducts());
    dispatch(checkLogin());

    return (
        <>
            <Layout>
                <LayoutHeader>
                    <Header />
                </LayoutHeader>
                <Layout>
                    <Sidebar />
                    <Content>
                        <AppRouter />
                    </Content>
                </Layout>
                <LayoutFooter>
                    <Footer />
                </LayoutFooter>
            </Layout>
        </>
    );
};

export default App;
