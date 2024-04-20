<script setup>
import CartListItem from '@/components/CartListItem.vue';

import { useCartStore } from '@/stores/cartStore.js';

const cartStore = useCartStore();
</script>

<template>
    <div class="">
        <CartListItem
            v-for="item in cartStore.cartItems"
            :key="item.id"
            :itemId="item.id"
            :name="item.name"
            :description="item.description"
            :price="item.price"
            :imageUrl="item.imageUrl"
            :quantity="item.quantity"
            @incrementQuantity="() => cartStore.incrementQuantity(item)"
            @decrementQuantity="() => cartStore.decrementQuantity(item)"
        />
    </div>
</template>
