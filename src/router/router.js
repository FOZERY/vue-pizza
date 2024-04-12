import { createRouter, createWebHistory } from 'vue-router';
import Main from '@/pages/Main.vue';
import CardPopup from '@/components/CardPopup.vue';

const routes = [
    {
        path: '/',
        component: Main,
        children: [
            {
                path: 'product/:id',
                component: CardPopup,
                meta: {
                    showModal: true,
                },
            },
        ],
    },
    {
        path: '/stocks',
        component: () => import('@/pages/Stocks.vue'),
    },
    {
        path: '/checkout',
        component: () => import('@/pages/CheckoutCart.vue'),
    },
    {
        path: '/:pathName(.*)',
        redirect: '/',
    },
];

const router = createRouter({
    routes,
    history: createWebHistory(),
    scrollBehavior(to, from, savedPosition) {
        if (from.path.startsWith('/product/') || to.path.startsWith('/product/')) return;
        if (to.hash) {
            return {
                el: to.hash,
                top: 70,
                behavior: 'smooth',
            };
        } else {
            return {
                top: 0,
            };
        }
    },
});

export default router;
