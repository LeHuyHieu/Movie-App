import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// GET Request
export const fetchData = async (endpoint) => {
    try {
        const response = await apiClient.get(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
};

// POST Request
export const postData = async (endpoint, data) => {
    try {
        const response = await apiClient.post(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data:', error);
        throw error;
    }
};

// PUT Request (Thay thế tài nguyên)
export const putData = async (endpoint, data) => {
    try {
        const response = await apiClient.put(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error putting data:', error);
        throw error;
    }
};

// PATCH Request (Cập nhật một phần tài nguyên)
export const patchData = async (endpoint, data) => {
    try {
        const response = await apiClient.patch(endpoint, data);
        return response.data;
    } catch (error) {
        console.error('Error patching data:', error);
        throw error;
    }
};

// DELETE Request
export const deleteData = async (endpoint) => {
    try {
        const response = await apiClient.delete(endpoint);
        return response.data;
    } catch (error) {
        console.error('Error deleting data:', error);
        throw error;
    }
};