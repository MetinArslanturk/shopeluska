import React from 'react';
import { connect } from 'react-redux';
import {history} from '../index';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const Header = ({uid}) => {
    const clickLogin = () => {
        history.push('/login');
    }

    return (
        <div>
        <div className="header-wrapper">
            <div className="brand-logo">
                <Link to={'/'}><img alt="logo" src="logo.png" /></Link>
            </div>
            <div className="search-box">

            </div>
            <div className="user-nav">
                {!(!!uid) && (
                    <Button type="primary" onClick={clickLogin}>Login</Button>
                )}
                {!!uid && (
                    <Button>My Account</Button>
                )}
            </div>
        </div>
            {/* <span onClick={(e) => history.push('/login')}>here is header !</span>
            {!!props.uid && <span onClick={(e) => history.push('/secret')}>Welcome {props.uid}</span>} */}
        </div>
    )
}
const mapStateToProps = (state) => ({
    uid: state.auth.uid
})

export default connect(mapStateToProps)(Header);