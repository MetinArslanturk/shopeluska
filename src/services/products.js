import axios from 'axios';
import { apiBase } from '../config/config';

export const addNewProduct = (body) => {
    return axios.post(apiBase + 'products', body);
}

export const updateProduct = (body) => {
    return axios.patch(apiBase + 'products', body);
}

export const getAllProducts = () => {
    return axios.get(apiBase + 'products');
}

export const deleteProduct = (id) => {
    return axios.delete(apiBase + 'products/' + id);
}