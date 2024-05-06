<script setup>
import CartList from '@/components/CartList.vue';
import AppButton from '@/components/UI/AppButton.vue';
import Drawer from '@/components/Drawer.vue';

import { useCartStore } from '@/stores/cartStore.js';
import { useRootStore } from '@/stores/rootStore.js';

const cartStore = useCartStore();
const rootStore = useRootStore();

const isOpen = defineModel({default: false});

const emit = defineEmits(['update:isOpen']);

const closeCart = () => {
    isOpen.value = false;
    // emit('update:isOpen', false);
};
</script>

<template>
    <Transition :duration="rootStore.isMobile ? 0 : 400" name="cart">
        <Drawer v-if="isOpen" @closeCart="closeCart" class="outer">
            <div
                class="inner cart flex flex-col fixed h-dvh top-0 right-0 w-full sm:w-96 z-40 opacity-100 p-6 overflow-y-auto"
            >
                <div
                    class="cart__header flex items-center gap-2 pb-4 mb-4 border-b border-stone-200"
                >
                    <svg
                        @click="closeCart"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="hidden sm:block hover:-translate-x-1 hover:fill-red-500 transition duration-300 cursor-pointer"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm11.5 5.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5z"
                        />
                    </svg>
                    <svg
                        @click="closeCart"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        class="block sm:hidden hover:-translate-x-1 hover:fill-red-500 transition duration-300 cursor-pointer"
                        viewBox="0 0 16 16"
                    >
                        <path
                            fill-rule="evenodd"
                            d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0"
                        />
                    </svg>
                    <h2 class="text-2xl font-medium">Корзина</h2>
                </div>

                <div class="flex flex-col flex-1 gap-5" v-if="cartStore.cartItems.length > 0">
                    <CartList />
                    <div class="cart__footer border-t pt-3 flex flex-col mt-auto">
                        <div class="">
                            <span class="font-medium">Количество: {{ cartStore.totalItems }}</span>
                        </div>
                        <div class="flex justify-between mb-3">
                            <span class="font-medium">Сумма заказа</span>
                            <span class="font-medium">{{ cartStore.totalPrice }} ₽</span>
                        </div>

                        <router-link to="/checkout">
                            <AppButton
                                @click="closeCart"
                                class="bg-red-600 py-2 text-white hover:bg-red-700 transition duration-300 w-full"
                                >Оформить заказ
                            </AppButton>
                        </router-link>
                    </div>
                </div>
                <div v-else class="flex flex-col justify-center items-center h-full">
                    <img
                        src="/error/looney-cursor-with-shop-basket-doing-online-shopping.png"
                        fetchpriority="high"
                        decoding="sync"
                        class="w-64 sm:w-72 mb-7"
                    />
                    <h3 class="text-xl font-medium mb-3">Пусто!</h3>
                    <p class="text-sm text-center">
                        Откройте «Меню» и выберите<br />
                        какой-нибудь продукт.
                    </p>
                </div>
            </div>
        </Drawer>
    </Transition>
</template>

<style scoped>
.cart {
    background-color: #f1f7ed;
}

.cart-enter-active .outer,
.cart-leave-active .outer {
    transition: opacity 0s ease;
}

.cart-enter-from .outer,
.cart-leave-to .outer {
    opacity: 0;
}

.cart-enter-active .inner,
.cart-leave-active .inner {
    transition: transform 0s ease-in-out;
}

.cart-enter-from .inner,
.cart-leave-to .inner {
    transform: translateX(0px);
}

@media (min-width: 640px) {
    .cart-enter-active .outer,
    .cart-leave-active .outer {
        transition: opacity 0.4s ease;
    }

    .cart-enter-from .outer,
    .cart-leave-to .outer {
        opacity: 0;
    }

    .cart-enter-active .inner,
    .cart-leave-active .inner {
        transition:
            opacity 0.4s ease-in,
            transform 0.4s ease-in-out;
    }

    .cart-enter-from .inner,
    .cart-leave-to .inner {
        transform: translateX(400px);
        opacity: 0;
    }
}
</style>
