import shoppingReducer from '../../reducers/shopping';

const stateWithItems = {
    cartItems: [{ productId: 'defaulttest', quantity: 3 }],
    orders: [{ _id: 'defaultorder' }],
};

test('should add new cart item', () => {
    const action = {
        type: 'ADD_TO_CART',
        productId: 'newadded',
        quantity: 10,
    };
    const state = shoppingReducer(stateWithItems, action);
    expect(
        state.cartItems.some((el) => el.productId === action.productId)
    ).toEqual(true);
});

test('should edit cart item', () => {
    const action = {
        type: 'EDIT_CART_ITEM',
        productId: stateWithItems.cartItems[0].productId,
        quantity: 25,
    };
    const state = shoppingReducer(stateWithItems, action);
    expect(
        state.cartItems.some(
            (el) =>
                el.productId === action.productId &&
                el.quantity === action.quantity
        )
    ).toEqual(true);
});

test('should remove from cart items', () => {
    const { productId } = stateWithItems.cartItems[0];
    const action = {
        type: 'REMOVE_FROM_CART',
        productId,
    };
    const state = shoppingReducer(stateWithItems, action);
    expect(
        state.cartItems.some((el) => el.productId === action.productId)
    ).toEqual(false);
});

test('should reset cart', () => {
    const action = {
        type: 'RESET_CART',
    };
    const state = shoppingReducer(stateWithItems, action);
    expect(state.cartItems.length).toEqual(0);
});

test('should set orders', () => {
    const action = {
        type: 'SET_ORDERS',
        orders: [{ _id: 'newsetorder' }],
    };
    const state = shoppingReducer(stateWithItems, action);
    expect(state.orders[0]._id).toEqual(action.orders[0]._id);
});
