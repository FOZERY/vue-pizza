<script setup>
import ButtonMain from '@/components/UI/ButtonMain.vue';
import Popup from '@/components/UI/Popup.vue';
import { useRoute, useRouter } from 'vue-router';

import { useProductsStore } from '@/stores/productsStore.js';
import { useCartStore } from '@/stores/cartStore.js';
import { usePopup } from '@/composables/usePopup.js';

const route = useRoute();
const router = useRouter();

const productsStore = useProductsStore();
const cartStore = useCartStore();

const { popupIsOpen } = usePopup();

const items = await productsStore.getAllItems;

const item = items.find((item) => item.id === +route.params.id);

if (!item) {
    router.push('/');
} else {
    popupIsOpen.value = true;
}

const addToCart = () => {
    cartStore.addToCart(item);
    router.push('/');
};
</script>

<template>
    <Popup :with-routing="true" v-model:show="popupIsOpen">
        <div
            class="flex pb-3 sm:p-0 gap-2 border-b last:border-0 sm:border-0 min-h-72 md:h-80 lg:h-96"
        >
            <img
                :src="item.imageUrl"
                class="max-w-32 max-h-32 sm:max-w-52 sm:max-h-52 md:max-w-64 md:max-h-64 lg:max-w-80 lg:max-h-80 sm:mx-auto self-center"
            />
            <div class="flex flex-col gap-3 justify-between flex-1 sm:w-56 md:w-64 lg:w-72">
                <div>
                    <h3 class="text-lg sm:text-xl md:text-2xl font-semibold mb-1">
                        {{ item.name }}
                    </h3>
                    <p class="text-sm sm:text-sm md:text-sm text-slate-500 mt-3">
                        {{ item.description }}
                    </p>
                </div>
                <div class="flex justify-center items-center">
                    <ButtonMain
                        @click="addToCart"
                        class="rounded-3xl w-full transition duration-300 bg-red-600 py-1.5 md:py-2.5 text-white hover:bg-red-700 text-sm lg:text-base font-medium"
                        >Добавить в корзину
                        <span class="text-nowrap">за {{ item.price }} ₽</span>
                    </ButtonMain>
                </div>
            </div>
        </div>
    </Popup>
</template>

<style scoped></style>
