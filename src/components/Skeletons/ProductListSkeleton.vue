<script setup>
import ProductListItemSkeleton from '@/components/Skeletons/ProductListItemSkeleton.vue';
</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <ProductListItemSkeleton v-for="n in 12" :key="n" />
    </div>
</template>
