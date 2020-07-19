import React from 'react';
import { shallow } from 'enzyme';
import { ProductCard } from '../../components/common-components/ProductCard';

const product = {
    _id: 'testproduct1',
    name: 'Test Product 1',
    description: 'Test product 1 desc',
    imageUrl: '',
    price: 10.51,
    stock: 10,
};

test('should render', () => {
    const wrapper = shallow(<ProductCard product={product} />);
    expect(wrapper).toMatchSnapshot();
});

test('should trigger add to cart function when click', () => {
    const addToCart = jest.fn();
    const wrapper = shallow(
        <ProductCard addToCart={addToCart} product={product} />
    );

    wrapper.find('.card-add-btn').prop('onClick')({
        stopPropagation: () => {},
        preventDefault: () => {},
    });
    expect(addToCart).toHaveBeenLastCalledWith(product._id, 1);
});
