import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Layout } from 'antd';
import { NavLink } from 'react-router-dom';
import { baseHref } from '../../config/config';
import { menuItems  } from "../../helpers/menuItems";

const { Sider } = Layout;

const Sidebar = ({ showSidebar }) => {

    return (
        <>
            {showSidebar && (
                <Sider breakpoint="lg" width={230} collapsedWidth="0">
                    <nav className="nav">
                        <ul>
                            {menuItems.map((item) => {
                                return (
                                    <li key={item.content}>
                                        <NavLink
                                            activeClassName="active"
                                            exact
                                            to={baseHref + item.link}
                                        >
                                            {item.content}
                                        </NavLink>
                                    </li>
                                );
                            })}
                        </ul>
                    </nav>
                </Sider>
            )}
        </>
    );
};

Sidebar.propTypes = {
    showSidebar: PropTypes.bool,
};

const mapStateToprops = (state) => ({
    showSidebar: state.layout.showSidebar,
});
export default connect(mapStateToprops)(Sidebar);
