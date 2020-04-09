import React, { useState } from 'react';
import { connect } from 'react-redux';
import { baseHref } from '../index';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import { SkinOutlined, StarOutlined, TagsOutlined } from '@ant-design/icons';
const { Sider } = Layout;

const Sidebar = ({ showSidebar }) => {

    const menuItems = [
        {
            content: <><SkinOutlined /> Clothing</>,
            link: 'clothing'
        },
        {
            content: <><TagsOutlined /> Shoes</>,
            link: 'shoes'
        },
        {
            content: <><StarOutlined /> Accessories</>,
            link: 'accessories'
        }
    ];

    const [selectedMenu, setSelectedMenu] = useState(null);


    return (
        <>
            {showSidebar && <Sider breakpoint="lg"
                collapsedWidth="0">
                <div className="side-menu">

                    {menuItems.map((item,indice) => {
                        return (
                            <Link to={baseHref + item.link} key={indice}><div className={'side-menu-item' + (selectedMenu === indice ? ' side-menu-item-selected' : '')} onClick={e => {
                                setSelectedMenu(indice);
                            }}>
                                {item.content}
                                </div></Link>
                        )
                    })}
                </div>
            </Sider>
            }
        </>
    )
}

const mapStateToprops = (state) => ({
    showSidebar: state.layout.showSidebar
})
export default connect(mapStateToprops)(Sidebar)