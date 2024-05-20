import { defineStore } from 'pinia';
import { $host } from '@/http/index.js';
import { jwtDecode } from 'jwt-decode';

export const useAdminStore = defineStore('adminStore', {
        state: () => ({
            isAuth: false,
            admin: {},
        }),

        actions: {
            async login(login, password) {
                try {
                    const { data } = await $host.post('/admin/login.php', {
                        login: login,
                        password: password,
                    });
                    localStorage.setItem('jwt-admin', data.jwt);
                    const jwtDecoded = jwtDecode(data.jwt);
                    return jwtDecoded.data;
                } catch (e) {
                    console.log(e);
                    throw e;
                }
            },
        },
    },
);
