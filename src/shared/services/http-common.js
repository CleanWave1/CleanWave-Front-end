import axios from "axios";

const API_BASE_URL = 'https://backendclean.azurewebsites.net/api/v1';

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