import React from 'react';
import { connect } from 'react-redux'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';
import {checkLogin} from '../actions/auth';
import { Layout } from 'antd';
import AppRouter from '../routers/AppRouter';


const { Header: LayoutHeader, Footer: LayoutFooter, Content } = Layout;


class App extends React.Component {
    componentDidMount() {
        console.log('rendered main app');
        this.props.dispatch(checkLogin());
    }

    render() {
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
}


export default connect(undefined)(App);
