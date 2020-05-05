const shoppingDefaultState = {
    cartItems: []
};

export default (state = shoppingDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return {
        ...state,
        cartItems:[...state.cartItems, action.productId]
      };
    default:
      return state;
  }
};