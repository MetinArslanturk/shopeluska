import axios from 'axios';
import { apiBase } from '../config/config';

export const makePayment = (body) => {
    return axios.post(`${apiBase}orders`, body);
};

export const getOrders = (id) => {
    return axios.get(`${apiBase}orders/user/${id}`);
};