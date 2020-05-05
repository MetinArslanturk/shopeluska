import React, { useMemo, useCallback } from 'react';
import { connect } from 'react-redux';
import ActionButton from '../common-components/ActionButton';
import { Table } from 'antd';



export const ShoppingCart = ({ allItems, items, removeFromCart }) => {

    const handleDelete = useCallback((record) => {
        console.log(record);
        // removeFromCart(id);
    }, []);

    const cartItems = useMemo(() => {
        console.log('Calculated');
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
        console.log('cal 2');
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
            { title: 'Quantity', dataIndex: 'quantity' },
            {
                title: 'Actions',
                dataIndex: 'action',
                render: (text, record) => (
                    <span>
                        <ActionButton
                            text="Delete"
                            onClickActionFunction={handleDelete}
                            itemToArguments={record}
                        />
                    </span>
                ),
            }
        ];
    }, [handleDelete]);


    return (
        <>
            <Table columns={tableColumns} dataSource={cartItems} />
        </>
    );
}

const mapStateToProps = (state) => ({
    allItems: state.products.products,
    items: state.shopping.cartItems
});

export default connect(mapStateToProps)(ShoppingCart);