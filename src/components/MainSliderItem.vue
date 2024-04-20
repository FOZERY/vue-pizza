<script setup>
defineProps({
    itemId: Number,
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    section: String,
});
</script>

<template>
    <router-link :to="`/product/${itemId}`">
        <div
            class="flex bg-white rounded-2xl shadow-lg gap-5 p-2 cursor-pointer md:hover:-translate-y-0.5 transition duration-300"
        >
            <img class="max-w-20 max-h-20" :src="imageUrl" :alt="name" />

            <div class="flex flex-col justify-center gap-0">
                <span class="text-lg font-semibold">{{ name }}</span>
                <span class="text-red-500 font-medium">от {{ price }} ₽</span>
            </div>
        </div>
    </router-link>
</template>
