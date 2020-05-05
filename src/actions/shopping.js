export const addToCart = (productId, quantity) => ({
    type: 'ADD_TO_CART',
    productId,
    quantity
});