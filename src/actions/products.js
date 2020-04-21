import { showErrorNotification, destroyNotifications, showSuccessNotification } from '../components/common-components/Notification';
import * as productsService from '../services/products';

const addProduct = (data) => ({
    type: 'ADD_NEW_PRODUCT',
    product: data
});

const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    products
});

const deleteProduct = (id) => ({
    type: 'DELETE_PRODUCT',
    productId: id
})

export const startAddProduct = (data) => {
    return (dispatch) => {
        destroyNotifications();
        return productsService.addNewProduct(data).then((res) => {
            const product = res.data;
            dispatch(addProduct(product));
            showSuccessNotification('Success', 'New product added successfully.', 3);
            return product;
        }).catch(err => {
            showErrorNotification('Error', 'Error occured while adding new product', 3);
            return Promise.reject(err);
        });

    }
};

export const startSetProducts = () => {
    return (dispatch) => {
        return productsService.getAllProducts().then((res) => {
            const products = res.data;
            dispatch(setProducts(products));
        }).catch(err => {
            showErrorNotification('Error', 'Error occured while getting products.', 2);
        });
    }
};

export const startDeleteProduct = (id) => {
    return (dispatch) => {
        return productsService.deleteProduct(id).then((res) => {
            dispatch(deleteProduct(id));
            showSuccessNotification('Success', 'Product deleted successfully.', 3);
        }).catch(err => {
            showErrorNotification('Error', 'Error occured while deleting product.', 2);
        });
    }
};