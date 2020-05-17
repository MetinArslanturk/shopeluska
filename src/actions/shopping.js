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

export const removeFromCart = (productId) => ({
    type: 'REMOVE_FROM_CART',
    productId,
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
