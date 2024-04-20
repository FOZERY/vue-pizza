import { createRouter, createWebHistory } from 'vue-router';
import { loadLayoutMiddleware } from '@/router/middleware/loadLayoutMiddleware.js';
import { RouteNames } from '@/router/routeNames.js';
import { AppLayoutNames } from '@/layouts/layoutsNames.js';
import ProductPopup from '@/components/ProductPopup.vue';

const routes = [
    {
        path: '/',
        component: () => import('@/pages/PageMain.vue'),
        name: RouteNames.main,
        children: [
            {
                path: 'product/:id',
                component: ProductPopup,
                meta: {
                    showModal: true,
                },
            },
        ],
    },
    {
        path: '/stocks',
        component: () => import('@/pages/PageStocks.vue'),
    },
    {
        path: '/checkout',
        component: () => import('@/pages/PageCheckout.vue'),
        meta: {
            layout: AppLayoutNames.checkout,
        },
    },
    {
        path: '/:pathName(.*)',
        redirect: '/',
    },
    {
        path: '/error/:errorCode',
        component: () => import('@/pages/PageError.vue'),
        meta: {
            layout: AppLayoutNames.error,
        },
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
                top: 75,
                behavior: 'smooth',
            };
        } else {
            return {
                top: 0,
            };
        }
    },
});

router.beforeEach(loadLayoutMiddleware);

export default router;
