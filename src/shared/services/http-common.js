import axios from "axios";

const API_BASE_URL = 'http://localhost:5296/api/v1';

/**
 * Axios instance
 * @summary http axios instance creation with default configs
 * @type {axios.AxiosInstance}
 */

const http = axios.create({
    baseURL: API_BASE_URL,
    headers: {'Content-type': 'application/json'}
});

export default http;