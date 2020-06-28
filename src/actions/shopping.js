import * as shoppingService from '../services/shopping';

export const addToCart = (productId, quantity) => ({
    type: 'ADD_TO_CART',
    productId,
    quantity,
});

export const editCartItem = (productId, quantity) => ({
    type: 'EDIT_CART_ITEM',
    productId,
    quantity,
});

export const setOrders = (orders) => ({
    type: 'SET_ORDERS',
    orders,
});

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    productId,
});

export const resetCart = () => ({
    type: 'RESET_CART',
});

export const startAddToCart = (productId, quantity) => {
    return (dispatch, getState) => {
        const item = getState().shopping.cartItems.find(
            (product) => product.productId === productId
        );
        if (item) {
            dispatch(editCartItem(productId, item.quantity + quantity));
        } else {
            dispatch(addToCart(productId, quantity));
        }
    };
};

export const makePaymentAction = (items) => {
    return () => {
        return shoppingService
            .makePayment({ items })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    };
};

export const getOrdersAction = () => {
    return (dispatch, getState) => {
        const userId = getState().auth.user.uid;
        return shoppingService
            .getOrders(userId)
            .then((res) => {
                dispatch(setOrders(res.data.allOrders));
            })
            .catch((err) => {
                return Promise.reject(err);
            });
    };
};
