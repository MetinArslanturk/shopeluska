import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Badge } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';

export const ShoppingCartIcon = ({ cartItemCount }) => {
    return (
        <div className="badge-wrapper">
            <ShoppingCartOutlined style={{ fontSize: '36px' }} />
            <Badge
                className="badge-text rebound-animate"
                key={cartItemCount}
                count={cartItemCount}
            />
        </div>
    );
};

ShoppingCartIcon.propTypes = {
    cartItemCount: PropTypes.number,
};

const mapStateToProps = (state) => ({
    cartItemCount: state.shopping.cartItems.length,
});

export default connect(mapStateToProps)(ShoppingCartIcon);
