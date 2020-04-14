import React, { useState } from 'react';
import { connect } from 'react-redux'
import MyOrdersPage from './my-account/MyOrdersPage';
import MyProfilePage from './my-account/MyProfilePage';
import AdminPage from './my-account/AdminPage';
import { isAdmin } from '../selectors/auth';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

export const MyAccount = ({ isAdmin }) => {
    const [selectedPage, setPage] = useState('my-profile');

    return (
        <>
            <Tabs type="card" defaultActiveKey={selectedPage} onChange={setPage}>
                <TabPane tab="My Profile" key="my-profile"></TabPane>
                <TabPane tab="My Orders" key="my-orders"></TabPane>
                {isAdmin && <TabPane tab="Admin" key="admin"></TabPane>}
            </Tabs>

            {selectedPage === 'my-profile' ? (
                <>
                    <MyProfilePage />
                </>
            ) : selectedPage === 'my-orders' ? (
                <>
                    <MyOrdersPage />
                </>
            ) : (selectedPage === 'admin' && isAdmin) ? (
                <>
                    <AdminPage />
                </>
            ) : (<><div>Upss.. Something went wrong...</div></>)}
        </>
    )
}

const mapStateToProps = (state) => ({
    isAdmin: isAdmin(state.auth.user)
})

export default connect(mapStateToProps)(MyAccount);