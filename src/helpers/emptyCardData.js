import React from 'react';
import { Col } from 'antd';
import LoadingCard from '../components/common-components/LoadingCard';

// eslint-disable-next-line prefer-spread
const emptyProductArray = Array.apply(null, Array(12)).map((x, i) => (
    // eslint-disable-next-line react/no-array-index-key
    <Col key={i} xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}>
        <LoadingCard />
    </Col>
));
export default emptyProductArray;
