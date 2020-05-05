import React from 'react';
import { connect } from 'react-redux';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const ShoppingCartIcon = ({ cartItemCount }) => {
    return (

        <div className="badge-wrapper">
            <ShoppingCartOutlined style={{ fontSize: '36px' }} />
            <Badge className="badge-text rebound-animate" key={cartItemCount} count={cartItemCount}>
            </Badge>
        </div>

    )
};

const mapStateToProps = (state) => ({
    cartItemCount: state.shopping.cartItems.length
});

export default connect(mapStateToProps)(ShoppingCartIcon);

