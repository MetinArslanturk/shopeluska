import React, {useState} from 'react';
import { connect } from 'react-redux';
import { history, baseHref } from '../index';
import { Drawer, Row, Col, Button, Input } from 'antd';
import { Link } from 'react-router-dom';
import { BarsOutlined } from '@ant-design/icons';
const { Search } = Input;

const Header = ({ uid }) => {
    const clickLogin = () => {
        history.push(baseHref + 'login');
    }

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
                <Col xs={4} sm={4} md={8} lg={8} xl={12}>
                    <div className="search-box">
                        <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton />
                    </div>
                </Col>
                <Col xs={3} sm={3} md={4} lg={4} xl={4}>
                    <div className="user-nav">
                        {!(!!uid) && (
                            <Button type="primary" onClick={clickLogin}>Login</Button>
                        )}
                        {!!uid && (
                            <Button onClick={clickLogin}>My Account</Button>
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
    uid: state.auth.uid
})

export default connect(mapStateToProps)(Header);