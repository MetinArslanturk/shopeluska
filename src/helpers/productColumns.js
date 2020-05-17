import React from 'react';

export const productColumns = [
    {
        title: 'Name',
        dataIndex: 'name',
    },
    {
        title: 'Description',
        dataIndex: 'description',
        render: (text) => <div className="description-in-table">{text}</div>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
    },
    {
        title: 'Category',
        dataIndex: 'category',
    },
    {
        title: 'Stock',
        dataIndex: 'stock',
    },
];
