import React, { useState } from 'react';
import { connect } from 'react-redux';
import { history, baseHref } from '../config/config';
import { Drawer, Row, Col, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { BarsOutlined } from '@ant-design/icons';
import { startLogout } from '../actions/auth';
import {getUserName, isAuthenticated} from '../selectors/auth';
const { Search } = Input;

const clickLogin = () => {
    history.push(baseHref + 'login');
}

const clickMyAccount = () => {
    history.push(baseHref + 'my-account/my-profile');
}

export const Header = ({ isAuthenticated, username, startLogout}) => {
    const [visibleNav, setVisibleNav] = useState(false);

    return (
        <>
            <div className="header-wrapper">

                <Row>
                    <Col span={4}>
                        <div className="brand-logo">
                            <Link to={baseHref}><img alt="logo" className="logo-image" src="logo.png" /></Link>
                        </div>
                    </Col>
                    <Col xs={4} sm={4} md={7} lg={8} xl={12}>
                        <div className="search-box">
                            <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                        </div>
                    </Col>
                    <Col xs={4} sm={6} md={6} lg={6} xl={4}>
                        <div className="user-nav">
                            {!isAuthenticated && (
                                <Button type="primary" className="login-button" onClick={clickLogin}>Login</Button>
                            )}
                            {isAuthenticated && (
                                <>
                                    <Button className="my-account-button" type="primary" onClick={clickMyAccount}>My Account</Button>
                                    <Button className="logout-button" onClick={startLogout}>Logout</Button>
                                </>
                            )}
                        </div>
                        <div className="head-menu-toggle-button">
                            <BarsOutlined onClick={e => setVisibleNav(true)} style={{ fontSize: '32px', marginTop: '18px' }} />
                        </div>
                    </Col>


                </Row>
            </div>
            <Drawer
                title="Shopeluska Navigation"
                placement="right"
                closable={true}
                onClose={() => {
                    setVisibleNav(false);
                }}
                visible={visibleNav}
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
        </>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state.auth.user),
    username: getUserName(state.auth.user)
});

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);