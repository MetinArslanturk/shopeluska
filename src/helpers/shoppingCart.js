import { useMemo } from 'react';

export const useGetCartItemsAndTotalPrice = (items, allItems) => {
    const cartItems = useMemo(() => {
        return items.map(item => {
            const product = allItems.find(product => product._id === item.productId);
            return {
                product,
                key: product._id,
                quantity: item.quantity
            }
        });
    }, [items, allItems]);

    const totalPrice = useMemo(() => {
        let price = 0;
        cartItems.forEach(item => price += (item.quantity * item.product.price));
        return price;
    }, [cartItems]);

    return [cartItems, totalPrice];
}