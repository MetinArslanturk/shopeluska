import React, { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { getOrdersAction } from '../../../actions/shopping';

export const MyOrdersPage = ({ myOrders, getOrders }) => {
    useEffect(() => {
        getOrders();
    }, [getOrders]);

    const orders = useMemo(() => {
        return myOrders.map((order, i) => {
            let totalPrice = 0;
            const productNames = [];
            order.orders.forEach((element) => {
                totalPrice += element.orderPrice;
                productNames.push(element.product.name);
            });
            return {
                createdAt: order.orderUser.createdAt,
                productNames: productNames.join(', '),
                totalPrice,
                key: order.orderUser.createdAt + i,
            };
        });
    }, [myOrders]);

    const columns = [
        {
            title: 'Products',
            dataIndex: 'productNames',
            key: 'productNames',
        },
        {
            title: 'Date',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text) => <span>{new Date(text).toLocaleString()}</span>,
        },
        {
            title: 'Total Price',
            dataIndex: 'totalPrice',
            key: 'totalPrice',
        },
    ];

    return (
        <>
            <Table columns={columns} dataSource={orders} />
        </>
    );
};

MyOrdersPage.propTypes = {
    myOrders: PropTypes.array,
    getOrders: PropTypes.func,
};

const mapStateToProps = (state) => ({
    myOrders: state.shopping.orders,
});

const mapDispatchToProps = (dispatch) => ({
    getOrders: () => dispatch(getOrdersAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyOrdersPage);
