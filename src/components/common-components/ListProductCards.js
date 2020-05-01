import React from 'react';
import ProductCard from './ProductCard';
import LoadingCard from './LoadingCard';
import { Row, Col } from 'antd';

const emptyArr = Array.apply(null, Array(12));

export const ListProductCards = ({ products }) => {

    return (
        <>
            <Row gutter={[20, 15]}>
                {products.length === 0 && emptyArr.map((card, indice) => {
                    return (
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6} key={indice}>
                            <LoadingCard />
                        </Col>
                    )
                })}
                {products.map((product) => {
                    return (
                        <Col xs={24} sm={24} md={12} lg={12} xl={8} xxl={6} key={product.key}>
                            <ProductCard product={product} />
                        </Col>
                    )
                })}
            </Row>
        </>
    )
}

export default React.memo(ListProductCards);

