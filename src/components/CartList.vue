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
            :id="+item.id"
            :name="item.name"
            :description="item.description"
            :price="item.price"
            :image="item.image"
            :quantity="item.quantity"
            @incrementQuantity="() => cartStore.incrementQuantity(item)"
            @decrementQuantity="() => cartStore.decrementQuantity(item)"
        />
    </div>
</template>
