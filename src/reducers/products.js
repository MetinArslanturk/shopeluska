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
        case 'DELETE_PRODUCT':
            return {
                ...state,
                products: state.products.filter(({ _id }) => _id !== action.productId)
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