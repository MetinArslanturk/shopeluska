import React from 'react';
import { Card, Skeleton } from 'antd';

export const LoadingCard = ({ products }) => (
    <Card>
        <Skeleton active />
        <Skeleton active />
    </Card>
)

export default React.memo(LoadingCard);

