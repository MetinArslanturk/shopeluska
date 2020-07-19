import React from 'react';
import { shallow } from 'enzyme';
import { ListProductCards } from '../../components/common-components/ListProductCards';

test('should render', () => {
    const products = [
        {
            id: 'test1',
            key: 'test1',
            name: 'Test of one',
            description: 'Desc of one',
            price: 20.51,
            stock: 5,
        },
        {
            id: 'test2',
            key: 'test2',
            name: 'Test of two',
            description: 'Desc of two',
            price: 10.51,
            stock: 5,
        },
    ];
    const wrapper = shallow(<ListProductCards products={products} />);
    expect(wrapper).toMatchSnapshot();
});

test('should render when products empty', () => {
    const products = [];
    const wrapper = shallow(<ListProductCards products={products} />);
    expect(wrapper).toMatchSnapshot();
});
