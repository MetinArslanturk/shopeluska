import React from 'react';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import ProductCard from './ProductCard';
import emptyData from '../../helpers/emptyCardData';

export const ListProductCards = ({ products }) => {
    return (
        <>
            <Row gutter={[20, 15]}>
                {products.length === 0 && emptyData}
                {products.map((product) => {
                    return (
                        <Col
                            xs={24}
                            sm={24}
                            md={12}
                            lg={12}
                            xl={8}
                            xxl={6}
                            key={product.key}
                        >
                            <ProductCard product={product} />
                        </Col>
                    );
                })}
            </Row>
        </>
    );
};

ListProductCards.propTypes = {
    products: PropTypes.array,
};

export default React.memo(ListProductCards);
