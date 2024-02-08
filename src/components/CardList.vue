<script setup>
import { inject } from 'vue';

import Card from './Card.vue';
import CardSkeleton from './Skeletons/CardSkeleton.vue';

const props = defineProps({
    items: Array,
});

onst { addToCart } = inject('cart');

const onClickAdd = () => {
    addToCart(item);
}
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
            :section="item.section.eng"
        />
    </div>
</template>
