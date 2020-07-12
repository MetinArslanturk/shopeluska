import productsReducer from '../../reducers/products';

const stateWithProducts = { products: [{ _id: 'aaaa', price: 17.2 }] };

test('should add new product', () => {
    const action = {
        type: 'ADD_NEW_PRODUCT',
        product: { _id: 'testadded', price: 123 },
    };
    const state = productsReducer(stateWithProducts, action);
    expect(state.products.some((el) => el._id === action.product._id)).toEqual(
        true
    );
});

test('should delete a product', () => {
    const productId = stateWithProducts.products[0]._id;
    const action = {
        type: 'DELETE_PRODUCT',
        productId,
    };
    const state = productsReducer(stateWithProducts, action);
    expect(state.products.some((el) => el._id === productId)).toEqual(false);
});

test('should update a product', () => {
    const action = {
        type: 'UPDATE_PRODUCT',
        product: { _id: stateWithProducts.products[0]._id, price: 25.3 },
    };
    const state = productsReducer(stateWithProducts, action);
    expect(
        state.products.some(
            (el) =>
                el._id === action.product._id &&
                el.price === action.product.price
        )
    ).toEqual(true);
});

test('should set products', () => {
    const action = {
        type: 'SET_PRODUCTS',
        products: stateWithProducts.products,
    };
    const state = productsReducer({ products: [] }, action);
    expect(
        state.products.some((el) => el._id === action.products[0]._id)
    ).toEqual(true);
});
