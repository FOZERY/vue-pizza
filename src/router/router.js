import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        path: '/',
        component: () => import('@/pages/Main.vue'),
    },

    {
        path: '/stocks',
        component: () => import('@/pages/Stocks.vue'),
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
});

export default router;
