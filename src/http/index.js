import axios from 'axios';

const $host = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

const $adminHost = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

const authInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return config;
};

const authErrorResponseInterceptor = error => {
    if (error.response.status === 401) {
        localStorage.removeItem('jwt');
    }
    return Promise.reject(error);
};

const adminAuthInterceptor = config => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('jwt-admin')}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);
$authHost.interceptors.response.use(config => config, authErrorResponseInterceptor);

$adminHost.interceptors.request.use(adminAuthInterceptor);

export {
    $host,
    $authHost,
    $adminHost,
};