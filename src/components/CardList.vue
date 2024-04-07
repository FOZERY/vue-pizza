<script setup>
import Card from './Card.vue';

const props = defineProps({
    items: Array,
});

import { useProductsStore } from '@/stores/ProductsStore';

const productsStore = useProductsStore();
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <Card
            v-for="item in items"
            :key="item.id"
            :itemId="item.id"
            :name="item.name"
            :description="item.description"
            :price="item.price"
            :imageUrl="item.imageUrl"
            :section="item.type_name"
            :addToCart="() => productsStore.addToCart(item)"
        />
    </div>
</template>
