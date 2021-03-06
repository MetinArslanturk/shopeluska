const shoppingDefaultState = {
    cartItems: [],
    orders: [],
};

export default (state = shoppingDefaultState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cartItems: [
                    ...state.cartItems,
                    { productId: action.productId, quantity: action.quantity },
                ],
            };

        case 'EDIT_CART_ITEM':
            return {
                ...state,
                cartItems: state.cartItems.map((item) => {
                    if (item.productId === action.productId) {
                        item.quantity = action.quantity;
                    }
                    return item;
                }),
            };

        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cartItems: state.cartItems.filter(
                    (item) => item.productId !== action.productId
                ),
            };
        case 'RESET_CART':
            return {
                ...state,
                cartItems: [],
            };
        case 'SET_ORDERS':
            return {
                ...state,
                orders: action.orders,
            };
        default:
            return state;
    }
};
