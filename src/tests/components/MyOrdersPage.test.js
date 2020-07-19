import React from 'react';
import { mount, shallow } from 'enzyme';
import { MyOrdersPage } from '../../components/pages/my-account/MyOrdersPage';

const myOrders = [
    {
        orderUser: { _id: 'testid', user: 'testuser', createdAt: 10000 },
        orders: [
            {
                _id: 'order',
                orderUser: 'testid',
                product: { _id: 'prodid', name: 'prod name' },
                key: '123',
            },
        ],
    },
];

test('should render', () => {
    const wrapper = shallow(<MyOrdersPage myOrders={myOrders} />);
    expect(wrapper).toMatchSnapshot();
});

test('should call getOrders', (done) => {
    const getOrders = jest.fn().mockImplementation(() => {
        expect(getOrders).toHaveBeenCalled();
        done();
    });
    mount(<MyOrdersPage getOrders={getOrders} myOrders={myOrders} />);
});
