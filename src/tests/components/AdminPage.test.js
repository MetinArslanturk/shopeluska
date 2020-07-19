import React from 'react';
import { shallow } from 'enzyme';
import { AdminPage } from '../../components/pages/my-account/AdminPage';

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

test('should render', () => {
    const wrapper = shallow(<AdminPage products={products} />);
    expect(wrapper).toMatchSnapshot();
});

test('should start delete product', () => {
    const startDeleteProduct = jest.fn();
    const wrapper = shallow(
        <AdminPage
            startDeleteProduct={startDeleteProduct}
            products={products}
        />
    );
    const instance = wrapper.instance();
    instance.handleDeleteConfirm('testp');
    expect(startDeleteProduct).toHaveBeenCalledWith('testp');
});
