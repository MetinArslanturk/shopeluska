import React from 'react';
import LoadingCard from '../components/common-components/LoadingCard';
import { Col } from 'antd';

const emptyProductArray = Array.apply(null, Array(12)).map((x,i) => <Col key={i} xs={24} sm={24} md={12} lg={12} xl={8} xxl={6}><LoadingCard /></Col>);
export default emptyProductArray;