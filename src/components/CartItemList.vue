<script setup>
import { inject } from 'vue';

import CartItem from './CartItem.vue';

const { cart } = inject('cart');
</script>

<template>
    <div class="flex flex-col flex-1 gap-5">
        <CartItem
            v-for="item in cart"
            :key="item.id"
            :name="item.name"
            :description="item.description"
            :imageUrl="item.imageUrl"
        />
    </div>
</template>
