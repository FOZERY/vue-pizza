import axios from 'axios';
import { defineStore } from 'pinia';

export const useUserStore = defineStore('userStore', {
    state: () => ({
        isAuth: false,
        user: {},
    }),

    getters: {},

    actions: {
        async hasToken() {
            return localStorage.getItem('jwt');
        }
    },
});
