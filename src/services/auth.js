import axios from 'axios';
import { apiBase } from '../config/config';


export const checkLogin = () => {
    return axios.get(apiBase + 'checkLogin');
}

export const login = (body) => {
    return axios.post(apiBase + 'login', body);
}

export const updateMyProfile = (body) => {
    return axios.post(apiBase + 'users/updateMyProfile', body)
}

export const logout = () => {
    return axios.get(apiBase + 'logout');
}