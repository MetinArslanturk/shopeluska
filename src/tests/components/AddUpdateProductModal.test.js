import React from 'react';
import { shallow } from 'enzyme';
import { AddUpdateProductModal } from '../../components/common-components/AddUpdateProductModal';

test('should render', () => {
    const wrapper = shallow(<AddUpdateProductModal isOpen />);
    expect(wrapper).toMatchSnapshot();
});

test('should execute addProduct function', (done) => {
    const values = {
        price: '17.72',
        stock: '5',
        name: 'Test Prod',
        description: 'Desc product',
        imageUrl: '',
        category: 'shoes',
    };
    const addProduct = jest.fn().mockResolvedValue(values);
    const handleSave = jest.fn().mockImplementation((res) => {
        try {
            expect(res.name).toBe(values.name);
            done();
        } catch (err) {
            done.fail(err);
        }
    });
    const wrapper = shallow(
        <AddUpdateProductModal
            isOpen
            addProduct={addProduct}
            handleSave={handleSave}
        />
    );
    wrapper.find('.main-form').prop('onFinish')(values);
    expect(addProduct).toHaveBeenLastCalledWith(
        expect.objectContaining({
            name: values.name,
            price: Number(values.price),
        })
    );
});

test('should execute updateProduct function', (done) => {
    const values = {
        price: '17.72',
        stock: '5',
        name: 'Test Prod',
        description: 'Desc product',
        imageUrl: '',
        category: 'shoes',
    };
    const updateProduct = jest.fn().mockResolvedValue(values);
    const handleSave = jest.fn().mockImplementation((res) => {
        try {
            expect(res.name).toBe(values.name);
            done();
        } catch (err) {
            done.fail(err);
        }
    });
    const wrapper = shallow(
        <AddUpdateProductModal
            isOpen
            isUpdate
            updateProduct={updateProduct}
            handleSave={handleSave}
            productData={{ _id: 'test-prod' }}
        />
    );
    wrapper.find('.main-form').prop('onFinish')(values);
    expect(updateProduct).toHaveBeenLastCalledWith(
        expect.objectContaining({
            name: values.name,
            price: Number(values.price),
        })
    );
});
