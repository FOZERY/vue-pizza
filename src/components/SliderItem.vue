<script setup>
defineProps({
    name: String,
    description: String,
    price: Number,
    imageUrl: String,
    section: String,
});
</script>

<template>
    <div
        href="#"
        class="flex bg-white rounded-2xl shadow-lg gap-5 p-2 cursor-pointer hover:-translate-y-0.5 transition duration-300"
    >
        <img class="max-w-20 max-h-20" src="/products/pizzas/pepperoni.png" alt="Карбонара" />

        <div class="flex flex-col justify-center gap-0">
            <span class="text-lg font-semibold">Карбонара</span>
            <span class="text-red-500 font-medium">от 120 ₽</span>
        </div>
    </div>
</template>
