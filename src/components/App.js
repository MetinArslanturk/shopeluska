import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';
import { checkLogin } from '../actions/auth';
import { startSetProducts } from '../actions/products';
import AppRouter from '../routers/AppRouter';

const { Header: LayoutHeader, Footer: LayoutFooter, Content } = Layout;

class App extends React.Component {
    componentDidMount() {
        /* eslint-disable react/destructuring-assignment */
        this.props.dispatch(startSetProducts());
        this.props.dispatch(checkLogin());
        /* eslint-enable react/destructuring-assignment */
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

App.propTypes = {
    dispatch: PropTypes.func,
};

export default connect(undefined)(App);
