import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
});

apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = ['Bearer ', token].join('');
  }
  return config;
});

export const apiRequest = async (endpoint, options = {}) => {
  const { body, ...config } = options;
  const response = await apiClient.request({
    url: endpoint,
    ...config,
    data: body,
  });
  return response.data;
};

export default apiClient;
