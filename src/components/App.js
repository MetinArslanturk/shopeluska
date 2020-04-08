import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import { Layout } from 'antd';
import AppRouter from '../routers/AppRouter';

const { Header: LayoutHeader, Footer: LayoutFooter, Content } = Layout;


const App = (props) => {
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
}



export default App;
