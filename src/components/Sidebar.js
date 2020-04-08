import React from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
const { Sider } = Layout;

const Sidebar = ({showSidebar}) => {
    return (
        <>
            {showSidebar && <Sider breakpoint="lg"
                collapsedWidth="0">Sidebar</Sider>
                }
        </>
    )
}

const mapStateToprops = (state) => ({
    showSidebar: state.layout.showSidebar
})
export default connect(mapStateToprops)(Sidebar)