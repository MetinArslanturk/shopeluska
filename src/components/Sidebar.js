import React from 'react';
import { connect } from 'react-redux';
import { baseHref } from '../config/config';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
const { Sider } = Layout;

const Sidebar = ({ showSidebar }) => {

    const menuItems = [
        {
            content: 'Homepage',
            link: ''
        },
        {
            content: 'Clothing',
            link: 'clothing'
        },
        {
            content: 'Shoes',
            link: 'shoes'
        },
        {
            content: 'Accessories',
            link: 'accessories'
        }
    ];



    return (
        <>
            {showSidebar && <Sider breakpoint="lg" width={230}
                collapsedWidth="0">
                <nav className="nav">
                    <ul>
                        {menuItems.map((item, indice) => {
                            return (
                                <li key={indice}><Link to={baseHref + item.link}>{item.content}</Link></li>
                            )
                        })}

                    </ul>
                </nav>
            </Sider>
            }
        </>
    )
}

const mapStateToprops = (state) => ({
    showSidebar: state.layout.showSidebar
})
export default connect(mapStateToprops)(Sidebar)