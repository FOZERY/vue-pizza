<script setup>
import { onMounted, ref, inject } from 'vue';
import CardList from './CardList.vue';

const { addToCart } = inject('cart');

defineProps({
    items: Array,
    section: String,
    sectionTitle: String,
});
</script>

<template>
    <section :id="section" class="mb-7 scroll-mt-16 sm:scroll-mt-20">
        <h2 class="text-2xl font-medium mb-5">{{ sectionTitle }}</h2>

        <CardList :items="items" @add-to-cart="addToCart" />
    </section>
</template>
