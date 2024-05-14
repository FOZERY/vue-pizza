<script setup>
defineProps({
    id: Number,
    name: String,
    description: String,
    price: Number,
    image: String,
    section: String,
});
</script>

<template>
    <router-link :to="`/product/${id}`">
        <div
            class="flex bg-white rounded-2xl shadow-lg gap-5 p-2 cursor-pointer md:hover:-translate-y-0.5 transition duration-300"
        >
            <img class="max-w-20 max-h-20" :src="image" :alt="name" />

            <div class="flex flex-col justify-center gap-0">
                <span class="text-lg font-semibold">{{ name }}</span>
                <span class="text-red-500 font-medium">от {{ price }} ₽</span>
            </div>
        </div>
    </router-link>
</template>
