import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001/api';

const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,   // 10 seconds
    headers: {
        'Content-Type': 'application/json',
    },
});

// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        if (error.response) {
            console.error('API Error:', error.response.data);
        } else if (error.request) {
            console.error('Network Error:', error.message);
        }
        return Promise.reject(error);
    }
);

export default axiosInstance;
