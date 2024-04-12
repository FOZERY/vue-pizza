<script setup>
import Button from '@/components/UI/Button.vue';
import { useRoute, useRouter } from 'vue-router';
import { useProductsStore } from '@/stores/productsStore.js';
import { toRaw } from 'vue';
import { useCartStore } from '@/stores/cartStore.js';

const productsStore = useProductsStore();
const cartStore = useCartStore();

const route = useRoute();
const router = useRouter();

await productsStore.fetchItem(route.params.id);
let item = toRaw(productsStore.item);
if (Object.keys(item).length === 0) router.push('/');

defineEmits(['closePopup']);

const addToCart = () => {
    cartStore.addToCart(item.value);
    router.push('/');
};
</script>

<template>
    <div class="flex pb-3 sm:p-0 gap-2 border-b last:border-0 sm:border-0 min-h-72 md:h-80 lg:h-96">
        <img
            class="max-w-32 max-h-32 sm:max-w-52 sm:max-h-52 md:max-w-64 md:max-h-64 lg:max-w-80 lg:max-h-80 sm:mx-auto self-center"
            :src="item.value.imageUrl"
        />
        <div class="flex flex-col gap-3 justify-between flex-1 sm:w-56 md:w-64 lg:w-72">
            <div>
                <h3 class="text-lg sm:text-xl md:text-2xl font-semibold mb-1">
                    {{ item.value.name }}
                </h3>
                <p class="text-sm sm:text-sm md:text-sm text-slate-500 mt-3">
                    {{ item.value.description }}
                </p>
            </div>
            <div class="flex justify-center items-center">
                <Button
                    @click="addToCart"
                    class="rounded-3xl w-full transition duration-300 bg-red-600 py-1.5 md:py-2.5 text-white hover:bg-red-700 text-sm lg:text-base font-medium"
                    >Добавить в корзину
                    <span class="text-nowrap">за {{ item.value.price }} ₽</span>
                </Button>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
