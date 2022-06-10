import axios from "axios";

let baseURL = 'http://localhost:8000/';

if (process.env.REACT_APP_API_STAGING) {
    baseURL = process.env.REACT_APP_API_STAGING;
} else if (process.env.REACT_APP_API_PRODUCTION) {
    baseURL = process.env.REACT_APP_API_PRODUCTION;
}

export const instance = axios.create({
    baseURL,
});

export default instance;