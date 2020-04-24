import React, { useState } from 'react';
import { connect } from 'react-redux'
import { PageTitle } from '../common-components/PageTitle';
import { getProduct } from '../../selectors/products';
import { Row, Col, Rate, Button, InputNumber, Card } from 'antd';

const tabList = [{ key: 'description', tab: 'Description'}, { key: 'shipping-options', tab: 'Shipping Options'}];

export const ProductPage = ({ product }) => {
    const [activeTab, setTab] = useState('description');

    const handleSeeMore = () => {
        setTab('description');
    }

    return (
        <>
            {product ? (
                <>
                    <PageTitle title={'Shopeluska - ' + product.name} />
                    <Row style={{ border: '1px solid #ccc' }}>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div>
                                <img className="product-page-head-image" src={product.imageUrl} alt={product.name} />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="product-content-wrapper">
                                <div className="product-content-title">
                                    {product.name}
                                </div>
                                <div className="product-content-description">
                                    {product.description.slice(0, 100)}
                                </div>
                                <div className="see-all"><Button type="dashed" onClick={handleSeeMore}>-See all-</Button></div>
                                <div className="card-price margin-top">
                                    <Rate disabled defaultValue={product.rate} />
                                    <div className="card-price-text-wrapper">
                                        <span className="card-price-text">{product.price} $</span>
                                    </div>
                                </div>
                                <div className="quantity-and-action">
                                    <div className="product-quantity">
                                        Quantity: <InputNumber min={1} max={product.stock} defaultValue={1} />
                                    </div>
                                    <div className="card-add-button no-margin-top">
                                        <Button>Add To Card</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{ border: '1px solid #ccc', borderTop:'none' }}>
                        <Card
                            style={{ width: '100%' }}
                            tabList={tabList}
                            activeTabKey={activeTab}
                            onTabChange={setTab}
                        >
                            {activeTab === 'description' ? (
                                <>
                                <p>
                                    {product.description}
                                </p>
                                </>
                            ) : activeTab === 'shipping-options' ? (
                                <>
                                <p>Shipping Options will be here...</p>
                                </>
                            ) : <p></p>}
                        </Card>
                    </Row>
                </>
            ) : (
                    <>
                        Not Found Product
                    </>
                )}
        </>
    )
}

const mapStateToProps = (state, ownProps) => ({
    product: getProduct(ownProps.match.params.id, state.products.products)
})
export default connect(mapStateToProps)(ProductPage);

