<script setup>
import { watch } from 'vue';

import CartItem from './CartItem.vue';

import { useProductsStore } from '@/stores/ProductsStore';

const productsStore = useProductsStore();

watch(
    productsStore.cartItems,
    () => {
        console.log(productsStore.cartItems);
    },
    { deep: true }
);
</script>

<template>
    <div class="flex flex-col flex-1 gap-5">
        <CartItem
            v-for="item in productsStore.cartItems"
            :key="item.id"
            :itemId="item.id"
            :name="item.name"
            :description="item.description"
            :price="item.price"
            :imageUrl="item.imageUrl"
            :quantity="item.quantity"
            :incrementQuantity="() => productsStore.incrementQuantity(item)"
            :decrementQuantity="() => productsStore.decrementQuantity(item)"
        />
    </div>
</template>
