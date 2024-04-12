<script setup>
import CartItem from './CartItem.vue';

import { useCartStore } from '@/stores/cartStore.js';

const cartStore = useCartStore();
</script>

<template>
    <div class="flex flex-col flex-1 gap-5">
        <CartItem
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
