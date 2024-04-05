<script setup>
import { watch, ref, onMounted, inject } from 'vue';

import Button from './UI/Button.vue';

const props = defineProps({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    section: String,
    isAdded: Boolean,
    addToCart: Function,
});

const isMobile = inject('isMobile');
</script>
<template>
    <div
        class="group flex pb-3 sm:p-0 gap-2 sm:flex-col border-b last:border-0 sm:border-0 cursor-pointer"
    >
        <img
            class="group-hover:-translate-y-1 transition duration-300 w-32 h-32 sm:w-60 sm:h-60 sm:mx-auto"
            :src="imageUrl"
            :alt="name"
        />
        <div class="flex flex-col gap-3 justify-between flex-1">
            <div>
                <h3 class="text-lg sm:text-xl font-medium mb-1">{{ name }}</h3>
                <p class="text-xs sm:text-sm text-slate-500">
                    {{ description }}
                </p>
            </div>
            <div class="flex justify-between items-center">
                <span class="hidden sm:inline font-medium">от {{ price }} ₽</span>
                <Button
                    v-if="!isAdded"
                    @click="addToCart"
                    class="bg-slate-200 text-red-500 rounded-3xl py-1.5 px-4 sm:px-5 hover:bg-red-100 transition duration-300 text-xs sm:text-base"
                    >{{ isMobile ? `От ${price} ₽` : `Выбрать` }}
                </Button>
            </div>
        </div>
    </div>
</template>
