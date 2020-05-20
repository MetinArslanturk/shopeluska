import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table, Button, InputNumber } from 'antd';
import ActionButton from '../common-components/ActionButton';
import {
    removeFromCart as startRemoveFromCart,
    editCartItem as startEditCartItem,
} from '../../actions/shopping';
import { useGetCartItemsAndTotalPrice } from '../../helpers/shoppingCart';
import { baseHref, history } from '../../config/config';

const redirectPayment = () => {
    history.push(`${baseHref}payment-step`);
};
export const ShoppingCart = ({
    allItems,
    items,
    removeFromCart,
    editCartItem,
}) => {
    const [cartItems, totalPrice] = useGetCartItemsAndTotalPrice(
        items,
        allItems
    );

    const quantityChange = useCallback(
        (productId, quantity) => {
            // eslint-disable-next-line no-restricted-globals
            if (!isNaN(quantity)) {
                editCartItem(productId, quantity);
            }
        },
        [editCartItem]
    );

    const tableColumns = useMemo(() => {
        return [
            {
                title: 'Product',
                dataIndex: 'product',
                render: (text, record) => <span>{record.product.name}</span>,
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                render: (text, record) => (
                    <InputNumber
                        min={1}
                        max={record.product.stock}
                        defaultValue={record.quantity}
                        onChange={(val) =>
                            quantityChange(record.product._id, val)
                        }
                    />
                ),
            },
            {
                title: 'Price',
                dataIndex: 'price',
                render: (text, record) => (
                    <div className="table-price">${record.product.price}</div>
                ),
            },
            {
                title: 'Actions',
                dataIndex: 'action',
                render: (text, record) => (
                    <span>
                        <ActionButton
                            text="Delete"
                            onClickActionFunction={removeFromCart}
                            itemToArguments={record.product._id}
                        />
                    </span>
                ),
            },
        ];
    }, [removeFromCart, quantityChange]);

    const footer = useCallback(
        () => (
            <div className="cart-total-price">
                Total price: <span className="table-price">${totalPrice}</span>
            </div>
        ),
        [totalPrice]
    );

    return (
        <>
            <h2>Shopping Cart</h2>
            <Table
                columns={tableColumns}
                dataSource={cartItems}
                footer={footer}
            />
            <div className="go-order">
                {items.length > 0 && (
                    <Button type="primary" onClick={redirectPayment}>
                        Continue To Payment
                    </Button>
                )}
            </div>
        </>
    );
};

ShoppingCart.propTypes = {
    allItems: PropTypes.array,
    items: PropTypes.array,
    removeFromCart: PropTypes.func,
    editCartItem: PropTypes.func,
};

const mapStateToProps = (state) => ({
    allItems: state.products.products,
    items: state.shopping.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(startRemoveFromCart(id)),
    editCartItem: (productId, quantity) =>
        dispatch(startEditCartItem(productId, quantity)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);
