/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import ScrollIntoView from 'react-scroll-into-view';
import { Row, Col, Rate, Button, InputNumber, Card } from 'antd';
import { PageTitle } from '../common-components/PageTitle';
import { getProduct } from '../../selectors/products';

const tabList = [
    { key: 'description', tab: 'Description' },
    { key: 'shipping-options', tab: 'Shipping Options' },
];

export const ProductPage = ({ product }) => {
    const [activeTab, setTab] = useState('description');

    const handleSeeMore = () => {
        setTab('description');
    };

    return (
        <>
            {product ? (
                <>
                    <PageTitle title={`Shopeluska - ${product.name}`} />
                    <Row>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div>
                                <img
                                    className="product-page-head-image"
                                    src={product.imageUrl}
                                    alt={product.name}
                                />
                            </div>
                        </Col>
                        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                            <div className="product-content-wrapper">
                                <div className="product-content-title">
                                    {product.name}
                                </div>
                                <div className="product-content-description">
                                    {product.description.slice(0, 500)}
                                </div>
                                <ScrollIntoView
                                    className="see-all"
                                    selector="#desc-panel"
                                >
                                    <Button
                                        type="dashed"
                                        onClick={handleSeeMore}
                                    >
                                        -See all-
                                    </Button>
                                </ScrollIntoView>
                                <div className="card-price margin-top">
                                    <Rate
                                        disabled
                                        defaultValue={product.rate}
                                    />
                                    <div className="card-price-text-wrapper">
                                        <span className="card-price-text">
                                            {product.price} $
                                        </span>
                                    </div>
                                </div>
                                <div className="quantity-and-action">
                                    <div className="product-quantity">
                                        Quantity:{' '}
                                        <InputNumber
                                            min={1}
                                            max={product.stock}
                                            defaultValue={1}
                                        />
                                    </div>
                                    <div className="card-add-button no-margin-top">
                                        <Button>Add To Card</Button>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Card
                            style={{ width: '100%' }}
                            tabList={tabList}
                            activeTabKey={activeTab}
                            onTabChange={setTab}
                            id="desc-panel"
                        >
                            {activeTab === 'description' ? (
                                <>
                                    <p>{product.description}</p>
                                </>
                            ) : activeTab === 'shipping-options' ? (
                                <>
                                    <p>Shipping Options will be here...</p>
                                </>
                            ) : (
                                <p />
                            )}
                        </Card>
                    </Row>
                </>
            ) : (
                <>Not Found Product</>
            )}
        </>
    );
};

ProductPage.propTypes = {
    product: PropTypes.any,
};

const mapStateToProps = (state, ownProps) => ({
    product: getProduct(ownProps.match.params.id, state.products.products),
});
export default connect(mapStateToProps)(ProductPage);
