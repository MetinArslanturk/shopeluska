import axios from 'axios';


export const checkLogin = () => {
    return axios.get('/api/checkLogin');
}

export const login = (body) => {
    return axios.post('/api/login', body);
}

export const logout = () => {
    return axios.get('/api/logout');
}