import { showErrorNotification, destroyNotifications, showSuccessNotification } from '../components/Notification';
import * as productsService from '../services/products';

const addProduct = (data) => ({
    type: 'ADD_NEW_PRODUCT',
    product: data
});

const setProducts = (products) => ({
    type: 'SET_PRODUCTS',
    products
});

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