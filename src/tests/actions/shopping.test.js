import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {
    startAddToCart,
    getOrdersAction,
    makePaymentAction,
} from '../../actions/shopping';

const defaultShoppingState = {
    auth: {
        user: {
            uid: '5db6b24830f133b65dbbe457',
        },
    },
    shopping: {
        cartItems: [],
        orders: [],
    },
};
const createMockStore = configureMockStore([thunk]);

test('should add to cart', () => {
    const store = createMockStore(defaultShoppingState);
    store.dispatch(startAddToCart('5db6b24830f133b65dbbe468', 2));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('ADD_TO_CART');
    expect(actions[0].productId).toEqual('5db6b24830f133b65dbbe468');
});

test('should get orders', (done) => {
    const store = createMockStore(defaultShoppingState);
    store.dispatch(getOrdersAction()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toEqual('SET_ORDERS');
        expect(actions[0].orders.length).toBeGreaterThanOrEqual(1);
        done();
    });
});

test('should make payment', (done) => {
    const store = createMockStore(defaultShoppingState);
    store
        .dispatch(
            makePaymentAction([
                { product: { _id: '5db6b24830f133b65dbbe468' }, quantity: 2 },
            ])
        )
        .then((res) => {
            expect(res._id).toEqual(expect.any(String));
            done();
        });
});
