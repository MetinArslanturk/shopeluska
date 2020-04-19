const productsDefaultState = {
    products: []
};

export default (state = productsDefaultState, action) => {
    switch (action.type) {
        case 'ADD_NEW_PRODUCT':
            return {
                ...state,
                products: [...state.products, action.product]
            };
        case 'REMOVE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(({ id }) => id !== action.productId)
            };
        case 'SET_PRODUCTS':
            return {
                ...state,
                products: action.products
            };
        default:
            return state;
    }
};