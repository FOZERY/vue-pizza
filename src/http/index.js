import axios from 'axios';

const $host = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL,
});

const $authHost = axios.create({
    baseURL: import.meta.env.VITE_APP_API_URL
});

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem('jwt')}`;
    return config;
}

const authErrorResponseInterceptor = error =>
{
    if(error.response.status === 401) {
        localStorage.removeItem('jwt');
    }
    return Promise.reject(error);
}

$authHost.interceptors.request.use(authInterceptor);
$authHost.interceptors.response.use(response => response, authErrorResponseInterceptor);

export {
    $host,
    $authHost
}