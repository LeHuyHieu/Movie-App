import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

const request = async (method, endpoint, data = null) => {
    try {
        const response = await apiClient({
            method,
            url: endpoint,
            data,
        });
        return response.data.data;
    } catch (error) {
        console.error(`Error with ${method.toUpperCase()} request to ${endpoint}:`, error);
        throw error;
    }
};

export const getData = (endpoint) => request('get', endpoint);
export const postData = (endpoint, data) => request('post', endpoint, data);
export const putData = (endpoint, data) => request('put', endpoint, data);
export const patchData = (endpoint, data) => request('patch', endpoint, data);
export const deleteData = (endpoint) => request('delete', endpoint);
