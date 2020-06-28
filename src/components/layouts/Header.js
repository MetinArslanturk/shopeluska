import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Drawer, Row, Col, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { BarsOutlined } from '@ant-design/icons';
import { history, baseHref } from '../../config/config';
import { startLogout } from '../../actions/auth';
import { isAuthenticated } from '../../selectors/auth';
import ShoppingCartIcon from '../common-components/ShoppingCartIcon';

const { Search } = Input;

const clickLogin = () => {
    history.push(`${baseHref}login`);
};

const clickMyAccount = () => {
    history.push(`${baseHref}my-account`);
};

export const Header = ({ isAuth, logout }) => {
    const [visibleNav, setVisibleNav] = useState(false);

    return (
        <>
            <div className="header-wrapper">
                <Row>
                    <Col span={4}>
                        <div className="brand-logo">
                            <Link to={baseHref}>
                                <img
                                    alt="logo"
                                    className="logo-image"
                                    src={`${baseHref}logo.png`}
                                />
                            </Link>
                        </div>
                    </Col>
                    <Col xs={4} sm={4} md={7} lg={8} xl={12}>
                        <div className="search-box">
                            <Search
                                placeholder="input search text"
                                onSearch={(value) => console.log(value)}
                                enterButton
                            />
                        </div>
                    </Col>
                    <Col xs={4} sm={6} md={6} lg={6} xl={4}>
                        <div className="user-nav">
                            <Link to={`${baseHref}shopping-cart`}>
                                <ShoppingCartIcon />
                            </Link>
                            {!isAuth && (
                                <Button
                                    type="primary"
                                    className="login-button"
                                    onClick={clickLogin}
                                >
                                    Login
                                </Button>
                            )}
                            {isAuth && (
                                <>
                                    <Button
                                        className="my-account-button my-account"
                                        type="primary"
                                        onClick={clickMyAccount}
                                    >
                                        My Account
                                    </Button>
                                    <Button
                                        className="logout-button"
                                        onClick={logout}
                                    >
                                        Logout
                                    </Button>
                                </>
                            )}
                        </div>
                        <div className="head-menu-toggle-button">
                            <BarsOutlined
                                onClick={() => setVisibleNav(true)}
                                style={{ fontSize: '32px', marginTop: '18px' }}
                            />
                        </div>
                    </Col>
                </Row>
            </div>
            <Drawer
                title="Shopeluska Navigation"
                placement="right"
                closable
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
    );
};

Header.propTypes = {
    isAuth: PropTypes.bool,
    logout: PropTypes.func,
};

const mapStateToProps = (state) => ({
    isAuth: isAuthenticated(state.auth.user),
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(startLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
