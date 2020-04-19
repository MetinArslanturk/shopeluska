import { showErrorNotification, destroyNotifications, showSuccessNotification } from '../components/Notification';
import * as productsService from '../services/products';

const addProduct = (data) => ({
    type: 'ADD_NEW_PRODUCT',
    product: data
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
}