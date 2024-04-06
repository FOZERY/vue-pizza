import App from '@/App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import Stocks from '@/pages/Stocks.vue';

const routes = [
    {
        path: '/',
        component: Main,
    },
    {
        path: '/stocks',
        component: Stocks,
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
