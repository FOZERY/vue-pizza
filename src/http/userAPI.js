import { $authHost, $host } from '@/http/index.js';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

export const sendOtp = async (phone) => {
    const response = await $host.post('/customer/sendinformationcode.php', {
        phone: phone,
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    return response;
};

export const login = async (phone, code, otp_id) => {
    const { data } = await $host.post('/customer/login.php', {
        phone: phone,
        code: code,
        otp_id: otp_id,
        role: 'user',
    }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
    localStorage.setItem('jwt', data.jwt);
    const jwtDecoded = jwtDecode(data.jwt);
    return jwtDecoded.data;
};

export const check = async() => {
    const {data} = await $authHost.get('/customer/auth.php');
    localStorage.setItem('jwt', data.jwt);
    const jwtDecoded = jwtDecode(data.jwt);
    return jwtDecoded.data;
}