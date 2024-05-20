import { createRouter, createWebHistory } from 'vue-router';
import { loadLayoutMiddleware } from '@/router/middleware/loadLayoutMiddleware.js';
import { RouteNames } from '@/router/routeNames.js';
import { AppLayoutNames } from '@/layouts/layoutsNames.js';
import ProductPopup from '@/components/ProductPopup.vue';
import { useUserStore } from '@/stores/userStore.js';
import { useAdminStore } from '@/stores/adminStore.js';

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
        path: '/admin',
        redirect: '/admin/products',
        name: 'admin',
        meta: {
            layout: AppLayoutNames.admin,
            requiresAdmin: true,
        },
        children: [
            {
                path: 'products',
                component: () => import('@/pages/PageAdminProducts.vue'),
                name: 'admin-products',
            },
            {
                path: 'customers',
                component: () => import('@/pages/PageAdminCustomers.vue'),
                name: 'admin-customers',
            },
            {
                path: 'couriers',
                component: () => import('@/pages/PageAdminCouriers.vue'),
            },
        ],
    },
    {
        path: '/stocks',
        component: () => import('@/pages/PageStocks.vue'),
    },
    {
        path: '/profile',
        name: 'profile',
        component: () => import('@/pages/PageProfile.vue'),
        meta: {
            requiresAuth: true,
        }
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
    history: createWebHistory(import.meta.env.BASE_URL),
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

router.beforeResolve(async (to, from, next) => {
    const userStore = useUserStore();
    const adminStore = useAdminStore();
    if(to.meta.requiresAuth) {
        if(!userStore.isAuth) {
            alert('Доступ запрещён');
            next({
                path: '/'
            });
        } else {
            next();
        }
    } else if(to.meta.requiresAdmin) {
        if(!adminStore.isAuth) {
            alert('Доступ запрещён');
            next({
                path: '/'
            });
        } else {
            next();
        }
    } else {
        next();
    }
});
router.beforeEach(loadLayoutMiddleware);


export default router;
