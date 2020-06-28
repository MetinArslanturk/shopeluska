/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Tabs } from 'antd';
import MyOrdersPage from './my-account/MyOrdersPage';
import MyProfilePage from './my-account/MyProfilePage';
import AdminPage from './my-account/AdminPage';
import { isAdmin as checkIsAdmin } from '../../selectors/auth';

const { TabPane } = Tabs;

export const MyAccountPage = ({ isAdmin }) => {
    const [selectedPage, setPage] = useState('my-profile');

    return (
        <>
            <Tabs
                type="card"
                defaultActiveKey={selectedPage}
                onChange={setPage}
            >
                <TabPane tab="My Profile" key="my-profile" />
                <TabPane tab="My Orders" key="my-orders" />
                {isAdmin && <TabPane tab="Admin" key="admin" />}
            </Tabs>

            {selectedPage === 'my-profile' ? (
                <>
                    <MyProfilePage />
                </>
            ) : selectedPage === 'my-orders' ? (
                <>
                    <MyOrdersPage />
                </>
            ) : selectedPage === 'admin' && isAdmin ? (
                <>
                    <AdminPage />
                </>
            ) : (
                <>
                    <div>Upss.. Something went wrong...</div>
                </>
            )}
        </>
    );
};

MyAccountPage.propTypes = {
    isAdmin: PropTypes.bool,
};

const mapStateToProps = (state) => ({
    isAdmin: checkIsAdmin(state.auth.user),
});

export default connect(mapStateToProps)(MyAccountPage);
