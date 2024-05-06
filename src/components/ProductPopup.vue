<script setup>
import {toRaw} from "vue";

import AppButton from '@/components/UI/AppButton.vue';
import AppPopup from '@/components/UI/AppPopup.vue';
import { useRoute, useRouter } from 'vue-router';

import { useProductsStore } from '@/stores/productsStore.js';
import { useCartStore } from '@/stores/cartStore.js';
import { usePopup } from '@/composables/usePopup.js';

const route = useRoute();
const router = useRouter();

const productsStore = useProductsStore();
const cartStore = useCartStore();

const { popupIsOpen } = usePopup();

await productsStore.fetchItem(route.params.id);

if (!Object.keys(productsStore.item).length) {
    router.push('/');
} else {
    popupIsOpen.value = true;
}

const addToCart = () => {
    cartStore.addToCart(productsStore.item);
    popupIsOpen.value = false;
    router.push('/');
};
</script>

<template>
    <AppPopup :with-routing="true" v-model="popupIsOpen">
        <div class="flex sm:p-0 gap-2 border-b last:border-0 sm:border-0 min-h-72 md:h-80 lg:h-96">
            <img
                :src="productsStore.item.imageUrl"
                class="max-w-32 max-h-32 sm:max-w-52 sm:max-h-52 md:max-w-64 md:max-h-64 lg:max-w-80 lg:max-h-80 sm:mx-auto self-center"
            />
            <div class="flex flex-col gap-3 justify-between flex-1 sm:w-56 md:w-64 lg:w-72">
                <div>
                    <h3 class="text-lg sm:text-xl md:text-2xl font-semibold mb-1">
                        {{ productsStore.item.name }}
                    </h3>
                    <p class="text-sm sm:text-sm md:text-sm text-slate-500 mt-3">
                        {{ productsStore.item.description }}
                    </p>
                </div>
                <div class="flex justify-center items-center">
                    <AppButton
                        @click="addToCart"
                        class="rounded-3xl w-full transition duration-300 bg-red-600 py-1.5 md:py-2.5 text-white hover:bg-red-700 text-sm lg:text-base font-medium"
                    >Добавить в корзину
                        <span class="text-nowrap">за {{ productsStore.item.price }} ₽</span>
                    </AppButton>
                </div>
            </div>
        </div>
    </AppPopup>
</template>

<style scoped></style>
