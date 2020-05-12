import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Card, Form, Input, Button } from 'antd';
import { useGetCartItemsAndTotalPrice } from '../../helpers/shoppingCart';
import { removeFromCart, editCartItem } from '../../actions/shopping';

export const CompleteOrder = ({ allItems, items }) => {


    const [cartItems, totalPrice] = useGetCartItemsAndTotalPrice(items, allItems);

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
      };

    const onFinish = (values) => {
        console.log(values);
    }

    return (
        <>
            <Row className="reverse-wrap" gutter={[8, 16]}>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <Card title="Personal Info And Payment">
                        <Form {...layout} name="nest-messages" onFinish={onFinish}>
                            <Form.Item name="name" label="Name" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="surname" label="Surname" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="email" label="Email" rules={[{ type: 'email' }]}>
                                <Input />
                            </Form.Item>
                            <Form.Item name="address" label="Address" rules={[{ required: true }]}>
                                <Input.TextArea />
                            </Form.Item>
                            <Form.Item name="creditcard" label="Fake Credit Card Num" rules={[{ required: true }]}>
                                <Input />
                            </Form.Item>
                                <div className="order-button">
                                    <Button type="primary" htmlType="submit">
                                        Complete Order (${totalPrice})
                                </Button>
                                </div>
                        </Form>
                    </Card>
                </Col>
                <Col xs={24} sm={24} md={24} lg={24} xl={12}>
                    <Card className="summary-cart" title="Shopping Cart">
                        {cartItems.map(item => {
                            return (
                            <div className="summary-cart-item" key={item.key}>
                                <div>
                                    {item.product.name}
                                </div>
                                <div>
                                    {item.product.name}
                                </div>
                                <div>
                                    {item.product.name}
                                </div>
                            </div>
                            );
                        })}
                        <div className="summary-total-price">
                            <span className="table-price">${totalPrice}</span>
                        </div>
                    </Card>
                </Col>
            </Row>
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

export default connect(mapStateToProps, mapDispatchToProps)(CompleteOrder);