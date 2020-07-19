import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddProduct,
    startUpdateProduct,
    startSetProducts,
    startDeleteProduct,
} from '../../actions/products';

const defaultProductsState = {
    products: {
        products: [{ _id: '5ead8cfb9e47a71520d8ad79', name: 'Test Product' }],
    },
};
const createMockStore = configureMockStore([thunk]);

let newAddedProductId;

test('should set products', (done) => {
    const store = createMockStore(defaultProductsState);
    store.dispatch(startSetProducts()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('SET_PRODUCTS');
        expect(actions[0].products.length).toBeGreaterThanOrEqual(1);
        done();
    });
});

test('should start add product', (done) => {
    const store = createMockStore(defaultProductsState);
    const newProduct = {
        name: 'Test Product',
        description:
            'My test product is here. This product^s main purpose is test. Lets see is it working or not.',
        price: 17.25,
        stock: 5,
        category: 'shoes',
        imageUrl: '',
    };
    store.dispatch(startAddProduct(newProduct)).then((res) => {
        newAddedProductId = res._id;
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_NEW_PRODUCT',
            product: {
                ...newProduct,
                _id: expect.any(String),
                key: expect.any(String),
                createdAt: expect.any(Number),
                rate: 0,
            },
        });
        done();
    });
});

test('should start update product', (done) => {
    const store = createMockStore(defaultProductsState);
    const updatedProduct = {
        _id: '5db6b24830f133b65dbbe468',
        name: 'Changed Name Product',
    };
    store.dispatch(startUpdateProduct(updatedProduct)).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('UPDATE_PRODUCT');
        expect(actions[0].product.name).toEqual(updatedProduct.name);
        done();
    });
});

test('should start delete product', (done) => {
    const store = createMockStore(defaultProductsState);
    store.dispatch(startDeleteProduct(newAddedProductId)).then(() => {
        if (newAddedProductId) {
            const actions = store.getActions();
            expect(actions[0].type).toEqual('DELETE_PRODUCT');
            expect(actions[0].productId).toEqual(newAddedProductId);
        }
        done();
    });
});
