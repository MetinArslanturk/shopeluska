import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import { CheckCircleTwoTone } from '@ant-design/icons';
import { baseHref } from '../../config/config';
import { useGetCartItemsAndTotalPrice } from '../../helpers/shoppingCart';
import {
    removeFromCart,
    editCartItem,
    resetCart,
    makePaymentAction,
} from '../../actions/shopping';

export const CompleteOrder = ({
    allItems,
    items,
    makePayment,
    resetCartAction,
}) => {
    const [cartItems, totalPrice] = useGetCartItemsAndTotalPrice(
        items,
        allItems
    );

    const [isSuccessOrder, setSuccessOrder] = useState('');

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    // eslint-disable-next-line no-unused-vars
    const onFinish = (values) => {
        makePayment(cartItems)
            .then((res) => {
                setSuccessOrder(res._id);
                resetCartAction();
            })
            .catch((err) => {
                console.log(`Error ${err}`);
            });
    };

    return (
        <>
            {items.length <= 0 && isSuccessOrder === '' && (
                <Redirect to={`${baseHref}shopping-cart`} />
            )}
            <Row className="reverse-wrap" gutter={[8, 16]}>
                {isSuccessOrder !== '' ? (
                    <>
                        <Col xs={24} sm={24} md={24} lg={24} xl={24}>
                            <Card>
                                <div className="success-payment">
                                    <CheckCircleTwoTone
                                        style={{ fontSize: '55px' }}
                                        twoToneColor="#52c41a"
                                    />
                                    <div className="success-payment-text">
                                        Your order successfully completed!
                                        <div className="success-order-id">
                                            Your order number is
                                            <b> {isSuccessOrder}</b>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </Col>
                    </>
                ) : (
                    <>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                            <Card title="Personal Info And Payment">
                                <Form
                                    {...layout}
                                    name="nest-messages"
                                    onFinish={onFinish}
                                >
                                    <Form.Item
                                        name="name"
                                        label="Name"
                                        rules={[{ required: true }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="surname"
                                        label="Surname"
                                        rules={[{ required: true }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="email"
                                        label="Email"
                                        rules={[
                                            { required: true, type: 'email' },
                                        ]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <Form.Item
                                        name="address"
                                        label="Address"
                                        rules={[{ required: true }]}
                                    >
                                        <Input.TextArea />
                                    </Form.Item>
                                    <Form.Item
                                        name="creditcard"
                                        label="Fake Credit Card Num"
                                        rules={[{ required: true }]}
                                    >
                                        <Input />
                                    </Form.Item>
                                    <div className="order-button">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                        >
                                            Complete Order (${totalPrice})
                                        </Button>
                                    </div>
                                </Form>
                            </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                            <Card
                                className="summary-cart"
                                title="Shopping Cart"
                            >
                                {cartItems.map((item) => {
                                    return (
                                        <div
                                            className="summary-cart-item"
                                            key={item.key}
                                        >
                                            <div>{item.product.name}</div>
                                            <div>
                                                {item.quantity} x{' '}
                                                <span className="table-price">
                                                    ${item.product.price}
                                                </span>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className="summary-total-price">
                                    <span className="table-price">
                                        ${totalPrice}
                                    </span>
                                </div>
                            </Card>
                        </Col>
                    </>
                )}
            </Row>
        </>
    );
};

CompleteOrder.propTypes = {
    allItems: PropTypes.array,
    items: PropTypes.array,
    resetCartAction: PropTypes.func,
    makePayment: PropTypes.func,
};

const mapStateToProps = (state) => ({
    allItems: state.products.products,
    items: state.shopping.cartItems,
});

const mapDispatchToProps = (dispatch) => ({
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    resetCartAction: () => dispatch(resetCart()),
    editCartItem: (productId, quantity) =>
        dispatch(editCartItem(productId, quantity)),
    makePayment: (cartItems) => dispatch(makePaymentAction(cartItems)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CompleteOrder);
