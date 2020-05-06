import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import ActionButton from '../common-components/ActionButton';
import { removeFromCart } from '../../actions/shopping'
import { Table } from 'antd';



export const ShoppingCart = ({ allItems, items, removeFromCart }) => {





    const cartItems = useMemo(() => {
        return items.map(item => {
            const product = allItems.find(product => product._id === item.productId);
            return {
                product,
                key: product._id,
                quantity: item.quantity
            }
        });
    }, [items, allItems]);

    const tableColumns = useMemo(() => {
        return [
            {
                title: 'Product',
                dataIndex: 'product',
                render: (text, record) => (
                    <span>
                        {record.product.name}
                    </span>
                ),
            },
            {   title: 'Quantity', dataIndex: 'quantity' },
            {   title: 'Price', dataIndex: 'price', render: (text, record) => (<div className="table-price">${record.product.price}</div>) },
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
    }, [removeFromCart]);

    const totalPrice = useMemo(() => {
        let price = 0;
        cartItems.forEach(item => price += (item.quantity * item.product.price));
        return price;
    }, [cartItems])

    const footer = useCallback(
        () => <div className="cart-total-price">Total price: <span className="table-price">${totalPrice}</span></div>,
        [totalPrice]
    );


    return (
        <>
            <Table columns={tableColumns} dataSource={cartItems} footer={footer} />
        </>
    );
}

const mapStateToProps = (state) => ({
    allItems: state.products.products,
    items: state.shopping.cartItems
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);