<script setup>
import CartList from '@/components/CartList.vue';
import TitleSection from '@/components/UI/TitleSection.vue';
import { useUserStore } from '@/stores/userStore.js';
import AppButton from '@/components/UI/AppButton.vue';
import { useCartStore } from '@/stores/cartStore.js';
import { ref } from 'vue';
import router from '@/router/router.js';

const userStore = useUserStore();
const cartStore = useCartStore();

const orderTypeInput = ref('1');

const createOrder = async () => {
    try {
        const order_items = cartStore.cartItems.map(item => ({
            id: item['id'],
            quantity: item['quantity'],
        }));
        const response = await cartStore.createOrder(userStore.user['id'], orderTypeInput.value, order_items);
        alert('Заказ оформлен!');
        await router.push('/');
        cartStore.cartItems = [];
        localStorage.removeItem('cartItems');
    } catch (e) {
        alert(e);
    }
};
</script>

<template>
    <div class="min-w-64 max-w-96">
        <TitleSection>Ваш заказ</TitleSection>
        <div class="max-w-full border-b mb-5 pb-3">
            <div v-if="cartStore.cartItems.length > 0">
                <CartList />
                <div class="">
                    <span class="font-medium">Количество: {{ cartStore.totalItems }}</span>
                </div>
                <div class="flex justify-between mb-3">
                    <span class="font-medium">Сумма заказа</span>
                    <span class="font-medium">{{ cartStore.totalPrice }} ₽</span>
                </div>
            </div>
            <div v-else class="flex flex-col justify-center items-center max-w-72 max-h-72 h-full">
                <img
                    src="/error/looney-cursor-with-shop-basket-doing-online-shopping.png"
                    fetchpriority="high"
                    decoding="sync"
                    class="w-64 sm:w-64 mb-7"
                />
                <h3 class="text-xl font-medium mb-3">Пусто!</h3>
                <p class="text-sm text-center">
                    Откройте «Меню» и выберите<br />
                    какой-нибудь продукт.
                </p>
            </div>

        </div>

        <form class="flex flex-col gap-2 items-start max-w-72">
            <div class="flex flex-col w-full">
                <label class="text-slate-500 mb-1" for="username">Имя</label>
                <input v-model="userStore.user.name"
                       disabled
                       class="border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-3 outline-none transition duration 300"
                       type="text"
                       name="username"
                />
            </div>
            <div class="flex flex-col w-full">
                <label class="text-slate-500 mb-1" for="phone">Номер телефона</label>
                <input
                    disabled
                    v-model="userStore.user.phone"
                    v-mask="'+7 (###) ###-##-##'"
                    class="border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-3 outline-none transition duration 300"
                    type="tel"
                    name="phone"
                />
            </div>
            <div class="flex flex-col w-full">
                <label class="text-slate-500 mb-1" for="phone">Адрес</label>
                <input
                    class="border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-3 outline-none transition duration 300"
                    type="text"
                    name="address"
                />
            </div>
            <div class="flex flex-col w-full">
                <label class="text-slate-500 mb-1" for="phone">Тип заказа</label>
                <select v-model="orderTypeInput"
                        class="border border-slate-300 font-medium focus:border-slate-700 rounded-xl py-1.5 px-3 outline-none transition duration 300"
                >
                    <option value="1">С доставкой</option>
                    <option value="2">В ресторане</option>
                </select>
            </div>
            <div class="cart__footer border-t pt-3 flex flex-col mt-5 w-full">

                <AppButton
                    @click.prevent="createOrder"
                    class="bg-red-600 py-2 text-white hover:bg-red-700 transition duration-300 w-full">
                    Оформить заказ
                </AppButton>
            </div>
        </form>

    </div>
</template>

<style scoped></style>
