const sort = (products, asc) => {
    if (!asc) {
        return products.sort(
            (product1, product2) => product2.createdAt - product1.createdAt
        );
    }
    return products.sort(
        (product1, product2) => product1.createdAt - product2.createdAt
    );
};

export const getProduct = (id, products) => {
    return products.find((product) => product._id === id);
};

export const getHotProducts = (products = [], startFrom = 0, limit = 12) => {
    sort(products).slice(startFrom, limit);
};

export const getShoeProducts = (
    products = [],
    startFrom = 0,
    limit = 12,
    sorted
) => {
    if (sorted) {
        products = sort(products);
    }
    return products
        .filter((product) => product.category === 'shoes')
        .slice(startFrom, limit);
};

export const getAccessoriesProducts = (
    products = [],
    startFrom = 0,
    limit = 12,
    sorted
) => {
    if (sorted) {
        products = sort(products);
    }
    return products
        .filter((product) => product.category === 'accessories')
        .slice(startFrom, limit);
};

export const getClothingProducts = (
    products = [],
    startFrom = 0,
    limit = 12,
    sorted
) => {
    if (sorted) {
        products = sort(products);
    }
    return products
        .filter((product) => product.category === 'clothing')
        .slice(startFrom, limit);
};
