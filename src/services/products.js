import axios from 'axios';
import { apiBase } from '../config/config';

export const addNewProduct = (body) => {
    return axios.post(apiBase + 'products', body);
}