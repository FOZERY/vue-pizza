import { defineStore } from 'pinia';
import { $authHost, $host } from '@/http/index.js';
import { jwtDecode } from 'jwt-decode';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        isAuth: false,
        user: {},
    }),

    getters: {},

    actions: {
        async sendOtp(phone) {
            const response = await $host.post('/customer/sendinformationcode.php', {
                phone: phone,
            }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            return response;
        },
        async login(phone, code, otp_id) {
            const { data } = await $host.post('/customer/login.php', {
                phone: phone,
                code: code,
                otp_id: otp_id,
                role: 'user',
            }, { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
            localStorage.setItem('jwt', data.jwt);
            const jwtDecoded = jwtDecode(data.jwt);
            return jwtDecoded.data;
        },

        async   check() {
            const { data } = await $authHost.get('/customer/auth.php');
            localStorage.setItem('jwt', data.jwt);
            const jwtDecoded = jwtDecode(data.jwt);
            return jwtDecoded.data;
        },

        async fetchUser(id) {
            const { data } = await $authHost.get('/customer/readOne.php', { params: { id: id } });
            this.user = data;
        },
    },
});
