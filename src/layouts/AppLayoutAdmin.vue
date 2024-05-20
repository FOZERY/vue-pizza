<script setup>
import LogoAdmin from '@/components/UI/LogoAdmin.vue';
import AppButton from '@/components/UI/AppButton.vue';
import { useAdminStore } from '@/stores/adminStore.js';
import router from '@/router/router.js';

document.querySelector('html').style.scrollbarGutter = 'unset';

const adminStore = useAdminStore();

const logoutAdmin = async () => {
    adminStore.isAuth = false;
    adminStore.admin = null;
    localStorage.removeItem('jwt-admin');
    await router.push('/');
};
</script>

<template>
    <div>

        <div class="flex h-screen overflow-hidden">
            <aside class="static overflow-y-hidden top-0 flex min-h-svh w-80 flex-col bg-stone-800 py-8">
                <router-link :to="{name: 'admin'}" class="flex items-center justify-center">
                    <LogoAdmin />
                </router-link>
                <div class="flex flex-col flex-1">
                    <nav class="flex flex-col mt-5 px-7 gap-1.5">
                        <router-link :to="{name: 'admin-products'}" class="flex items-center ">
                            <img class="h-5" src="/admin-icons/icons8-пицца-салями.svg" />
                            <span
                                class="ml-3 text-white text-lg hover:text-stone-400 transition duration-300">Продукты</span>
                        </router-link>
                        <router-link to="/admin/customers" class="flex items-center hover:text-stone-400 ">
                            <img class="h-5" src="/admin-icons/user.svg" />
                            <span
                                class="ml-3 text-white text-lg hover:text-stone-400 transition duration-300">Клиенты</span>
                        </router-link>
                        <router-link to="/admin/couriers" class="flex items-center hover:text-stone-400">
                            <img class="h-5" src="/admin-icons/delivery.svg" />
                            <span
                                class="ml-3 text-white text-lg hover:text-stone-400 transition duration-300">Курьеры</span>
                        </router-link>
                        <!-- <router-link to="/admin/test" class="flex items-center hover:text-stone-400">
                            <img class="h-5" src="/admin-icons/orders.svg" />
                            <span class="ml-3 text-white text-lg hover:text-stone-400 transition duration-300">Заказы</span>
                        </router-link> -->
                    </nav>

                    <div class="mt-auto mx-5 flex justify-center items-center">
                        <AppButton @click="logoutAdmin" class="bg-white w-full py-2 hover:bg-stone-400">Выход
                        </AppButton>
                    </div>

                </div>
            </aside>
            <div class="relative flex-1 overflow-y-auto overflow-x-hidden">
                <main>
                    <div class="mx-auto max-w-screen-2xl p-10">
                        <slot />

                    </div>
                </main>
            </div>
        </div>
    </div>
</template>

<style>
</style>