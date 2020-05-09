import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import ActionButton from '../common-components/ActionButton';
import { removeFromCart, editCartItem } from '../../actions/shopping'
import { Table, Button, InputNumber  } from 'antd';
import { useGetCartItemsAndTotalPrice } from '../../helpers/shoppingCart';


export const ShoppingCart = ({ allItems, items, removeFromCart, editCartItem }) => {

    const [cartItems, totalPrice] = useGetCartItemsAndTotalPrice(items, allItems);

    const quantityChange = useCallback((productId, quantity) => {
        if (!isNaN(quantity)) {
            editCartItem(productId, quantity);
        }
    }, [editCartItem]);

    const tableColumns = useMemo(() => {
        return [
            {
                title: 'Product',
                dataIndex: 'product',
                render: (text, record) => (
                    <span>
                        {record.product.name}
                    </span>
                )
            },
            {
                title: 'Quantity',
                dataIndex: 'quantity',
                render: (text, record) => (
                    <InputNumber min={1} max={record.product.stock} defaultValue={record.quantity} onChange={(val) => quantityChange(record.product._id, val)} />
                )
            },
            { title: 'Price', dataIndex: 'price', render: (text, record) => (<div className="table-price">${record.product.price}</div>) },
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
                )
            }
        ];
    }, [removeFromCart, quantityChange]);

    const footer = useCallback(
        () => <div className="cart-total-price">Total price: <span className="table-price">${totalPrice}</span></div>,
        [totalPrice]
    );


    return (
        <>
            <Table columns={tableColumns} dataSource={cartItems} footer={footer} />
            <div className="go-order">
                <Button type="primary">Continue To Payment</Button>
            </div>
        </>
    );
}

const mapStateToProps = (state) => ({
    allItems: state.products.products,
    items: state.shopping.cartItems
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    editCartItem: (productId, quantity) => dispatch(editCartItem(productId, quantity))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);